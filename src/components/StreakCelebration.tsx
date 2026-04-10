import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StreakCelebrationProps {
  show: boolean;
  onDone: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];

export function StreakCelebration({ show, onDone }: StreakCelebrationProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!show) return;
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 8,
      angle: Math.random() * Math.PI * 2,
      speed: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => {
      setParticles([]);
      onDone();
    }, 2500);
    return () => clearTimeout(timer);
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                left: `${p.x + Math.cos(p.angle) * p.speed * 15}%`,
                top: `${p.y + Math.sin(p.angle) * p.speed * 15 - 20}%`,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: p.color,
              }}
            />
          ))}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          >
            <div className="text-5xl mb-2">🔥</div>
            <div className="font-heading text-2xl font-bold text-primary drop-shadow-lg">
              5-Day Streak!
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
