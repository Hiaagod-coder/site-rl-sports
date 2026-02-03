import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-runner.jpg";
import ParticleField from "@/components/ui/ParticleField";
import GlowingOrb from "@/components/ui/GlowingOrb";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated Orbs */}
      <GlowingOrb className="top-1/4 -left-32 pointer-events-none" size="xl" />
      <GlowingOrb className="bottom-1/4 -right-32 pointer-events-none" size="lg" color="secondary" />
      
      {/* Particle Field */}
      <ParticleField count={40} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Pre-title with badge effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="floating-label">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold">RL SPORTS</span>
            <span className="text-muted-foreground ml-2">TREINAMENTO DE CORRIDA</span>
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] mb-8"
        >
          <span className="block">EVOLUA SUA</span>
          <span className="block text-gradient-animated text-neon">CORRIDA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
            De iniciantes ao alto rendimento. Treinos específicos, controle de evolução e 
            preparação para TAF sob a orientação do <span className="text-primary font-semibold">Prof. Rafael Lima</span>.
          </p>
        </motion.div>

        {/* CTA Button - Rola para o Plano Recomendado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <Button
            variant="hero"
            size="xl"
            className="pulse-glow group"
            asChild
          >
            <a href="#assessoria" className="inline-flex items-center gap-4">
              <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>FAZER PRÉ-MATRÍCULA</span>
            </a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "50+", label: "Alunos Ativos" },
            { value: "5+", label: "Anos de Experiência" },
            { value: "100%", label: "Foco em Resultados" },
          ].map((stat, index) => (
            <div key={index} className="stat-card text-center min-w-[140px]">
              <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
            <ChevronDown className="w-5 h-5 text-primary animate-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;