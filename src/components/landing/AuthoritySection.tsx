import { Award, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import rafaelImage from "@/assets/rafael-lima.png";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowingOrb from "@/components/ui/GlowingOrb";

const credentials = [
  {
    icon: Award,
    text: "CREF1: 051763-G/RJ",
    description: "Profissional Registrado",
  },
  {
    icon: Shield,
    text: "Especialista em Corrida de Rua e Trail",
    description: "Certificação Profissional",
  },
  {
    icon: Users,
    text: "Metodologia para todas as idades",
    description: "Treinamento Personalizado",
  },
];

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <GlowingOrb className="-top-32 -right-32" size="xl" />
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary-glow/10 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main image container */}
              <div className="relative glass-premium p-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={rafaelImage}
                    alt="Prof. Rafael Lima"
                    className="w-full h-auto object-cover aspect-[4/5]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div 
                    className="glass-card p-5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-primary font-display text-2xl tracking-wider mb-1">
                      PROF. RAFAEL LIMA
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Educador Físico Registrado
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <div className="section-divider mb-8 mx-0" />
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[0.95]">
                Orientação Técnica{" "}
                <span className="text-gradient">Certificada</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Treine com segurança e técnica. A RL Sports é liderada pelo{" "}
                <strong className="text-foreground">Prof. Rafael Lima</strong>, 
                profissional registrado no Conselho Regional de Educação Física.
              </p>

              {/* Credentials List */}
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="location-card flex items-center gap-5"
                  >
                    <div className="icon-container">
                      <credential.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold block">{credential.text}</span>
                      <span className="text-muted-foreground text-sm">{credential.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
