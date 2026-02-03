import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trophy, Flag, Medal, Star, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import camisaAtleta from "@/assets/camisa-atleta.png";
import camisaImage2 from "@/assets/camisaimage2.png";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";

const events = ["5K", "7K", "10K", "21K", "42K", "ULTRA"];

const shirts = [
  {
    id: 1,
    image: camisaAtleta,
    name: "REGATA DE TREINO",
    type: 'REGATA ATLETA',
    price: "69,99"
  },
  {
    id: 2,
    image: camisaImage2,
    name: "CAMISA DE TREINO",
    type: 'CAMISA ATLETA',
    price: "69,99"
  }
];

const CamisaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === shirts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? shirts.length - 1 : prev - 1));
  };

  return (
    <section id="camisa" className="py-24 relative overflow-hidden noise-overlay">
      <GlowingOrb className="top-0 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" size="xl" />
      <GlowingOrb className="bottom-0 left-1/4 pointer-events-none" size="lg" color="secondary" />
      <ParticleField count={15} />
      <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Vista a Camisa da <span className="text-gradient-animated">Equipe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Participe dos principais eventos vestindo o manto da RL SPORTS.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <AnimatedSection direction="left">
            <div className="relative group">
              <div className="absolute -inset-8 bg-primary/30 via-primary-glow/20 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="glass-premium p-6 md:p-8 text-center relative overflow-visible mt-10">
                
                {/* SELO EXCLUSIVO: Agora idêntico ao "Plano Recomendado" */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
                  <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 md:px-6 rounded-full font-display text-[11px] md:text-sm tracking-widest flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.5)] text-center whitespace-nowrap">
                    <Star className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span>EXCLUSIVO PARA ALUNOS</span>
                    <Zap className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  </span>
                </div>

                {/* Container do Carrossel */}
                <div className="relative h-[350px] md:h-[400px] flex items-center justify-center mb-8 mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex flex-col items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
                      <motion.img
                        src={shirts[currentIndex].image}
                        alt={shirts[currentIndex].name}
                        className="relative w-full max-w-[280px] md:max-w-sm h-full object-contain"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* SETAS DE NAVEGAÇÃO: Fora da imagem no desktop e discretas no mobile */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-[-10px] md:-left-16 z-40 p-2 md:p-3 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 transition-all shadow-lg"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-[-10px] md:-right-16 z-40 p-2 md:p-3 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 transition-all shadow-lg"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 h-6" />
                  </button>
                </div>
                
                <motion.div key={`info-${currentIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[140px]">
                  <p className="font-display text-2xl md:text-3xl text-gradient tracking-wider mb-2 uppercase">
                    {shirts[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-base md:text-lg mb-6">{shirts[currentIndex].type}</p>
                  
                  <div className="glass-card p-4 md:p-6 mb-8">
                    <div className="flex items-baseline gap-2 justify-center">
                      <span className="text-muted-foreground text-lg md:text-xl">R$</span>
                      <span className="text-5xl md:text-6xl font-bold text-foreground">{shirts[currentIndex].price}</span>
                    </div>
                  </div>
                </motion.div>

                <Button variant="hero" size="xl" className="w-full group pulse-glow" asChild>
                  <a href={`https://wa.me/5524999074844?text=Olá! Gostaria de pedir a ${shirts[currentIndex].name}!`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4">
                    <ShoppingBag className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span>PEDIR MINHA CAMISA</span>
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Coluna da Direita (Provas) */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-container"><Trophy className="w-8 h-8 text-primary" /></div>
              <h3 className="font-display text-3xl text-foreground">Provas que participamos:</h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-10">
              {events.map((event, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/15 transition-all cursor-default">
                  <Flag className="w-5 h-5 text-primary" /><span className="font-display text-xl md:text-2xl text-foreground">{event}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-5">
              {["Corridas de rua e trail em todo o RJ", "Eventos municipais, estaduais e nacionais", "Representando a equipe com orgulho"].map((text, index) => (
                <motion.div key={index} className="flex items-start gap-4 group">
                  <div className="p-2 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all mt-0.5"><Medal className="w-4 h-4" /></div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CamisaSection;