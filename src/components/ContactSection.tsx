import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de mais informações sobre energia solar.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/5527998200026?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-muted/50">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Fale com nossa equipe
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para ajudar você a economizar com energia solar. 
            Entre em contato e solicite um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-secondary mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(27) 99820-0026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@schultzenergiasolar.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Região de Atendimento</h4>
                  <p className="text-muted-foreground">Linhares e todo o Espírito Santo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 17h</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/5527998200026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-3xl p-8 shadow-card">
            <h3 className="font-display text-xl font-bold text-secondary mb-6">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Nome completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="flex w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all duration-200 resize-none"
                  required
                />
              </div>

              <Button variant="default" size="lg" className="w-full" type="submit">
                Enviar Mensagem
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
