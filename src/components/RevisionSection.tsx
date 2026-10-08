import React, { useState } from 'react';
import { Chapter } from '../types/textbook';
import { Target, RotateCw, Volume2, ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface RevisionSectionProps {
  chapter: Chapter;
  speechRate: number;
  onNextStep: () => void;
}

export const RevisionSection: React.FC<RevisionSectionProps> = ({
  chapter,
  speechRate,
  onNextStep,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = chapter.revision.flashcards;
  const currentCard = cards[currentCardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">6</span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
            Fiche de Révision Express & Cartes Mémoire
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Révise les points essentiels avant de passer la grande évaluation du chapitre !
        </p>
      </div>

      {/* Interactive Flashcard Component */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
          <span className="font-semibold text-amber-900">
            Carte Mémoire {currentCardIndex + 1} sur {cards.length}
          </span>
          <span>Touche la carte pour la retourner</span>
        </div>

        {/* The Flip Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`cursor-pointer rounded-2xl p-6 sm:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between items-center text-center transition-all duration-300 border-2 select-none ${
            isFlipped
              ? 'bg-amber-800 text-white border-amber-900 shadow-md'
              : 'bg-amber-50/80 hover:bg-amber-100/50 text-slate-900 border-amber-300/80 shadow-xs'
          }`}
        >
          {/* Card top indicator */}
          <div className="w-full flex items-center justify-between text-xs">
            <span className={`px-2 py-0.5 rounded font-bold ${isFlipped ? 'bg-amber-900 text-amber-100' : 'bg-amber-200 text-amber-900'}`}>
              {isFlipped ? 'Traduction & Réponse' : 'Question / Mot'}
            </span>
            <RotateCw className={`w-4 h-4 ${isFlipped ? 'text-amber-300' : 'text-amber-700'}`} />
          </div>

          {/* Card Body */}
          <div className="my-auto py-4">
            <div className={`text-xl sm:text-2xl font-bold font-heading mb-1.5 ${isFlipped ? 'text-white' : 'text-slate-900'}`}>
              {isFlipped ? currentCard.back : currentCard.front}
            </div>
            {currentCard.hint && !isFlipped && (
              <div className="text-xs text-slate-500 italic mt-2">
                💡 Indice : {currentCard.hint}
              </div>
            )}
          </div>

          {/* Card bottom actions */}
          <div className="w-full flex items-center justify-between text-xs pt-2 border-t border-amber-200/40">
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakFrench(currentCard.front, { rate: speechRate });
              }}
              className={`min-h-[36px] px-3 rounded-lg flex items-center gap-1.5 font-medium transition-colors ${
                isFlipped
                  ? 'bg-amber-900 text-amber-100 hover:bg-amber-950'
                  : 'bg-white text-amber-900 hover:bg-amber-100 border border-amber-200 shadow-xs'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Écouter</span>
            </button>
            <span className={isFlipped ? 'text-amber-200' : 'text-slate-400'}>
              Cliquer pour pivoter
            </span>
          </div>
        </div>

        {/* Card navigation buttons */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePrevCard}
            className="min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Précédente</span>
          </button>

          <span className="text-xs font-bold text-slate-600">
            {currentCardIndex + 1} / {cards.length}
          </span>

          <button
            onClick={handleNextCard}
            className="min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Suivante</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Summary Recap List */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <h3 className="text-base font-bold text-slate-900">
            Points Clés du Chapitre à Mémoriser
          </h3>
        </div>

        <ul className="space-y-2">
          {chapter.revision.summaryList.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 p-2 rounded-lg bg-amber-50/50 border border-amber-100"
            >
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Golden Rule Callout */}
      <div className="bg-amber-100/70 rounded-2xl p-4 sm:p-5 border border-amber-300 text-amber-950 shadow-xs">
        <div className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-1">
          La Règle d’Or du CE1
        </div>
        <p className="text-sm font-semibold leading-relaxed">
          {chapter.revision.quickCheckRule}
        </p>
      </div>

      {/* Step navigation */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onNextStep}
          className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : ✅ Évaluation Complète (Test)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
