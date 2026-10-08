import React, { useState } from 'react';
import { Chapter, ExerciseItem } from '../types/textbook';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Star, HelpCircle } from 'lucide-react';

interface ExercisesSectionProps {
  chapter: Chapter;
  onNextStep: () => void;
}

export const ExercisesSection: React.FC<ExercisesSectionProps> = ({
  chapter,
  onNextStep,
}) => {
  // Answers state: exerciseId -> selected string
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // Match pairs state: exerciseId -> { selectedFrench, matches: Record<string, string> }
  const [matchingState, setMatchingState] = useState<
    Record<string, { selectedFrench?: string; matches: Record<string, string> }>
  >({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const handleSelectMC = (exerciseId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [exerciseId]: option }));
    setShowExplanations((prev) => ({ ...prev, [exerciseId]: true }));
  };

  const handleMatchClickFrench = (exerciseId: string, frenchWord: string) => {
    setMatchingState((prev) => {
      const current = prev[exerciseId] || { matches: {} };
      return {
        ...prev,
        [exerciseId]: {
          ...current,
          selectedFrench: frenchWord,
        },
      };
    });
  };

  const handleMatchClickEnglish = (
    exerciseId: string,
    englishWord: string,
    pairs: { french: string; english: string }[]
  ) => {
    const current = matchingState[exerciseId] || { matches: {} };
    if (!current.selectedFrench) return;

    // Check if correct pair
    const matchingPair = pairs.find(
      (p) => p.french === current.selectedFrench && p.english === englishWord
    );

    if (matchingPair) {
      setMatchingState((prev) => {
        const cur = prev[exerciseId] || { matches: {} };
        return {
          ...prev,
          [exerciseId]: {
            selectedFrench: undefined,
            matches: {
              ...cur.matches,
              [cur.selectedFrench!]: englishWord,
            },
          },
        };
      });
    } else {
      // flash incorrect
      setMatchingState((prev) => {
        const cur = prev[exerciseId] || { matches: {} };
        return {
          ...prev,
          [exerciseId]: {
            ...cur,
            selectedFrench: undefined,
          },
        };
      });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setMatchingState({});
    setShowExplanations({});
  };

  // Calculate score
  let correctCount = 0;
  chapter.exercises.forEach((ex) => {
    if (ex.type === 'multiple-choice' || ex.type === 'fill-blank') {
      if (answers[ex.id] === ex.correctAnswer) {
        correctCount += 1;
      }
    } else if (ex.type === 'match-pairs' && ex.pairs) {
      const matches = matchingState[ex.id]?.matches || {};
      if (Object.keys(matches).length === ex.pairs.length) {
        correctCount += 1;
      }
    }
  });

  const allCompleted = correctCount === chapter.exercises.length;

  return (
    <div className="space-y-6">
      {/* Exercise Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">5</span>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              Exercices d’Application (Entraînement)
            </h2>
            <p className="text-xs text-slate-500">
              Réponds aux questions pour gagner des étoiles de champion
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Stars display */}
          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/80 text-xs font-bold text-amber-900">
            <Star className={`w-4 h-4 ${correctCount > 0 ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
            <span>{correctCount} / {chapter.exercises.length} réussis</span>
          </div>

          <button
            onClick={handleReset}
            className="min-h-[38px] px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1 transition-colors"
            title="Recommencer les exercices"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Effacer</span>
          </button>
        </div>
      </div>

      {/* List of exercises */}
      <div className="space-y-5">
        {chapter.exercises.map((ex, idx) => {
          const userAnswer = answers[ex.id];
          const isCorrect = userAnswer === ex.correctAnswer;
          const isAnswered = userAnswer !== undefined;

          return (
            <div
              key={ex.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-amber-900 bg-amber-100/70 px-2.5 py-0.5 rounded-md">
                  Exercice {idx + 1}
                </span>
                <span className="text-xs text-slate-400 capitalize">
                  {ex.type === 'multiple-choice' ? 'Choix multiple' : ex.type === 'fill-blank' ? 'Texte à trous' : 'Jeu des paires'}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">
                {ex.prompt}
              </h3>

              {/* Multiple Choice / Fill Blank Options */}
              {(ex.type === 'multiple-choice' || ex.type === 'fill-blank') && ex.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ex.options.map((opt) => {
                    const isSelected = userAnswer === opt;
                    const isOptionCorrect = opt === ex.correctAnswer;

                    let btnStyle = 'bg-slate-50 hover:bg-amber-50/60 border-slate-200 text-slate-800';
                    if (isAnswered) {
                      if (isSelected && isCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-red-50 border-red-400 text-red-950 ring-2 ring-red-200';
                      } else if (isOptionCorrect) {
                        btnStyle = 'bg-emerald-50/60 border-emerald-300 text-emerald-900';
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectMC(ex.id, opt)}
                        className={`min-h-[46px] p-3 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between gap-2 transition-all active:scale-[0.99] ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isSelected && (
                          isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                          )
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Match Pairs Interactive Grid */}
              {ex.type === 'match-pairs' && ex.pairs && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* French column */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                        Mots en français
                      </div>
                      {ex.pairs.map((p) => {
                        const isMatched = !!matchingState[ex.id]?.matches?.[p.french];
                        const isSelected = matchingState[ex.id]?.selectedFrench === p.french;

                        return (
                          <button
                            key={p.french}
                            disabled={isMatched}
                            onClick={() => handleMatchClickFrench(ex.id, p.french)}
                            className={`w-full min-h-[44px] p-2.5 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${
                              isMatched
                                ? 'bg-emerald-100/70 border-emerald-400 text-emerald-900 opacity-80 cursor-default'
                                : isSelected
                                ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-400'
                                : 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800'
                            }`}
                          >
                            {p.french} {isMatched && '✓'}
                          </button>
                        );
                      })}
                    </div>

                    {/* English column */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                        Traduction anglaise
                      </div>
                      {ex.pairs.map((p) => {
                        const matchedFrench = Object.keys(matchingState[ex.id]?.matches || {}).find(
                          (fr) => matchingState[ex.id]?.matches[fr] === p.english
                        );
                        const isMatched = !!matchedFrench;

                        return (
                          <button
                            key={p.english}
                            disabled={isMatched}
                            onClick={() => handleMatchClickEnglish(ex.id, p.english, ex.pairs!)}
                            className={`w-full min-h-[44px] p-2.5 rounded-xl border text-xs sm:text-sm font-medium text-center transition-all ${
                              isMatched
                                ? 'bg-emerald-100/70 border-emerald-400 text-emerald-900 opacity-80 cursor-default'
                                : 'bg-slate-50 hover:bg-amber-50 border-slate-200 text-slate-800'
                            }`}
                          >
                            {p.english} {isMatched && '✓'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    💡 Clique d’abord sur un mot français, puis sur sa traduction anglaise correspondante.
                  </p>
                </div>
              )}

              {/* Explanation box */}
              {showExplanations[ex.id] && (
                <div className={`mt-3.5 p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2 ${
                  isCorrect
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/80 border-amber-200 text-amber-950'
                }`}>
                  <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                  <div>
                    <span className="font-bold">{isCorrect ? 'Bravo ! ' : 'Explication : '}</span>
                    {ex.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step navigation */}
      <div className="pt-2 flex justify-between items-center">
        {allCompleted && (
          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            Tous les exercices sont réussis !
          </span>
        )}
        <button
          onClick={onNextStep}
          className="ml-auto min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : 🎯 Fiche de Révision</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
