import { ArrowRight, CheckCircle2, Home, Building2, Tractor, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo-schema";

const articlePath = "/blog/como-funciona-energia-solar-em-linhares/";

const steps = [
  {
    title: "1. Análise do consumo",
    text: "O ponto de partida é entender o histórico da conta de energia e como o consumo se distribui no imóvel. Essa leitura ajuda a dimensionar uma solução compatível com a necessidade real.",
  },
  {
    title: "2. Avaliação do local",
    text: "A equipe avalia o espaço disponível, as condições da instalação e os fatores que influenciam o projeto. Cada residência, empresa ou propriedade exige uma análise própria.",
  },
  {
    title: "3. Projeto e proposta",
    text: "Com os dados reunidos, é preparada uma proposta para o imóvel. Nessa etapa, o cliente consegue entender o escopo da instalação e esclarecer dúvidas antes de avançar.",
  },
  {
    title: "4. Instalação e homologação",
    text: "Após a aprovação, a equipe realiza a instalação e acompanha o processo de homologação junto à distribuidora de energia, de acordo com as exigências aplicáveis ao projeto.",
  },
  {
    title: "5. Funcionamento e acompanhamento",
    text: "Os painéis captam a luz solar e produzem energia elétrica. O inversor converte essa energia para o padrão utilizado no imóvel, enquanto o acompanhamento ajuda a observar o funcionamento do sistema.",
  },
];

const profiles = [
  {
    icon: Home,
    title: "Residências",
    text: "Para casas, o projeto considera o histórico de consumo e as características do imóvel.",
    label: "Energia solar residencial",
    to: "/energia-solar-residencial/",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "No comércio, a análise considera a rotina do negócio e o consumo de energia da operação.",
    label: "Energia solar comercial",
    to: "/energia-solar-comercial/",
  },
  {
    icon: Tractor,
    title: "Propriedades rurais",
    text: "No campo, o dimensionamento parte das atividades e dos equipamentos que utilizam energia.",
    label: "Energia solar rural",
    to: "/energia-solar-rural/",
  },
];

export default function SolarEnergyLinharesArticlePage() {
  const title = "Como funciona a energia solar em Linhares? | Schultz Energia Solar";
  const description = "Entenda como funciona a energia solar em Linhares, da análise da conta à instalação, homologação e acompanhamento do sistema fotovoltaico.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={articlePath}
        type="article"
        schema={[
          webPageSchema("Como funciona a energia solar em Linhares?", articlePath),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: "Como funciona a energia solar em Linhares?", path: articlePath },
          ]),
        ]}
      />

      <article>
        <header className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24 text-secondary-foreground">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              inverse
              items={[
                { label: "Blog", to: "/blog/" },
                { label: "Como funciona a energia solar em Linhares?" },
              ]}
            />
            <div className="mt-8 max-w-4xl">
              <p className="text-primary font-bold uppercase text-sm mb-4">Guia de energia solar</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Como funciona a energia solar em Linhares?
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/75 leading-relaxed max-w-3xl">
                Um guia direto para entender como a luz do sol se transforma em energia para casas, empresas e propriedades rurais — e o que acontece antes e depois da instalação.
              </p>
            </div>
          </div>
        </header>

        <section className="section-padding bg-background">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xl text-secondary font-semibold leading-relaxed">
                A energia solar fotovoltaica aproveita a luz do sol para produzir eletricidade no próprio imóvel. Mas um sistema bem planejado começa antes da instalação dos painéis.
              </p>
              <p>
                Em Linhares, o processo deve partir do consumo real e das condições do local. Isso evita decisões baseadas apenas em quantidade de painéis ou em estimativas genéricas. Residências, empresas e propriedades rurais têm rotinas diferentes, por isso cada projeto precisa ser avaliado individualmente.
              </p>
              <p>
                A seguir, você entende as principais etapas e sabe o que observar ao solicitar uma proposta.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/35">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase text-sm mb-3">Do planejamento ao uso</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-10">
                As cinco etapas de um sistema de energia solar
              </h2>
              <div className="space-y-5">
                {steps.map((step) => (
                  <div key={step.title} className="border-l-4 border-primary pl-5 py-2">
                    <h3 className="font-display text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-primary font-bold uppercase text-sm mb-3">Na prática</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-6">
                O que muda entre uma casa, uma empresa e uma propriedade rural?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                O princípio de funcionamento é o mesmo, mas o consumo, o espaço disponível e a rotina de uso mudam. Por isso, a solução precisa acompanhar o perfil de cada imóvel.
              </p>
              <div className="grid gap-5 md:grid-cols-3">
                {profiles.map(({ icon: Icon, title: profileTitle, text, label, to }) => (
                  <div key={profileTitle} className="border border-border rounded-lg p-5">
                    <Icon className="h-7 w-7 text-primary mb-4" aria-hidden="true" />
                    <h3 className="font-display text-xl font-bold text-secondary mb-2">{profileTitle}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{text}</p>
                    <Link className="inline-flex items-center gap-2 font-bold text-primary" to={to}>
                      {label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/35">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-primary font-bold uppercase text-sm mb-3">Antes de decidir</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-5">
                  O que avaliar em uma proposta de energia solar?
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {["Análise baseada no consumo do imóvel", "Avaliação das condições de instalação", "Explicação clara das etapas do projeto", "Responsabilidade pela instalação e homologação", "Atendimento, monitoramento e pós-venda"].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projetos/">Ver projetos realizados<FolderOpen /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-5">
                Como dar o primeiro passo em Linhares
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-5">
                <p>
                  O primeiro passo é reunir uma conta de energia recente e solicitar uma análise. Com essas informações, é possível preparar uma estimativa inicial e entender qual solução faz sentido para o imóvel.
                </p>
                <p>
                  A Schultz Energia Solar atende Linhares e a Região Norte do Espírito Santo com equipe própria, acompanhamento, pós-venda e garantia. O objetivo é apresentar uma solução coerente com o consumo, sem promessas genéricas ou dimensionamento sem avaliação.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        title="Descubra o potencial de economia do seu imóvel"
        text="Use o simulador para uma estimativa inicial e envie sua conta de energia para solicitar um orçamento personalizado."
      />
    </>
  );
}