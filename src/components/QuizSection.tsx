import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/mockApi";
import { recordQuizCompletion } from "@/lib/gamification";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onQuizComplete: (streakMilestone: boolean) => void;
}

export function QuizSection({ questions, onQuizComplete }: QuizSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const isCorrect = selected === questions[currentQ]?.correctIndex;

  const handleSelect = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }, [answered, currentQ, questions]);

  const handleNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalCorrect = correctCount + (selected === questions[currentQ].correctIndex ? 0 : 0);
      // correctCount already updated in handleSelect
      const { streakMilestone } = recordQuizCompletion(correctCount, questions.length);
      setFinished(true);
      onQuizComplete(streakMilestone);
    }
  }, [currentQ, questions, correctCount, selected, onQuizComplete]);

  const handleRestart = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setCorrectCount(0);
    setFinished(false);
  }, []);

  const q = questions[currentQ];

  return (
    <section className="container mx-auto px-4 pb-10">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="glass-card w-full flex items-center justify-between p-4 hover:border-primary/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <span className="font-heading font-semibold text-foreground">Quick Check</span>
        </div>
        {expanded ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <div className="glass-card mt-2 p-6">
              {finished ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-4"
                >
                  <Trophy className="h-12 w-12 mx-auto text-primary mb-3" />
                  <h4 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {correctCount}/{questions.length} Correct!
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    +{correctCount * 10 + (correctCount === questions.length ? 25 : 0)} Knowledge Points earned
                  </p>
                  {correctCount === questions.length && (
                    <p className="text-sm text-primary font-medium">🎉 Perfect score bonus: +25 KP!</p>
                  )}
                  <Button variant="outline" onClick={handleRestart} className="mt-4">
                    Try Again
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted-foreground font-medium">
                      Question {currentQ + 1} of {questions.length}
                    </span>
                    <div className="flex gap-1">
                      {questions.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-6 rounded-full transition-colors ${i <= currentQ ? "bg-primary" : "bg-muted"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="font-heading font-semibold text-foreground mb-4">{q.question}</p>

                  <div className="space-y-2">
                    {q.options.map((option, i) => {
                      let borderClass = "border-border hover:border-primary/40";
                      if (answered) {
                        if (i === q.correctIndex) borderClass = "border-green-500 bg-green-500/10";
                        else if (i === selected) borderClass = "border-destructive bg-destructive/10";
                      } else if (i === selected) {
                        borderClass = "border-primary";
                      }

                      return (
                        <motion.button
                          key={i}
                          whileTap={!answered ? { scale: 0.98 } : undefined}
                          onClick={() => handleSelect(i)}
                          disabled={answered}
                          className={`w-full text-left rounded-lg border-2 p-3 flex items-center gap-3 transition-all ${borderClass}`}
                        >
                          <span className="h-6 w-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 border-current text-muted-foreground">
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-sm text-foreground">{option}</span>
                          {answered && i === q.correctIndex && <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />}
                          {answered && i === selected && i !== q.correctIndex && <XCircle className="h-5 w-5 text-destructive ml-auto" />}
                        </motion.button>
                      );
                    })}
                  </div>

                  {answered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center justify-between"
                    >
                      <span className={`text-sm font-medium ${isCorrect ? "text-green-500" : "text-destructive"}`}>
                        {isCorrect ? "✓ Correct! Well done." : `✗ The answer is: ${q.options[q.correctIndex]}`}
                      </span>
                      <Button size="sm" onClick={handleNext}>
                        {currentQ < questions.length - 1 ? "Next" : "Finish"}
                      </Button>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
