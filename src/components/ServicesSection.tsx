import { Home, Building2, Settings, FileCheck, Wrench, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Sistemas Residenciais",
    description: "Soluções completas para sua casa com painéis de alta eficiência. Reduza sua conta de luz e valorize seu imóvel.",
    benefits: ["Economia de até 95%", "Instalação rápida", "Financiamento facilitado"],
  },
  {
    icon: Building2,
    title: "Sistemas Comerciais",
    description: "Projetos sob medida para empresas de todos os portes. Reduza custos operacionais e melhore sua margem.",
    benefits: ["ROI acelerado", "Dedução fiscal", "Créditos de energia"],
  },
  {
    icon: Settings,
    title: "Projetos Personalizados",
    description: "Desenvolvemos projetos exclusivos para necessidades específicas, considerando consumo, área e objetivos.",
    benefits: ["Análise completa", "Projeto 3D", "Dimensionamento ideal"],
  },
  {
    icon: FileCheck,
    title: "Homologação",
    description: "Cuidamos de toda a burocracia junto à concessionária. Documentação, aprovação e conexão à rede.",
    benefits: ["Processo simplificado", "Acompanhamento total", "Agilidade garantida"],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Serviços de manutenção preventiva e corretiva para garantir a máxima eficiência do seu sistema.",
    benefits: ["Limpeza profissional", "Inspeção técnica", "Suporte prioritário"],
  },
  {
    icon: Monitor,
    title: "Monitoramento",
    description: "Acompanhe em tempo real a geração de energia do seu sistema através de aplicativo exclusivo.",
    benefits: ["App dedicado", "Alertas em tempo real", "Relatórios mensais"],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Soluções completas em energia solar
          </h2>
          <p className="text-lg text-muted-foreground">
            Do projeto à instalação, oferecemos tudo que você precisa para gerar 
            sua própria energia limpa e renovável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 shadow-card hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="font-display text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="default" size="lg" asChild>
            <a href="#contato">
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
