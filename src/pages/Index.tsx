import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndicatorPreview from "@/components/IndicatorPreview";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import TestDialog from "@/components/TestDialog";
import Footer from "@/components/Footer";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onTestClick={() => setDialogOpen(true)} />
      <Hero onTestClick={() => setDialogOpen(true)} />
      <IndicatorPreview />
      <VideoSection />
      <PricingSection onTestClick={() => setDialogOpen(true)} />
      <Footer />
      <TestDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;
