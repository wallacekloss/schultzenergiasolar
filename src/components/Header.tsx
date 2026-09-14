import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoSchultz from "@/assets/logo-schultz.png";
import { Link, NavLink } from "react-router-dom";
import { COMPANY } from "@/data/company";
import { useManagedContent } from "@/hooks/use-managed-content";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/projetos/", label: "Projetos" },
  { to: "/sobre/", label: "Sobre" },
  { to: "/simulador/", label: "Simulador" },
  { to: "/contato/", label: "Contato" },
];

function Dropdown({ label, items }: { label: string; items: Array<{ path: string; navLabel: string }> }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm text-foreground/80 group-hover:text-primary font-bold py-7" aria-haspopup="true">
        {label}<ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-background border border-border shadow-medium rounded-lg p-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all">
        {items.map((item) => (
          <Link key={item.path} to={item.path} className="block px-4 py-3 rounded-md text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-primary">
            {item.navLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { solutions, services } = useManagedContent();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsVisible(scrollY <= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return <header className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg",
    isScrolled ? "shadow-soft" : "",
    !isVisible && "lg:translate-y-0 -translate-y-full"
  )}>
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logoSchultz} alt="Schultz Energia Solar" className="h-16 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação principal">
            <NavLink to="/" className="text-sm text-foreground/80 hover:text-primary font-bold">Início</NavLink>
            <Dropdown label="Soluções" items={solutions} />
            <Dropdown label="Serviços" items={services} />
            {navLinks.slice(1).map(link => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => cn("text-sm hover:text-primary font-bold", isActive ? "text-primary" : "text-foreground/80")}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a href={`tel:${COMPANY.phoneE164}`} className="flex items-center gap-2 text-sm text-foreground/80 font-semibold">
              <Phone className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
            <Button size="default" asChild>
              <Link to="/simulador/">Simular economia</Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <div className={cn("xl:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-y-auto shadow-lg", isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 visible" : "max-h-0 opacity-0 invisible")}>
        <nav className="container-max mx-auto px-4 py-5" aria-label="Navegação móvel">
          <div className="grid sm:grid-cols-2 gap-x-8">
            <div>
              <p className="text-xs uppercase font-bold text-primary mt-2 mb-2">Soluções</p>
              {solutions.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">{item.navLabel}</Link>)}
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-primary mt-2 mb-2">Serviços</p>
              {services.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">{item.navLabel}</Link>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-border mt-4 pt-4">
            {navLinks.map(link => <Link key={link.to} to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-semibold">{link.label}</Link>)}
          </div>
          <Button className="mt-4 w-full" asChild>
            <Link to="/simulador/" onClick={() => setIsMobileMenuOpen(false)}>Simular economia</Link>
          </Button>
        </nav>
      </div>
    </header>;
}