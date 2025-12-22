import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre energia solar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline group-hover:inline transition-all">
        Fale Conosco
      </span>
    </a>
  );
}
