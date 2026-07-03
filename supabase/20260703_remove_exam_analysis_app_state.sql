-- Remove deprecated exam analysis app_state data and source-file storage after the feature deletion.
-- Apply in the Supabase SQL editor if existing saved analyses/folders/PDF sources should be purged immediately.
-- This targets only the removed exam-analysis feature. It does not touch exam-submissions or other active buckets.

delete from public.app_state
where state_key in ('examAnalyses', 'examAnalysisFolders');

delete from storage.objects
where bucket_id = 'exam-analysis-sources';

delete from storage.buckets
where id = 'exam-analysis-sources';
