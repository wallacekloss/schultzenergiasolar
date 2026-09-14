import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SimulatorSection } from "@/components/SimulatorSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeFAQ } from "@/components/HomeFAQ";
import { SEO } from "@/components/SEO";
import { homeSchema } from "@/lib/seo-schema";

const homeTitle = "Energia Solar em Linhares | Schultz Energia Solar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO title={homeTitle} description="Energia solar em Linhares-ES para residências, empresas, propriedades rurais e indústrias. Projeto, instalação, homologação e suporte pela Schultz Energia Solar." path="/" schema={homeSchema(homeTitle)} />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SimulatorSection />
      <HomeFAQ />
      <ContactSection />
    </div>
  );
};

export default Index;
