import React from 'react';
import { Chapter } from '../types/textbook';
import { Volume2, Bookmark, GraduationCap, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface TextbookSpreadViewProps {
  chapter: Chapter;
  speechRate: number;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
  hasPrevChapter: boolean;
  hasNextChapter: boolean;
  onSwitchToInteractive: () => void;
}

export const TextbookSpreadView: React.FC<TextbookSpreadViewProps> = ({
  chapter,
  speechRate,
  onPrevChapter,
  onNextChapter,
  hasPrevChapter,
  hasNextChapter,
  onSwitchToInteractive,
}) => {
  const leftPageNum = chapter.pageNumber;
  const rightPageNum = chapter.pageNumber + 1;

  return (
    <div className="space-y-4">
      {/* Top Navigator Bar for Textbook Spreads */}
      <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-amber-700" />
          <span className="text-xs sm:text-sm font-bold text-slate-900">
            {chapter.frenchTitle} — Pages {leftPageNum} & {rightPageNum}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={!hasPrevChapter}
            onClick={onPrevChapter}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
              hasPrevChapter
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Page précédente</span>
          </button>

          <button
            disabled={!hasNextChapter}
            onClick={onNextChapter}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
              hasNextChapter
                ? 'bg-amber-800 text-white hover:bg-amber-900'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Page suivante</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Realistic Book Open Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 bg-[#e8e2d5] p-2 sm:p-4 rounded-3xl shadow-lg border border-amber-300/80">
        
        {/* LEFT PAGE (PAGE PAIRE) */}
        <div className="bg-[#FAF7F2] p-5 sm:p-7 rounded-2xl lg:rounded-r-none lg:border-r-2 border-amber-200/90 relative overflow-hidden flex flex-col justify-between shadow-xs">
          {/* French ruled margin line on left */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[2px] bg-red-300 pointer-events-none" />

          <div className="pl-6 sm:pl-8 space-y-5">
            {/* Page Header */}
            <div className="flex items-center justify-between border-b border-amber-200/80 pb-2 text-[11px] text-slate-500 font-medium">
              <span>{chapter.unitTag}</span>
              <span className="font-bold text-amber-900">Page {leftPageNum}</span>
            </div>

            {/* Title */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-700">
                {chapter.gradeLevel} · Cours Élémentaire
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading leading-tight mt-0.5">
                {chapter.frenchTitle}
              </h1>
              <p className="text-xs text-slate-500 italic mt-0.5">
                {chapter.englishTitle}
              </p>
            </div>

            {/* Featured Image vignette if present */}
            {chapter.featuredImage && (
              <div className="rounded-xl overflow-hidden border border-amber-200 max-h-48 bg-amber-50">
                <img
                  src={chapter.featuredImage}
                  alt={chapter.imageAlt ?? chapter.frenchTitle}
                  className="w-full h-full object-cover max-h-48"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* 1. La Leçon */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-amber-950 flex items-center gap-1.5 uppercase tracking-wide border-b border-amber-200/60 pb-1">
                <span>📖 1. La Règle du Jour</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {chapter.lesson.introduction}
              </p>

              {chapter.lesson.grammarRules.map((rule, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-amber-200/70 text-xs space-y-1.5">
                  <span className="font-bold text-blue-900 block">{rule.title}</span>
                  <p className="text-slate-600">{rule.summary}</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                    {rule.rulePoints.slice(0, 3).map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 2. Boîte à Vocabulaire */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-amber-950 flex items-center justify-between uppercase tracking-wide border-b border-amber-200/60 pb-1">
                <span>📚 2. Mots de Vocabulaire</span>
                <span className="text-[10px] text-slate-400 font-normal">Cliquer pour écouter</span>
              </h2>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {chapter.lesson.vocabularyBox.slice(0, 6).map((v) => (
                  <button
                    key={v.id}
                    onClick={() => speakFrench(v.french, { rate: speechRate })}
                    className="p-2 rounded-lg bg-white hover:bg-amber-100/60 border border-amber-200/70 text-left flex items-center justify-between gap-1 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">{v.french}</span>
                      <span className="text-[10px] text-slate-500">{v.english}</span>
                    </div>
                    <Volume2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Teacher's Note Stamp */}
            <div className="p-3 rounded-xl bg-[#FFFDF0] border border-dashed border-amber-300 text-xs">
              <div className="flex items-center gap-1 font-bold text-amber-900 mb-1 font-handwriting text-base">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Note du Maître</span>
              </div>
              <p className="font-handwriting text-sm text-slate-800 leading-snug">
                « {chapter.lesson.teacherNote.advice} »
              </p>
            </div>
          </div>

          {/* Left Page Footer */}
          <div className="pl-6 sm:pl-8 pt-4 mt-6 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-slate-400">
            <span>Mon Manuel de Français · CE1</span>
            <span className="font-bold text-slate-600">{leftPageNum}</span>
          </div>
        </div>

        {/* RIGHT PAGE (PAGE IMPAIRE) */}
        <div className="bg-[#FAF7F2] p-5 sm:p-7 rounded-2xl lg:rounded-l-none border-t lg:border-t-0 border-amber-200/90 relative overflow-hidden flex flex-col justify-between shadow-xs">
          {/* French ruled margin line on right */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[2px] bg-red-300 pointer-events-none" />

          <div className="pl-6 sm:pl-8 space-y-5">
            {/* Page Header */}
            <div className="flex items-center justify-between border-b border-amber-200/80 pb-2 text-[11px] text-slate-500 font-medium">
              <span className="font-bold text-amber-900">Page {rightPageNum}</span>
              <span>Cahier d’Activités & Exercices</span>
            </div>

            {/* 3. Sons et Prononciation */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-amber-950 flex items-center justify-between uppercase tracking-wide border-b border-amber-200/60 pb-1">
                <span>🗣️ 3. Prononciation & Sons</span>
              </h2>
              <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200 text-xs">
                <span className="font-bold text-purple-900 block">{chapter.pronunciation.focusSound}</span>
                <p className="text-purple-800/80 text-[11px] mt-0.5">{chapter.pronunciation.soundRule}</p>
              </div>
            </div>

            {/* 4. Mini Dialogues */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-amber-950 flex items-center justify-between uppercase tracking-wide border-b border-amber-200/60 pb-1">
                <span>✏️ 4. Dialogue Modèle</span>
              </h2>
              <div className="p-3 bg-white rounded-xl border border-amber-200/70 space-y-2 text-xs">
                {chapter.examples.dialogues.slice(0, 2).map((d) => (
                  <div key={d.id} className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-bold text-slate-900">{d.speaker} : </span>
                      <span className="italic text-slate-800">« {d.french} »</span>
                      <span className="block text-[10px] text-slate-500">({d.english})</span>
                    </div>
                    <button
                      onClick={() => speakFrench(d.audioText, { rate: speechRate })}
                      className="p-1 rounded bg-amber-50 text-amber-800 hover:bg-amber-100"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Exercices d'application */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-amber-950 uppercase tracking-wide border-b border-amber-200/60 pb-1">
                <span>📝 5. Exercices sur Cahier</span>
              </h2>
              <div className="space-y-2 text-xs">
                {chapter.exercises.map((ex, idx) => (
                  <div key={ex.id} className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-amber-900 block mb-1">
                      Exercice {idx + 1} : {ex.prompt}
                    </span>
                    {ex.options && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {ex.options.map((opt, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] border border-slate-200">
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Quick check & Cultural fact */}
            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
              <span className="font-bold text-emerald-950 flex items-center gap-1 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Le Saviez-vous ?
              </span>
              <p className="text-[11px] text-emerald-900/90 leading-tight">
                {chapter.lesson.culturalInsight.fact}
              </p>
            </div>

            {/* Interactive Mode CTA */}
            <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-300 text-center">
              <p className="text-xs font-semibold text-amber-950 mb-2">
                Envie de faire les quiz interactifs et les flashcards animées ?
              </p>
              <button
                onClick={onSwitchToInteractive}
                className="w-full py-2 px-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs shadow-xs transition-colors"
              >
                Ouvrir le Mode Interactif & Test Noté
              </button>
            </div>
          </div>

          {/* Right Page Footer */}
          <div className="pl-6 sm:pl-8 pt-4 mt-6 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-bold text-slate-600">{rightPageNum}</span>
            <span>Édition Scolaire CE1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
