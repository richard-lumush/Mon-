import React, { useState } from 'react';
import { Chapter } from '../types/textbook';
import { Volume2, Play, Users, ArrowRight, Lightbulb } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface ExamplesSectionProps {
  chapter: Chapter;
  speechRate: number;
  onNextStep: () => void;
}

export const ExamplesSection: React.FC<ExamplesSectionProps> = ({
  chapter,
  speechRate,
  onNextStep,
}) => {
  const [activeDialogueId, setActiveDialogueId] = useState<string | null>(null);

  const handlePlayLine = (id: string, text: string) => {
    setActiveDialogueId(id);
    speakFrench(text, {
      rate: speechRate,
      onEnd: () => setActiveDialogueId(null),
    });
  };

  const handlePlayFullConversation = async () => {
    for (const d of chapter.examples.dialogues) {
      setActiveDialogueId(d.id);
      speakFrench(d.audioText, { rate: speechRate });
      await new Promise((r) => setTimeout(r, 2600));
    }
    setActiveDialogueId(null);
  };

  return (
    <div className="space-y-6">
      {/* Dialogue Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                {chapter.examples.title}
              </h2>
              <p className="text-xs text-slate-500">
                Lis et écoute les dialogues des enfants de l’école
              </p>
            </div>
          </div>

          <button
            onClick={handlePlayFullConversation}
            className="min-h-[42px] px-4 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-semibold text-xs flex items-center gap-2 border border-amber-300 shadow-xs transition-colors"
          >
            <Play className="w-3.5 h-3.5 text-amber-800" />
            <span>Écouter tout le dialogue</span>
          </button>
        </div>

        {/* Dialogues list with speech bubbles */}
        <div className="space-y-3.5 my-4">
          {chapter.examples.dialogues.map((d, idx) => {
            const isPlaying = activeDialogueId === d.id;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={d.id}
                className={`flex gap-3 items-start ${isEven ? 'flex-row-reverse' : ''}`}
              >
                {/* Speaker Avatar */}
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-xl shrink-0 shadow-xs">
                  {d.avatarText ?? '🧒'}
                </div>

                {/* Speech Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 sm:p-4 border transition-all ${
                    isPlaying
                      ? 'bg-amber-100/90 border-amber-400 shadow-sm ring-2 ring-amber-400/30'
                      : isEven
                      ? 'bg-blue-50/80 border-blue-200'
                      : 'bg-amber-50/60 border-amber-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-xs font-bold text-slate-900">
                      {d.speaker}
                    </span>
                    <button
                      onClick={() => handlePlayLine(d.id, d.audioText)}
                      className="min-h-[34px] min-w-[34px] flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-amber-800 border border-amber-200/80 shadow-xs transition-colors"
                      title="Écouter cette réplique"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    « {d.french} »
                  </p>
                  <p className="text-xs text-slate-600 mt-1 italic">
                    {d.english}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Phrases Box */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Les Phrases Clés à Retenir
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {chapter.examples.keyPhrases.map((kp, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-amber-50/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900 text-sm">
                  {kp.french}
                </span>
                <button
                  onClick={() => speakFrench(kp.french, { rate: speechRate })}
                  className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-lg bg-white text-amber-800 border border-amber-200 shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {kp.english}
              </div>
              <div className="text-[11px] text-amber-800/90 mt-1 font-medium">
                💡 {kp.usageTip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step navigation */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onNextStep}
          className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : 📝 Exercices d’Entraînement</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
