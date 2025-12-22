import { TrendingDown, Leaf, Home, Sun, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Economia de até 95%",
    description: "Reduza drasticamente sua conta de luz desde o primeiro mês de instalação.",
  },
  {
    icon: Leaf,
    title: "Energia 100% Limpa",
    description: "Contribua com o meio ambiente utilizando energia renovável e sustentável.",
  },
  {
    icon: Home,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar podem valorizar até 8% no mercado imobiliário.",
  },
  {
    icon: Shield,
    title: "Garantia de 25 Anos",
    description: "Painéis solares com garantia estendida e vida útil superior a 30 anos.",
  },
  {
    icon: Zap,
    title: "Retorno Garantido",
    description: "Payback do investimento entre 3 a 5 anos com economia constante.",
  },
  {
    icon: Sun,
    title: "Independência Energética",
    description: "Produza sua própria energia e fique livre dos aumentos tarifários.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Por que escolher energia solar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra as vantagens de investir em um sistema fotovoltaico para 
            sua residência ou empresa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
