/**
 * Mon Manuel de Français - Grade 2 (CE1)
 * Interactive School Textbook Application
 */

import React, { useState } from 'react';
import { textbookChapters } from './data/chaptersData';
import { PedagogicalStep } from './types/textbook';
import { Header } from './components/Header';
import { ChapterNav } from './components/ChapterNav';
import { PedagogicalTabs } from './components/PedagogicalTabs';
import { LessonSection } from './components/LessonSection';
import { VisualsSection } from './components/VisualsSection';
import { PronunciationSection } from './components/PronunciationSection';
import { ExamplesSection } from './components/ExamplesSection';
import { ExercisesSection } from './components/ExercisesSection';
import { RevisionSection } from './components/RevisionSection';
import { FullTestSection } from './components/FullTestSection';
import { TextbookSpreadView } from './components/TextbookSpreadView';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [currentChapterId, setCurrentChapterId] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<PedagogicalStep>('lesson');
  const [viewMode, setViewMode] = useState<'mobile' | 'textbook'>('mobile');
  const [speechRate, setSpeechRate] = useState<number>(0.75); // Gentle speed for young learners
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(new Set());
  const [isTocOpenMobile, setIsTocOpenMobile] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  const currentChapter = textbookChapters.find((c) => c.id === currentChapterId) ?? textbookChapters[0];
  const currentIndex = textbookChapters.findIndex((c) => c.id === currentChapterId);
  const hasPrevChapter = currentIndex > 0;
  const hasNextChapter = currentIndex < textbookChapters.length - 1;

  const handlePrevChapter = () => {
    if (hasPrevChapter) {
      setCurrentChapterId(textbookChapters[currentIndex - 1].id);
      setCurrentStep('lesson');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (hasNextChapter) {
      setCurrentChapterId(textbookChapters[currentIndex + 1].id);
      setCurrentStep('lesson');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectChapter = (id: number) => {
    setCurrentChapterId(id);
    setCurrentStep('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteChapter = (id: number) => {
    setCompletedChapters((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const stepSequence: PedagogicalStep[] = [
    'lesson',
    'visuals',
    'pronunciation',
    'examples',
    'exercises',
    'revision',
    'test',
  ];

  const handleNextStep = () => {
    const curIdx = stepSequence.indexOf(currentStep);
    if (curIdx < stepSequence.length - 1) {
      const next = stepSequence[curIdx + 1];
      setCurrentStep(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode((m) => (m === 'mobile' ? 'textbook' : 'mobile'))}
        speechRate={speechRate}
        onChangeSpeechRate={setSpeechRate}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenTableOfContents={() => setIsTocOpenMobile(true)}
        currentChapterNumber={currentChapter.id}
      />

      {/* Main Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Table of Contents Drawer / Sidebar */}
        <ChapterNav
          chapters={textbookChapters}
          currentChapterId={currentChapterId}
          onSelectChapter={handleSelectChapter}
          isOpenMobile={isTocOpenMobile}
          onCloseMobile={() => setIsTocOpenMobile(false)}
          completedChapters={completedChapters}
        />

        {/* Central Content Area */}
        <main className="flex-1 min-w-0 p-3 sm:p-6 lg:p-8 flex flex-col">
          {viewMode === 'textbook' ? (
            /* Authentic Textbook Dual-Page Spread View */
            <TextbookSpreadView
              chapter={currentChapter}
              speechRate={speechRate}
              onPrevChapter={handlePrevChapter}
              onNextChapter={handleNextChapter}
              hasPrevChapter={hasPrevChapter}
              hasNextChapter={hasNextChapter}
              onSwitchToInteractive={() => {
                setViewMode('mobile');
                setCurrentStep('exercises');
              }}
            />
          ) : (
            /* Interactive 7-Step Pedagogical Flow */
            <div className="max-w-4xl mx-auto w-full space-y-6">
              {/* Pedagogical Step Tabs (📖 Lesson → 🖼️ Image → 🗣️ Pronunciation → ✏️ Examples → 📝 Exercises → 🎯 Revision → ✅ Test) */}
              <PedagogicalTabs
                currentStep={currentStep}
                onSelectStep={(st) => {
                  setCurrentStep(st);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onPrevChapter={handlePrevChapter}
                onNextChapter={handleNextChapter}
                hasPrevChapter={hasPrevChapter}
                hasNextChapter={hasNextChapter}
              />

              {/* Render Current Step Component */}
              <div className="pt-2">
                {currentStep === 'lesson' && (
                  <LessonSection
                    chapter={currentChapter}
                    speechRate={speechRate}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'visuals' && (
                  <VisualsSection
                    chapter={currentChapter}
                    speechRate={speechRate}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'pronunciation' && (
                  <PronunciationSection
                    chapter={currentChapter}
                    speechRate={speechRate}
                    onChangeSpeechRate={setSpeechRate}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'examples' && (
                  <ExamplesSection
                    chapter={currentChapter}
                    speechRate={speechRate}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'exercises' && (
                  <ExercisesSection
                    chapter={currentChapter}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'revision' && (
                  <RevisionSection
                    chapter={currentChapter}
                    speechRate={speechRate}
                    onNextStep={handleNextStep}
                  />
                )}

                {currentStep === 'test' && (
                  <FullTestSection
                    chapter={currentChapter}
                    onCompleteChapter={handleCompleteChapter}
                    onNextChapter={handleNextChapter}
                    hasNextChapter={hasNextChapter}
                  />
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Export & Print Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentChapter={currentChapter}
      />

      {/* Hidden Print-Only View for Print / PDF Export */}
      <div className="hidden print:block print-only p-8 text-black bg-white">
        <div className="text-center mb-8 border-b-2 border-black pb-4">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Mon Manuel de Français</h1>
          <p className="text-sm">Grade 2 / CE1 · Fiche Pédagogique Officielle</p>
          <div className="flex justify-between text-xs mt-4">
            <span>Nom de l’élève : ________________________________</span>
            <span>Date : ____________</span>
            <span>Note : ______ / 20</span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-xs uppercase font-bold text-gray-600">{currentChapter.unitTag} · Page {currentChapter.pageNumber}</span>
          <h2 className="text-xl font-bold">{currentChapter.frenchTitle}</h2>
          <p className="text-xs italic text-gray-600 mb-2">{currentChapter.englishTitle} — {currentChapter.objective}</p>
          <div className="border border-gray-300 p-3 my-2 text-xs">
            <strong>Règle : </strong> {currentChapter.lesson.introduction}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">Vocabulaire Clé</h3>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-1 text-left">Mot français</th>
                <th className="border border-gray-300 p-1 text-left">Phonétique</th>
                <th className="border border-gray-300 p-1 text-left">Traduction</th>
              </tr>
            </thead>
            <tbody>
              {currentChapter.lesson.vocabularyBox.map((v) => (
                <tr key={v.id}>
                  <td className="border border-gray-300 p-1 font-bold">{v.french}</td>
                  <td className="border border-gray-300 p-1">{v.phonetic}</td>
                  <td className="border border-gray-300 p-1">{v.english}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">Exercices d'Application</h3>
          {currentChapter.exercises.map((ex, i) => (
            <div key={ex.id} className="mb-3 text-xs">
              <p className="font-semibold">{i + 1}. {ex.prompt}</p>
              {ex.options && (
                <p className="text-gray-700">Choix : [ ] {ex.options.join('   [ ] ')}</p>
              )}
              <div className="border-b border-dotted border-gray-400 h-6 mt-1">Réponse de l'élève : </div>
            </div>
          ))}
        </div>

        <div className="page-break-before mt-8">
          <h3 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">Évaluation Finale (Test)</h3>
          {currentChapter.test.questions.map((q, i) => (
            <div key={q.id} className="mb-3 text-xs">
              <p className="font-semibold">{i + 1}. {q.question}</p>
              <p className="text-gray-700">Options : {q.options.map((o) => `[  ] ${o}`).join('   ')}</p>
              <div className="border-b border-dotted border-gray-400 h-6 mt-1">Réponse : </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
