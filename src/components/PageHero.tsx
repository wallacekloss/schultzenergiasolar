import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT } from "@/data/company";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  primaryLabel?: string;
  primaryTo?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryLabel = "Solicitar orçamento",
  primaryTo,
}: PageHeroProps) {
  return (
    <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24 text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/70" />
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Breadcrumbs items={breadcrumbs} inverse />
        <div className="mt-8 max-w-4xl">
          <p className="text-primary font-bold uppercase text-sm mb-4">{eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/75 leading-relaxed max-w-3xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {primaryTo ? (
              <Button size="lg" asChild>
                <Link to={primaryTo}>{primaryLabel}<ArrowRight /></Link>
              </Button>
            ) : (
              <Button size="lg" asChild>
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                  {primaryLabel}<MessageCircle />
                </a>
              </Button>
            )}
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projetos/">Conheça nossos projetos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
