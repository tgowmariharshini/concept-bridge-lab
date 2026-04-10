import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { ResultCards } from "@/components/ResultCards";
import { HistoryDrawer } from "@/components/HistoryDrawer";
import { FooterConcept } from "@/components/FooterConcept";
import { fetchConcept, getRandomConcept, type ConceptResult } from "@/lib/mockApi";
import { getHistory, addToHistory, clearHistory, type HistoryItem } from "@/lib/history";
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        onOpenHistory={() => setHistoryOpen(true)}
      />

      <main className="flex-1">
        <HeroSearch
          onSearch={handleSearch}
          onSurpriseMe={handleSurpriseMe}
          isLoading={isLoading}
        />

        {isLoading && (
          <div className="flex justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {result && !isLoading && (
            <motion.div
              key={result.concept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultCards result={result} />
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
    </div>
  );
};

export default Index;
