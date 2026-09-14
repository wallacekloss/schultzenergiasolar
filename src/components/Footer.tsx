import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoSchultz from "@/assets/logo-schultz.png";
import { COMPANY, WHATSAPP_DEFAULT } from "@/data/company";
import { solutions, services } from "@/data/pages";

const socialLinks = [
  { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
  { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: COMPANY.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-5">
              <img src={logoSchultz} alt="Schultz Energia Solar" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-secondary-foreground/65 max-w-md mb-6">
              Energia solar fotovoltaica em Linhares e Região Norte do Espírito Santo, com equipe própria, monitoramento e pós-venda.
            </p>
            <address className="not-italic text-sm text-secondary-foreground/65 space-y-3">
              <p className="flex gap-2"><MapPin className="h-5 w-5 text-primary shrink-0" />{COMPANY.addressFull}</p>
              <p><a className="flex gap-2 hover:text-primary" href={`tel:${COMPANY.phoneE164}`}><Phone className="h-5 w-5 text-primary" />{COMPANY.phoneDisplay}</a></p>
              <p><a className="flex gap-2 hover:text-primary" href={`mailto:${COMPANY.email}`}><Mail className="h-5 w-5 text-primary" />{COMPANY.email}</a></p>
            </address>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold mb-4">Soluções</h2>
            <ul className="space-y-3 text-sm">
              {solutions.map(item => <li key={item.path}><Link className="text-secondary-foreground/65 hover:text-primary" to={item.path}>{item.navLabel}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold mb-4">Serviços</h2>
            <ul className="space-y-3 text-sm">
              {services.map(item => <li key={item.path}><Link className="text-secondary-foreground/65 hover:text-primary" to={item.path}>{item.navLabel}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold mb-4">Navegação</h2>
            <ul className="space-y-3 text-sm">
              {[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos/" }, { label: "Sobre", to: "/sobre/" }, { label: "Simulador", to: "/simulador/" }, { label: "Contato", to: "/contato/" }, { label: "Blog", to: "/blog/" }].map(item => <li key={item.to}><Link className="text-secondary-foreground/65 hover:text-primary" to={item.to}>{item.label}</Link></li>)}
              <li><a className="text-secondary-foreground/65 hover:text-primary" href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Schultz Energia Solar. Todos os direitos reservados.</p>
          <p>CNPJ {COMPANY.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}