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
