import { ArrowRight, Check, MapPin, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { getProject } from "@/data/projects";
import { COMPANY } from "@/data/company";
import NotFound from "./NotFound";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const path = `/projetos/${project.slug}/`;
  const segmentPath = `/energia-solar-${project.segment === "rural" ? "rural" : project.segment}/`;
  const breadcrumbs = [{ name: "Início", path: "/" }, { name: "Projetos", path: "/projetos/" }, { name: project.title, path }];
  return <>
    <SEO title={project.metaTitle} description={project.metaDescription} path={path} image={project.image.startsWith("http") ? project.image : `${COMPANY.site}${project.image}`} schema={breadcrumbSchema(breadcrumbs)} />
    <article>
      <header className="pt-32 pb-10 bg-background"><div className="container-max mx-auto px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: "Projetos", to: "/projetos/" }, { label: project.title }]} /><div className="mt-8 max-w-4xl"><p className="text-primary uppercase font-bold text-sm mb-3">{project.segmentLabel} • {project.location}</p><h1 className="font-display text-4xl md:text-6xl font-bold text-secondary leading-tight mb-5">{project.h1}</h1><p className="text-lg text-muted-foreground">Projeto real executado pela equipe da Schultz Energia Solar.</p></div></div></header>
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8"><img src={project.image} alt={project.alt} width="1200" height="900" className="w-full max-h-[720px] object-cover rounded-lg" /></div>
      <section className="section-padding bg-background"><div className="container-max mx-auto grid lg:grid-cols-[1fr_0.6fr] gap-12"><div><h2 className="font-display text-3xl font-bold text-secondary mb-5">Sobre o projeto</h2><p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p><h2 className="font-display text-3xl font-bold text-secondary mb-5">Solução aplicada</h2><p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p></div><aside className="bg-muted/50 p-6 rounded-lg h-fit"><h2 className="font-display text-xl font-bold text-secondary mb-5">Informações do projeto</h2><dl className="space-y-5"><div><dt className="text-sm text-muted-foreground">Projeto</dt><dd className="font-bold">{project.title}</dd></div><div><dt className="text-sm text-muted-foreground">Tipo</dt><dd className="font-bold">{project.segmentLabel}</dd></div><div><dt className="text-sm text-muted-foreground flex gap-2"><MapPin className="h-4 w-4" />Localização</dt><dd className="font-bold">{project.location}</dd></div><div><dt className="text-sm text-muted-foreground flex gap-2"><Zap className="h-4 w-4" />Potência instalada</dt><dd className="font-bold text-primary text-xl">{project.power}</dd></div></dl><div className="border-t border-border mt-6 pt-6 space-y-3">{["Equipe própria", "Homologação", "Monitoramento", "Pós-venda"].map(item => <p key={item} className="flex gap-2"><Check className="h-5 w-5 text-primary" />{item}</p>)}</div></aside></div></section>
      <section className="section-padding bg-muted/40"><div className="container-max mx-auto"><div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10"><div><p className="text-primary uppercase font-bold text-sm mb-3">Continue explorando</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">Outros projetos {project.segmentLabel.toLowerCase()}</h2></div><Link to={segmentPath} className="inline-flex gap-2 items-center text-primary font-bold">Conheça esta solução<ArrowRight className="h-4 w-4" /></Link></div><ProjectGrid segment={project.segment} limit={3} /></div></section>
      <CTASection title="Quer um projeto como este?" text="Fale com a nossa equipe e receba uma proposta baseada no consumo e nas condições do seu imóvel." />
    </article>
  </>;
}
