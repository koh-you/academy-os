import { useEffect, useRef, useState } from "react";

import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { postJson } from "../../shared/utils/apiClient.js";
import "./WatermarkToolPanel.css";

// 시험지 목록에 등록하지 않고 PDF 파일만 워터마크 처리해 내려받는 도구.
// 서버는 Storage 를 거치지 않고 base64 로 결과를 돌려주므로 파일이 어디에도 남지 않는다.

export const WATERMARK_OPACITY_OPTIONS = Object.freeze([
  { label: "5% (아주 흐리게)", value: 0.05 },
  { label: "10% (기본)", value: 0.1 },
  { label: "15%", value: 0.15 },
  { label: "20% (진하게)", value: 0.2 }
]);

export function buildWatermarkedFileName(fileName = "") {
  const trimmed = String(fileName).trim() || "시험지.pdf";
  return trimmed.replace(/\.pdf$/i, "") + "_wm.pdf";
}

export function base64ToPdfBlob(base64 = "") {
  const binary = window.atob(String(base64));
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], { type: "application/pdf" });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

function downloadBlobUrl(blobUrl, fileName) {
  const anchor = document.createElement("a");
  anchor.href = blobUrl;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function WatermarkToolPanel() {
  const [opacity, setOpacity] = useState(0.1);
  const [jobs, setJobs] = useState([]);
  const fileInputRef = useRef(null);
  const jobsRef = useRef(jobs);
  jobsRef.current = jobs;

  useEffect(() => () => {
    jobsRef.current.forEach((job) => {
      if (job.blobUrl) URL.revokeObjectURL(job.blobUrl);
    });
  }, []);

  function updateJob(jobId, changes) {
    setJobs((current) => current.map((job) => (job.jobId === jobId ? { ...job, ...changes } : job)));
  }

  async function runWatermark(file, jobId) {
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const result = await postJson("/api/test-paper-files/watermark", {
        file: { dataUrl, fileName: file.name },
        opacity
      });
      const downloadName = buildWatermarkedFileName(result.fileName || file.name);
      const blobUrl = URL.createObjectURL(base64ToPdfBlob(result.pdfBase64));
      updateJob(jobId, { blobUrl, downloadName, status: "done" });
      downloadBlobUrl(blobUrl, downloadName);
    } catch (error) {
      updateJob(jobId, { error: error.message, status: "error" });
    }
  }

  function addFiles(files) {
    if (!files.length) return;
    files.forEach((file) => {
      const jobId = `wm_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      if (!/\.pdf$/i.test(file.name)) {
        setJobs((current) => [
          { error: "PDF 파일만 처리할 수 있습니다.", fileName: file.name, jobId, status: "error" },
          ...current
        ]);
        return;
      }
      setJobs((current) => [{ error: "", fileName: file.name, jobId, status: "working" }, ...current]);
      runWatermark(file, jobId);
    });
  }

  const isWorking = jobs.some((job) => job.status === "working");

  return (
    <section className="panel watermarkToolPanel">
      <SectionHeader
        description="시험지 목록에 등록하지 않고, PDF 파일에 학원 워터마크만 찍어 바로 내려받습니다. 파일은 서버에 저장되지 않습니다."
        title="워터마크 도구"
      />
      <div className="watermarkToolControls">
        <label>
          진하기
          <select onChange={(event) => setOpacity(Number(event.target.value))} value={opacity}>
            {WATERMARK_OPACITY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <input
          accept="application/pdf"
          className="visuallyHiddenInput"
          multiple
          onChange={(event) => {
            // event.target.files 는 살아 있는 FileList 라서 value 를 비우면 같이 비워진다.
            // 같은 파일을 다시 고를 수 있도록 입력을 비우기 전에 배열로 복사해 둔다.
            const files = Array.from(event.target.files ?? []);
            event.target.value = "";
            addFiles(files);
          }}
          ref={fileInputRef}
          type="file"
        />
        <button
          className="primaryButton compact"
          disabled={isWorking}
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          {isWorking ? "처리 중" : "PDF 선택"}
        </button>
        <span className="fieldHint">여러 개를 한 번에 고를 수 있습니다. 완료되면 자동으로 내려받습니다.</span>
      </div>

      {jobs.length ? (
        <ul className="watermarkToolJobList">
          {jobs.map((job) => (
            <li className={`watermarkToolJob ${job.status}`} key={job.jobId}>
              <span className="watermarkToolJobName">{job.fileName}</span>
              {job.status === "working" ? <span className="muted">처리 중…</span> : null}
              {job.status === "error" ? <span className="fieldHintError">{job.error}</span> : null}
              {job.status === "done" ? (
                <button
                  className="softButton"
                  onClick={() => downloadBlobUrl(job.blobUrl, job.downloadName)}
                  type="button"
                >
                  다시 받기
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState description="아직 처리한 파일이 없습니다. PDF를 골라 주세요." />
      )}
    </section>
  );
}
