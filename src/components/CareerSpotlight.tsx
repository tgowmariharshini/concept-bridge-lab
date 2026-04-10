import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Career } from "@/lib/mockApi";

interface CareerSpotlightProps {
  careers: Career[];
}

export function CareerSpotlight({ careers }: CareerSpotlightProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 pb-6">
        <Button variant="outline" onClick={() => setOpen(true)} className="gap-2">
          <Briefcase className="h-4 w-4" />
          Career Spotlight
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: "easeOut" as const }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-lg p-6 relative"
              style={{ background: "hsl(var(--card))" }}
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-foreground">Career Spotlight</h3>
              </div>
              <div className="space-y-5">
                {careers.map((career, i) => (
                  <motion.div
                    key={career.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: "easeOut" as const }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-semibold text-foreground">{career.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <TrendingUp className="h-3 w-3" />
                        <span>Growth</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{career.description}</p>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${career.growthPercent}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" as const }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">{career.growthPercent}% industry growth</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
