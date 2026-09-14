import { PageHero } from "@/components/PageHero";
import { SimulatorSection } from "@/components/SimulatorSection";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/seo-schema";

export default function SimulatorPage() {
  return <>
    <SEO title="Simulador de Energia Solar | Schultz Energia Solar" description="Calcule uma estimativa de economia com energia solar em Linhares. Informe o valor da conta e receba uma simulação inicial para sua residência, empresa ou propriedade." path="/simulador/" schema={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Simulador", path: "/simulador/" }])} />
    <PageHero eyebrow="Estimativa inicial" title="Simulador de Economia com Energia Solar" description="Informe o valor médio da sua conta de luz e veja uma estimativa inicial de sistema, investimento e economia." breadcrumbs={[{ label: "Simulador" }]} />
    <SimulatorSection />
  </>;
}
