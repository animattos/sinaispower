import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle2 } from "lucide-react";

interface TestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TestDialog = ({ open, onOpenChange }: TestDialogProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with your actual backend call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setName("");
      onOpenChange(false);
      
      toast({
        title: "✓ Cadastro realizado!",
        description: "Verifique seu email. O indicador será enviado em instantes.",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/30">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Teste Grátis por 3 Dias
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                Preencha seus dados e receba o indicador por email para testar gratuitamente.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background border-border"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Começar Teste Gratuito"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao continuar, você concorda em receber emails sobre o SINAIS POWER. 
                Sem spam, apenas conteúdo relevante.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cadastro Realizado!</h3>
              <p className="text-muted-foreground">
                Verifique seu email.<br />
                O indicador será enviado em instantes.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TestDialog;
