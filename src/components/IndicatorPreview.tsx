import indicatorImage from "@/assets/indicator-preview.jpg";
import { CheckCircle2 } from "lucide-react";

const IndicatorPreview = () => {
  const features = [
    "Sinais de compra (AZUL) e venda (VERMELHO) claros e precisos",
    "Indicador de reversão de vela integrado no painel",
    "Interface limpa e fácil de interpretar",
    "Funciona em todos os pares de moedas e timeframes",
    "Compatível com todas as versões do MT4",
    "Suporte técnico completo incluso"
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Veja o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SINAIS POWER
            </span>{" "}
            em Ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interface profissional com sinais visuais claros que facilitam suas decisões de trading
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-3xl" />
            <img
              src={indicatorImage}
              alt="SINAIS POWER Indicator Preview"
              className="relative rounded-lg border-2 border-primary/20 shadow-2xl w-full"
            />
          </div>

          {/* Features list */}
          <div className="space-y-6 animate-fade-in-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicatorPreview;
