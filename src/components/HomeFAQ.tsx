import { FAQSection } from "./FAQSection";

export function HomeFAQ() {
  return <FAQSection items={[
    { q: "Quanto custa instalar energia solar em Linhares?", a: "O valor depende do consumo mensal, do tipo de imóvel e das condições de instalação. Use o simulador para uma estimativa inicial e envie sua conta de luz para receber uma proposta." },
    { q: "Quanto posso economizar na conta de luz?", a: "A economia pode chegar a até 90%, mas varia conforme o consumo, a tarifa, o dimensionamento e a geração do sistema. Toda simulação é uma estimativa." },
    { q: "A Schultz atende quais cidades?", a: "Atendemos Linhares e a Região Norte do Espírito Santo. Já realizamos projetos também em Sooretama e Vila Valério." },
    { q: "A Schultz cuida da homologação?", a: "Sim. Cuidamos do projeto, da documentação e do processo junto à concessionária até a liberação do sistema." },
    { q: "Vocês fazem manutenção em sistemas instalados por outras empresas?", a: "Sim. Fazemos manutenção, diagnóstico de falhas, limpeza e monitoramento de sistemas instalados por terceiros." },
    { q: "Como começo?", a: "Envie uma conta de luz recente pelo WhatsApp. Com ela, nossa equipe analisa seu consumo e prepara uma proposta dimensionada para o seu caso." },
  ]} />;
}