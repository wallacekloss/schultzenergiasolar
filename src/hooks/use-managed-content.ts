import { useQuery } from "@tanstack/react-query";
import { allContentPages, services as staticServices, solutions as staticSolutions } from "@/data/pages";
import { projects as staticProjects } from "@/data/projects";
import { fetchDynamicContent, fetchDynamicProjects } from "@/lib/content";

function mergeBySlug<T extends { slug: string }>(base: T[], dynamic: T[]) {
  const merged = new Map(base.map(item => [item.slug, item]));
  dynamic.forEach(item => merged.set(item.slug, item));
  return [...merged.values()];
}

export function useManagedContent() {
  const contentQuery = useQuery({ queryKey: ["managed-content"], queryFn: fetchDynamicContent, staleTime: 60_000 });
  const projectQuery = useQuery({ queryKey: ["managed-projects"], queryFn: fetchDynamicProjects, staleTime: 60_000 });
  const dynamicContent = contentQuery.data ?? [];
  const dynamicSolutions = dynamicContent.filter(item => item.path && item.serviceName && (item.projectSegment || !staticServices.some(service => service.slug === item.slug)));
  const dynamicServiceSlugs = new Set((contentQuery.data ?? []).filter(item => !item.projectSegment).map(item => item.slug));
  const solutions = mergeBySlug(staticSolutions, dynamicSolutions.filter(item => !dynamicServiceSlugs.has(item.slug)));
  const services = mergeBySlug(staticServices, dynamicContent.filter(item => dynamicServiceSlugs.has(item.slug)));
  return {
    solutions,
    services,
    pages: mergeBySlug(allContentPages, dynamicContent),
    projects: mergeBySlug(staticProjects, projectQuery.data ?? []),
    isLoading: contentQuery.isLoading || projectQuery.isLoading,
  };
}