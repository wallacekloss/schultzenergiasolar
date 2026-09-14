import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline group-hover:inline transition-all">
        Fale Conosco
      </span>
    </a>
  );
}
