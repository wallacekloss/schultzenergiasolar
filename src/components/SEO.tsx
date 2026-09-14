import { useEffect } from "react";
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
const organizationId = `${COMPANY.site}/#organization`;
const websiteId = `${COMPANY.site}/#website`;

const absoluteUrl = (path: string) => `${COMPANY.site}${path === "/" ? "/" : path}`;

export function SEO({
  title,
  description,
  path,
  type = "website",
  image = defaultImage,
  schema,
  noindex = false,
}: SEOProps) {
  const canonical = absoluteUrl(path);
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "pt_BR");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", COMPANY.name);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, follow" : "index, follow");

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;

    document.head.querySelectorAll('script[data-page-schema="true"]').forEach(element => element.remove());
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageSchema = "true";
      const structuredData = Array.isArray(schema)
        ? {
            "@context": "https://schema.org",
            "@graph": schema.map(({ "@context": _context, ...node }) => node),
          }
        : schema;
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [canonical, description, image, noindex, schema, title, type]);

  return null;
}

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
        sameAs: ["https://www.instagram.com/schultzenergiasolar/"],
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
