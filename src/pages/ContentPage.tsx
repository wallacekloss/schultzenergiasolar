import { Check, ArrowRight, Lightbulb, Wrench, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schema";
import { useManagedContent } from "@/hooks/use-managed-content";
import NotFound from "./NotFound";

const benefitIcons = [Lightbulb, ShieldCheck, Wrench];

export default function ContentPage() {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean)[0] ?? "";
  const { pages, isLoading } = useManagedContent();
  const page = pages.find(item => item.slug === slug);
  if (isLoading && !page) return <div className="min-h-[70vh] grid place-items-center text-muted-foreground">Carregando...</div>;
  if (!page) return <NotFound />;

  const breadcrumbs = [{ name: "Início", path: "/" }, { name: page.breadcrumb, path: page.path }];
  return (
    <>
      <SEO title={page.metaTitle} description={page.metaDescription} path={page.path} schema={[serviceSchema(page.serviceName, page.metaDescription, page.path), breadcrumbSchema(breadcrumbs)]} />
      <PageHero eyebrow="Schultz Energia Solar" title={page.h1} description={page.intro} breadcrumbs={[{ label: page.breadcrumb }]} />

      <section className="section-padding bg-background">
        <div className="container-max mx-auto grid lg:grid-cols-[1fr_0.65fr] gap-12 items-start">
          <div>
            <p className="text-primary uppercase font-bold text-sm mb-3">Solução local e completa</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-5">Atendimento em Linhares e Região Norte do Espírito Santo</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{page.intro2}</p>
          </div>
          <aside className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="font-display text-xl font-bold text-secondary mb-4">O que você pode esperar</p>
            <ul className="space-y-3">
              {["Atendimento rápido", "Equipe própria", "Garantia de instalação", "Monitoramento e pós-venda"].map(item => <li key={item} className="flex gap-3"><Check className="h-5 w-5 text-primary shrink-0" /><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-max mx-auto">
          <div className="max-w-3xl mb-10"><p className="text-primary uppercase font-bold text-sm mb-3">Benefícios</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">{page.benefitsTitle}</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return <article key={benefit.title} className="bg-background border border-border p-6 rounded-lg"><Icon className="h-7 w-7 text-primary mb-4" /><h3 className="font-display text-xl font-bold text-secondary mb-2">{benefit.title}</h3><p className="text-muted-foreground leading-relaxed">{benefit.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max mx-auto">
          <div className="max-w-3xl mb-10"><p className="text-primary uppercase font-bold text-sm mb-3">Funcionamento</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">{page.howTitle}</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {page.how.map((item, index) => <article key={item.title} className="relative border-t-2 border-primary pt-6"><span className="font-display text-5xl text-muted font-bold absolute -top-7 right-0">0{index + 1}</span><h3 className="font-display text-xl font-bold text-secondary mb-3 relative">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-max mx-auto grid lg:grid-cols-[0.7fr_1fr] gap-12">
          <div><p className="text-primary uppercase font-bold text-sm mb-3">Processo claro</p><h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{page.processTitle}</h2><p className="text-secondary-foreground/65">Você acompanha cada etapa e sabe exatamente o que está sendo feito.</p></div>
          <ol className="grid sm:grid-cols-2 gap-4">
            {page.process.map((step, index) => <li key={step} className="flex gap-4 bg-secondary-foreground/5 border border-secondary-foreground/10 p-4 rounded-lg"><span className="w-8 h-8 shrink-0 rounded-full bg-primary flex items-center justify-center font-bold">{index + 1}</span><span className="text-secondary-foreground/80">{step}</span></li>)}
          </ol>
        </div>
      </section>

      {page.projectSegment && <section className="section-padding bg-background"><div className="container-max mx-auto"><div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"><div><p className="text-primary uppercase font-bold text-sm mb-3">Experiência real</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">Projetos {page.navLabel.toLowerCase()} executados</h2></div><Link to="/projetos/" className="inline-flex items-center gap-2 font-bold text-primary">Ver todos os projetos<ArrowRight className="h-4 w-4" /></Link></div><ProjectGrid segment={page.projectSegment} /></div></section>}

      <section className="section-padding bg-background border-t border-border">
        <div className="container-max mx-auto"><h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-6">Serviços e soluções relacionados</h2><div className="flex flex-wrap gap-3">{page.relatedLinks.map(link => <Link key={link.to} to={link.to} className="inline-flex items-center gap-2 border border-border rounded-lg px-5 py-3 font-semibold hover:border-primary hover:text-primary transition-colors">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</div></div>
      </section>

      <FAQSection items={page.faq} />
      <CTASection title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}