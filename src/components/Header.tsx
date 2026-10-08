import React from 'react';
import { Volume2, Printer, FileDown, BookOpen, Smartphone } from 'lucide-react';

interface HeaderProps {
  viewMode: 'mobile' | 'textbook';
  onToggleViewMode: () => void;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
  onOpenExportModal: () => void;
  onOpenTableOfContents: () => void;
  currentChapterNumber: number;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onToggleViewMode,
  speechRate,
  onChangeSpeechRate,
  onOpenExportModal,
  onOpenTableOfContents,
  currentChapterNumber,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-200/80 px-4 sm:px-6 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTableOfContents}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-amber-100/80 hover:bg-amber-200 text-amber-900 border border-amber-300/60 transition-colors"
            title="Sommaire du manuel"
            aria-label="Ouvrir le sommaire"
          >
            <BookOpen className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
              <span>Mon Manuel de Français</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200/60">CE1 · Gr.2</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Manuel interactif & sonore · Chapitre {currentChapterNumber} sur 11
            </span>
          </div>
        </div>

        {/* Zone 2: Quick Nav / Links */}
        <nav className="hidden md:flex items-center gap-1 bg-amber-100/60 p-1 rounded-xl border border-amber-200/70">
          <button
            onClick={() => onChangeSpeechRate(speechRate === 0.7 ? 0.9 : 0.7)}
            className="min-h-[38px] px-3 flex items-center gap-1.5 text-xs font-medium rounded-lg transition-colors hover:bg-white text-slate-700"
            title="Vitesse de la voix française"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Voix : {speechRate === 0.7 ? '🐢 Lente' : '🐇 Normale'}</span>
          </button>

          <button
            onClick={onToggleViewMode}
            className={`min-h-[38px] px-3 flex items-center gap-1.5 text-xs font-medium rounded-lg transition-all ${
              viewMode === 'textbook'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-slate-700 hover:bg-white'
            }`}
            title="Basculer entre la vue mobile tactile et la double page de livre"
          >
            {viewMode === 'textbook' ? (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Mode Manuel</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mode Interactif</span>
              </>
            )}
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile view toggle */}
          <button
            onClick={onToggleViewMode}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white border border-amber-200 text-slate-700 shadow-sm"
            title="Changer de vue"
            aria-label="Changer de vue"
          >
            {viewMode === 'textbook' ? <Smartphone className="w-4 h-4 text-amber-700" /> : <BookOpen className="w-4 h-4 text-amber-700" />}
          </button>

          <button
            onClick={onOpenExportModal}
            className="min-h-[44px] px-3.5 sm:px-4 flex items-center gap-2 rounded-xl bg-amber-700 hover:bg-amber-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
            title="Imprimer ou Télécharger en Word / PDF"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Imprimer / Exporter</span>
            <span className="sm:hidden">Exporter</span>
          </button>
        </div>
      </div>
    </header>
  );
};
