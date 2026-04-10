import { motion } from "framer-motion";

export function SkeletonLoader() {
  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Image skeleton */}
      <div className="mb-8 overflow-hidden rounded-2xl">
        <motion.div
          className="h-48 sm:h-64 md:h-80 w-full rounded-2xl bg-muted"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Title skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <motion.div
          className="h-8 w-48 rounded-lg bg-muted"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.div
          className="h-8 w-20 rounded-lg bg-muted"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.15 }}
        />
      </div>

      {/* Card skeletons */}
      <div className="grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="glass-card p-6 space-y-3"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 + i * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-muted" />
              <div className="h-5 w-32 rounded bg-muted" />
            </div>
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
