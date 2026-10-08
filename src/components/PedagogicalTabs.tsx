import React from 'react';
import { PedagogicalStep } from '../types/textbook';
import { 
  BookOpen, 
  Image as ImageIcon, 
  Volume2, 
  PenTool, 
  FileCheck2, 
  Target, 
  Award, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface PedagogicalTabsProps {
  currentStep: PedagogicalStep;
  onSelectStep: (step: PedagogicalStep) => void;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
  hasPrevChapter?: boolean;
  hasNextChapter?: boolean;
}

const steps: { key: PedagogicalStep; label: string; icon: React.FC<{ className?: string }>; number: number }[] = [
  { key: 'lesson', label: 'Leçon', icon: BookOpen, number: 1 },
  { key: 'visuals', label: 'Images', icon: ImageIcon, number: 2 },
  { key: 'pronunciation', label: 'Sons & Voix', icon: Volume2, number: 3 },
  { key: 'examples', label: 'Exemples', icon: PenTool, number: 4 },
  { key: 'exercises', label: 'Exercices', icon: FileCheck2, number: 5 },
  { key: 'revision', label: 'Révision', icon: Target, number: 6 },
  { key: 'test', label: 'Évaluation', icon: Award, number: 7 },
];

export const PedagogicalTabs: React.FC<PedagogicalTabsProps> = ({
  currentStep,
  onSelectStep,
  onPrevChapter,
  onNextChapter,
  hasPrevChapter,
  hasNextChapter,
}) => {
  return (
    <div className="bg-white/90 border-b border-amber-200/70 sticky top-[57px] z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 flex items-center justify-between gap-1 py-1.5 overflow-x-auto no-scrollbar">
        {/* Prev chapter button on mobile */}
        {hasPrevChapter && (
          <button
            onClick={onPrevChapter}
            className="shrink-0 min-h-[40px] px-2 text-xs font-medium text-amber-900 hover:bg-amber-100 rounded-lg flex items-center gap-1"
            title="Chapitre précédent"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Préc.</span>
          </button>
        )}

        {/* The 7 Steps */}
        <div className="flex items-center gap-1 sm:gap-2 mx-auto">
          {steps.map((st) => {
            const Icon = st.icon;
            const isActive = currentStep === st.key;

            return (
              <button
                key={st.key}
                onClick={() => onSelectStep(st.key)}
                className={`min-h-[44px] px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-amber-50/70 hover:bg-amber-100/80 text-slate-700 border border-amber-200/60'
                }`}
                title={`Étape ${st.number} : ${st.label}`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-amber-900 text-amber-100' : 'bg-amber-200/80 text-amber-900'
                  }`}
                >
                  {st.number}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-amber-800'}`} />
                <span className="text-xs">{st.label}</span>
              </button>
            );
          })}
        </div>

        {/* Next chapter button on mobile */}
        {hasNextChapter && (
          <button
            onClick={onNextChapter}
            className="shrink-0 min-h-[40px] px-2 text-xs font-medium text-amber-900 hover:bg-amber-100 rounded-lg flex items-center gap-1"
            title="Chapitre suivant"
          >
            <span className="hidden sm:inline">Suiv.</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
