const GAMIFICATION_KEY = "conceptbridge_gamification";

export interface GamificationState {
  knowledgePoints: number;
  currentStreak: number;
  lastQuizDate: string | null; // ISO date string (YYYY-MM-DD)
  quizzesCompleted: number;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function getGamification(): GamificationState {
  try {
    const raw = localStorage.getItem(GAMIFICATION_KEY);
    if (!raw) return { knowledgePoints: 0, currentStreak: 0, lastQuizDate: null, quizzesCompleted: 0 };
    const state: GamificationState = JSON.parse(raw);
    // Reset streak if last quiz was before yesterday
    if (state.lastQuizDate && state.lastQuizDate !== today() && state.lastQuizDate !== yesterday()) {
      state.currentStreak = 0;
    }
    return state;
  } catch {
    return { knowledgePoints: 0, currentStreak: 0, lastQuizDate: null, quizzesCompleted: 0 };
  }
}

export function recordQuizCompletion(correctCount: number, totalQuestions: number): { state: GamificationState; streakMilestone: boolean } {
  const state = getGamification();
  const pointsEarned = correctCount * 10 + (correctCount === totalQuestions ? 25 : 0);
  state.knowledgePoints += pointsEarned;
  state.quizzesCompleted += 1;

  const todayStr = today();
  if (state.lastQuizDate !== todayStr) {
    if (state.lastQuizDate === yesterday()) {
      state.currentStreak += 1;
    } else {
      state.currentStreak = 1;
    }
  }
  state.lastQuizDate = todayStr;

  const streakMilestone = state.currentStreak > 0 && state.currentStreak % 5 === 0;

  localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
  return { state, streakMilestone };
}
