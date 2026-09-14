import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[760px] h-[100svh] max-h-[980px] flex items-center overflow-hidden">
      <img src={heroImage} alt="Casa com sistema de energia solar instalado pela Schultz em Linhares" width="1920" height="1080" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/30" />
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-8 w-full">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground mb-5"><MapPin className="h-4 w-4 text-primary" />Linhares e Região Norte do Espírito Santo</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.05] mb-6 max-w-4xl">
            Energia Solar em Linhares: Soluções Fotovoltaicas para sua <span className="text-primary">Casa, Empresa ou Propriedade</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl leading-relaxed mb-8">Projetamos e instalamos sistemas fotovoltaicos para residências, empresas, propriedades rurais e indústrias em Linhares e Região Norte do Espírito Santo.</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button size="xl" asChild><Link to="/simulador/">Simule sua economia<ArrowRight /></Link></Button>
            <Button variant="heroOutline" size="xl" asChild><Link to="/projetos/">Conheça nossos projetos</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
