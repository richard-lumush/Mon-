import React, { useState } from 'react';
import { Chapter } from '../types/textbook';
import { Volume2, ArrowRight, Sparkles, Check } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface VisualsSectionProps {
  chapter: Chapter;
  speechRate: number;
  onNextStep: () => void;
}

export const VisualsSection: React.FC<VisualsSectionProps> = ({
  chapter,
  speechRate,
  onNextStep,
}) => {
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);

  const handlePlay = (text: string) => {
    setLastPlayed(text);
    speakFrench(text, { rate: speechRate });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">2</span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
            {chapter.visuals.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          {chapter.visuals.caption} Touche chaque carte pour entendre la prononciation française.
        </p>
      </div>

      {/* Featured Illustration Vignette if available */}
      {chapter.featuredImage && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-xs overflow-hidden">
          <div className="relative rounded-xl overflow-hidden max-h-[360px] bg-amber-50 flex items-center justify-center">
            <img
              src={chapter.featuredImage}
              alt={chapter.imageAlt ?? chapter.frenchTitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[360px]"
              onError={(e) => {
                // Fallback styled container if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 italic">
            <span>« {chapter.imageAlt ?? chapter.frenchTitle} »</span>
            <span className="font-sans font-medium text-amber-800">Planche illustrée CE1</span>
          </div>
        </div>
      )}

      {/* Interactive Soundboard Visual Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {chapter.visuals.items.map((item, idx) => {
          const isCurrent = lastPlayed === item.pronounceText;

          return (
            <button
              key={idx}
              onClick={() => handlePlay(item.pronounceText)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-[140px] group relative active:scale-95 ${
                isCurrent
                  ? 'bg-amber-100/90 border-amber-400 shadow-sm ring-2 ring-amber-400/40'
                  : 'bg-white hover:bg-amber-50/80 border-amber-200/80 shadow-xs'
              }`}
            >
              {/* Top Row: Icon / Visual cue & Audio pill */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-2xl sm:text-3xl filter drop-shadow-xs">
                  {item.iconOrColor ?? '🌟'}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isCurrent
                      ? 'bg-amber-800 text-white'
                      : 'bg-amber-100/80 text-amber-800 group-hover:bg-amber-200'
                  }`}
                >
                  {isCurrent ? <Check className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </span>
              </div>

              {/* Bottom text */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-amber-900">
                  {item.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  {item.translation}
                </p>
              </div>

              {isCurrent && (
                <span className="absolute top-2 right-12 text-[10px] font-semibold text-amber-800 animate-pulse">
                  Lecture en cours...
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Pedagogical Hint */}
      <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/70 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-amber-700 shrink-0" />
        <p className="text-xs sm:text-sm text-amber-900">
          <strong>Astuce d’écoute :</strong> Répète chaque mot 3 fois à voix haute après avoir cliqué sur la carte pour entraîner tes cordes vocales !
        </p>
      </div>

      {/* Step navigation */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onNextStep}
          className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : 🗣️ Prononciation & Sons</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
