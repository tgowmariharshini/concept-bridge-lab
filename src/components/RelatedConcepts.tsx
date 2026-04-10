import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu, Waves, Globe, RotateCw, Brain, TrendingUp, Grid3X3, Dna, Syringe, Microscope, Sun, HeartPulse, Recycle, FlaskConical, Calculator, Network, Droplets, Wind, Gauge, Orbit } from "lucide-react";
import type { RelatedConcept } from "@/lib/mockApi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers, cpu: Cpu, waves: Waves, globe: Globe, "rotate-cw": RotateCw,
  brain: Brain, "trending-up": TrendingUp, "grid-3x3": Grid3X3, dna: Dna,
  syringe: Syringe, microscope: Microscope, sun: Sun, "heart-pulse": HeartPulse,
  recycle: Recycle, "flask-conical": FlaskConical, calculator: Calculator,
  network: Network, droplets: Droplets, wind: Wind, gauge: Gauge, orbit: Orbit,
};

const labelMap: Record<string, string> = {
  prerequisite: "Prerequisite",
  advanced: "Advanced",
  related: "Related",
};

interface RelatedConceptsProps {
  concepts: RelatedConcept[];
  onSelect: (title: string) => void;
}

export function RelatedConcepts({ concepts, onSelect }: RelatedConceptsProps) {
  return (
    <section className="container mx-auto px-4 pb-10">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="font-heading text-xl font-bold text-foreground mb-4"
      >
        Expand Your Knowledge
      </motion.h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {concepts.map((c, i) => {
          const Icon = iconMap[c.icon] || FlaskConical;
          return (
            <motion.button
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, ease: "easeOut" as const }}
              onClick={() => onSelect(c.title)}
              className="glass-card p-5 text-left group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-accent p-2">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {labelMap[c.relationship] || c.relationship}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-foreground">{c.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
