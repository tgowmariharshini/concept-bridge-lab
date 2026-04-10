import { Moon, Sun, History, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
  onOpenHistory: () => void;
}

export function Header({ darkMode, onToggleDark, onOpenHistory }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            ConceptBridge
          </span>
        </div>
        <div className="flex items-center gap-2">
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
