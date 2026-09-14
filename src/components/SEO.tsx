import { Helmet } from "react-helmet-async";
import { COMPANY } from "@/data/company";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const defaultImage = `${COMPANY.site}/logo-schultz.png`;

export function SEO({
  title,
  description,
  path,
  type = "website",
  image = defaultImage,
  schema,
  noindex = false,
}: SEOProps) {
  const canonical = `${COMPANY.site}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": `${COMPANY.site}/#organization`,
  name: COMPANY.name,
  url: `${COMPANY.site}/`,
  logo: `${COMPANY.site}/logo-schultz.png`,
  image: `${COMPANY.site}/logo-schultz.png`,
  telephone: COMPANY.phoneE164,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Governador Dias Lopes, 346, Loja 02",
    addressLocality: "Linhares",
    addressRegion: "ES",
    postalCode: "29902-060",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Linhares" },
    { "@type": "AdministrativeArea", name: "Região Norte do Espírito Santo" },
  ],
  sameAs: Object.values(COMPANY.social),
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.site}${item.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${COMPANY.site}${path}`,
    provider: { "@id": `${COMPANY.site}/#organization` },
    areaServed: "Linhares e Região Norte do Espírito Santo",
  };
}
