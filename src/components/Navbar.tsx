import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onTestClick: () => void;
}

const Navbar = ({ onTestClick }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img 
            src={logo} 
            alt="SINAIS POWER" 
            className="h-12 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection("video")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <Button 
              onClick={onTestClick}
              className="bg-gradient-to-r from-primary to-primary/90"
            >
              Teste Grátis
            </Button>
          </div>

          {/* Mobile CTA */}
          <Button 
            onClick={onTestClick}
            size="sm"
            className="md:hidden bg-gradient-to-r from-primary to-primary/90"
          >
            Teste Grátis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
