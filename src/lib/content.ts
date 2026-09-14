import type { Json, Tables } from "@/integrations/supabase/types";
import type { ContentPage, ContentBlock, FaqItem, InternalLink } from "@/data/pages";
import type { Project, ProjectSegment } from "@/data/projects";
import { supabase } from "@/integrations/supabase/client";

type ContentRow = Tables<"content_pages">;
type ProjectRow = Tables<"projects">;

const asArray = <T,>(value: Json): T[] => Array.isArray(value) ? value as T[] : [];

export function contentRowToPage(row: ContentRow): ContentPage {
  return {
    slug: row.slug,
    path: `/${row.slug}/`,
    navLabel: row.nav_label,
    breadcrumb: row.breadcrumb,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    h1: row.h1,
    serviceName: row.service_name,
    intro: row.intro,
    intro2: row.intro2,
    benefitsTitle: row.benefits_title,
    benefits: asArray<ContentBlock>(row.benefits),
    howTitle: row.how_title,
    how: asArray<ContentBlock>(row.how_items),
    processTitle: row.process_title,
    process: asArray<string>(row.process_items),
    faq: asArray<FaqItem>(row.faq),
    ctaTitle: row.cta_title,
    ctaText: row.cta_text,
    relatedLinks: asArray<InternalLink>(row.related_links),
    projectSegment: row.project_segment ?? undefined,
  };
}

async function resolveProjectImage(row: ProjectRow) {
  if (!row.image_path) return row.image_url;
  const { data } = await supabase.storage.from("content-images").createSignedUrl(row.image_path, 3600);
  return data?.signedUrl ?? row.image_url;
}

export async function projectRowToProject(row: ProjectRow): Promise<Project> {
  const labels: Record<ProjectSegment, string> = {
    residencial: "Residencial",
    comercial: "Comercial",
    rural: "Rural / Agronegócio",
  };
  const location = `${row.district}, ${row.city}`;
  return {
    slug: row.slug,
    title: row.title,
    segment: row.segment,
    segmentLabel: labels[row.segment],
    district: row.district,
    city: row.city,
    location,
    power: row.power,
    image: await resolveProjectImage(row),
    alt: row.alt,
    h1: row.h1,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    description: row.description,
    solution: row.solution,
  };
}

export async function fetchDynamicContent() {
  const { data, error } = await supabase.from("content_pages").select("*").eq("published", true).order("sort_order");
  if (error) throw error;
  return (data ?? []).map(row => ({ kind: row.kind, page: contentRowToPage(row) }));
}

export async function fetchDynamicProjects() {
  const { data, error } = await supabase.from("projects").select("*").eq("published", true).order("sort_order");
  if (error) throw error;
  return Promise.all((data ?? []).map(projectRowToProject));
}