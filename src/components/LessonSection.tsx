import React from 'react';
import { Chapter } from '../types/textbook';
import { Volume2, Lightbulb, BookmarkCheck, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface LessonSectionProps {
  chapter: Chapter;
  speechRate: number;
  onNextStep: () => void;
}

export const LessonSection: React.FC<LessonSectionProps> = ({
  chapter,
  speechRate,
  onNextStep,
}) => {
  return (
    <div className="space-y-6">
      {/* Textbook Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-amber-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-red-400" />
        <div className="pl-3 sm:pl-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-amber-800 font-semibold mb-1">
            <span>{chapter.unitTag}</span>
            <span className="bg-amber-100 px-2 py-0.5 rounded-full text-amber-900 border border-amber-200">
              Page {chapter.pageNumber} · {chapter.gradeLevel}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            {chapter.frenchTitle}
          </h1>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            {chapter.englishTitle}
          </p>

          <div className="mt-3 p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 flex items-start gap-2.5">
            <BookmarkCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-950">
              <span className="font-bold">Objectif de la leçon : </span>
              {chapter.objective}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Introduction */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm font-bold">1</span>
          Introduction au Thème
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {chapter.lesson.introduction}
        </p>
      </div>

      {/* Grammar Rules Section */}
      <div className="space-y-4">
        {chapter.lesson.grammarRules.map((rule, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-blue-950">
                {rule.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
              {rule.summary}
            </p>

            {/* Rule points */}
            <div className="space-y-2 mb-4">
              {rule.rulePoints.map((point, ptIdx) => (
                <div
                  key={ptIdx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Rule Tip */}
            {rule.tips && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="italic">{rule.tips}</span>
              </div>
            )}

            {/* Grammar Table */}
            {rule.tableData && (
              <div className="overflow-x-auto rounded-xl border border-slate-200 mt-3">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-blue-50/80 text-blue-950 font-semibold border-b border-slate-200">
                    <tr>
                      {rule.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-2.5 sm:p-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rule.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-amber-50/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 sm:p-3 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vocabulary Box */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Boîte à Vocabulaire (Mots Clés)
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Touche <Volume2 className="w-3.5 h-3.5 inline text-amber-700" /> pour écouter
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapter.lesson.vocabularyBox.map((vocab) => (
            <div
              key={vocab.id}
              className="p-3 rounded-xl bg-amber-50/50 hover:bg-amber-100/50 border border-amber-200/70 transition-all flex items-start justify-between gap-2"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {vocab.french}
                  </span>
                  <span className="text-xs text-amber-800/80 font-mono">
                    {vocab.phonetic}
                  </span>
                  {vocab.gender && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded font-bold uppercase bg-slate-200 text-slate-700">
                      {vocab.gender}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {vocab.english}
                </div>
                {vocab.exampleSentence && (
                  <div className="text-[11px] text-slate-500 italic mt-1">
                    « {vocab.exampleSentence} »
                  </div>
                )}
              </div>

              <button
                onClick={() => speakFrench(vocab.french, { rate: speechRate })}
                className="min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg bg-white hover:bg-amber-200/80 border border-amber-200 text-amber-800 shadow-xs shrink-0 active:scale-95 transition-transform"
                title={`Écouter : ${vocab.french}`}
                aria-label={`Écouter ${vocab.french}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher's Note (Authentic Pedagogical Margin) */}
      <div className="bg-[#FFFDF5] rounded-2xl p-5 border-2 border-dashed border-amber-300 relative shadow-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2 font-handwriting text-lg sm:text-xl">
          <GraduationCap className="w-5 h-5 text-amber-700" />
          <span>Note du Maître · Conseils pédagogiques</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-handwriting text-base sm:text-lg">
          « {chapter.lesson.teacherNote.advice} »
        </p>

        {chapter.lesson.teacherNote.commonMistake && (
          <div className="mt-3 p-2.5 bg-red-50 rounded-xl border border-red-200/80 text-xs text-red-900">
            <span className="font-bold">⚠️ Erreur fréquente des élèves : </span>
            {chapter.lesson.teacherNote.commonMistake}
          </div>
        )}

        {chapter.lesson.teacherNote.classroomActivity && (
          <div className="mt-2.5 p-2.5 bg-blue-50 rounded-xl border border-blue-200/80 text-xs text-blue-900">
            <span className="font-bold">🎯 En classe ou à la maison : </span>
            {chapter.lesson.teacherNote.classroomActivity}
          </div>
        )}
      </div>

      {/* Cultural Insight Card */}
      <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-200 text-emerald-950 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-emerald-900 mb-1">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>Le Saviez-vous ? · {chapter.lesson.culturalInsight.title}</span>
        </div>
        <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed mt-1">
          {chapter.lesson.culturalInsight.fact}
        </p>
      </div>

      {/* Bottom Step Forward Button */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onNextStep}
          className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Étape suivante : 🖼️ Découvrir les Images</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
