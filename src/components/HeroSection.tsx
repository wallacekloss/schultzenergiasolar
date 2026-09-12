import { ArrowRight, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa com painéis solares"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/30" />
      </div>

      {/* Decorative Solar Glow */}
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-float" />

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-24 pb-12">
        <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-between gap-10 lg:gap-14">
          {/* Top: Social Proof & Trust */}
          <div className="flex flex-col gap-4 items-start animate-fade-up">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-[10px] font-bold text-white border-2 border-secondary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">
                <span className="text-primary">+150 clientes</span> satisfeitos em todo o Espírito Santo
              </p>
            </div>
          </div>

          {/* Center: Messaging */}
          <div className="max-w-3xl space-y-6 sm:space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              Reduza sua conta de luz em até{" "}
              <span className="text-primary">95%</span>{" "}
              com energia solar
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Tecnologia de ponta, instalação profissional e suporte completo para
              residências e empresas em Linhares/ES.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#simulador">
                  Simular Minha Economia
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>

          {/* Bottom: Key Benefits Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                icon: Zap,
                title: "Economia Imediata",
                description: "Redução significativa já na primeira conta de luz.",
              },
              {
                icon: ShieldCheck,
                title: "Garantia 25 Anos",
                description: "Segurança e performance máxima garantida.",
              },
              {
                icon: TrendingUp,
                title: "Payback Rápido",
                description: "Retorno do investimento em até 2 anos.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10"
              >
                <div className="text-primary mb-2">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
