import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/textbook';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  KeyRound, 
  Sparkles, 
  ArrowRight, 
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface FullTestSectionProps {
  chapter: Chapter;
  onCompleteChapter: (chapterId: number) => void;
  onNextChapter?: () => void;
  hasNextChapter: boolean;
}

export const FullTestSection: React.FC<FullTestSectionProps> = ({
  chapter,
  onCompleteChapter,
  onNextChapter,
  hasNextChapter,
}) => {
  // questionId -> chosen answer
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const handleSelect = (qId: string, option: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const toggleHint = (qId: string) => {
    setShowHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Score calculation
  let score = 0;
  chapter.test.questions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswer) {
      score += 1;
    }
  });

  const total = chapter.test.questions.length;
  const isPassed = score >= chapter.test.passScore;
  const allAnswered = Object.keys(selectedAnswers).length === total;

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (isPassed) {
      onCompleteChapter(chapter.id);
      // Trigger canvas confetti celebration!
      triggerConfetti();
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowAnswerKey(false);
    setShowHints({});
  };

  return (
    <div className="space-y-6">
      {/* Test Banner Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-amber-800 text-white flex items-center justify-center text-sm font-bold">7</span>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              {chapter.test.title}
            </h2>
            <p className="text-xs text-slate-500">
              Évaluation sommative de fin d’unité · Niveau CE1
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-xl font-bold border border-amber-200">
            Objectif : {chapter.test.passScore} / {total} bonnes réponses
          </span>
        </div>
      </div>

      {/* Submitted Score Card */}
      {isSubmitted && (
        <div
          className={`rounded-2xl p-6 text-center border-2 transition-all ${
            isPassed
              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm'
              : 'bg-amber-50 border-amber-400 text-amber-950 shadow-sm'
          }`}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-xs flex items-center justify-center text-3xl mb-3">
            {isPassed ? '🏆' : '📚'}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            {isPassed ? 'Félicitations, Chapitre Validé !' : 'Bel essai, révise encore un peu !'}
          </h3>

          <p className="text-sm font-semibold mt-1">
            Ton score : <span className="text-lg font-bold underline">{score} / {total}</span>
          </p>

          <p className="text-xs mt-2 max-w-md mx-auto">
            {isPassed
              ? 'Tu as brillamment réussi le test de ce chapitre. Ton badge de maîtrise est validé !'
              : 'Revois la fiche de révision et retente le test pour obtenir ton badge de maîtrise.'}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            <button
              onClick={handleRetake}
              className="min-h-[42px] px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 shadow-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refaire l’évaluation</span>
            </button>

            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              className="min-h-[42px] px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>{showAnswerKey ? 'Masquer le corrigé' : 'Voir le corrigé du maître'}</span>
            </button>

            {hasNextChapter && isPassed && (
              <button
                onClick={onNextChapter}
                className="min-h-[42px] px-5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Passer au chapitre suivant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {chapter.test.questions.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isQCorrect = userAns === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md">
                  Question {idx + 1}
                </span>

                {!isSubmitted && (
                  <button
                    onClick={() => toggleHint(q.id)}
                    className="text-xs text-amber-700 hover:text-amber-900 flex items-center gap-1 font-medium"
                    title="Voir l'indice"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showHints[q.id] ? 'Masquer l’indice' : 'Besoin d’un indice ?'}</span>
                  </button>
                )}
              </div>

              {/* Hint Box */}
              {showHints[q.id] && !isSubmitted && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-3 italic">
                  💡 Indice : {q.hint}
                </div>
              )}

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">
                {q.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt) => {
                  const isSelected = userAns === opt;
                  const isCorrectAnswer = opt === q.correctAnswer;

                  let style = 'bg-slate-50 hover:bg-amber-50/70 border-slate-200 text-slate-800';
                  if (isSelected && !isSubmitted) {
                    style = 'bg-amber-800 text-white border-amber-900 shadow-xs';
                  }

                  if (isSubmitted) {
                    if (isSelected && isQCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300';
                    } else if (isSelected && !isQCorrect) {
                      style = 'bg-red-50 border-red-400 text-red-950 ring-2 ring-red-200';
                    } else if (isCorrectAnswer) {
                      style = 'bg-emerald-50/70 border-emerald-300 text-emerald-900';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      disabled={isSubmitted}
                      onClick={() => handleSelect(q.id, opt)}
                      className={`min-h-[46px] p-3 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between gap-2 transition-all ${style}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && isSelected && (
                        isQCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        )
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submitted Explanation */}
              {isSubmitted && (
                <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Explication : </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button Bar */}
      {!isSubmitted && (
        <div className="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs text-slate-500">
            {Object.keys(selectedAnswers).length} sur {total} questions répondues
          </span>

          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`min-h-[46px] px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2 ${
              allAnswered
                ? 'bg-amber-800 hover:bg-amber-900 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Valider et Calculer ma Note</span>
          </button>
        </div>
      )}

      {/* Teacher Answer Key Accordion (Corrigé du Maître) */}
      {showAnswerKey && (
        <div className="bg-purple-50 rounded-2xl p-5 sm:p-6 border-2 border-purple-300 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <KeyRound className="w-5 h-5 text-purple-700" />
            <h3 className="text-base font-bold text-purple-950 font-heading">
              Corrigé Officiel du Maître & Barème
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-purple-950">
            <div className="p-3 bg-white rounded-xl border border-purple-200">
              <span className="font-bold block mb-1">Bonnes réponses de l’évaluation :</span>
              <ul className="list-disc pl-5 space-y-1">
                {chapter.test.questions.map((q, i) => (
                  <li key={q.id}>
                    <strong>Question {i + 1} :</strong> {q.correctAnswer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-white rounded-xl border border-purple-200">
              <span className="font-bold block mb-1">Observations du professeur :</span>
              <p className="italic">{chapter.test.teacherAnswerKeyNotes}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next Chapter footer if completed */}
      {isSubmitted && isPassed && hasNextChapter && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNextChapter}
            className="min-h-[46px] px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Passer au Chapitre Suivant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// Lightweight canvas confetti trigger without heavy external dependencies
function triggerConfetti(): void {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces: { x: number; y: number; size: number; color: string; speedX: number; speedY: number; rotation: number }[] = [];
  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#eab308'];

  for (let i = 0; i < 70; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 4,
      speedY: Math.random() * 4 + 3,
      rotation: Math.random() * 360,
    });
  }

  let animationFrameId: number;
  let frameCount = 0;

  function render() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frameCount++;

    pieces.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += 4;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (frameCount < 120) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      document.body.removeChild(canvas);
    }
  }

  render();
}
