import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Renan Marques",
  location: "Bebedouro, Linhares – ES",
  rating: 5,
  text: "Enfim encontrei o cara certo da energia solar. Depois de adquirir 2 instalações de empresas diferentes e ser abandonado por elas, o Wallace veio instalar a terceira e ainda assumiu o cuidado das outras duas de forma estupenda. Hoje minhas instalações antigas têm acompanhamento por Wi-Fi, algo que eu havia contratado antes, mas não tinham me entregado. Sem falar na qualidade dos produtos e no preço: paguei menos e o sistema dele gera muito mais do que os outros, mesmo com o mesmo kWh contratado.",
  image: "RM"
}, {
  name: "Jean Moreira",
  location: "Bebedouro, Linhares – ES",
  rating: 5,
  text: "Fui muito bem atendido! O Wallace tem conhecimento técnico, atende com rapidez, tem preço e qualidade. Meu serviço foi executado com excelência, minha casa foi entregue limpa e organizada. É um profissional acima da média. Realizou instalação elétrica predial, instalação do sistema fotovoltaico e outros serviços. Vou contratar sempre para minhas obras. Sem contar a parte pessoal: acabei fazendo um amigo. Podem contratar e confirmar tudo o que estou relatando.",
  image: "JM"
}, {
  name: "Amilar Rangel",
  location: "Três Barras, Linhares – ES",
  rating: 5,
  text: "Desde o primeiro contato fui muito bem atendido. O Wallace demonstrou total domínio técnico, esclareceu todas as dúvidas e apresentou a melhor solução para o meu caso. A instalação foi feita com cuidado, organização e dentro do prazo. O sistema está funcionando perfeitamente e a economia na conta de energia já é visível. Profissional sério, competente e de total confiança.",
  image: "AR"
}, {
  name: "Hoechst Brito Dias",
  location: "São José, Linhares – ES",
  rating: 5,
  text: "Serviço de altíssimo nível. A Schultz Energia Solar entregou exatamente o que foi prometido, com transparência, qualidade nos equipamentos e excelente execução. O Wallace acompanha todo o processo, explica cada etapa e transmite muita segurança. A instalação ficou impecável e o desempenho do sistema superou minhas expectativas. Empresa e profissional acima da média.",
  image: "HB"
}, {
  name: "Odirley Santos",
  location: "Planalto, Linhares – ES",
  rating: 5,
  text: "Excelente atendimento do início ao fim. A equipe da Schultz Energia Solar foi muito profissional, explicou todo o processo com clareza e cumpriu os prazos combinados. A instalação ficou impecável e já estou sentindo a economia na conta de energia. Recomendo com total confiança.",
  image: "OS"
}];
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="depoimentos" className="section-padding bg-muted/50">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">Mais de 150 clientes satisfeitos em todo o Espírito Santo. Confira alguns depoimentos de quem já economiza com energia solar.</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto bg-background rounded-3xl p-8 md:p-12 shadow-card">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                    </div>

                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-lg font-bold text-white">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-display font-bold text-secondary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background shadow-medium flex items-center justify-center text-secondary hover:text-primary transition-colors" aria-label="Anterior">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background shadow-medium flex items-center justify-center text-secondary hover:text-primary transition-colors" aria-label="Próximo">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"}`} aria-label={`Ir para depoimento ${index + 1}`} />)}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold">5/5</span>
            <span>no Google</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div>
            <span className="font-semibold">150+</span> clientes satisfeitos
          </div>
          <div className="h-6 w-px bg-border" />
          <div>
            <span className="font-semibold">2+</span> anos de experiência
          </div>
        </div>
      </div>
    </section>;
}