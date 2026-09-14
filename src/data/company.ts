export const COMPANY = {
  name: "Schultz Energia Solar",
  legalName: "Schultz Energia Solar",
  cnpj: "23.310.829/0001-96",
  site: "https://schultzenergiasolar.com.br",
  email: "contato@schultzenergiasolar.com.br",
  whatsappDigits: "5527998200026",
  phoneDisplay: "(27) 99820-0026",
  phoneE164: "+5527998200026",
  address: {
    street: "Avenida Governador Dias Lopes, 346, Loja 02",
    district: "Novo Horizonte",
    city: "Linhares",
    state: "ES",
    zip: "29902-060",
  },
  addressFull:
    "Avenida Governador Dias Lopes, 346, Loja 02 – Novo Horizonte, Linhares-ES, CEP 29902-060",
  areaServed: "Linhares e Região Norte do Espírito Santo",
  stats: {
    economy: "até 90% de economia na conta de luz",
    projects: "mais de 170 projetos realizados",
    experience: "3+ anos de experiência",
    team: "Equipe própria",
  },
  social: {
    instagram: "https://instagram.com/schultzenergiasolar",
    facebook: "https://facebook.com/schultzenergiasolar",
    linkedin: "https://linkedin.com/company/schultzenergiasolar",
    youtube: "https://youtube.com/@schultzenergiasolar",
  },
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappLink(
  "Olá! Gostaria de mais informações sobre energia solar em Linhares."
);

export const MAPS_QUERY = encodeURIComponent(
  "Avenida Governador Dias Lopes, 346, Loja 02, Novo Horizonte, Linhares - ES, 29902-060"
);

export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
