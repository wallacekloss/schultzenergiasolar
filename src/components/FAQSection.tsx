import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/data/pages";

export function FAQSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-max mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary font-bold uppercase text-sm mb-3">Dúvidas frequentes</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">Perguntas e respostas</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`} className="bg-background border border-border px-5 rounded-lg">
              <AccordionTrigger className="text-left text-base font-bold text-secondary">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}