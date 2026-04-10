import { motion } from "framer-motion";
import { BookOpen, Zap, FlaskConical, Share2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ConceptResult } from "@/lib/mockApi";
import { toast } from "sonner";

interface ResultCardsProps {
  result: ConceptResult;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export function ResultCards({ result }: ResultCardsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `🌉 ConceptBridge: ${result.concept}\n\n📖 Foundation:\n${result.foundation}\n\n🏭 Industry Impact:\n${result.industryImpact.join("\n")}\n\n🔬 Visualization:\n${result.visualization}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Summary copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy.");
    }
  };

  return (
    <section className="container mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 flex items-center justify-between"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          {result.concept}
        </h2>
        <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Share"}
        </Button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card A: Foundation */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glass-card p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <h3 className="font-heading text-lg font-semibold">The Foundation</h3>
          </div>
          <p className="leading-relaxed text-foreground/90">{result.foundation}</p>
        </motion.div>

        {/* Card B: Industry Impact */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glass-card p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Zap className="h-5 w-5" />
            <h3 className="font-heading text-lg font-semibold">Industry Impact</h3>
          </div>
          <ul className="space-y-3">
            {result.industryImpact.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card C: Visualization */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="glass-card p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <FlaskConical className="h-5 w-5" />
            <h3 className="font-heading text-lg font-semibold">Visualization</h3>
          </div>
          <p className="leading-relaxed text-foreground/90">{result.visualization}</p>
        </motion.div>
      </div>
    </section>
  );
}
