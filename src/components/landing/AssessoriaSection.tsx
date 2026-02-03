import { Check, MessageCircle, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowingOrb from "@/components/ui/GlowingOrb";

const features = [
  "Treino Específico e Individualizado",
  "Feedback Diário com o Treinador",
  "Avaliação da Técnica de Corrida",
  "Controle de Evolução de Treino",
  "Preparação para TAF (Teste de Aptidão Física)",
  "Acesso livre às turmas e treinos da equipe",
  "Todas as idades e categorias",
];

const AssessoriaSection = () => {
  const phoneNumber = "5524999074844";
  const message = "Olá! Gostaria de saber mais sobre a Assessoria Esportiva!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="assessoria" className="py-24 relative overflow-hidden noise-overlay">
      <GlowingOrb className="top-1/4 -right-32" size="xl" />
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Assessoria Esportiva <span className="text-gradient">Completa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O acompanhamento ideal para quem busca performance e feedback constante.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto relative px-2 sm:px-0">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="glass-premium p-6 md:p-12 relative overflow-visible border-primary/30">
                
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
                  <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-2 rounded-full font-display text-xs md:text-sm tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.5)] whitespace-nowrap">
                    <Crown className="w-4 h-4" />
                    PLANO RECOMENDADO
                    <Zap className="w-4 h-4" />
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-8 flex items-center gap-3">
                      <div className="h-px w-8 bg-primary" />
                      O que está incluso
                    </h3>
                    <ul className="space-y-4">
                      {features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-4 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                            <Check className="w-3 h-3 md:w-4 h-4" />
                          </div>
                          <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CORREÇÃO DE ALINHAMENTO: Força a centralização no mobile */}
                  <div className="w-full flex flex-col items-center lg:block lg:w-auto lg:pl-12 lg:border-l border-white/10">
                    <div className="glass-card w-full max-w-md p-8 text-center mb-8 relative overflow-hidden group/price">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/price:opacity-100 transition-opacity" />
                      <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4">
                        Investimento Mensal
                      </p>
                      <div className="flex items-baseline justify-center gap-2 mb-2 flex-wrap">
                        <span className="text-muted-foreground text-2xl">R$</span>
                        <span className="text-4xl md:text-7xl font-bold text-foreground">199,99</span>
                      </div>
                      <p className="text-primary/60 text-sm italic">Cancele quando quiser</p>
                    </div>

                    <Button variant="hero" size="xl" className="w-full group pulse-glow" asChild>
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-4"
                      >
                        <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                        <span className="font-bold tracking-tight">QUERO MINHA ASSESSORIA</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AssessoriaSection;