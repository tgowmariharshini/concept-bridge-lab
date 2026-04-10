const STORAGE_KEY = "conceptbridge_history";
const MAX_ITEMS = 10;

export interface HistoryItem {
  query: string;
  timestamp: number;
}

export function getHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addToHistory(query: string): HistoryItem[] {
  const history = getHistory().filter(
    (h) => h.query.toLowerCase() !== query.toLowerCase()
  );
  history.unshift({ query, timestamp: Date.now() });
  const trimmed = history.slice(0, MAX_ITEMS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  return trimmed;
}

export function clearHistory(): HistoryItem[] {
  localStorage.removeItem(STORAGE_KEY);
  return [];
}
