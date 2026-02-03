import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, MessageCircle, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import trainingGroup from "@/assets/training-group.png";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowingOrb from "@/components/ui/GlowingOrb";

const locations = [
  {
    name: "VILA (Praça da ETPC)",
    days: "Segunda e Quarta",
    time: "19h15",
  },
  {
    name: "JARDIM PONTE ALTA (Morrão)",
    days: "Terça e Quinta",
    time: "19h00",
  },
];

const features = [
  "Aulas em Grupo",
  "Iniciação e Aprimoramento",
  "Testes de Condicionamento",
  "Treinos Externos",
  "Todas as idades e categorias",
];

const phoneNumber = "5524999074844"; 
const message = "Olá! Gostaria de agendar uma aula experimental!";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const TreinosSection = () => {
  return (
    <section id="treinos" className="py-24 relative overflow-hidden noise-overlay">
      <GlowingOrb className="-bottom-32 -left-32 pointer-events-none" size="xl" color="secondary" />
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Treinos em Grupo <span className="text-gradient">Presenciais</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Aulas dinâmicas com iniciação, aprimoramento e testes de condicionamento.{" "}
            <span className="text-primary font-semibold block md:inline">(2x na semana presencial + Treinos Externos)</span>
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-6 md:pt-0">
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative glass-premium p-2 md:p-3 overflow-visible lg:mt-8">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
                  <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 md:px-6 rounded-full font-display text-[11px] md:text-sm tracking-widest flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.5)] text-center whitespace-nowrap">
                    <Users className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span>+50 ALUNOS ATIVOS</span>
                    <Zap className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={trainingGroup}
                    alt="Treinos em grupo"
                    className="w-full h-auto object-cover aspect-video"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
            <div className="space-y-4 mb-10">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="location-card p-4 md:p-6"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="icon-container flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg md:text-xl text-foreground mb-2 md:mb-3">{location.name}</h3>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{location.days}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{location.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 🔥 COLUNAS ALINHADAS: Alterado de flex-wrap para Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="feature-tag text-[10px] md:text-sm px-3 py-1.5 w-full flex items-center justify-center sm:justify-start"
                >
                  <span className="text-primary mr-2 flex-shrink-0">✦</span>
                  <span className="truncate">{feature}</span>
                </motion.span>
              ))}
            </div>

            <motion.div 
              className="glass-card p-5 md:p-8 relative z-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
                <div className="text-center xl:text-left">
                  <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest mb-1">Mensal</p>
                  <div className="flex items-baseline gap-2 justify-center xl:justify-start">
                    <span className="text-muted-foreground text-lg md:text-xl">R$</span>
                    <span className="text-4xl md:text-5xl font-bold text-gradient">89,90</span>
                    <span className="text-muted-foreground text-sm md:text-base">/mês</span>
                  </div>
                </div>
                
                <Button variant="hero" size="xl" className="w-full xl:w-auto group px-4 md:px-6 pulse-glow" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 md:gap-3 cursor-pointer">
                    <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="text-xs md:text-base font-bold uppercase">AGENDAR AULA EXPERIMENTAL</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TreinosSection;