import React, { useState } from 'react';
import { Chapter } from '../types/textbook';
import { Volume2, Play, Smile, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface PronunciationSectionProps {
  chapter: Chapter;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
  onNextStep: () => void;
}

export const PronunciationSection: React.FC<PronunciationSectionProps> = ({
  chapter,
  speechRate,
  onChangeSpeechRate,
  onNextStep,
}) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const handlePlay = (word: string) => {
    setActiveWord(word);
    speakFrench(word, { rate: speechRate });
  };

  return (
    <div className="space-y-6">
      {/* Sound Spotlight Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">3</span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              L’Atelier des Sons & Prononciation
            </h2>
          </div>

          {/* Speed selector for pronunciation */}
          <div className="flex items-center gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200/70 text-xs">
            <span className="text-slate-500 px-2 font-medium">Vitesse :</span>
            <button
              onClick={() => onChangeSpeechRate(0.65)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                speechRate <= 0.7
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              🐢 Lent (0.7x)
            </button>
            <button
              onClick={() => onChangeSpeechRate(0.9)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                speechRate > 0.7
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              🐇 Normal (0.9x)
            </button>
          </div>
        </div>

        {/* Focus Sound Banner */}
        <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200/70 mb-4">
          <div className="text-xs uppercase font-bold tracking-wider text-purple-700 mb-1">
            Son Vedette du Chapitre
          </div>
          <div className="text-base sm:text-lg font-bold text-purple-950 font-heading">
            {chapter.pronunciation.focusSound}
          </div>
          <p className="text-xs sm:text-sm text-purple-900/90 mt-1">
            {chapter.pronunciation.soundRule}
          </p>
        </div>

        {/* Syllable Soundboard */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-amber-700" />
            Écoute, Découpe en Syllabes et Répète
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapter.pronunciation.items.map((item, idx) => {
              const isPlaying = activeWord === item.word;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isPlaying
                      ? 'bg-amber-100/90 border-amber-400 shadow-sm'
                      : 'bg-slate-50/80 hover:bg-amber-50/60 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">
                        {item.word}
                      </span>
                      <span className="text-xs text-amber-800 font-mono">
                        {item.phonetic}
                      </span>
                    </div>

                    {item.syllables && (
                      <div className="text-xs font-semibold text-blue-700 mt-0.5">
                        Découpage : {item.syllables}
                      </div>
                    )}

                    <div className="text-[11px] text-slate-500">
                      {item.english}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlay(item.word)}
                    className="min-h-[42px] min-w-[42px] flex items-center justify-center rounded-xl bg-white hover:bg-amber-100 border border-amber-200 text-amber-900 shadow-xs active:scale-95 transition-transform shrink-0"
                    title={`Prononcer ${item.word}`}
                    aria-label={`Prononcer ${item.word}`}
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tongue Twister (Virelangue) if present */}
      {chapter.pronunciation.tongueTwister && (
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-300 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm sm:text-base">
              <Smile className="w-5 h-5 text-amber-700" />
              <span>Le Défi du Virelangue (Tongue Twister)</span>
            </div>
            <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
              Défi oral !
            </span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-amber-200/90 my-2">
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed">
              « {chapter.pronunciation.tongueTwister.french} »
            </p>
            <p className="text-xs text-slate-500 mt-1 italic">
              ({chapter.pronunciation.tongueTwister.english})
            </p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={() => speakFrench(chapter.pronunciation.tongueTwister?.french ?? '', { rate: speechRate })}
              className="min-h-[42px] px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Écouter le virelangue</span>
            </button>
            <span className="text-xs text-amber-900/80">
              Essaie de le répéter 3 fois de plus en plus vite sans te tromper !
            </span>
          </div>
        </div>
      )}

      {/* Step navigation */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onNextStep}
          className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : ✏️ Exemples & Dialogues</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
