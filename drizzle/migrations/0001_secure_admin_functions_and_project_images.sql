ALTER TABLE public.projects ALTER COLUMN image_url SET DEFAULT '';
ALTER TABLE public.projects DROP CONSTRAINT IF EXISTS projects_image_url_check;
ALTER TABLE public.projects ADD CONSTRAINT projects_image_source_check CHECK (char_length(image_url) BETWEEN 1 AND 1000 OR image_path IS NOT NULL);

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

REVOKE ALL ON FUNCTION public.claim_initial_admin(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_initial_admin(text) TO authenticated;