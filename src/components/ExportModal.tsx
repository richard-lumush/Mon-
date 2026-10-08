import React from 'react';
import { Chapter } from '../types/textbook';
import { exportToWordDocument, triggerPrintTextbook } from '../utils/exportDocument';
import { X, FileDown, Printer, FileText, BookOpen, CheckCircle } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: Chapter;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-amber-300/80 shadow-2xl p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-amber-800" />
            <h3 className="font-bold text-slate-900 text-lg font-heading">
              Imprimer & Exporter le Manuel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-amber-100"
            aria-label="Fermer la boîte de dialogue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
          Générez des fiches de cours imprimables en PDF ou téléchargez un document Word (.doc) entièrement modifiable pour les élèves et les enseignants.
        </p>

        {/* Options Grid */}
        <div className="space-y-3">
          {/* Option 1: Word .doc current chapter */}
          <button
            onClick={() => {
              exportToWordDocument(currentChapter, false);
              onClose();
            }}
            className="w-full p-4 rounded-2xl bg-white hover:bg-blue-50/70 border border-blue-200 transition-all flex items-start gap-3.5 text-left group shadow-xs active:scale-[0.99]"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900">
                Document Word (.doc) — Chapitre {currentChapter.id} uniquement
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentChapter.frenchTitle}. Fiche de cours avec exercices, lignes d’écriture et corrigé.
              </p>
            </div>
          </button>

          {/* Option 2: Word .doc full textbook */}
          <button
            onClick={() => {
              exportToWordDocument(undefined, true);
              onClose();
            }}
            className="w-full p-4 rounded-2xl bg-white hover:bg-amber-50/80 border border-amber-300 transition-all flex items-start gap-3.5 text-left group shadow-xs active:scale-[0.99]"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-900">
                  Livre Complet (.doc) — 11 Chapitres du CE1
                </h4>
                <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded">
                  Complet
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Tout le manuel scolaire du Chapitre 1 au Chapitre 11 dans un fichier Word modifiable.
              </p>
            </div>
          </button>

          {/* Option 3: Print / Save as PDF */}
          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                triggerPrintTextbook();
              }, 200);
            }}
            className="w-full p-4 rounded-2xl bg-white hover:bg-emerald-50/70 border border-emerald-200 transition-all flex items-start gap-3.5 text-left group shadow-xs active:scale-[0.99]"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <Printer className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                Imprimer ou Enregistrer en PDF
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Ouvre le dialogue d’impression prêt avec mise en page cahier et fiches pour l’élève.
              </p>
            </div>
          </button>
        </div>

        {/* Tip */}
        <div className="mt-4 p-3 bg-amber-100/50 rounded-xl border border-amber-200/80 text-[11px] text-amber-950 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-amber-800 shrink-0" />
          <span>
            Astuce : Dans la boîte d’impression, choisissez <strong>« Enregistrer au format PDF »</strong> comme destination d’impression.
          </span>
        </div>
      </div>
    </div>
  );
};
