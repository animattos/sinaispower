import logo from "@/assets/logo.png";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img src={logo} alt="SINAIS POWER" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              O indicador MT4 mais poderoso do mercado para trading profissional.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@sinaispower.com" className="hover:text-primary transition-colors">
                  contato@sinaispower.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://wa.me/seu-numero" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  Suporte via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Teste gratuito de 3 dias</p>
              <p>✓ Garantia de 7 dias</p>
              <p>✓ Suporte técnico incluso</p>
              <p>✓ Cancele quando quiser</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SINAIS POWER. Todos os direitos reservados.</p>
          <p className="mt-2">
            <span className="text-xs">
              Trading envolve riscos. Negocie com responsabilidade.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
