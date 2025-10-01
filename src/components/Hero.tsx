import { Button } from "@/components/ui/button";
import indicatorImage from "@/assets/indicator-preview.jpg";
import { TrendingUp, Shield, Clock, Zap } from "lucide-react";

interface HeroProps {
  onTestClick: () => void;
}

const Hero = ({ onTestClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Maximize Seus Resultados no Trading Com o{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SINAIS POWER
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                O indicador MT4 mais preciso do mercado. Sinais em tempo real para decisões certeiras.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={onTestClick}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all duration-300"
            >
              Testar Grátis por 3 Dias
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ✓ Sem cartão de crédito • ✓ Acesso imediato
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-lg overflow-hidden border border-border shadow-[0_0_50px_rgba(255,0,0,0.2)]">
              <img 
                src={indicatorImage} 
                alt="SINAIS POWER MT4 Indicator Preview" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Features badges below */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="font-medium">Sinais Precisos</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-3">
            <Clock className="h-5 w-5 text-secondary" />
            <span className="font-medium">Tempo Real</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-3">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">100% Confiável</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-3">
            <Zap className="h-5 w-5 text-secondary" />
            <span className="font-medium">Fácil de Usar</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
