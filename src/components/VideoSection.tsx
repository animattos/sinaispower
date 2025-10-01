import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-20 px-4 bg-card/30 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Veja Como é{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simples
            </span>{" "}
            de Usar
          </h2>
          <p className="text-muted-foreground text-lg">
            Assista ao vídeo demonstrativo e descubra como o SINAIS POWER pode transformar seus resultados
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl animate-fade-in-up">
          {/* Video placeholder - replace with actual video embed */}
          <div className="absolute inset-0 bg-gradient-to-br from-card to-muted flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer group">
                <Play className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
              </div>
              <p className="text-muted-foreground">
                Vídeo de demonstração<br />
                <span className="text-xs">Clique para assistir</span>
              </p>
            </div>
          </div>
          
          {/* Replace the div above with your actual video embed, example: */}
          {/* <iframe
            className="w-full h-full"
            src="YOUR_VIDEO_URL"
            title="SINAIS POWER Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          ℹ️ Substitua este placeholder pelo seu vídeo de demonstração do YouTube, Vimeo ou outro serviço
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
