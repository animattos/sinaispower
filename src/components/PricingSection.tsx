import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onTestClick: () => void;
}

const PricingSection = ({ onTestClick }: PricingSectionProps) => {
  const features = [
    "Acesso completo ao indicador SINAIS POWER",
    "Sinais em tempo real 24/7",
    "Funciona em todos os pares e timeframes",
    "Atualizações automáticas gratuitas",
    "Suporte técnico via WhatsApp",
    "Área de membros exclusiva",
    "Garantia de 7 dias ou seu dinheiro de volta"
  ];

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Plano{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Único e Simples
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sem complicações, sem taxas escondidas. Apenas resultados.
          </p>
        </div>

        <div className="relative animate-fade-in-up">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
          
          {/* Card */}
          <div className="relative bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 mb-4">
                <span className="text-primary font-semibold">MELHOR OFERTA</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">R$ 97</span>
                  <span className="text-muted-foreground text-xl">/mês</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Cancele quando quiser, sem multas
                </p>
              </div>

              <Button
                size="lg"
                onClick={onTestClick}
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all duration-300"
              >
                Começar Teste Gratuito de 3 Dias
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Teste gratuitamente. Só paga se gostar.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <p className="font-semibold text-foreground mb-4">O que está incluído:</p>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
