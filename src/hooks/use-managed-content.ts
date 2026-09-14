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
  const solutions = mergeBySlug(staticSolutions, dynamicContent.filter(item => item.kind === "solution").map(item => item.page));
  const services = mergeBySlug(staticServices, dynamicContent.filter(item => item.kind === "service").map(item => item.page));
  return {
    solutions,
    services,
    pages: mergeBySlug(allContentPages, dynamicContent.map(item => item.page)),
    projects: mergeBySlug(staticProjects, projectQuery.data ?? []),
    isLoading: contentQuery.isLoading || projectQuery.isLoading,
  };
}