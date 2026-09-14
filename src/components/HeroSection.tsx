import { ArrowRight, Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const stats = [
  "Até 90% de economia na conta de luz",
  "Mais de 170 projetos realizados",
  "3+ anos de experiência",
  "Equipe própria",
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[760px] h-[100svh] max-h-[980px] flex items-center overflow-hidden">
      <img src={heroImage} alt="Casa com sistema de energia solar instalado pela Schultz em Linhares" fetchPriority="high" width="1920" height="1080" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/30" />
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-8 w-full">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground mb-5"><MapPin className="h-4 w-4 text-primary" />Linhares e Região Norte do Espírito Santo</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.05] mb-6 max-w-4xl">
            Energia Solar em Linhares para gerar <span className="text-primary">economia de verdade</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl leading-relaxed mb-8">Projetamos e instalamos sistemas fotovoltaicos para residências, empresas, propriedades rurais e indústrias em Linhares e Região Norte do Espírito Santo.</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button size="xl" asChild><Link to="/simulador/">Simule sua economia<ArrowRight /></Link></Button>
            <Button variant="heroOutline" size="xl" asChild><Link to="/projetos/">Conheça nossos projetos</Link></Button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {stats.map(stat => <div key={stat} className="flex items-start gap-2 p-3 sm:p-4 bg-secondary-foreground/10 backdrop-blur-lg border border-secondary-foreground/15 rounded-lg text-secondary-foreground text-xs sm:text-sm font-semibold"><Check className="h-5 w-5 text-primary shrink-0" />{stat}</div>)}
        </div>
      </div>
    </section>
  );
}
