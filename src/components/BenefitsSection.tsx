import { BadgeCheck, HeadphonesIcon, Monitor, ShieldCheck, Sun, Users } from "lucide-react";

const items = [
  { icon: Sun, title: "Até 90% de economia", text: "Reduza o peso da conta de luz com geração própria dimensionada para o seu consumo." },
  { icon: Users, title: "Equipe própria", text: "Projeto e instalação executados por quem assume a responsabilidade pela entrega." },
  { icon: ShieldCheck, title: "Garantia de instalação", text: "Segurança na execução e suporte caso algo precise de atenção depois da entrega." },
  { icon: Monitor, title: "Monitoramento", text: "Acompanhe a geração e identifique rapidamente qualquer queda de desempenho." },
  { icon: HeadphonesIcon, title: "Pós-venda", text: "Nosso relacionamento continua depois que o sistema começa a gerar energia." },
  { icon: BadgeCheck, title: "Certificações", text: "Equipe preparada e processos seguros para sistemas residenciais, comerciais e rurais." },
];

export function BenefitsSection() {
  return <section className="section-padding bg-muted/40"><div className="container-max mx-auto"><div className="max-w-3xl mb-12"><p className="text-primary uppercase font-bold text-sm mb-3">Benefícios</p><h2 className="font-display text-3xl md:text-5xl font-bold text-secondary mb-5">Energia solar com economia, segurança e acompanhamento</h2><p className="text-lg text-muted-foreground">Mais do que instalar placas: entregamos uma solução completa para você gerar sua própria energia com tranquilidade.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{items.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background border border-border p-6 rounded-lg"><Icon className="h-7 w-7 text-primary mb-4" /><h3 className="font-display text-xl font-bold text-secondary mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></article>)}</div></div></section>;
}
