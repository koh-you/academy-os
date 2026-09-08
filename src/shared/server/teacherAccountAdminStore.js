// 교사 계정 관리(원장 전용) 데이터 접근.
//
// teacher_accounts 는 테넌트 스코핑 대상이라 기본 조회는 자기 테넌트만 본다. 그런데
// 원장은 자기가 만든 다른 선생님 계정(= 다른 테넌트)을 봐야 하므로, 이 함수들만
// runWithTenant(null) 로 스코핑을 비운다. 라우트는 전역 게이트가 owner 만 통과시킨다.
//
// api/ 밑이 아니라 여기 있는 이유: Vercel Hobby 는 서버리스 함수를 12개까지만 받는데
// api/*.js 파일 하나가 함수 하나로 센다(scenario 01a-1 이 감시). 그래서 DB 접근 함수를
// 주입받는 형태로 두고 파일은 src/shared/server 에 둔다.
import crypto from "node:crypto";
import { runWithTenant } from "./tenantScope.js";

export function createTeacherAccountAdminStore({
  defaultTenantId,
  hashPassword,
  insertRows,
  listRows,
  patchRows,
  teacherAccountTable
}) {
  // teacher_accounts 는 테넌트 스코핑 대상이라 기본 조회는 자기 테넌트만 본다. 그런데
  // 원장은 자기가 만든 다른 선생님 계정(= 다른 테넌트)을 봐야 하므로, 이 함수들만
  // runWithTenant(null) 로 스코핑을 비운다. 라우트는 전역 게이트가 owner 만 통과시킨다.
  function withoutTenantScope(fn) {
    return runWithTenant(null, fn);
  }

  async function listTeacherAccounts() {
    return withoutTenantScope(async () => {
      const rows = await listRows(
        teacherAccountTable,
        "select=teacher_id,login_id,name,role,tenant_id,is_active,created_at&order=created_at.asc",
        { requireServiceRole: true }
      );
      return rows.map((row) => ({
        teacherId: row.teacher_id,
        loginId: row.login_id,
        name: row.name ?? "",
        teacherRole: row.role ?? "owner",
        tenantId: row.tenant_id ?? defaultTenantId,
        isActive: row.is_active !== false,
        createdAt: row.created_at ?? ""
      }));
    });
  }

  async function findTeacherAccountByLoginId(loginId = "") {
    return withoutTenantScope(async () => {
      const rows = await listRows(
        teacherAccountTable,
        `select=teacher_id&login_id=eq.${encodeURIComponent(loginId)}&limit=1`,
        { requireServiceRole: true }
      );
      return rows[0] ?? null;
    });
  }

  async function createTeacherAccountWithTenant({ loginId, name, password }) {
    // 선생님마다 별도 테넌트를 준다. 같은 학원이어도 담당 학생과 수업일지는 섞이면 안 된다.
    const tenantId = `tenant_${crypto.randomUUID()}`;
    const teacherId = `teacher_${crypto.randomUUID()}`;
    return withoutTenantScope(async () => {
      const [saved] = await insertRows(teacherAccountTable, [{
        teacher_id: teacherId,
        login_id: loginId,
        name,
        password_hash: hashPassword(password),
        tenant_id: tenantId,
        role: "assistant",
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]);
      return {
        teacherId: saved.teacher_id,
        loginId: saved.login_id,
        name: saved.name ?? "",
        teacherRole: saved.role ?? "assistant",
        tenantId: saved.tenant_id,
        isActive: saved.is_active !== false,
        createdAt: saved.created_at ?? ""
      };
    });
  }

  async function setTeacherAccountActive(teacherId, isActive) {
    return withoutTenantScope(async () => {
      const rows = await listRows(
        teacherAccountTable,
        `select=teacher_id,role&teacher_id=eq.${encodeURIComponent(teacherId)}&limit=1`,
        { requireServiceRole: true }
      );
      const target = rows[0];
      if (!target) {
        const error = new Error("해당 교사 계정을 찾지 못했습니다.");
        error.statusCode = 404;
        throw error;
      }
      // 원장 계정을 끄면 아무도 로그인하지 못한다. 실수로도 막히지 않게 거부한다.
      if ((target.role ?? "owner") === "owner" && !isActive) {
        const error = new Error("원장 계정은 비활성화할 수 없습니다.");
        error.statusCode = 400;
        throw error;
      }
      const [saved] = await patchRows(
        teacherAccountTable,
        `teacher_id=eq.${encodeURIComponent(teacherId)}`,
        { is_active: Boolean(isActive), updated_at: new Date().toISOString() }
      );
      return {
        teacherId: saved.teacher_id,
        loginId: saved.login_id,
        name: saved.name ?? "",
        teacherRole: saved.role ?? "assistant",
        tenantId: saved.tenant_id,
        isActive: saved.is_active !== false,
        createdAt: saved.created_at ?? ""
      };
    });
  }

  return Object.freeze({
    createTeacherAccountWithTenant,
    findTeacherAccountByLoginId,
    listTeacherAccounts,
    setTeacherAccountActive
  });
}
