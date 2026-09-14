import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsSection() {
  return <section id="projetos" className="section-padding bg-background"><div className="container-max mx-auto"><div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"><div className="max-w-3xl"><p className="text-primary uppercase font-bold text-sm mb-3">Projetos reais</p><h2 className="font-display text-3xl md:text-5xl font-bold text-secondary mb-4">Experiência comprovada em Linhares e região</h2><p className="text-lg text-muted-foreground">Conheça alguns dos mais de 170 projetos realizados pela Schultz Energia Solar.</p></div><Link to="/projetos/" className="inline-flex gap-2 items-center font-bold text-primary">Ver todos os projetos<ArrowRight className="h-4 w-4" /></Link></div><ProjectGrid limit={6} /></div></section>;
}