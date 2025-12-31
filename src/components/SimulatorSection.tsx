import { useState } from "react";
import { Calculator, ArrowRight, Zap, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Parâmetros atualizados
const SOLAR_PARAMS = {
  tarifaKwh: 0.95, // R$/kWh
  hsp: 4.8, // Horas de Sol Pico
  custoPorWp: 2.30, // R$/Wp instalado
  economiaPercentual: 0.90, // 90% de economia
  diasMes: 30,
};

type PropertyType = "residencial" | "comercial";

export function SimulatorSection() {
  const [billValue, setBillValue] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType>("residencial");
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    whatsapp: "",
    city: ""
  });

  const billNumber = parseFloat(billValue) || 0;

  // 1. Consumo mensal em kWh
  const consumoMensalKwh = billNumber / SOLAR_PARAMS.tarifaKwh;

  // 2. Potência do sistema em kWp
  const potenciaSistemaKwp = consumoMensalKwh / (SOLAR_PARAMS.hsp * SOLAR_PARAMS.diasMes);

  // 3. Custo estimado de instalação (R$ 2,30/Wp = R$ 2.300/kWp)
  const custoInstalacao = potenciaSistemaKwp * 1000 * SOLAR_PARAMS.custoPorWp;

  // 4. Economia mensal (90% da conta)
  const monthlySavings = billNumber * SOLAR_PARAMS.economiaPercentual;
  const yearlySavings = monthlySavings * 12;

  // 5. Payback em meses e anos
  const paybackMonths = monthlySavings > 0 ? Math.ceil(custoInstalacao / monthlySavings) : 0;
  const paybackYears = (paybackMonths / 12).toFixed(1);

  const handleCalculate = () => {
    if (billNumber >= 200) {
      setShowResults(true);
    }
  };

  const handleGetQuote = () => {
    setShowLeadForm(true);
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um orçamento para energia solar.\n\nNome: ${leadData.name}\nCidade: ${leadData.city}\nValor da conta: R$ ${billValue}\nTipo: ${propertyType === "residencial" ? "Residencial" : "Comercial"}\nPotência estimada: ${potenciaSistemaKwp.toFixed(2)} kWp\nCusto estimado: R$ ${custoInstalacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\nEconomia estimada: R$ ${monthlySavings.toFixed(2)}/mês`;
    window.open(`https://wa.me/5527998200026?text=${encodeURIComponent(message)}`, "_blank");
  };
  return <section id="simulador" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl" />

      <div className="container-max mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Simulador de Economia
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Descubra quanto você pode{" "}
              <span className="text-primary">economizar</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Simule agora mesmo a economia que você terá ao instalar um sistema 
              de energia solar. É rápido, fácil e sem compromisso.
            </p>

            <div className="space-y-4 text-white/80">
              {["Cálculo instantâneo e personalizado", "Estimativa de retorno do investimento", "Sem compromisso - totalmente gratuito"].map(item => <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                  <span>{item}</span>
                </div>)}
            </div>
          </div>

          {/* Right - Calculator Card */}
          <div className="bg-white rounded-3xl p-8 shadow-medium">
            {!showLeadForm ? <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-secondary">
                      Simulador Solar
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Calcule sua economia em segundos
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-secondary mb-2 font-semibold">
                      Valor médio da conta de luz (R$)
                    </label>
                    <Input type="number" placeholder="Ex: 500" value={billValue} onChange={e => {
                  setBillValue(e.target.value);
                  setShowResults(false);
                }} min="200" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Valor mínimo: R$ 200,00
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm text-secondary mb-2 font-semibold">
                      Tipo de imóvel
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {(["residencial", "comercial"] as PropertyType[]).map(type => <button key={type} onClick={() => {
                    setPropertyType(type);
                    setShowResults(false);
                  }} className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${propertyType === type ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                          {type === "residencial" ? "Residencial" : "Comercial"}
                        </button>)}
                    </div>
                  </div>

                  {!showResults ? <Button variant="default" size="lg" className="w-full" onClick={handleCalculate} disabled={billNumber < 200}>
                      Calcular Economia
                      <ArrowRight className="h-5 w-5" />
                    </Button> : <>
                      {/* Results */}
                      <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">Potência do Sistema</span>
                          </div>
                          <span className="font-display text-xl font-bold text-primary">
                            {potenciaSistemaKwp.toFixed(2)} kWp
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-secondary" />
                            <span className="text-sm text-muted-foreground">Custo Estimado</span>
                          </div>
                          <span className="font-display text-xl font-bold text-secondary">
                            R$ {custoInstalacao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">Economia Mensal</span>
                          </div>
                          <span className="font-display text-xl font-bold text-primary">
                            R$ {monthlySavings.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Payback Estimado</span>
                          </div>
                          <span className="font-display text-xl font-bold text-foreground">
                            {paybackMonths} meses ({paybackYears} anos)
                          </span>
                        </div>
                      </div>

                      <Button variant="cta" size="lg" className="w-full" onClick={handleGetQuote}>
                        Quero Meu Orçamento Grátis
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </>}
                </div>
              </> : (/* Lead Form */
          <form onSubmit={handleSubmitLead} className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Receba seu orçamento
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Preencha seus dados para receber uma proposta personalizada
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Seu nome
                  </label>
                  <Input type="text" placeholder="Nome completo" value={leadData.name} onChange={e => setLeadData({
                ...leadData,
                name: e.target.value
              })} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    WhatsApp
                  </label>
                  <Input type="tel" placeholder="(00) 00000-0000" value={leadData.whatsapp} onChange={e => setLeadData({
                ...leadData,
                whatsapp: e.target.value
              })} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Cidade
                  </label>
                  <Input type="text" placeholder="Sua cidade" value={leadData.city} onChange={e => setLeadData({
                ...leadData,
                city: e.target.value
              })} required />
                </div>

                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    Sua economia estimada:{" "}
                    <span className="font-bold text-primary">
                      R$ {monthlySavings.toFixed(2)}/mês
                    </span>
                  </p>
                </div>

                <Button variant="whatsapp" size="lg" className="w-full" type="submit">
                  Enviar via WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>

                <button type="button" onClick={() => setShowLeadForm(false)} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Voltar ao simulador
                </button>
              </form>)}
          </div>
        </div>
      </div>
    </section>;
}