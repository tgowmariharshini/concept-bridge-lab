import { Moon, Sun, History, GraduationCap, Flame, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GamificationState } from "@/lib/gamification";

interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
  onOpenHistory: () => void;
  gamification: GamificationState;
}

export function Header({ darkMode, onToggleDark, onOpenHistory, gamification = { knowledgePoints: 0, currentStreak: 0, lastQuizDate: null, quizzesCompleted: 0 } }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            ConceptBridge
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Gamification stats */}
          <div className="hidden sm:flex items-center gap-3 mr-2 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground" title="Knowledge Points">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-semibold text-foreground">{gamification.knowledgePoints}</span>
              <span className="text-xs">KP</span>
            </div>
            {gamification.currentStreak > 0 && (
              <div className="flex items-center gap-1 text-muted-foreground" title="Daily streak">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="font-semibold text-foreground">{gamification.currentStreak}</span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onOpenHistory} aria-label="Search history">
            <History className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onToggleDark} aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
