import { COMPANY } from "@/data/company";

const organizationId = `${COMPANY.site}/#organization`;
const websiteId = `${COMPANY.site}/#website`;

const absoluteUrl = (path: string) => `${COMPANY.site}${path === "/" ? "/" : path}`;

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  const pagePath = items[items.length - 1]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(pagePath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(items.length === 1 || index < items.length - 1 ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": organizationId },
    areaServed: { "@type": "City", name: "Linhares" },
  };
}

export function webPageSchema(name: string, path: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

export function homeSchema(title: string) {
  const homeUrl = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": organizationId,
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        taxID: COMPANY.cnpj,
        url: homeUrl,
        telephone: COMPANY.phoneE164,
        email: COMPANY.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address.street,
          addressLocality: COMPANY.address.city,
          addressRegion: COMPANY.address.state,
          postalCode: COMPANY.address.zip,
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "City", name: "Linhares" },
          { "@type": "AdministrativeArea", name: "Região Norte do Espírito Santo" },
        ],
        sameAs: [COMPANY.social.instagram],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: COMPANY.name,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: title,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${homeUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: homeUrl,
          },
        ],
      },
    ],
  };
}