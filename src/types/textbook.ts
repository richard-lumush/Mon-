export type PedagogicalStep = 
  | 'lesson' 
  | 'visuals' 
  | 'pronunciation' 
  | 'examples' 
  | 'exercises' 
  | 'revision' 
  | 'test';

export interface VocabularyItem {
  id: string;
  french: string;
  english: string;
  phonetic: string;
  gender?: 'm' | 'f' | 'pl';
  exampleSentence?: string;
  exampleSentenceEnglish?: string;
  category?: string;
}

export interface GrammarRule {
  title: string;
  summary: string;
  rulePoints: string[];
  tips?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface TeacherNote {
  advice: string;
  commonMistake?: string;
  classroomActivity?: string;
}

export interface CulturalInsight {
  title: string;
  fact: string;
  funDetail?: string;
}

export interface ExampleDialogue {
  id: string;
  speaker: string;
  avatarText?: string;
  french: string;
  english: string;
  audioText: string;
}

export interface ExerciseItem {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'match-pairs' | 'listen-choose';
  prompt: string;
  audioPrompt?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  pairs?: { french: string; english: string }[];
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

export interface VisualVignette {
  title: string;
  caption: string;
  imageSrc?: string;
  items: {
    label: string;
    translation: string;
    pronounceText: string;
    iconOrColor?: string;
  }[];
}

export interface Chapter {
  id: number;
  slug: string;
  pageNumber: number;
  frenchTitle: string;
  englishTitle: string;
  unitTag: string;
  gradeLevel: string;
  objective: string;
  featuredImage?: string;
  imageAlt?: string;

  // 📖 Lesson
  lesson: {
    introduction: string;
    grammarRules: GrammarRule[];
    vocabularyBox: VocabularyItem[];
    teacherNote: TeacherNote;
    culturalInsight: CulturalInsight;
  };

  // 🖼️ Visuals
  visuals: VisualVignette;

  // 🗣️ Pronunciation
  pronunciation: {
    focusSound: string;
    soundRule: string;
    items: {
      word: string;
      phonetic: string;
      english: string;
      syllables?: string;
    }[];
    tongueTwister?: {
      french: string;
      english: string;
    };
  };

  // ✏️ Examples
  examples: {
    title: string;
    dialogues: ExampleDialogue[];
    keyPhrases: {
      french: string;
      english: string;
      usageTip: string;
    }[];
  };

  // 📝 Exercises
  exercises: ExerciseItem[];

  // 🎯 Revision
  revision: {
    summaryList: string[];
    flashcards: {
      front: string;
      back: string;
      hint?: string;
    }[];
    quickCheckRule: string;
  };

  // ✅ Full-test
  test: {
    title: string;
    passScore: number;
    questions: TestQuestion[];
    teacherAnswerKeyNotes: string;
  };
}
