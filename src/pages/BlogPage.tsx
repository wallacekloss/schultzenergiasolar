import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/seo-schema";

const categories = ["Energia Solar", "Energia Solar Residencial", "Energia Solar Comercial", "Manutenção", "Economia de Energia", "Projetos"];
const planned = [
  { title: "Quanto custa instalar energia solar em Linhares?", to: "/instalacao-de-energia-solar/" },
  { title: "Quantas placas solares uma casa precisa?", to: "/energia-solar-residencial/" },
  { title: "Por que limpar os painéis solares?", to: "/limpeza-de-paineis-solares/" },
  { title: "Como identificar baixa geração no sistema fotovoltaico?", to: "/diagnostico-de-falhas-em-sistema-solar/" },
  { title: "Por que o inversor solar apresenta falhas?", to: "/diagnostico-de-falhas-em-sistema-solar/" },
  { title: "Como escolher uma empresa de energia solar em Linhares?", to: "/sobre/" },
];

export default function BlogPage() {
  return <>
    <SEO title="Blog de Energia Solar | Schultz Energia Solar" description="Conteúdos sobre energia solar, economia, manutenção e projetos fotovoltaicos em Linhares e Região Norte do Espírito Santo." path="/blog/" schema={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Blog", path: "/blog/" }])} />
    <PageHero eyebrow="Conteúdo especializado" title="Blog de Energia Solar" description="Informação clara para ajudar você a entender custos, geração, manutenção e as decisões envolvidas em um sistema fotovoltaico." breadcrumbs={[{ label: "Blog" }]} />
    <section className="section-padding bg-background"><div className="container-max mx-auto"><h2 className="font-display text-3xl font-bold text-secondary mb-5">Categorias</h2><div className="flex flex-wrap gap-2 mb-12">{categories.map(category => <span key={category} className="border border-border px-4 py-2 rounded-full text-sm font-semibold">{category}</span>)}</div><div className="max-w-3xl mb-8"><p className="text-primary uppercase font-bold text-sm mb-3">Conteúdo em destaque</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">Entenda a energia solar antes de decidir</h2><p className="text-muted-foreground">Informações claras sobre as etapas de um projeto e o que avaliar ao solicitar uma proposta em Linhares.</p></div><Link to="/blog/como-funciona-energia-solar-em-linhares/" className="group border border-border p-6 rounded-lg flex flex-col sm:flex-row gap-5 hover:border-primary mb-14"><BookOpen className="h-8 w-8 text-primary shrink-0" /><div className="flex-1"><p className="text-sm font-bold uppercase text-primary mb-2">Guia de energia solar</p><h3 className="font-display text-2xl font-bold text-secondary mb-2">Como funciona a energia solar em Linhares?</h3><p className="text-muted-foreground leading-relaxed">Da análise da conta à instalação, homologação e acompanhamento: conheça as etapas de um sistema fotovoltaico.</p></div><ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary self-end sm:self-center" /></Link><div className="max-w-3xl mb-8"><p className="text-primary uppercase font-bold text-sm mb-3">Em preparação</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">Próximos conteúdos</h2><p className="text-muted-foreground">Novos artigos serão publicados com informações úteis para quem avalia investir em energia solar.</p></div><div className="grid md:grid-cols-2 gap-4">{planned.map(item => <Link key={item.title} to={item.to} className="group border border-border p-5 rounded-lg flex gap-4 hover:border-primary"><BookOpen className="h-6 w-6 text-primary shrink-0" /><span className="font-display font-bold text-secondary flex-1">{item.title}</span><ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" /></Link>)}</div></div></section>
  </>;
}