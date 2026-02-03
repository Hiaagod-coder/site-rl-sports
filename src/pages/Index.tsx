import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import AssessoriaSection from "@/components/landing/AssessoriaSection";
import TreinosSection from "@/components/landing/TreinosSection";
import CamisaSection from "@/components/landing/CamisaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <AssessoriaSection />
      <TreinosSection />
      <CamisaSection />
      <Footer />
    </main>
  );
};

export default Index;
