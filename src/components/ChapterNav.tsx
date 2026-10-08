import React from 'react';
import { Chapter } from '../types/textbook';
import { BookOpen, CheckCircle, ChevronRight, X, Sparkles } from 'lucide-react';

interface ChapterNavProps {
  chapters: Chapter[];
  currentChapterId: number;
  onSelectChapter: (id: number) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  completedChapters: Set<number>;
}

export const ChapterNav: React.FC<ChapterNavProps> = ({
  chapters,
  currentChapterId,
  onSelectChapter,
  isOpenMobile,
  onCloseMobile,
  completedChapters,
}) => {
  const content = (
    <div className="flex flex-col h-full bg-[#FAF7F2] border-r border-amber-200/80">
      {/* Sommaire Header */}
      <div className="p-4 border-b border-amber-200/70 flex items-center justify-between bg-amber-50/70">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-800" />
          <div>
            <h2 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
              Table des Matières
            </h2>
            <p className="text-[11px] text-slate-500">
              Programme CE1 · 11 Chapitres
            </p>
          </div>
        </div>
        <button
          onClick={onCloseMobile}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-amber-100"
          aria-label="Fermer le sommaire"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress pill indicator */}
      <div className="px-4 py-2 bg-amber-100/40 border-b border-amber-200/50 flex items-center justify-between text-xs text-amber-900">
        <span>Progression élève</span>
        <span className="font-semibold">{completedChapters.size} / {chapters.length} validés</span>
      </div>

      {/* Chapters list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
        {chapters.map((chap) => {
          const isActive = chap.id === currentChapterId;
          const isDone = completedChapters.has(chap.id);

          return (
            <button
              key={chap.id}
              onClick={() => {
                onSelectChapter(chap.id);
                onCloseMobile();
              }}
              className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 min-h-[52px] ${
                isActive
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white hover:bg-amber-100/60 text-slate-800 border border-amber-200/60'
              }`}
            >
              {/* Chapter number badge */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  isActive
                    ? 'bg-amber-900 text-amber-100 border border-amber-700'
                    : isDone
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-200'
                }`}
              >
                {isDone ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : chap.id}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-[10px] font-medium tracking-tight ${
                      isActive ? 'text-amber-200' : 'text-amber-700'
                    }`}
                  >
                    Page {chap.pageNumber} · {chap.unitTag.split(':')[0]}
                  </span>
                  {isActive && (
                    <span className="text-[10px] bg-amber-700/60 text-amber-100 px-1.5 py-0.2 rounded font-semibold">
                      En cours
                    </span>
                  )}
                </div>
                <h3
                  className={`text-xs font-bold truncate leading-snug ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {chap.frenchTitle.replace(/^Chapitre \d+ : /, '')}
                </h3>
                <p
                  className={`text-[11px] truncate ${
                    isActive ? 'text-amber-100/80' : 'text-slate-500'
                  }`}
                >
                  {chap.englishTitle}
                </p>
              </div>

              <ChevronRight
                className={`w-4 h-4 shrink-0 mt-2 ${
                  isActive ? 'text-amber-200' : 'text-slate-400'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Textbook bottom badge */}
      <div className="p-3 border-t border-amber-200/80 bg-amber-50/50 text-[11px] text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-amber-900 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Conforme programme CE1
        </span>
        <span>Édition 2026</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop permanent drawer/sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-[57px] h-[calc(100vh-57px)]">
        {content}
      </aside>

      {/* Mobile slide-over drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
