DROP POLICY IF EXISTS "Published content pages are public" ON public.content_pages;
CREATE POLICY "Published content pages are public"
ON public.content_pages
FOR SELECT
TO anon, authenticated
USING (published);

CREATE POLICY "Admins read all content pages"
ON public.content_pages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Published projects are public" ON public.projects;
CREATE POLICY "Published projects are public"
ON public.projects
FOR SELECT
TO anon, authenticated
USING (published);

CREATE POLICY "Admins read all projects"
ON public.projects
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));