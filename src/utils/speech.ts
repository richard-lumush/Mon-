/**
 * Audio synthesis helper using Web Speech API for French pronunciation (fr-FR)
 */

let activeVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

function loadVoices(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  const frenchVoice = voices.find(v => v.lang.startsWith('fr') || v.lang.includes('FR'));
  if (frenchVoice) {
    activeVoice = frenchVoice;
  }
  voicesLoaded = true;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

export interface SpeakOptions {
  rate?: number; // 0.7 for learner, 1.0 for normal
  pitch?: number;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
}

export function speakFrench(text: string, options: SpeakOptions = {}): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return false;
  }

  try {
    // Cancel any ongoing utterance
    window.speechSynthesis.cancel();

    if (!voicesLoaded) {
      loadVoices();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = options.rate ?? 0.8; // Friendly pace for Grade 2
    utterance.pitch = options.pitch ?? 1.05; // Slightly warmer/friendly pitch for kids

    if (activeVoice) {
      utterance.voice = activeVoice;
    } else {
      // Try finding on the fly
      const voices = window.speechSynthesis.getVoices();
      const frVoice = voices.find(v => v.lang.startsWith('fr'));
      if (frVoice) {
        utterance.voice = frVoice;
      }
    }

    if (options.onEnd) {
      utterance.onend = () => {
        options.onEnd?.();
      };
    }

    if (options.onError) {
      utterance.onerror = (e) => {
        options.onError?.(e);
      };
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('Error speaking French:', err);
    return false;
  }
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
