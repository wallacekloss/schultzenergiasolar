import { Check, Clock, HeadphonesIcon, Monitor, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SEO, breadcrumbSchema, organizationSchema } from "@/components/SEO";

const pillars = [
  { icon: Users, title: "Equipe própria", text: "Do projeto à instalação, o trabalho é realizado pela nossa equipe." },
  { icon: Clock, title: "Atendimento rápido", text: "Estamos em Linhares e atendemos a Região Norte do Espírito Santo." },
  { icon: Monitor, title: "Monitoramento", text: "Acompanhamos a geração para identificar rapidamente qualquer desvio." },
  { icon: HeadphonesIcon, title: "Pós-venda", text: "O relacionamento continua depois que o sistema começa a gerar." },
  { icon: ShieldCheck, title: "Garantia de instalação", text: "Respondemos pela qualidade da execução e pelo funcionamento entregue." },
  { icon: Check, title: "Certificações", text: "Equipe preparada para executar sistemas fotovoltaicos com segurança e qualidade." },
];

export default function AboutPage() {
  const description = "Conheça a Schultz Energia Solar: empresa de Linhares-ES com equipe própria, mais de 170 projetos realizados e 3+ anos de experiência.";
  return <>
    <SEO title="Sobre a Schultz Energia Solar | Linhares-ES" description={description} path="/sobre/" schema={[organizationSchema, breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Sobre", path: "/sobre/" }])]} />
    <PageHero eyebrow="Empresa local" title="Sobre a Schultz Energia Solar" description="Energia solar fotovoltaica com atendimento próximo, execução própria e acompanhamento de verdade em Linhares e Região Norte do Espírito Santo." breadcrumbs={[{ label: "Sobre" }]} />
    <section className="section-padding bg-background"><div className="container-max mx-auto grid lg:grid-cols-2 gap-12"><div><p className="text-primary uppercase font-bold text-sm mb-3">Nossa atuação</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-5">Mais de 170 projetos realizados</h2><div className="space-y-5 text-lg text-muted-foreground leading-relaxed"><p>A Schultz Energia Solar nasceu em Linhares com foco exclusivo em energia solar fotovoltaica. Em mais de 3 anos de experiência, já executamos mais de 170 projetos residenciais, comerciais e rurais.</p><p>Atuamos em Linhares e na Região Norte do Espírito Santo com equipe própria. Isso permite acompanhar de perto cada etapa: atendimento, dimensionamento, projeto, instalação, homologação, monitoramento e pós-venda.</p><p>Nosso compromisso é simples: explicar com clareza, dimensionar com responsabilidade, executar com qualidade e continuar disponível depois da entrega.</p></div></div><div className="bg-secondary text-secondary-foreground p-8 rounded-lg"><h2 className="font-display text-2xl font-bold mb-6">Schultz em números</h2><dl className="grid grid-cols-2 gap-6"><div><dt className="text-primary text-3xl md:text-4xl font-display font-bold">170+</dt><dd className="text-sm text-secondary-foreground/65 mt-1">projetos realizados</dd></div><div><dt className="text-primary text-3xl md:text-4xl font-display font-bold">3+</dt><dd className="text-sm text-secondary-foreground/65 mt-1">anos de experiência</dd></div><div><dt className="text-primary text-3xl md:text-4xl font-display font-bold">90%</dt><dd className="text-sm text-secondary-foreground/65 mt-1">de economia possível</dd></div><div><dt className="text-primary text-3xl md:text-4xl font-display font-bold">100%</dt><dd className="text-sm text-secondary-foreground/65 mt-1">equipe própria</dd></div></dl></div></div></section>
    <section className="section-padding bg-muted/40"><div className="container-max mx-auto"><div className="max-w-3xl mb-10"><p className="text-primary uppercase font-bold text-sm mb-3">Nosso jeito de trabalhar</p><h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">O que você recebe ao escolher a Schultz</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{pillars.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background border border-border p-6 rounded-lg"><Icon className="h-7 w-7 text-primary mb-4" /><h3 className="font-display text-xl font-bold text-secondary mb-2">{title}</h3><p className="text-muted-foreground">{text}</p></article>)}</div></div></section>
    <CTASection title="Fale com quem entende de energia solar em Linhares" text="Nossa equipe está pronta para analisar seu consumo e indicar uma solução adequada para você." />
  </>;
}
