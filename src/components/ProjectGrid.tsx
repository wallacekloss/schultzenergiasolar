import { ArrowUpRight, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProjectSegment } from "@/data/projects";
import { useManagedContent } from "@/hooks/use-managed-content";

export function ProjectGrid({ segment, limit }: { segment?: ProjectSegment; limit?: number }) {
  const { projects } = useManagedContent();
  const displayed = projects.filter(p => !segment || p.segment === segment).slice(0, limit);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map(project => (
        <Link key={project.slug} to={`/projetos/${project.slug}/`} className="group bg-background border border-border rounded-lg overflow-hidden shadow-card hover:shadow-medium transition-all">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={project.image} alt={project.alt} loading="lazy" width="640" height="480" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs uppercase font-bold text-primary">{project.segmentLabel}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-secondary mb-2">{project.title}</h3>
            <p className="flex gap-2 text-sm text-muted-foreground mb-2"><MapPin className="h-4 w-4 shrink-0" />{project.location}</p>
            <p className="flex gap-2 text-sm font-semibold text-secondary"><Zap className="h-4 w-4 text-primary" />{project.power}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
