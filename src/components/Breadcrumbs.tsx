import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items, inverse = false }: { items: BreadcrumbItem[]; inverse?: boolean }) {
  return (
    <nav aria-label="Navegação estrutural" className={inverse ? "text-secondary-foreground/70" : "text-muted-foreground"}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Início</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            {item.to && index < items.length - 1 ? (
              <Link to={item.to} className="hover:text-primary">{item.label}</Link>
            ) : (
              <span aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
