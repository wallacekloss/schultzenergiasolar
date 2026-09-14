import type { ProjectSegment } from "./projects";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContentBlock {
  title: string;
  description: string;
}

export interface InternalLink {
  label: string;
  to: string;
}

export interface ContentPage {
  slug: string;
  path: string;
  navLabel: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  serviceName: string;
  intro: string;
  intro2: string;
  benefitsTitle: string;
  benefits: ContentBlock[];
  howTitle: string;
  how: ContentBlock[];
  processTitle: string;
  process: string[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  relatedLinks: InternalLink[];
  projectSegment?: ProjectSegment;
}

const suporte =
  "Depois da entrega, o sistema segue com monitoramento e pós-venda da nossa equipe, em Linhares e na Região Norte do Espírito Santo.";

export const solutions: ContentPage[] = [
  {
    slug: "energia-solar-residencial",
    path: "/energia-solar-residencial/",
    navLabel: "Residencial",
    breadcrumb: "Energia Solar Residencial",
    metaTitle: "Energia Solar Residencial em Linhares | Schultz Energia Solar",
    metaDescription:
      "Energia solar residencial em Linhares-ES: projeto, instalação, homologação e monitoramento para reduzir a conta de luz da sua casa em até 90%.",
    h1: "Energia Solar Residencial em Linhares",
    serviceName: "Energia solar residencial",
    intro:
      "A conta de luz é um dos gastos fixos que mais pesam no orçamento de uma família. Com um sistema fotovoltaico bem dimensionado, sua casa passa a gerar a própria energia e a economia aparece já nas primeiras faturas — podendo chegar a até 90% de redução.",
    intro2:
      "A Schultz Energia Solar projeta e instala sistemas residenciais em Linhares e na Região Norte do Espírito Santo com equipe própria, acompanhando cada etapa: análise do consumo, dimensionamento, instalação, homologação junto à concessionária e monitoramento da geração.",
    benefitsTitle: "Vantagens da energia solar em casa",
    benefits: [
      {
        title: "Economia de longo prazo",
        description:
          "Redução de até 90% no valor da conta de luz, com proteção contra os reajustes anuais da tarifa.",
      },
      {
        title: "Valorização do imóvel",
        description:
          "Uma casa que já gera a própria energia se torna mais atrativa na hora de vender ou alugar.",
      },
      {
        title: "Projeto sob medida",
        description:
          "O sistema é dimensionado a partir do seu consumo real e do espaço disponível no telhado.",
      },
      {
        title: "Instalação com equipe própria",
        description:
          "Quem projeta é quem instala. Sem terceirização e sem transferência de responsabilidade.",
      },
      {
        title: "Acompanhamento da geração",
        description:
          "Você acompanha a produção de energia e recebe suporte caso algo saia do esperado.",
      },
      {
        title: "Energia limpa",
        description:
          "Geração renovável, silenciosa e sem emissão de poluentes durante a operação.",
      },
    ],
    howTitle: "Como funciona a energia solar residencial",
    how: [
      {
        title: "Os módulos captam a luz do sol",
        description:
          "As placas solares instaladas no telhado convertem a radiação solar em energia elétrica em corrente contínua.",
      },
      {
        title: "O inversor converte a energia",
        description:
          "O inversor transforma essa energia em corrente alternada, no padrão utilizado pelos equipamentos da sua casa.",
      },
      {
        title: "O excedente vira crédito",
        description:
          "O que não é consumido na hora é injetado na rede da concessionária e retorna como crédito de energia nas faturas seguintes.",
      },
    ],
    processTitle: "Como contratar",
    process: [
      "Você fala com a gente pelo WhatsApp e envia uma conta de luz recente.",
      "Analisamos o consumo e apresentamos a proposta com o sistema dimensionado.",
      "Aprovada a proposta, cuidamos do projeto e da documentação.",
      "Nossa equipe executa a instalação na data combinada.",
      "Fazemos a homologação junto à concessionária e ativamos o sistema.",
      "Você passa a acompanhar a geração, com monitoramento e pós-venda.",
    ],
    faq: [
      {
        q: "Quanto posso economizar na conta de luz da minha casa?",
        a: "A economia depende do consumo, da tarifa e do sistema instalado, podendo chegar a até 90%. No simulador do site você tem uma estimativa inicial em poucos segundos.",
      },
      {
        q: "Preciso reformar o telhado para instalar placas solares?",
        a: "Na maioria dos casos não. Avaliamos a estrutura e a área disponível antes da instalação e indicamos se algum ajuste é necessário.",
      },
      {
        q: "E se a minha casa consumir mais do que o sistema gera?",
        a: "O que faltar continua vindo da rede normalmente. O sistema pode ser dimensionado para cobrir a maior parte do consumo, e há espaço para ampliação futura.",
      },
      {
        q: "Vocês atendem fora de Linhares?",
        a: "Sim. Atendemos Linhares e a Região Norte do Espírito Santo, incluindo cidades vizinhas como Sooretama e Vila Valério, onde já executamos projetos.",
      },
    ],
    ctaTitle: "Quer saber quanto sua casa pode economizar?",
    ctaText:
      "Simule sua economia em poucos segundos ou fale direto com a nossa equipe pelo WhatsApp.",
    relatedLinks: [
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
      { label: "Manutenção de energia solar", to: "/manutencao-de-energia-solar/" },
      { label: "Limpeza de painéis solares", to: "/limpeza-de-paineis-solares/" },
      { label: "Simulador de economia", to: "/simulador/" },
    ],
    projectSegment: "residencial",
  },
  {
    slug: "energia-solar-comercial",
    path: "/energia-solar-comercial/",
    navLabel: "Comercial",
    breadcrumb: "Energia Solar Comercial",
    metaTitle: "Energia Solar Comercial em Linhares | Schultz Energia Solar",
    metaDescription:
      "Energia solar comercial em Linhares-ES: reduza o custo fixo de energia da sua empresa com projeto, instalação e homologação da Schultz Energia Solar.",
    h1: "Energia Solar Comercial em Linhares",
    serviceName: "Energia solar comercial",
    intro:
      "Para comércios e prestadores de serviço, energia elétrica é custo fixo — e custo fixo alto reduz margem. Um sistema fotovoltaico transforma parte dessa despesa em investimento com retorno previsível.",
    intro2:
      "A Schultz Energia Solar desenvolve projetos comerciais em Linhares e região considerando o perfil de consumo do negócio, o horário de operação e a área disponível para instalação, sempre com equipe própria e homologação incluída.",
    benefitsTitle: "Por que sua empresa deve investir em energia solar",
    benefits: [
      {
        title: "Redução do custo fixo",
        description:
          "A energia deixa de ser uma despesa crescente e passa a ser um custo previsível e controlado.",
      },
      {
        title: "Retorno previsível",
        description:
          "O investimento se paga com a própria economia gerada mês após mês.",
      },
      {
        title: "Geração no horário de operação",
        description:
          "Comércios que funcionam durante o dia aproveitam boa parte da geração no momento em que ela acontece.",
      },
      {
        title: "Créditos de energia",
        description:
          "O excedente gerado retorna como crédito e pode compensar o consumo em outros períodos.",
      },
      {
        title: "Imagem sustentável",
        description:
          "Empresas que geram energia limpa comunicam responsabilidade ambiental aos seus clientes.",
      },
      {
        title: "Obra planejada",
        description:
          "Executamos a instalação com organização para interferir o mínimo possível na rotina do negócio.",
      },
    ],
    howTitle: "Como funciona um sistema comercial",
    how: [
      {
        title: "Análise do perfil de consumo",
        description:
          "Avaliamos as faturas, a demanda e a curva de consumo do estabelecimento antes de dimensionar o sistema.",
      },
      {
        title: "Projeto e dimensionamento",
        description:
          "Definimos a potência, a quantidade de módulos e o layout de instalação adequados ao espaço disponível.",
      },
      {
        title: "Instalação e homologação",
        description:
          "Executamos a obra com equipe própria e conduzimos todo o processo junto à concessionária até o sistema entrar em operação.",
      },
    ],
    processTitle: "Como contratar",
    process: [
      "Envie as últimas faturas de energia da empresa pelo WhatsApp.",
      "Analisamos o consumo e apresentamos a proposta técnica e comercial.",
      "Definimos o cronograma de execução conforme a rotina do negócio.",
      "Instalação realizada pela nossa equipe.",
      "Homologação e ativação do sistema junto à concessionária.",
      "Monitoramento da geração e suporte pós-venda.",
    ],
    faq: [
      {
        q: "Minha empresa aluga o imóvel. Vale a pena instalar?",
        a: "Vale avaliar caso a caso. É preciso alinhar com o proprietário e considerar o tempo de contrato. Podemos analisar sua situação e indicar o melhor caminho.",
      },
      {
        q: "Quanto tempo leva a instalação em um comércio?",
        a: "Depende do tamanho do sistema e das condições do local. Apresentamos o cronograma junto com a proposta, antes do início da obra.",
      },
      {
        q: "O sistema funciona em dias nublados?",
        a: "Sim, com geração reduzida. O dimensionamento já considera a média de geração ao longo do ano.",
      },
      {
        q: "Vocês cuidam da documentação junto à concessionária?",
        a: "Sim. A homologação faz parte do serviço e é conduzida por nós do início ao fim.",
      },
    ],
    ctaTitle: "Reduza o custo de energia da sua empresa",
    ctaText:
      "Fale com a nossa equipe e receba uma proposta baseada no consumo real do seu negócio.",
    relatedLinks: [
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
      { label: "Homologação de energia solar", to: "/homologacao-de-energia-solar/" },
      { label: "Simulador de economia", to: "/simulador/" },
    ],
    projectSegment: "comercial",
  },
  {
    slug: "energia-solar-rural",
    path: "/energia-solar-rural/",
    navLabel: "Rural",
    breadcrumb: "Energia Solar Rural",
    metaTitle: "Energia Solar Rural em Linhares | Schultz Energia Solar",
    metaDescription:
      "Energia solar rural em Linhares-ES e região: reduza o custo de irrigação, resfriamento e produção com sistemas fotovoltaicos da Schultz Energia Solar.",
    h1: "Energia Solar Rural em Linhares",
    serviceName: "Energia solar rural",
    intro:
      "No campo, energia elétrica é insumo de produção: irrigação, bombeamento, resfriamento, secagem e beneficiamento dependem dela. Gerar a própria energia significa produzir com custo menor e mais previsibilidade.",
    intro2:
      "A Schultz Energia Solar já executou sistemas em propriedades rurais de Linhares, Sooretama e Vila Valério, dimensionados conforme a atividade produtiva de cada local e instalados pela nossa equipe própria.",
    benefitsTitle: "Vantagens no meio rural",
    benefits: [
      {
        title: "Custo de produção menor",
        description:
          "A energia usada na irrigação e no beneficiamento deixa de pesar tanto no resultado da safra.",
      },
      {
        title: "Previsibilidade",
        description:
          "Menos exposição aos reajustes de tarifa e às bandeiras tarifárias ao longo do ano.",
      },
      {
        title: "Aproveitamento de área",
        description:
          "Instalação em telhados de galpões, barracões ou em solo, conforme o que existe na propriedade.",
      },
      {
        title: "Sistemas de maior porte",
        description:
          "Já executamos projetos rurais acima de 37 kWp, dimensionados para consumos elevados.",
      },
      {
        title: "Atendimento na região",
        description:
          "Estamos em Linhares e atendemos toda a Região Norte do Espírito Santo.",
      },
      {
        title: "Acompanhamento contínuo",
        description:
          "Monitoramento da geração e suporte para manter o sistema produzindo como o previsto.",
      },
    ],
    howTitle: "Como funciona na propriedade rural",
    how: [
      {
        title: "Levantamento do consumo produtivo",
        description:
          "Analisamos as faturas e entendemos quais equipamentos consomem mais e em quais períodos.",
      },
      {
        title: "Definição do local de instalação",
        description:
          "Avaliamos telhados disponíveis e a possibilidade de instalação em solo, conforme a área da propriedade.",
      },
      {
        title: "Execução e homologação",
        description:
          "Instalação com equipe própria e todo o processo junto à concessionária até a liberação do sistema.",
      },
    ],
    processTitle: "Como contratar",
    process: [
      "Envie as faturas de energia da propriedade pelo WhatsApp.",
      "Levantamos o consumo e as particularidades da atividade produtiva.",
      "Apresentamos a proposta com o sistema dimensionado.",
      "Executamos a instalação com a nossa equipe.",
      "Cuidamos da homologação e da ativação.",
      "Monitoramento e pós-venda após a entrega.",
    ],
    faq: [
      {
        q: "Dá para instalar energia solar para irrigação?",
        a: "Sim. O sistema é dimensionado considerando o consumo dos conjuntos de bombeamento e o período de uso ao longo do ano.",
      },
      {
        q: "Posso instalar no chão em vez do telhado?",
        a: "Sim, quando há área disponível e viabilidade técnica. Avaliamos as duas opções na visita.",
      },
      {
        q: "Vocês atendem Sooretama e Vila Valério?",
        a: "Sim. Temos projetos executados no Juncado, em Sooretama, e no Parajú, em Vila Valério.",
      },
      {
        q: "O sistema exige manutenção frequente?",
        a: "A manutenção é simples e preventiva, com atenção especial à limpeza dos módulos, que no meio rural tende a acumular mais poeira.",
      },
    ],
    ctaTitle: "Produza com energia mais barata",
    ctaText:
      "Fale com a nossa equipe e receba uma proposta para a sua propriedade rural.",
    relatedLinks: [
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
      { label: "Limpeza de painéis solares", to: "/limpeza-de-paineis-solares/" },
      { label: "Manutenção de energia solar", to: "/manutencao-de-energia-solar/" },
      { label: "Simulador de economia", to: "/simulador/" },
    ],
    projectSegment: "rural",
  },
  {
    slug: "energia-solar-industrial",
    path: "/energia-solar-industrial/",
    navLabel: "Industrial",
    breadcrumb: "Energia Solar Industrial",
    metaTitle: "Energia Solar Industrial em Linhares | Schultz Energia Solar",
    metaDescription:
      "Energia solar industrial em Linhares-ES: projetos fotovoltaicos para indústrias que buscam reduzir o custo de energia com segurança técnica.",
    h1: "Energia Solar Industrial em Linhares",
    serviceName: "Energia solar industrial",
    intro:
      "Na indústria, a fatura de energia acompanha diretamente o volume produzido. Um sistema fotovoltaico bem projetado reduz esse custo e melhora a competitividade da operação.",
    intro2:
      "A Schultz Energia Solar desenvolve projetos industriais em Linhares e na Região Norte do Espírito Santo, com análise de consumo, dimensionamento adequado à infraestrutura elétrica existente, instalação por equipe própria e homologação junto à concessionária.",
    benefitsTitle: "Benefícios para a indústria",
    benefits: [
      {
        title: "Redução da fatura de energia",
        description:
          "Parte significativa do consumo passa a ser atendida pela geração própria.",
      },
      {
        title: "Uso de grandes áreas de telhado",
        description:
          "Galpões e barracões oferecem área para sistemas de maior potência.",
      },
      {
        title: "Projeto compatível com a instalação existente",
        description:
          "O dimensionamento considera a infraestrutura elétrica e os quadros já instalados.",
      },
      {
        title: "Execução planejada",
        description:
          "Cronograma definido para reduzir impacto sobre a produção durante a obra.",
      },
      {
        title: "Monitoramento da geração",
        description:
          "Acompanhamento contínuo para identificar rapidamente qualquer queda de desempenho.",
      },
      {
        title: "Suporte técnico local",
        description:
          "Equipe própria baseada em Linhares, com atendimento rápido quando necessário.",
      },
    ],
    howTitle: "Como funciona um projeto industrial",
    how: [
      {
        title: "Diagnóstico elétrico e de consumo",
        description:
          "Levantamento das faturas, da demanda contratada e das condições da instalação elétrica.",
      },
      {
        title: "Engenharia do sistema",
        description:
          "Definição de potência, arranjo dos módulos, inversores e pontos de conexão.",
      },
      {
        title: "Instalação, homologação e operação",
        description:
          "Execução da obra, processo junto à concessionária e entrega do sistema em funcionamento com monitoramento ativo.",
      },
    ],
    processTitle: "Como contratar",
    process: [
      "Entre em contato e compartilhe as faturas e informações da unidade.",
      "Realizamos a visita técnica para avaliar estrutura e instalação elétrica.",
      "Apresentamos o projeto e a proposta comercial.",
      "Definimos o cronograma de execução com a sua equipe.",
      "Instalação e homologação conduzidas por nós.",
      "Monitoramento, manutenção preventiva e pós-venda.",
    ],
    faq: [
      {
        q: "Existe limite de potência para o sistema?",
        a: "O dimensionamento depende do consumo, da área disponível e das regras da concessionária. Avaliamos essas condições no projeto.",
      },
      {
        q: "A obra precisa parar a produção?",
        a: "Buscamos executar sem interromper a operação. Eventuais paradas pontuais são combinadas previamente com a sua equipe.",
      },
      {
        q: "Vocês fazem a manutenção depois da instalação?",
        a: "Sim. Oferecemos manutenção preventiva, limpeza dos módulos, monitoramento e diagnóstico de falhas.",
      },
      {
        q: "É possível ampliar o sistema depois?",
        a: "Sim, desde que haja área disponível e viabilidade técnica. Isso pode ser previsto já no projeto inicial.",
      },
    ],
    ctaTitle: "Fale com a nossa equipe técnica",
    ctaText:
      "Envie as informações da sua unidade e receba uma proposta para o seu projeto industrial.",
    relatedLinks: [
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
      { label: "Diagnóstico de falhas", to: "/diagnostico-de-falhas-em-sistema-solar/" },
      { label: "Homologação de energia solar", to: "/homologacao-de-energia-solar/" },
    ],
  },
];

export const services: ContentPage[] = [
  {
    slug: "instalacao-de-energia-solar",
    path: "/instalacao-de-energia-solar/",
    navLabel: "Instalação",
    breadcrumb: "Instalação de Energia Solar",
    metaTitle: "Instalação de Energia Solar em Linhares | Schultz Energia Solar",
    metaDescription:
      "Instalação de energia solar em Linhares-ES com equipe própria: projeto, instalação de placas solares, homologação e monitoramento do sistema fotovoltaico.",
    h1: "Instalação de Energia Solar em Linhares",
    serviceName: "Instalação de energia solar",
    intro:
      "A instalação é a etapa que define o desempenho do sistema por décadas. Fixação correta, cabeamento bem executado, proteções adequadas e configuração precisa do inversor são o que separam um sistema que gera o previsto de um que decepciona.",
    intro2:
      `Somos uma empresa de instalação de energia solar em Linhares com equipe própria, ${"3+ anos de experiência"} e mais de 170 projetos realizados. Fazemos a instalação de placas solares e do sistema fotovoltaico completo, do projeto à homologação. ${suporte}`,
    benefitsTitle: "Por que instalar com a Schultz",
    benefits: [
      {
        title: "Equipe própria",
        description:
          "Nossos instaladores executam a obra. Nada de subcontratação e responsabilidade dividida.",
      },
      {
        title: "Garantia de instalação",
        description:
          "Além da garantia dos equipamentos, respondemos pelo serviço executado.",
      },
      {
        title: "Homologação incluída",
        description:
          "Conduzimos o processo junto à concessionária até o sistema ser liberado para operar.",
      },
      {
        title: "Obra organizada",
        description:
          "Cuidado com o imóvel durante a instalação e local entregue limpo no final.",
      },
      {
        title: "Mais de 170 projetos",
        description:
          "Experiência acumulada em sistemas residenciais, comerciais e rurais na região.",
      },
      {
        title: "Monitoramento na entrega",
        description:
          "O sistema é entregue com o acompanhamento da geração já configurado.",
      },
    ],
    howTitle: "Como fazemos a instalação",
    how: [
      {
        title: "Avaliação e projeto",
        description:
          "Análise do consumo, vistoria do local, definição da potência e do layout de instalação dos módulos.",
      },
      {
        title: "Execução",
        description:
          "Montagem das estruturas, fixação dos módulos, instalação do inversor, cabeamento, aterramento e proteções elétricas.",
      },
      {
        title: "Testes, homologação e ativação",
        description:
          "Verificação de funcionamento, configuração do inversor, processo junto à concessionária e liberação do sistema.",
      },
    ],
    processTitle: "Etapas da contratação",
    process: [
      "Contato inicial e envio da conta de luz.",
      "Vistoria técnica e dimensionamento do sistema.",
      "Proposta com escopo, prazos e equipamentos.",
      "Aprovação e agendamento da instalação.",
      "Execução da instalação pela nossa equipe.",
      "Homologação, ativação e entrega com monitoramento.",
    ],
    faq: [
      {
        q: "Quanto tempo leva a instalação de um sistema solar?",
        a: "Sistemas residenciais costumam ser instalados em poucos dias. O prazo total inclui projeto e homologação, que dependem também da concessionária. Informamos o prazo estimado na proposta.",
      },
      {
        q: "Qualquer telhado serve para instalar placas solares?",
        a: "A maioria dos telhados é compatível. Avaliamos estrutura, inclinação, orientação e sombreamento antes de definir o layout de instalação.",
      },
      {
        q: "A instalação suja ou danifica o telhado?",
        a: "Trabalhamos com estruturas de fixação apropriadas para cada tipo de telha e entregamos o local limpo e organizado.",
      },
      {
        q: "Vocês instalam sistemas fora de Linhares?",
        a: "Sim, atendemos toda a Região Norte do Espírito Santo.",
      },
    ],
    ctaTitle: "Solicite um orçamento de instalação",
    ctaText:
      "Envie sua conta de luz pelo WhatsApp e receba uma proposta com o sistema dimensionado para o seu caso.",
    relatedLinks: [
      { label: "Energia solar residencial", to: "/energia-solar-residencial/" },
      { label: "Energia solar comercial", to: "/energia-solar-comercial/" },
      { label: "Energia solar rural", to: "/energia-solar-rural/" },
      { label: "Energia solar industrial", to: "/energia-solar-industrial/" },
      { label: "Projetos realizados", to: "/projetos/" },
    ],
  },
  {
    slug: "limpeza-de-paineis-solares",
    path: "/limpeza-de-paineis-solares/",
    navLabel: "Limpeza",
    breadcrumb: "Limpeza de Painéis Solares",
    metaTitle: "Limpeza de Placa Solar em Linhares | Schultz Energia Solar",
    metaDescription:
      "Limpeza de painéis solares em Linhares-ES: serviço técnico para recuperar a geração perdida por poeira, fuligem e sujeira acumulada nas placas fotovoltaicas.",
    h1: "Limpeza de Painéis Solares em Linhares",
    serviceName: "Limpeza de painéis solares",
    intro:
      "Poeira, fuligem, folhas e resíduos de chuva reduzem a quantidade de luz que chega às células fotovoltaicas. O resultado é uma queda de geração silenciosa: o sistema continua funcionando, mas produz menos do que deveria.",
    intro2:
      "A limpeza de placas solares feita com técnica e equipamento adequado recupera essa geração sem arranhar o vidro nem comprometer a vedação dos módulos. Atendemos sistemas residenciais, comerciais e rurais em Linhares e região.",
    benefitsTitle: "Por que fazer a limpeza periódica",
    benefits: [
      {
        title: "Recuperação da geração",
        description:
          "Módulos limpos voltam a aproveitar melhor a luz solar disponível.",
      },
      {
        title: "Prevenção de pontos quentes",
        description:
          "Sujeira concentrada pode causar aquecimento localizado e desgaste do módulo.",
      },
      {
        title: "Técnica correta",
        description:
          "Uso de materiais e produtos apropriados, sem risco de riscar o vidro.",
      },
      {
        title: "Inspeção durante o serviço",
        description:
          "Aproveitamos a visita para verificar fixações, cabos e o estado geral do sistema.",
      },
      {
        title: "Segurança no trabalho em altura",
        description:
          "Equipe preparada para executar o serviço em telhados com segurança.",
      },
      {
        title: "Atendimento também no campo",
        description:
          "Propriedades rurais acumulam mais poeira e se beneficiam de uma rotina de limpeza.",
      },
    ],
    howTitle: "Como é feita a limpeza",
    how: [
      {
        title: "Avaliação do sistema",
        description:
          "Verificamos o nível de sujeira, o tipo de telhado e as condições de acesso.",
      },
      {
        title: "Limpeza dos módulos",
        description:
          "Limpeza dos painéis fotovoltaicos com materiais adequados, sem produtos abrasivos e sem jatos que comprometam a vedação.",
      },
      {
        title: "Verificação da geração",
        description:
          "Conferimos o comportamento do sistema após a limpeza e apontamos qualquer irregularidade encontrada.",
      },
    ],
    processTitle: "Como solicitar",
    process: [
      "Entre em contato informando o local e o tipo de sistema.",
      "Verificamos as condições de acesso e a potência instalada.",
      "Enviamos o orçamento do serviço.",
      "Agendamos a data da limpeza.",
      "Executamos a limpeza e a inspeção visual.",
      "Informamos o que foi observado e recomendamos a próxima limpeza.",
    ],
    faq: [
      {
        q: "Com que frequência devo limpar os painéis solares?",
        a: "Depende do ambiente. Locais com muita poeira, poeira de estrada ou proximidade de árvores exigem limpeza mais frequente. Indicamos a periodicidade após avaliar o seu sistema.",
      },
      {
        q: "A chuva não limpa as placas?",
        a: "A chuva ajuda, mas não remove poeira aderida, fuligem e resíduos orgânicos. Em muitos casos, ela até concentra sujeira nas bordas dos módulos.",
      },
      {
        q: "Posso limpar as placas eu mesmo?",
        a: "Não recomendamos. Além do risco de queda, o uso de produtos ou materiais errados pode danificar o vidro e a vedação, afetando a garantia.",
      },
      {
        q: "A limpeza aumenta a geração?",
        a: "Ela recupera a geração perdida pela sujeira. O ganho depende de quanto o sistema estava sujo.",
      },
    ],
    ctaTitle: "Agende a limpeza do seu sistema",
    ctaText: "Fale com a nossa equipe e agende a limpeza dos seus painéis solares.",
    relatedLinks: [
      { label: "Manutenção de energia solar", to: "/manutencao-de-energia-solar/" },
      { label: "Diagnóstico de falhas", to: "/diagnostico-de-falhas-em-sistema-solar/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
      { label: "Energia solar rural", to: "/energia-solar-rural/" },
    ],
  },
  {
    slug: "manutencao-de-energia-solar",
    path: "/manutencao-de-energia-solar/",
    navLabel: "Manutenção",
    breadcrumb: "Manutenção de Energia Solar",
    metaTitle: "Manutenção de Energia Solar em Linhares | Schultz Energia Solar",
    metaDescription:
      "Manutenção de sistema de energia solar em Linhares-ES: preventiva e corretiva em placas, inversores e proteções para manter a geração em dia.",
    h1: "Manutenção de Energia Solar em Linhares",
    serviceName: "Manutenção de sistema de energia solar",
    intro:
      "Um sistema fotovoltaico é durável, mas não é imune ao tempo: conexões se afrouxam, proteções atuam, inversores acusam falhas e a sujeira acumula. A manutenção preventiva evita que pequenos problemas virem perda de geração e prejuízo na conta de luz.",
    intro2:
      "A Schultz Energia Solar faz manutenção de sistema fotovoltaico em Linhares e região, tanto em sistemas que instalamos quanto em sistemas instalados por outras empresas.",
    benefitsTitle: "O que a manutenção garante",
    benefits: [
      {
        title: "Geração dentro do esperado",
        description:
          "Identificamos e corrigimos o que está reduzindo a produção do sistema.",
      },
      {
        title: "Segurança elétrica",
        description:
          "Verificação de conexões, aterramento, proteções e estado dos cabos.",
      },
      {
        title: "Vida útil preservada",
        description:
          "Cuidado preventivo reduz o desgaste dos módulos e do inversor.",
      },
      {
        title: "Atendimento a sistemas de terceiros",
        description:
          "Assumimos a manutenção de sistemas instalados por outras empresas.",
      },
      {
        title: "Preventiva e corretiva",
        description:
          "Fazemos tanto a revisão programada quanto o reparo de falhas já existentes.",
      },
      {
        title: "Relato claro",
        description:
          "Você recebe a informação do que foi verificado, corrigido e recomendado.",
      },
    ],
    howTitle: "O que é verificado na manutenção",
    how: [
      {
        title: "Módulos e estrutura",
        description:
          "Estado do vidro, sujeira, sombreamento, fixações e estruturas de montagem.",
      },
      {
        title: "Inversor e quadro elétrico",
        description:
          "Leitura de alarmes, verificação de conexões, proteções, disjuntores e dispositivos de surto.",
      },
      {
        title: "Desempenho da geração",
        description:
          "Comparação entre a geração atual e a esperada para identificar perdas.",
      },
    ],
    processTitle: "Como solicitar a manutenção",
    process: [
      "Entre em contato descrevendo o sistema e o que está acontecendo.",
      "Fazemos uma triagem inicial das informações e da geração.",
      "Agendamos a visita técnica.",
      "Executamos a revisão preventiva ou o reparo necessário.",
      "Apresentamos o que foi feito e o que ainda precisa de atenção.",
      "Definimos a periodicidade da próxima revisão.",
    ],
    faq: [
      {
        q: "De quanto em quanto tempo fazer manutenção?",
        a: "Uma revisão preventiva periódica costuma ser suficiente, com limpezas intermediárias conforme o ambiente. Definimos o intervalo ideal após avaliar o sistema.",
      },
      {
        q: "Vocês atendem sistemas instalados por outras empresas?",
        a: "Sim. Fazemos manutenção e assumimos o acompanhamento de sistemas instalados por terceiros.",
      },
      {
        q: "Minha conta de luz subiu. Pode ser falha no sistema?",
        a: "Pode. Queda de geração por sujeira, sombreamento, falha de inversor ou string desconectada é uma causa comum. O diagnóstico identifica a origem.",
      },
      {
        q: "A manutenção inclui a limpeza dos painéis?",
        a: "A limpeza pode ser feita junto com a manutenção. Informamos isso no orçamento do serviço.",
      },
    ],
    ctaTitle: "Seu sistema precisa de revisão?",
    ctaText: "Fale com a nossa equipe e agende a manutenção do seu sistema solar.",
    relatedLinks: [
      { label: "Limpeza de painéis solares", to: "/limpeza-de-paineis-solares/" },
      { label: "Diagnóstico de falhas", to: "/diagnostico-de-falhas-em-sistema-solar/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
    ],
  },
  {
    slug: "monitoramento-de-energia-solar",
    path: "/monitoramento-de-energia-solar/",
    navLabel: "Monitoramento",
    breadcrumb: "Monitoramento de Energia Solar",
    metaTitle: "Monitoramento de Energia Solar em Linhares | Schultz Energia Solar",
    metaDescription:
      "Monitoramento de energia solar em Linhares-ES: acompanhe a geração do seu sistema fotovoltaico e identifique quedas de produção rapidamente.",
    h1: "Monitoramento de Sistemas de Energia Solar",
    serviceName: "Monitoramento de energia solar",
    intro:
      "Sem acompanhamento, uma queda de geração só aparece semanas depois — na conta de luz. Com o monitoramento configurado, o desvio é percebido logo e a correção acontece antes de virar prejuízo.",
    intro2:
      "Configuramos e acompanhamos o monitoramento da geração dos sistemas fotovoltaicos que atendemos em Linhares e na Região Norte do Espírito Santo, permitindo que você veja a produção do seu sistema pelo celular.",
    benefitsTitle: "Por que monitorar a geração",
    benefits: [
      {
        title: "Visibilidade da produção",
        description:
          "Acompanhe quanto o sistema gerou no dia, no mês e no acumulado.",
      },
      {
        title: "Detecção rápida de problemas",
        description:
          "Quedas de geração e falhas de inversor são percebidas cedo.",
      },
      {
        title: "Comparação com o esperado",
        description:
          "Confronto entre a geração real e a estimativa do projeto.",
      },
      {
        title: "Decisão de manutenção no momento certo",
        description:
          "Os dados indicam quando é hora de limpar os módulos ou revisar o sistema.",
      },
      {
        title: "Acesso pelo celular",
        description:
          "Consulta simples, sem depender de visita técnica para saber como o sistema está.",
      },
      {
        title: "Suporte da nossa equipe",
        description:
          "Se algo fugir do padrão, você tem com quem falar.",
      },
    ],
    howTitle: "Como funciona o monitoramento",
    how: [
      {
        title: "Conexão do inversor",
        description:
          "O inversor é conectado à internet do local e passa a enviar os dados de geração.",
      },
      {
        title: "Configuração do acompanhamento",
        description:
          "Deixamos o sistema configurado e mostramos como consultar a geração.",
      },
      {
        title: "Análise dos desvios",
        description:
          "Quando a produção sai do padrão esperado, investigamos a causa e indicamos a correção.",
      },
    ],
    processTitle: "Como contratar",
    process: [
      "Entre em contato informando o inversor e o local do sistema.",
      "Verificamos a compatibilidade e as condições de conexão à internet.",
      "Configuramos o monitoramento.",
      "Orientamos você sobre como acompanhar a geração.",
      "Acompanhamos os desvios de produção.",
      "Recomendamos limpeza, manutenção ou diagnóstico quando necessário.",
    ],
    faq: [
      {
        q: "Todo inversor permite monitoramento?",
        a: "A grande maioria dos inversores atuais permite. Verificamos o modelo do seu equipamento antes de configurar.",
      },
      {
        q: "Preciso de internet no local?",
        a: "Sim, o inversor precisa de conexão para enviar os dados de geração.",
      },
      {
        q: "Vocês configuram monitoramento em sistema instalado por outra empresa?",
        a: "Sim, desde que o inversor tenha essa possibilidade.",
      },
      {
        q: "O monitoramento avisa quando a geração cai?",
        a: "Os dados mostram a queda e, ao identificarmos o desvio, orientamos sobre o que deve ser verificado.",
      },
    ],
    ctaTitle: "Acompanhe a geração do seu sistema",
    ctaText: "Fale com a nossa equipe para configurar o monitoramento.",
    relatedLinks: [
      { label: "Manutenção de energia solar", to: "/manutencao-de-energia-solar/" },
      { label: "Diagnóstico de falhas", to: "/diagnostico-de-falhas-em-sistema-solar/" },
      { label: "Energia solar comercial", to: "/energia-solar-comercial/" },
      { label: "Energia solar industrial", to: "/energia-solar-industrial/" },
    ],
  },
  {
    slug: "homologacao-de-energia-solar",
    path: "/homologacao-de-energia-solar/",
    navLabel: "Homologação",
    breadcrumb: "Homologação de Energia Solar",
    metaTitle: "Homologação de Energia Solar em Linhares | Schultz Energia Solar",
    metaDescription:
      "Homologação de energia solar em Linhares-ES: cuidamos do projeto, da documentação e do processo junto à concessionária até a liberação do sistema.",
    h1: "Homologação de Energia Solar em Linhares",
    serviceName: "Homologação de energia solar",
    intro:
      "Instalar o sistema não é o suficiente: para injetar energia na rede e gerar créditos, o sistema precisa ser aprovado pela concessionária. Esse processo envolve projeto, documentação, prazos e, muitas vezes, exigências de ajuste.",
    intro2:
      "A Schultz Energia Solar conduz a homologação do início ao fim, para sistemas que instalamos e também para quem ficou com o processo parado. Assim você não precisa lidar com a burocracia.",
    benefitsTitle: "O que resolvemos para você",
    benefits: [
      {
        title: "Processo conduzido do início ao fim",
        description:
          "Da solicitação de acesso até a liberação para operar.",
      },
      {
        title: "Documentação organizada",
        description:
          "Reunimos e enviamos os documentos exigidos pela concessionária.",
      },
      {
        title: "Resposta às exigências",
        description:
          "Quando há pendências, providenciamos os ajustes necessários.",
      },
      {
        title: "Acompanhamento de prazos",
        description:
          "Monitoramos o andamento do processo e mantemos você informado.",
      },
      {
        title: "Processos parados",
        description:
          "Assumimos homologações que travaram com outra empresa.",
      },
      {
        title: "Sistema apto a gerar créditos",
        description:
          "Com o sistema homologado, o excedente passa a ser compensado nas faturas.",
      },
    ],
    howTitle: "Como funciona a homologação",
    how: [
      {
        title: "Projeto e solicitação de acesso",
        description:
          "Elaboração do projeto elétrico e envio do pedido de acesso à concessionária.",
      },
      {
        title: "Análise e adequações",
        description:
          "A concessionária avalia o pedido e, se houver exigências, providenciamos as correções.",
      },
      {
        title: "Vistoria e liberação",
        description:
          "Após a aprovação e a troca do medidor, o sistema é liberado para operar conectado à rede.",
      },
    ],
    processTitle: "Como solicitar",
    process: [
      "Entre em contato informando a situação do seu sistema.",
      "Analisamos o que já existe de projeto e documentação.",
      "Apresentamos o escopo e o orçamento do serviço.",
      "Elaboramos o projeto e enviamos a solicitação.",
      "Acompanhamos a análise e respondemos às exigências.",
      "Sistema vistoriado, liberado e em operação.",
    ],
    faq: [
      {
        q: "Quanto tempo leva a homologação?",
        a: "O prazo depende da concessionária e da complexidade do sistema. Acompanhamos o andamento e mantemos você informado em cada etapa.",
      },
      {
        q: "Posso ligar o sistema antes da homologação?",
        a: "Não. O sistema só deve operar conectado à rede após a liberação da concessionária.",
      },
      {
        q: "Meu processo travou com outra empresa. Vocês assumem?",
        a: "Sim. Avaliamos o que já foi enviado e retomamos o processo.",
      },
      {
        q: "A homologação está inclusa quando vocês instalam?",
        a: "Sim, ela faz parte do nosso escopo de instalação.",
      },
    ],
    ctaTitle: "Precisa homologar seu sistema?",
    ctaText: "Fale com a nossa equipe e resolva a documentação do seu sistema solar.",
    relatedLinks: [
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
      { label: "Energia solar comercial", to: "/energia-solar-comercial/" },
      { label: "Energia solar industrial", to: "/energia-solar-industrial/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
    ],
  },
  {
    slug: "diagnostico-de-falhas-em-sistema-solar",
    path: "/diagnostico-de-falhas-em-sistema-solar/",
    navLabel: "Diagnóstico",
    breadcrumb: "Diagnóstico de Falhas",
    metaTitle: "Diagnóstico de Falhas em Sistema Solar | Schultz Energia Solar",
    metaDescription:
      "Sistema solar não gera ou gera pouco? Diagnóstico de falhas em sistemas fotovoltaicos em Linhares-ES: baixa geração, inversor com falha e perdas ocultas.",
    h1: "Diagnóstico de Falhas em Sistemas de Energia Solar",
    serviceName: "Diagnóstico de falhas em sistema solar",
    intro:
      "Sistema solar que não gera, placa solar com baixa geração, inversor com falha, conta de luz que voltou a subir: sintomas diferentes que podem ter a mesma origem. O diagnóstico técnico identifica a causa real antes de qualquer troca de peça.",
    intro2:
      "Fazemos diagnóstico de problema em sistema fotovoltaico em Linhares e região, com análise da geração, inspeção do inversor, do quadro elétrico e dos módulos — inclusive em sistemas instalados por outras empresas.",
    benefitsTitle: "Problemas que investigamos",
    benefits: [
      {
        title: "Sistema não gera nada",
        description:
          "Inversor desligado, proteção atuada, falha de conexão ou problema na rede.",
      },
      {
        title: "Baixa geração",
        description:
          "Sujeira, sombreamento, módulo com defeito ou string desconectada.",
      },
      {
        title: "Inversor com falha",
        description:
          "Leitura dos alarmes e códigos de erro para identificar a origem do problema.",
      },
      {
        title: "Geração abaixo do projeto",
        description:
          "Comparação entre a produção real e a estimativa do dimensionamento.",
      },
      {
        title: "Conta de luz que voltou a subir",
        description:
          "Investigação de perdas de geração e de mudanças no perfil de consumo.",
      },
      {
        title: "Instalação mal executada",
        description:
          "Verificação de fixações, cabeamento, proteções e aterramento.",
      },
    ],
    howTitle: "Como é feito o diagnóstico",
    how: [
      {
        title: "Análise dos dados",
        description:
          "Avaliamos histórico de geração, faturas e alarmes registrados pelo inversor.",
      },
      {
        title: "Inspeção em campo",
        description:
          "Verificação dos módulos, estruturas, cabeamento, quadro elétrico e inversor.",
      },
      {
        title: "Laudo e plano de correção",
        description:
          "Apresentamos a causa identificada e o que precisa ser feito para o sistema voltar a gerar o esperado.",
      },
    ],
    processTitle: "Como solicitar",
    process: [
      "Entre em contato descrevendo o sintoma do sistema.",
      "Envie, se possível, dados de geração e fotos do inversor.",
      "Fazemos a triagem inicial e agendamos a visita.",
      "Executamos a inspeção técnica no local.",
      "Você recebe o diagnóstico com a causa identificada.",
      "Executamos a correção necessária ou a manutenção fotovoltaica indicada.",
    ],
    faq: [
      {
        q: "Meu sistema solar não está gerando. O que pode ser?",
        a: "As causas mais comuns são proteção elétrica atuada, inversor em falha, conexão interrompida ou problema na rede da concessionária. O diagnóstico define qual delas é.",
      },
      {
        q: "Como sei se a geração está baixa?",
        a: "Comparando a geração atual com o histórico do próprio sistema e com a estimativa do projeto. O monitoramento facilita muito essa análise.",
      },
      {
        q: "Vocês atendem sistemas instalados por outra empresa?",
        a: "Sim. Boa parte dos diagnósticos que fazemos é em sistemas instalados por terceiros.",
      },
      {
        q: "O inversor com falha sempre precisa ser trocado?",
        a: "Não. Muitas falhas são de configuração, conexão ou proteção. A troca só é indicada quando o diagnóstico confirma defeito no equipamento.",
      },
    ],
    ctaTitle: "Seu sistema está gerando menos do que deveria?",
    ctaText:
      "Fale com a nossa equipe e agende o diagnóstico do seu sistema fotovoltaico.",
    relatedLinks: [
      { label: "Manutenção de energia solar", to: "/manutencao-de-energia-solar/" },
      { label: "Limpeza de painéis solares", to: "/limpeza-de-paineis-solares/" },
      { label: "Monitoramento de energia solar", to: "/monitoramento-de-energia-solar/" },
      { label: "Instalação de energia solar", to: "/instalacao-de-energia-solar/" },
    ],
  },
];

export const allContentPages = [...solutions, ...services];

export const getContentPage = (slug: string) =>
  allContentPages.find((p) => p.slug === slug);
