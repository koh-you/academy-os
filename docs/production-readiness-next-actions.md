# Production Readiness Next Actions

Last updated: 2026-06-18

## Current Status

Academy OS is in MVP stabilization. The teacher-facing Lesson Hub, student/parent portals, attendance kiosk route, notification management dashboard, Solapi template test flow, and AI settings screen are implemented.

Estimated progress:

- Frontend MVP screens: 80-85%
- Teacher lesson journal workflow: 70-75%
- Student/parent viewing workflow: 65-70%
- Supabase-backed data model: 60-65%
- Solapi notification integration: 70-75%
- Attendance kiosk workflow: 60-65%
- Login/security hardening: 45-50%
- Production automation: 45-50%

Overall MVP readiness: about 70%.

## Immediate AI Work Completed

- Removed default visible login values from the main role login screen.
- Kept login behavior simple for MVP; no temporary lockout is applied.
- Added notification template previews for attendance, parent, and student messages.
- Added notification test response details so dry-run/send mode, recipient, template env name, and variables are visible.
- Added `npm run test:production` for 20 production readiness checks.

## Human Tasks

1. Confirm Vercel deployment finished after the latest GitHub push.
2. Open the live site and verify login works with the intended test accounts.
3. Open `알림관리` and press each template test button while `ALIMTALK_DRY_RUN=true`.
4. Confirm the result card shows:
   - `DRY RUN`
   - test recipient
   - template env name
   - expected variables
5. Decide when to switch Render from dry-run to test-recipient send mode.
6. Before real parent/student numbers are enabled, verify every live student phone and parent phone.

## AI Tasks Next

1. Add a safer "test recipient send" switch in the UI.
2. Add a warning checklist before `ALIMTALK_DRY_RUN=false`.
3. Connect attendance kiosk check-in to notification job creation instead of only local log status.
4. Add Supabase-backed login/session storage.
5. Replace temporary demo `student / parent / 1234` fallback with per-student/per-parent accounts only.
6. Add notification send history filters by student, class, notification type, and status.
7. Add scheduled Slack readiness summary for due notifications and missing data.
8. Add end-to-end scenario tests for:
   - lesson journal save
   - parent notification preview
   - student notification preview
   - attendance kiosk check-in/check-out
   - missing required notification fields

## Recommended Order

1. Keep `ALIMTALK_DRY_RUN=true`.
2. Verify all three template tests in the live UI.
3. Switch to test-recipient send mode only:
   - `ALIMTALK_DRY_RUN=false`
   - `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`
4. Confirm Kakao messages arrive at the test phone.
5. Run one real class day simulation with 월수금 7-10반.
6. Only after that, prepare real-number release.

## Local Verification Commands

```bash
npm run build
npm run test:production
```

Both commands should pass before pushing or deploying.
