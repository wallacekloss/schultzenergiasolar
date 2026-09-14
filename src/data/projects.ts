import comercialCelco from "@/assets/projects/comercial-celco.jpg";
import comercialDelci from "@/assets/projects/comercial-delci.jpg";
import comercialMoreira from "@/assets/projects/comercial-moreira.jpg";
import agroSilva from "@/assets/projects/agro-silva.jpg";
import agroPalma from "@/assets/projects/agro-palma.jpg";
import agroNilson from "@/assets/projects/agro-nilson.jpg";
import residenciaMiranda from "@/assets/projects/residencia-miranda.jpg";
import residenciaBatista from "@/assets/projects/residencia-batista.jpg";
import residenciaLopes from "@/assets/projects/residencia-lopes.jpg";

export type ProjectSegment = "residencial" | "comercial" | "rural";

export interface Project {
  slug: string;
  title: string;
  segment: ProjectSegment;
  segmentLabel: string;
  district: string;
  city: string;
  location: string;
  power: string;
  image: string;
  alt: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  solution: string;
}

const segmentLabel: Record<ProjectSegment, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  rural: "Rural / Agronegócio",
};

interface Raw {
  slug: string;
  title: string;
  segment: ProjectSegment;
  district: string;
  city: string;
  power: string;
  image: string;
  h1: string;
  descriptionKind: string;
}

const raw: Raw[] = [
  {
    slug: "energia-solar-residencial-conceicao-linhares",
    title: "Residência Batista",
    segment: "residencial",
    district: "Conceição",
    city: "Linhares - ES",
    power: "10,24 kWp",
    image: residenciaBatista,
    h1: "Projeto de Energia Solar Residencial no Conceição, Linhares-ES",
    descriptionKind: "uma residência",
  },
  {
    slug: "energia-solar-comercial-interlagos-linhares",
    title: "Comercial Celço",
    segment: "comercial",
    district: "Interlagos",
    city: "Linhares - ES",
    power: "7,02 kWp",
    image: comercialCelco,
    h1: "Projeto de Energia Solar Comercial no Interlagos, Linhares-ES",
    descriptionKind: "um estabelecimento comercial",
  },
  {
    slug: "energia-solar-rural-juncado-sooretama",
    title: "Agronegócio Palma",
    segment: "rural",
    district: "Juncado",
    city: "Sooretama - ES",
    power: "37,74 kWp",
    image: agroPalma,
    h1: "Projeto de Energia Solar Rural no Juncado, Sooretama-ES",
    descriptionKind: "uma propriedade rural",
  },
  {
    slug: "energia-solar-comercial-bebedouro-linhares",
    title: "Comercial Moreira",
    segment: "comercial",
    district: "Bebedouro",
    city: "Linhares - ES",
    power: "8,88 kWp",
    image: comercialMoreira,
    h1: "Projeto de Energia Solar Comercial no Bebedouro, Linhares-ES",
    descriptionKind: "um estabelecimento comercial",
  },
  {
    slug: "energia-solar-residencial-jardim-laguna-linhares",
    title: "Residência Miranda",
    segment: "residencial",
    district: "Jardim Laguna",
    city: "Linhares - ES",
    power: "6,10 kWp",
    image: residenciaMiranda,
    h1: "Projeto de Energia Solar Residencial no Jardim Laguna, Linhares-ES",
    descriptionKind: "uma residência",
  },
  {
    slug: "energia-solar-rural-paraju-vila-valerio",
    title: "Agronegócio Silva",
    segment: "rural",
    district: "Parajú",
    city: "Vila Valério - ES",
    power: "9,69 kWp",
    image: agroSilva,
    h1: "Projeto de Energia Solar Rural no Parajú, Vila Valério-ES",
    descriptionKind: "uma propriedade rural",
  },
  {
    slug: "energia-solar-rural-farias",
    title: "Agronegócio Nilson",
    segment: "rural",
    district: "Farias",
    city: "Linhares - ES",
    power: "37,53 kWp",
    image: agroNilson,
    h1: "Projeto de Energia Solar Rural no Farias, Linhares-ES",
    descriptionKind: "uma propriedade rural",
  },
  {
    slug: "energia-solar-comercial-interlagos-linhares-2",
    title: "Comercial Delci",
    segment: "comercial",
    district: "Interlagos",
    city: "Linhares - ES",
    power: "7,44 kWp",
    image: comercialDelci,
    h1: "Projeto de Energia Solar Comercial no Interlagos, Linhares-ES (Comercial Delci)",
    descriptionKind: "um estabelecimento comercial",
  },
  {
    slug: "energia-solar-residencial-sao-jose-linhares",
    title: "Residência Lopes",
    segment: "residencial",
    district: "São José",
    city: "Linhares - ES",
    power: "5,68 kWp",
    image: residenciaLopes,
    h1: "Projeto de Energia Solar Residencial no São José, Linhares-ES",
    descriptionKind: "uma residência",
  },
];

export const projects: Project[] = raw.map((p) => {
  const location = `${p.district}, ${p.city}`;
  return {
    ...p,
    segmentLabel: segmentLabel[p.segment],
    location,
    alt: `Sistema fotovoltaico de ${p.power} instalado em ${p.descriptionKind} no ${p.district}, ${p.city}`,
    metaTitle: `${p.title} – Energia Solar em ${p.district}, ${p.city.replace(" - ", "-")} | Schultz`,
    metaDescription: `Projeto de energia solar ${p.segment} de ${p.power} executado pela Schultz Energia Solar em ${location}. Veja fotos e a solução aplicada.`,
    description: `Sistema fotovoltaico de ${p.power} instalado pela Schultz Energia Solar em ${p.descriptionKind} no ${location}. O atendimento foi feito pela nossa equipe própria, do dimensionamento inicial até a entrega do sistema em operação.`,
    solution: `Dimensionamento do sistema conforme o consumo da unidade, definição do posicionamento dos módulos, instalação com equipe própria, homologação junto à concessionária e configuração do monitoramento da geração. Após a entrega, o cliente segue com acompanhamento e pós-venda da Schultz Energia Solar.`,
  };
});

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);

export const projectsBySegment = (segment: ProjectSegment) =>
  projects.filter((p) => p.segment === segment);
