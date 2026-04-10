import { motion } from "framer-motion";

interface ConceptImageProps {
  imageUrl: string;
  attribution: string;
  concept: string;
}

export function ConceptImage({ imageUrl, attribution, concept }: ConceptImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="container mx-auto px-4 mb-8"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.15)" }}>
        <img
          src={imageUrl}
          alt={`Visual representation of ${concept}`}
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-md">
            {concept}
          </h2>
          <span className="text-xs text-primary-foreground/70 drop-shadow-sm">
            {attribution}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
