import { motion } from "framer-motion";

interface GlowingOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary";
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[600px] h-[600px]",
};

const GlowingOrb = ({ className = "", size = "lg", color = "primary" }: GlowingOrbProps) => {
  const colorClass = color === "primary" 
    ? "from-primary/30 via-primary/10 to-transparent" 
    : "from-primary-glow/20 via-primary-glow/5 to-transparent";

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial ${colorClass} blur-3xl pointer-events-none ${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
