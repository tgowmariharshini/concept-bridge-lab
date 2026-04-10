import { Lightbulb } from "lucide-react";
import { getConceptOfTheDay } from "@/lib/mockApi";
import { useMemo } from "react";

export function FooterConcept() {
  const concept = useMemo(() => getConceptOfTheDay(), []);

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center">
        <div className="flex items-center gap-2 text-primary">
          <Lightbulb className="h-5 w-5" />
          <span className="font-heading text-sm font-semibold">Concept of the Day</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground">{concept.title}</h3>
        <p className="max-w-md text-sm text-muted-foreground">{concept.description}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ConceptBridge — Bridging STEM to understanding.
        </p>
      </div>
    </footer>
  );
}
