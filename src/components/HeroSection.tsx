import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";
export function HeroSection() {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Casa com painéis solares" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      </div>

      {/* Animated Solar Rays */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-float" />

      <div className="container-max mx-auto sm:px-6 lg:px-8 relative z-10 pt-20 py-0 px-[3px]">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white/90">
              Líder em energia solar no Espírito Santo
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Reduza sua conta de luz em até{" "}
            <span className="text-primary">95%</span>{" "}
            com energia solar
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Invista com segurança e tenha retorno garantido. Projetos personalizados 
            para residências e empresas com instalação profissional e suporte completo.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            {["Economia imediata", "Payback em até 2 anos", "25 anos de garantia"].map(benefit => <div key={benefit} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#simulador">
                Simular Minha Economia
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contato">
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 text-white/70 animate-fade-up" style={{
          animationDelay: "0.5s"
        }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-xs font-bold text-white border-2 border-secondary">
                  {String.fromCharCode(64 + i)}
                </div>)}
            </div>
            <p className="text-sm">
              <span className="text-white font-semibold">+150 clientes</span> satisfeitos em todo o Espírito Santo
            </p>
          </div>
        </div>

      </div>
    </section>;
}