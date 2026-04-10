import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { ConceptImage } from "@/components/ConceptImage";
import { ResultCards } from "@/components/ResultCards";
import { RelatedConcepts } from "@/components/RelatedConcepts";
import { CareerSpotlight } from "@/components/CareerSpotlight";
import { QuizSection } from "@/components/QuizSection";
import { HistoryDrawer } from "@/components/HistoryDrawer";
import { FooterConcept } from "@/components/FooterConcept";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import { StreakCelebration } from "@/components/StreakCelebration";
import { fetchConcept, getRandomConcept, type ConceptResult } from "@/lib/mockApi";
import { getHistory, addToHistory, clearHistory, type HistoryItem } from "@/lib/history";
import { getGamification, type GamificationState } from "@/lib/gamification";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const [result, setResult] = useState<ConceptResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [gamification, setGamification] = useState<GamificationState>(getGamification);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setResult(null);
    try {
      const data = await fetchConcept(query);
      setResult(data);
      setHistory(addToHistory(query));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSurpriseMe = useCallback(() => {
    handleSearch(getRandomConcept());
  }, [handleSearch]);

  const handleClearHistory = useCallback(() => {
    setHistory(clearHistory());
  }, []);

  const handleQuizComplete = useCallback((streakMilestone: boolean) => {
    setGamification(getGamification());
    if (streakMilestone) {
      setShowCelebration(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        onOpenHistory={() => setHistoryOpen(true)}
        gamification={gamification}
      />

      <main className="flex-1">
        <HeroSearch
          onSearch={handleSearch}
          onSurpriseMe={handleSurpriseMe}
          isLoading={isLoading}
        />

        {isLoading && <SkeletonLoader />}

        <AnimatePresence mode="wait">
          {result && !isLoading && (
            <motion.div
              key={result.concept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ConceptImage
                imageUrl={result.imageUrl}
                attribution={result.imageAttribution}
                concept={result.concept}
              />
              <ResultCards result={result} />
              <CareerSpotlight careers={result.careers} />
              <QuizSection questions={result.quiz} onQuizComplete={handleQuizComplete} />
              <RelatedConcepts concepts={result.relatedConcepts} onSelect={handleSearch} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FooterConcept />

      <HistoryDrawer
        open={historyOpen}
        onOpenChange={setHistoryOpen}
        history={history}
        onSelect={handleSearch}
        onClear={handleClearHistory}
      />

      <StreakCelebration
        show={showCelebration}
        onDone={() => setShowCelebration(false)}
      />
    </div>
  );
};

export default Index;
