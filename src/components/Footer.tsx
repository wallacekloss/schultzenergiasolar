import { Sun, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],
  servicos: [
    { label: "Sistemas Residenciais", href: "#servicos" },
    { label: "Sistemas Comerciais", href: "#servicos" },
    { label: "Manutenção", href: "#servicos" },
    { label: "Monitoramento", href: "#servicos" },
  ],
  contato: [
    { label: "Fale Conosco", href: "#contato" },
    { label: "WhatsApp", href: "https://wa.me/5500000000000" },
    { label: "Simulador", href: "#simulador" },
    { label: "Orçamento", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Pronto para economizar?
            </h2>
            <p className="text-white/70 mb-8">
              Solicite agora seu orçamento gratuito e descubra quanto você pode 
              economizar com energia solar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-cta hover:shadow-lg"
              >
                Simular Economia
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <Sun className="h-8 w-8 text-primary" />
              <div>
                <span className="font-display font-bold text-lg text-white">
                  SCHULTZ
                </span>
                <span className="block text-xs font-medium text-white/60 tracking-wider">
                  ENERGIA SOLAR
                </span>
              </div>
            </a>
            <p className="text-white/60 mb-6 max-w-sm">
              Especialistas em energia solar fotovoltaica. Transformando a luz 
              do sol em economia e sustentabilidade para sua casa ou empresa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {currentYear} Schultz Energia Solar. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
