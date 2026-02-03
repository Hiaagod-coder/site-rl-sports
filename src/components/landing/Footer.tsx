import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Heart, ArrowUp } from "lucide-react"; 
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowingOrb from "@/components/ui/GlowingOrb";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Configuração do WhatsApp padrão que você definiu
  const phoneNumber = "5524999074844";
  const message = "olá, gostaria saber mais infor";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="py-20 relative overflow-hidden noise-overlay border-t border-border/50">
      {/* Background elements */}
      <GlowingOrb className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" />
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <AnimatedSection className="text-center mb-16">
          <motion.p 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Prova de amor ou cardio?
          </motion.p>
          <motion.p 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-animated mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Venha descobrir na RL SPORTS.
          </motion.p>
          
          <Button
            variant="hero"
            size="xl"
            className="pulse-glow group"
            asChild
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4"
            >
              <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Pedir mais Informações</span>
            </a>
          </Button>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a 
            href="https://instagram.com/rafaellimaprofessor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 rounded-full bg-primary/20">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground group-hover:text-primary transition-colors font-medium">
              @rafaellimaprofessor
            </span>
          </motion.a>
          <motion.a 
            href="https://instagram.com/rlsportsrunning" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 rounded-full bg-primary/20">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground group-hover:text-primary transition-colors font-medium">
              @rlsportsrunning
            </span>
          </motion.a>
        </AnimatedSection>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Logo & Copyright & Hiago Dev Credit */}
        <AnimatedSection delay={0.3} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-4xl text-gradient tracking-wider mb-2">
              RL SPORTS
            </p>
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">
              TREINAMENTO DE CORRIDA
            </p>
          </motion.div>
          
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 mb-3">
            Feito com <Heart className="w-4 h-4 text-destructive animate-pulse" /> para corredores
          </p>
          
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs">
              RL Sports - Todos os direitos reservados. CREF: 051763G/RJ
            </p>
            {/* Assinatura Hiago Dev com destaque */}
            <p className="text-muted-foreground/60 text-[10px] uppercase tracking-[0.2em]">
              Desenvolvido no VSCODE por <span className="text-primary font-bold hover:text-primary-glow transition-colors duration-300">Hiago Dev.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 glass-card hover:border-primary/50 transition-all duration-300 group z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;