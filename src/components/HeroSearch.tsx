import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSearchProps {
  onSearch: (query: string) => void;
  onSurpriseMe: () => void;
  isLoading: boolean;
}

export function HeroSearch({ onSearch, onSurpriseMe, isLoading }: HeroSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          Bridge Concepts to{" "}
          <span className="text-primary">Reality</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
          Explore any STEM concept — simplified, applied, and visualized for you.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 w-full max-w-2xl"
      >
        <div className="glass-card shimmer-border flex items-center gap-2 p-2">
          <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bridge a concept to reality... (e.g., Centripetal Force)"
            className="flex-1 bg-transparent py-3 px-2 text-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled={isLoading}
          />
          <Button type="submit" disabled={!query.trim() || isLoading} className="shrink-0">
            {isLoading ? "Bridging..." : "Explore"}
          </Button>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={onSurpriseMe}
            disabled={isLoading}
            className="gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Surprise Me
          </Button>
        </div>
      </motion.form>
    </section>
  );
}
