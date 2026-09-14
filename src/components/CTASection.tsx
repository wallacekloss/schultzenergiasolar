import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT } from "@/data/company";

export function CTASection({ title, text }: { title: string; text: string }) {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-max mx-auto text-center max-w-4xl">
        <p className="text-primary font-bold uppercase text-sm mb-4">Próximo passo</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">{title}</h2>
        <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">{text}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/simulador/">Calcule sua economia<ArrowRight /></Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
              Falar pelo WhatsApp<MessageCircle />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
