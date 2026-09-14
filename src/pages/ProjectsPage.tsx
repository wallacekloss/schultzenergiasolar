import { ProjectGrid } from "@/components/ProjectGrid";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SEO, breadcrumbSchema } from "@/components/SEO";

export default function ProjectsPage() {
  const title = "Projetos de Energia Solar em Linhares | Schultz Energia Solar";
  const description = "Conheça projetos reais de energia solar residencial, comercial e rural executados pela Schultz em Linhares e Região Norte do Espírito Santo.";
  return <>
    <SEO title={title} description={description} path="/projetos/" schema={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Projetos", path: "/projetos/" }])} />
    <PageHero eyebrow="Portfólio real" title="Projetos de Energia Solar Realizados pela Schultz" description="Residências, comércios e propriedades rurais que já geram a própria energia em Linhares e na Região Norte do Espírito Santo." breadcrumbs={[{ label: "Projetos" }]} />
    <section className="section-padding bg-background"><div className="container-max mx-auto"><div className="max-w-3xl mb-10"><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">Experiência comprovada em campo</h2><p className="text-lg text-muted-foreground">Cada projeto abaixo foi executado pela Schultz Energia Solar. As informações de localização, segmento e potência são reais e as fotos mostram os sistemas instalados.</p></div><ProjectGrid /></div></section>
    <CTASection title="Quer ser o próximo projeto?" text="Envie sua conta de luz e receba uma proposta dimensionada para o seu imóvel ou propriedade." />
  </>;
}
