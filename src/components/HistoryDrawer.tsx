import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, Clock } from "lucide-react";
import type { HistoryItem } from "@/lib/history";
import { formatDistanceToNow } from "date-fns";

interface HistoryDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  history: HistoryItem[];
  onSelect: (query: string) => void;
  onClear: () => void;
}

export function HistoryDrawer({ open, onOpenChange, history, onSelect, onClear }: HistoryDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-80">
        <SheetHeader>
          <SheetTitle className="font-heading flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Your Bridge History
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-2">
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">
              No searches yet. Start exploring!
            </p>
          ) : (
            <>
              {history.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onSelect(item.query);
                    onOpenChange(false);
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                >
                  <span className="font-medium text-foreground">{item.query}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                  </span>
                </button>
              ))}
              <Button variant="ghost" size="sm" onClick={onClear} className="mt-4 gap-2 text-destructive">
                <Trash2 className="h-4 w-4" />
                Clear History
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
