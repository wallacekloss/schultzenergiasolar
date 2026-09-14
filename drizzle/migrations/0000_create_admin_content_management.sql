CREATE TYPE public.app_role AS ENUM ('admin');
CREATE TYPE public.content_kind AS ENUM ('solution', 'service');
CREATE TYPE public.project_segment AS ENUM ('residencial', 'comercial', 'rural');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY,
  display_name text NOT NULL CHECK (char_length(display_name) BETWEEN 2 AND 100),
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "Users can create own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.claim_initial_admin(_display_name text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  claimed boolean := false;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;
  IF char_length(trim(_display_name)) NOT BETWEEN 2 AND 100 THEN
    RAISE EXCEPTION 'Invalid display name';
  END IF;
  PERFORM pg_advisory_xact_lock(72190413);
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.profiles (id, display_name)
    VALUES (auth.uid(), trim(_display_name))
    ON CONFLICT (id) DO UPDATE SET display_name = EXCLUDED.display_name, updated_at = now();
    INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin');
    claimed := true;
  ELSIF public.has_role(auth.uid(), 'admin') THEN
    claimed := true;
  END IF;
  RETURN claimed;
END;
$$;
GRANT EXECUTE ON FUNCTION public.claim_initial_admin(text) TO authenticated;

CREATE TABLE public.content_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind public.content_kind NOT NULL,
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  nav_label text NOT NULL CHECK (char_length(nav_label) BETWEEN 2 AND 80),
  breadcrumb text NOT NULL CHECK (char_length(breadcrumb) BETWEEN 2 AND 120),
  meta_title text NOT NULL CHECK (char_length(meta_title) BETWEEN 10 AND 70),
  meta_description text NOT NULL CHECK (char_length(meta_description) BETWEEN 50 AND 180),
  h1 text NOT NULL CHECK (char_length(h1) BETWEEN 5 AND 140),
  service_name text NOT NULL CHECK (char_length(service_name) BETWEEN 2 AND 120),
  intro text NOT NULL CHECK (char_length(intro) BETWEEN 20 AND 2000),
  intro2 text NOT NULL CHECK (char_length(intro2) BETWEEN 20 AND 2000),
  benefits_title text NOT NULL CHECK (char_length(benefits_title) BETWEEN 5 AND 160),
  benefits jsonb NOT NULL DEFAULT '[]'::jsonb,
  how_title text NOT NULL CHECK (char_length(how_title) BETWEEN 5 AND 160),
  how_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  process_title text NOT NULL CHECK (char_length(process_title) BETWEEN 5 AND 160),
  process_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  faq jsonb NOT NULL DEFAULT '[]'::jsonb,
  cta_title text NOT NULL CHECK (char_length(cta_title) BETWEEN 5 AND 160),
  cta_text text NOT NULL CHECK (char_length(cta_text) BETWEEN 10 AND 500),
  related_links jsonb NOT NULL DEFAULT '[]'::jsonb,
  project_segment public.project_segment,
  published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.content_pages TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.content_pages TO authenticated;
GRANT ALL ON public.content_pages TO service_role;
ALTER TABLE public.content_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published content pages are public" ON public.content_pages FOR SELECT TO anon, authenticated USING (published OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins create content pages" ON public.content_pages FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update content pages" ON public.content_pages FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete content pages" ON public.content_pages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX content_pages_kind_order_idx ON public.content_pages (kind, sort_order, created_at);

CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text NOT NULL CHECK (char_length(title) BETWEEN 2 AND 120),
  segment public.project_segment NOT NULL,
  district text NOT NULL CHECK (char_length(district) BETWEEN 2 AND 100),
  city text NOT NULL CHECK (char_length(city) BETWEEN 2 AND 100),
  power text NOT NULL CHECK (char_length(power) BETWEEN 2 AND 40),
  image_url text NOT NULL CHECK (char_length(image_url) BETWEEN 1 AND 1000),
  image_path text,
  alt text NOT NULL CHECK (char_length(alt) BETWEEN 10 AND 250),
  h1 text NOT NULL CHECK (char_length(h1) BETWEEN 5 AND 160),
  meta_title text NOT NULL CHECK (char_length(meta_title) BETWEEN 10 AND 70),
  meta_description text NOT NULL CHECK (char_length(meta_description) BETWEEN 50 AND 180),
  description text NOT NULL CHECK (char_length(description) BETWEEN 20 AND 3000),
  solution text NOT NULL CHECK (char_length(solution) BETWEEN 20 AND 3000),
  published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published projects are public" ON public.projects FOR SELECT TO anon, authenticated USING (published OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins create projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update projects" ON public.projects FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete projects" ON public.projects FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX projects_segment_order_idx ON public.projects (segment, sort_order, created_at);

CREATE POLICY "Public can view content images" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'content-images');
CREATE POLICY "Admins upload content images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'content-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update content images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'content-images' AND public.has_role(auth.uid(), 'admin')) WITH CHECK (bucket_id = 'content-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete content images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'content-images' AND public.has_role(auth.uid(), 'admin'));
