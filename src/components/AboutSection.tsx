import { Shield, Users, Award, Clock, Wrench, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "25 Anos de Garantia",
    description: "Equipamentos de primeira linha com garantia estendida",
  },
  {
    icon: Users,
    title: "Equipe Própria",
    description: "Técnicos certificados e especializados em energia solar",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Trabalhamos apenas com as melhores marcas do mercado",
  },
  {
    icon: Clock,
    title: "Instalação Rápida",
    description: "Projetos executados em tempo recorde sem perder qualidade",
  },
  {
    icon: Wrench,
    title: "Suporte Completo",
    description: "Acompanhamento do projeto desde a venda até pós-instalação",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento 24h",
    description: "Suporte técnico disponível sempre que você precisar",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Schultz Energia Solar
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos uma empresa especializada em soluções de energia solar 
              fotovoltaica, comprometida em oferecer o melhor em tecnologia 
              e atendimento para nossos clientes.
            </p>
            <p className="text-muted-foreground mb-8">
              Com mais de 2 anos de experiência no mercado e mais de 150 
              projetos realizados, nos destacamos pela qualidade dos equipamentos, 
              pela excelência na instalação e pelo suporte completo ao cliente.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-display font-bold text-secondary mb-1">Missão</h4>
                <p className="text-sm text-muted-foreground">
                  Democratizar o acesso à energia solar, proporcionando economia 
                  e sustentabilidade para residências e empresas.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-display font-bold text-secondary mb-1">Visão</h4>
                <p className="text-sm text-muted-foreground">
                  Ser referência nacional em energia solar, reconhecida pela 
                  qualidade e inovação em soluções sustentáveis.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-display font-bold text-secondary mb-1">Valores</h4>
                <p className="text-sm text-muted-foreground">
                  Transparência, qualidade, sustentabilidade, inovação e 
                  compromisso com a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-secondary mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
