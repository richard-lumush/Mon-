import { Chapter } from '../types/textbook';

export const textbookChapters: Chapter[] = [
  // -------------------------------------------------------------
  // CHAPTER 1 : FRENCH GREETINGS
  // -------------------------------------------------------------
  {
    id: 1,
    slug: 'french-greetings',
    pageNumber: 4,
    frenchTitle: 'Chapitre 1 : Les Salutations',
    englishTitle: 'French Greetings & Courtesies',
    unitTag: 'Unité 1 : Vivre Ensemble',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Apprendre à dire bonjour à différents moments de la journée et saluer poliment les adultes et ses camarades.',
    featuredImage: '/src/assets/images/textbook_cover_grade2_1791442699545.jpg',
    imageAlt: 'Écoliers français se saluant joyeusement dans la cour de récréation',

    lesson: {
      introduction: 'En français, la façon dont nous saluons une personne dépend du moment de la journée et de qui nous parlons (un ami ou un adulte). Saluer est la première marque de gentillesse !',
      grammarRules: [
        {
          title: 'Bonjour vs. Salut',
          summary: 'La différence entre le langage poli (formel) et le langage familier avec les copains.',
          rulePoints: [
            'On dit "Bonjour !" le matin et pendant la journée à tout le monde (professeurs, parents, commerçants).',
            'On dit "Salut !" uniquement à ses amis et camarades de classe.',
            'On dit "Bonsoir !" quand le soleil commence à se coucher (dès 18h).',
            'On dit "Bonne nuit !" juste avant d’aller dormir au lit.'
          ],
          tips: 'Astuce du Maître : Pour dire au revoir à un adulte, préfère toujours "Au revoir !" plutôt que "Salut !".',
          tableData: {
            headers: ['Moment / Situation', 'Expression en français', 'Signification en anglais', 'Politesse'],
            rows: [
              ['Le matin & journée', 'Bonjour !', 'Good morning / Hello', 'Poli & pour tous'],
              ['L’après-midi tard / soir', 'Bonsoir !', 'Good evening', 'Poli & pour tous'],
              ['Avec les copains', 'Salut !', 'Hi / Bye (informal)', 'Familier'],
              ['Au moment de se quitter', 'Au revoir !', 'Goodbye', 'Poli & pour tous'],
              ['Avant de dormir', 'Bonne nuit !', 'Good night', 'Familier / Famille']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v1-1', french: 'Bonjour', english: 'Hello / Good morning', phonetic: '[bɔ̃.ʒuʁ]', exampleSentence: 'Bonjour Madame Dupont !', exampleSentenceEnglish: 'Hello Mrs Dupont!' },
        { id: 'v1-2', french: 'Bonsoir', english: 'Good evening', phonetic: '[bɔ̃.swaʁ]', exampleSentence: 'Bonsoir papa et maman !', exampleSentenceEnglish: 'Good evening mom and dad!' },
        { id: 'v1-3', french: 'Salut', english: 'Hi / Bye', phonetic: '[sa.ly]', exampleSentence: 'Salut Léo, tu viens jouer ?', exampleSentenceEnglish: 'Hi Leo, are you coming to play?' },
        { id: 'v1-4', french: 'Au revoir', english: 'Goodbye', phonetic: '[o.ʁə.vwaʁ]', exampleSentence: 'Au revoir les enfants, à demain !', exampleSentenceEnglish: 'Goodbye children, see you tomorrow!' },
        { id: 'v1-5', french: 'À bientôt', english: 'See you soon', phonetic: '[a bjɛ̃.to]', exampleSentence: 'À bientôt mon ami !', exampleSentenceEnglish: 'See you soon my friend!' },
        { id: 'v1-6', french: 'S’il vous plaît', english: 'Please (formal/polite)', phonetic: '[sil vu plɛ]', exampleSentence: 'Un crayon s’il vous plaît.', exampleSentenceEnglish: 'A pencil please.' },
        { id: 'v1-7', french: 'Merci beaucoup', english: 'Thank you very much', phonetic: '[mɛʁ.si bo.ku]', exampleSentence: 'Merci beaucoup maîtresse !', exampleSentenceEnglish: 'Thank you very much teacher!' }
      ],
      teacherNote: {
        advice: 'Faites répéter la salutation en demandant à l’élève de regarder son interlocuteur dans les yeux avec le sourire.',
        commonMistake: 'Les enfants ont tendance à prononcer le "t" final dans "Salut" ou le "r" final dans "Bonjour" de façon trop dure. En français, le "t" de salut est muet [sa-ly].',
        classroomActivity: 'Jeu du miroir : Deux élèves se croisent, choisissent l’heure sur l’horloge de classe et s’échangent la bonne salutation.'
      },
      culturalInsight: {
        title: 'La bise et le salut en France',
        fact: 'En France, les adultes se font souvent "la bise" (une ou deux bises sur les joues) pour se dire bonjour. À l’école, les enfants serrent la main de la maîtresse ou font un grand signe de la main avec un joyeux "Bonjour !".'
      }
    },

    visuals: {
      title: 'La Galerie des Salutations de la Journée',
      caption: 'Regarde les différentes scènes de la journée et écoute comment saluer.',
      items: [
        { label: 'Bonjour !', translation: 'Le matin à l’école', pronounceText: 'Bonjour !', iconOrColor: '🌅' },
        { label: 'Salut !', translation: 'Dans la cour avec un ami', pronounceText: 'Salut !', iconOrColor: '👋' },
        { label: 'Bonsoir !', translation: 'Le soir en rentrant à la maison', pronounceText: 'Bonsoir !', iconOrColor: '🌆' },
        { label: 'Au revoir !', translation: 'En quittant la classe', pronounceText: 'Au revoir !', iconOrColor: '🚪' },
        { label: 'Bonne nuit !', translation: 'Au lit avec son doudou', pronounceText: 'Bonne nuit !', iconOrColor: '🌙' },
        { label: 'Merci !', translation: 'Dire merci avec le sourire', pronounceText: 'Merci beaucoup !', iconOrColor: '⭐' }
      ]
    },

    pronunciation: {
      focusSound: 'Le son [u] vs [y] dans "Bonjour" et "Salut"',
      soundRule: 'Dans "Bonjour", la bouche fait un petit rond vers l’avant [u]. Dans "Salut", étire légèrement la bouche vers un sifflet [y]. Le -t final de Salut ne se prononce pas !',
      items: [
        { word: 'Bonjour', phonetic: '[bɔ̃-ʒuʁ]', english: 'Hello', syllables: 'Bon - jour' },
        { word: 'Salut', phonetic: '[sa-ly]', english: 'Hi (t is silent)', syllables: 'Sa - lut' },
        { word: 'Bonsoir', phonetic: '[bɔ̃-swaʁ]', english: 'Good evening', syllables: 'Bon - soir' },
        { word: 'Au revoir', phonetic: '[o-ʁə-vwaʁ]', english: 'Goodbye', syllables: 'Au - re - voir' }
      ],
      tongueTwister: {
        french: 'Bonjour bonhomme, bonne journée sous le beau soleil !',
        english: 'Good morning good fellow, good day under the beautiful sun!'
      }
    },

    examples: {
      title: 'Mini-dialogues à l’école primaire',
      dialogues: [
        { id: 'd1', speaker: 'Léo', avatarText: '👦', french: 'Bonjour Maîtresse ! Comment allez-vous ?', english: 'Good morning Teacher! How are you?', audioText: 'Bonjour Maîtresse ! Comment allez-vous ?' },
        { id: 'd2', speaker: 'La Maîtresse', avatarText: '👩‍🏫', french: 'Bonjour Léo ! Je vais très bien, merci. Et toi ?', english: 'Good morning Leo! I am very well, thank you. And you?', audioText: 'Bonjour Léo ! Je vais très bien, merci. Et toi ?' },
        { id: 'd3', speaker: 'Léo', avatarText: '👦', french: 'Ça va super bien ! Salut Thomas !', english: 'Doing great! Hi Thomas!', audioText: 'Ça va super bien ! Salut Thomas !' },
        { id: 'd4', speaker: 'Thomas', avatarText: '🧒', french: 'Salut Léo ! Prêt pour le dessin ?', english: 'Hi Leo! Ready for drawing?', audioText: 'Salut Léo ! Prêt pour le dessin ?' }
      ],
      keyPhrases: [
        { french: 'Comment vas-tu ? / Comment allez-vous ?', english: 'How are you? (friendly / polite)', usageTip: 'Utilise "Comment vas-tu ?" avec un ami, et "Comment allez-vous ?" avec un adulte.' },
        { french: 'Ça va bien, merci !', english: 'I am doing well, thank you!', usageTip: 'La réponse préférée pour montrer sa bonne humeur.' }
      ]
    },

    exercises: [
      {
        id: 'e1-1',
        type: 'multiple-choice',
        prompt: 'Il est 8h00 du matin. Tu rencontres ton maître d’école. Que lui dis-tu ?',
        options: ['Bonne nuit !', 'Bonjour Maître !', 'Bonsoir !', 'Salut Maître !'],
        correctAnswer: 'Bonjour Maître !',
        explanation: 'Le matin, on dit "Bonjour" et on reste poli avec le maître.'
      },
      {
        id: 'e1-2',
        type: 'fill-blank',
        prompt: 'Complète la formule polie : "S’il vous ______, prête-moi une gomme."',
        options: ['merci', 'plaît', 'nuit', 'salut'],
        correctAnswer: 'plaît',
        explanation: '"S’il vous plaît" est l’expression polie pour demander gentiment.'
      },
      {
        id: 'e1-3',
        type: 'match-pairs',
        prompt: 'Associe chaque mot français à sa traduction anglaise :',
        pairs: [
          { french: 'Au revoir', english: 'Goodbye' },
          { french: 'Bonsoir', english: 'Good evening' },
          { french: 'Merci', english: 'Thank you' },
          { french: 'Bonne nuit', english: 'Good night' }
        ],
        correctAnswer: 'matched',
        explanation: 'Bravo ! Toutes les salutations sont correctement associées.'
      }
    ],

    revision: {
      summaryList: [
        '🌅 Matin & Après-midi ➔ "Bonjour"',
        '🌆 Soirée ➔ "Bonsoir"',
        '👋 Copains ➔ "Salut"',
        '🚪 Départ ➔ "Au revoir" ou "À bientôt"',
        '🌙 Coucher ➔ "Bonne nuit"'
      ],
      flashcards: [
        { front: 'Bonjour', back: 'Hello / Good morning', hint: 'Utilisé toute la journée' },
        { front: 'Salut', back: 'Hi / Bye (pour les copains)', hint: 'Le "t" final est muet' },
        { front: 'Au revoir', back: 'Goodbye', hint: 'À dire quand on part' },
        { front: 'Merci beaucoup', back: 'Thank you very much', hint: 'Pour remercier' }
      ],
      quickCheckRule: 'Règle d’or : On ne dit jamais "Salut" à un adulte inconnu ou au directeur de l’école !'
    },

    test: {
      title: 'Évaluation Chapitre 1 : Les Salutations',
      passScore: 3,
      questions: [
        {
          id: 'q1-1',
          question: 'Quelle salutation emploie-t-on le soir à 19h00 ?',
          options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'À tout à l’heure'],
          correctAnswer: 'Bonsoir',
          hint: 'Le soleil commence à se coucher.',
          explanation: 'Dès le début de la soirée, on remplace "Bonjour" par "Bonsoir".'
        },
        {
          id: 'q1-2',
          question: 'Laquelle de ces salutations est FAMILIÈRE (uniquement entre amis) ?',
          options: ['Au revoir', 'Bonjour Madame', 'Salut', 'Bonsoir Monsieur'],
          correctAnswer: 'Salut',
          hint: 'Court mot de 5 lettres dont la dernière lettre ne se prononce pas.',
          explanation: '"Salut" est réservé aux amis, camarades et membres proches de la famille.'
        },
        {
          id: 'q1-3',
          question: 'Que réponds-tu poliment si quelqu’un te demande : "Comment vas-tu ?" ?',
          options: ['Je m’appelle Paul.', 'Ça va bien, merci !', 'Bonne nuit !', 'J’ai 7 ans.'],
          correctAnswer: 'Ça va bien, merci !',
          hint: 'Indique ton humeur et remercie.',
          explanation: '"Ça va bien, merci !" répond exactement à la question sur ton état.'
        },
        {
          id: 'q1-4',
          question: 'Que dis-tu juste avant de fermer les yeux pour t’endormir ?',
          options: ['Bonjour !', 'À bientôt !', 'Bonne nuit !', 'Merci !'],
          correctAnswer: 'Bonne nuit !',
          hint: 'Lié au sommeil.',
          explanation: 'On souhaite "Bonne nuit" avant de dormir.'
        }
      ],
      teacherAnswerKeyNotes: '1: Bonsoir | 2: Salut | 3: Ça va bien, merci ! | 4: Bonne nuit ! Veiller à la bonne prononciation sans insister sur les consonnes muettes.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 2 : INTRODUCING SELF AND OTHERS
  // -------------------------------------------------------------
  {
    id: 2,
    slug: 'introducing-self-others',
    pageNumber: 8,
    frenchTitle: 'Chapitre 2 : Se Présenter et Présenter les Autres',
    englishTitle: 'Introducing Self and Others',
    unitTag: 'Unité 1 : Vivre Ensemble',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Savoir donner son prénom, son âge, et présenter un ami ou une amie avec "Voici...", "Il s’appelle..." et "Elle s’appelle...".',

    lesson: {
      introduction: 'Pour faire connaissance, il faut savoir dire comment on s’appelle et présenter ses camarades. Découvre les petits mots magiques : Je m’appelle, Voici, Il et Elle !',
      grammarRules: [
        {
          title: 'Je m’appelle, Il s’appelle, Elle s’appelle',
          summary: 'La règle pour parler de soi ou d’un camarade garçon ou fille.',
          rulePoints: [
            '"Je m’appelle..." ➔ Pour dire son propre prénom (fille ou garçon).',
            '"Il s’appelle..." ➔ Pour présenter un garçon (masculin).',
            '"Elle s’appelle..." ➔ Pour présenter une fille (féminin).',
            '"Voici..." ➔ Mot magique pour montrer quelqu’un ("Voici mon ami Thomas").'
          ],
          tips: 'Pour dire son âge en français, on utilise le verbe "avoir" : "J’ai 7 ans" (et non "Je suis 7 ans").',
          tableData: {
            headers: ['Personne', 'Formule en français', 'Exemple', 'En anglais'],
            rows: [
              ['Moi (Self)', 'Je m’appelle...', 'Je m’appelle Lucas.', 'My name is Lucas.'],
              ['Un garçon (Boy)', 'Il s’appelle...', 'Il s’appelle Maxime.', 'His name is Maxime.'],
              ['Une fille (Girl)', 'Elle s’appelle...', 'Elle s’appelle Chloé.', 'Her name is Chloe.'],
              ['Montrer un ami', 'Voici...', 'Voici Sarah, mon amie.', 'Here is Sarah, my friend.']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v2-1', french: 'Je m’appelle', english: 'My name is', phonetic: '[ʒə ma.pɛl]', exampleSentence: 'Je m’appelle Camille.', exampleSentenceEnglish: 'My name is Camille.' },
        { id: 'v2-2', french: 'Il s’appelle', english: 'His name is', phonetic: '[il sa.pɛl]', exampleSentence: 'Il s’appelle Noah.', exampleSentenceEnglish: 'His name is Noah.' },
        { id: 'v2-3', french: 'Elle s’appelle', english: 'Her name is', phonetic: '[ɛl sa.pɛl]', exampleSentence: 'Elle s’appelle Léa.', exampleSentenceEnglish: 'Her name is Lea.' },
        { id: 'v2-4', french: 'Voici', english: 'Here is / This is', phonetic: '[vwa.si]', exampleSentence: 'Voici mon copain Hugo.', exampleSentenceEnglish: 'Here is my friend Hugo.' },
        { id: 'v2-5', french: 'J’ai sept ans', english: 'I am 7 years old', phonetic: '[ʒe sɛt ɑ̃]', exampleSentence: 'Moi, j’ai sept ans et toi ?', exampleSentenceEnglish: 'Me, I am 7 years old and you?' },
        { id: 'v2-6', french: 'Enchanté / Enchantée', english: 'Nice to meet you', phonetic: '[ɑ̃.ʃɑ̃.te]', exampleSentence: 'Enchanté de faire ta connaissance !', exampleSentenceEnglish: 'Nice to meet you!' }
      ],
      teacherNote: {
        advice: 'Attention au piège de traduction de l’anglais "I am 7 years old". En français, on a des années, on dit donc "J’AI 7 ans" et pas "JE SUIS 7 ans".',
        commonMistake: 'Confondre "Il" (garçon) et "Elle" (fille). Faire lever la main droite pour "Il" et gauche pour "Elle" aide la mémorisation kinesthésique.',
        classroomActivity: 'La ronde des présentations : Une balle passe d’enfant en enfant : l’enfant donne son nom et présente son voisin de gauche avec "Voici...".'
      },
      culturalInsight: {
        title: 'Les prénoms populaires en France au CE1',
        fact: 'Dans les écoles primaires françaises actuelles, Gabriel, Raphaël, Léo, Jade, Louise et Emma sont parmi les prénoms les plus portés par les enfants de ton âge !'
      }
    },

    visuals: {
      title: 'Le Cercle des Nouveaux Amis',
      caption: 'Apprends à présenter tes camarades de classe.',
      items: [
        { label: 'Je m’appelle...', translation: 'Moi, je me présente !', pronounceText: 'Je m’appelle Julien.', iconOrColor: '🙋‍♂️' },
        { label: 'Il s’appelle Hugo', translation: 'C’est un garçon (Il)', pronounceText: 'Il s’appelle Hugo.', iconOrColor: '👦' },
        { label: 'Elle s’appelle Manon', translation: 'C’est une fille (Elle)', pronounceText: 'Elle s’appelle Manon.', iconOrColor: '👧' },
        { label: 'Voici mon ami', translation: 'Voici mon copain', pronounceText: 'Voici mon ami Lucas.', iconOrColor: '🤝' },
        { label: 'J’ai 7 ans', translation: 'Mon âge avec le gâteau', pronounceText: 'J’ai sept ans.', iconOrColor: '🎂' },
        { label: 'Enchanté !', translation: 'Ravi de te connaître', pronounceText: 'Enchanté !', iconOrColor: '✨' }
      ]
    },

    pronunciation: {
      focusSound: 'Le son [ʃ] dans "Enchanté" et la liaison dans "J’ai sept ans"',
      soundRule: 'En français, "ch" se prononce comme le silence d’un chuchotement [ʃ]. Dans "J’ai sept ans", fais entendre le [t] net de sept.',
      items: [
        { word: 'Je m’appelle', phonetic: '[ʒə ma-pɛl]', english: 'My name is', syllables: 'Je - m’ap - pelle' },
        { word: 'Enchanté', phonetic: '[ɑ̃-ʃɑ̃-te]', english: 'Delighted / Nice to meet you', syllables: 'En - chan - té' },
        { word: 'Voici', phonetic: '[vwa-si]', english: 'Here is', syllables: 'Voi - ci' }
      ],
      tongueTwister: {
        french: 'Chloé cherche sept chats chez son cher cousin Charles !',
        english: 'Chloe looks for seven cats at her dear cousin Charles’s place!'
      }
    },

    examples: {
      title: 'Première rentrée des classes',
      dialogues: [
        { id: 'd2-1', speaker: 'Lucas', avatarText: '👦', french: 'Bonjour ! Je m’appelle Lucas. Et toi, comment t’appelles-tu ?', english: 'Hello! My name is Lucas. And you, what is your name?', audioText: 'Bonjour ! Je m’appelle Lucas. Et toi, comment t’appelles-tu ?' },
        { id: 'd2-2', speaker: 'Emma', avatarText: '👧', french: 'Moi, je m’appelle Emma. J’ai sept ans !', english: 'Me, my name is Emma. I am seven years old!', audioText: 'Moi, je m’appelle Emma. J’ai sept ans !' },
        { id: 'd2-3', speaker: 'Lucas', avatarText: '👦', french: 'Enchanté Emma ! Voici mon copain Thomas. Il a sept ans aussi.', english: 'Nice to meet you Emma! Here is my friend Thomas. He is seven too.', audioText: 'Enchanté Emma ! Voici mon copain Thomas. Il a sept ans aussi.' },
        { id: 'd2-4', speaker: 'Emma', avatarText: '👧', french: 'Salut Thomas ! Bienvenue dans notre école !', english: 'Hi Thomas! Welcome to our school!', audioText: 'Salut Thomas ! Bienvenue dans notre école !' }
      ],
      keyPhrases: [
        { french: 'Comment t’appelles-tu ?', english: 'What is your name?', usageTip: 'Question posée à un enfant pour savoir son prénom.' },
        { french: 'Quel âge as-tu ?', english: 'How old are you?', usageTip: 'Question classique en classe de CE1.' }
      ]
    },

    exercises: [
      {
        id: 'e2-1',
        type: 'multiple-choice',
        prompt: 'Tu présentes ta copine Juliette. Que dis-tu ?',
        options: ['Il s’appelle Juliette.', 'Elle s’appelle Juliette.', 'Je m’appelle Juliette.', 'Voici un Juliette.'],
        correctAnswer: 'Elle s’appelle Juliette.',
        explanation: 'Juliette est une fille, on utilise le pronom féminin "Elle s’appelle".'
      },
      {
        id: 'e2-2',
        type: 'fill-blank',
        prompt: 'Complète la phrase pour donner ton âge : "J’______ sept ans."',
        options: ['ai', 'suis', 'es', 'a'],
        correctAnswer: 'ai',
        explanation: 'En français on utilise "J’ai" (verbe avoir) : "J’ai sept ans".'
      },
      {
        id: 'e2-3',
        type: 'match-pairs',
        prompt: 'Associe la formule à son usage :',
        pairs: [
          { french: 'Je m’appelle', english: 'Pour dire mon nom' },
          { french: 'Il s’appelle', english: 'Pour un garçon' },
          { french: 'Elle s’appelle', english: 'Pour une fille' },
          { french: 'Voici mon ami', english: 'Pour présenter' }
        ],
        correctAnswer: 'matched',
        explanation: 'Excellent travail de repérage des pronoms !'
      }
    ],

    revision: {
      summaryList: [
        'Pour moi ➔ "Je m’appelle [Prénom]"',
        'Pour mon âge ➔ "J’ai [Nombre] ans"',
        'Pour un ami garçon ➔ "Il s’appelle..." / "Voici mon ami"',
        'Pour une amie fille ➔ "Elle s’appelle..." / "Voici mon amie"',
        'Politesse ➔ "Enchanté(e) !"'
      ],
      flashcards: [
        { front: 'Je m’appelle', back: 'My name is', hint: 'Verbe s’appeler' },
        { front: 'Il s’appelle', back: 'His name is (boy)', hint: 'Masculin' },
        { front: 'Elle s’appelle', back: 'Her name is (girl)', hint: 'Féminin' },
        { front: 'J’ai sept ans', back: 'I am 7 years old', hint: 'Verbe avoir' }
      ],
      quickCheckRule: 'Ne dis jamais "Je suis 7 ans", dis toujours "J’ai 7 ans" !'
    },

    test: {
      title: 'Évaluation Chapitre 2 : Se Présenter',
      passScore: 3,
      questions: [
        {
          id: 'q2-1',
          question: 'Comment présentes-tu ton camarade Maxime ?',
          options: ['Elle s’appelle Maxime.', 'Il s’appelle Maxime.', 'Je m’appelle Maxime.', 'Tu t’appelles Maxime.'],
          correctAnswer: 'Il s’appelle Maxime.',
          hint: 'Maxime est un garçon.',
          explanation: 'On dit "Il s’appelle" pour un garçon.'
        },
        {
          id: 'q2-2',
          question: 'Quelle phrase est correcte pour exprimer son âge ?',
          options: ['Je suis 8 ans.', 'J’ai 8 ans.', 'Mon nom est 8 ans.', 'J’appelle 8 ans.'],
          correctAnswer: 'J’ai 8 ans.',
          hint: 'On a des années en français.',
          explanation: 'On utilise le verbe avoir : "J’ai 8 ans".'
        },
        {
          id: 'q2-3',
          question: 'Que signifie "Enchanté !" ?',
          options: ['Au revoir !', 'Ravi de faire ta connaissance !', 'Bonne nuit !', 'Pardon !'],
          correctAnswer: 'Ravi de faire ta connaissance !',
          hint: 'C’est une formule chaleureuse quand on rencontre quelqu’un.',
          explanation: '"Enchanté" exprime le plaisir de rencontrer une nouvelle personne.'
        },
        {
          id: 'q2-4',
          question: 'Comment dit-on "This is my friend Lea" en français ?',
          options: ['Voici mon amie Léa.', 'Je suis amie Léa.', 'Il s’appelle Léa.', 'Au revoir Léa.'],
          correctAnswer: 'Voici mon amie Léa.',
          hint: 'Utilise le mot magique pour présenter quelqu’un.',
          explanation: '"Voici" permet d’introduire et de désigner un camarade.'
        }
      ],
      teacherAnswerKeyNotes: '1: Il s’appelle Maxime | 2: J’ai 8 ans | 3: Ravi de faire ta connaissance ! | 4: Voici mon amie Léa.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 3 : NUMBERS 11-20
  // -------------------------------------------------------------
  {
    id: 3,
    slug: 'numbers-11-20',
    pageNumber: 12,
    frenchTitle: 'Chapitre 3 : Les Nombres de 11 à 20',
    englishTitle: 'Numbers 11 to 20',
    unitTag: 'Unité 2 : Mathématiques & Compter',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Savoir lire, prononcer, écrire et utiliser les nombres de onze (11) à vingt (20) en contexte.',

    lesson: {
      introduction: 'Tu sais déjà compter jusqu’à 10 ! Maintenant, découvrons la famille des nombres de 11 à 20. Remarque comme les nombres de 11 à 16 se terminent tous par "-ze" !',
      grammarRules: [
        {
          title: 'Le secret des nombres de 11 à 20',
          summary: 'La régularité et les deux groupes de nombres.',
          rulePoints: [
            'Groupe 1 (en -ze) : 11 (onze), 12 (douze), 13 (treize), 14 (quatorze), 15 (quinze), 16 (seize).',
            'Groupe 2 (avec dix-) : 17 (dix-sept), 18 (dix-huit), 19 (dix-neuf). On écrit un trait d’union !',
            'Le nombre magique 20 s’écrit "vingt" avec un "g" et un "t" muets à la fin.'
          ],
          tips: 'Pour 17, 18 et 19 : pense à "dix" + le chiffre (dix + sept = dix-sept) !',
          tableData: {
            headers: ['Chiffre', 'En lettres', 'Prononciation', 'Calcul mémo'],
            rows: [
              ['11', 'onze', '[ɔ̃z]', '10 + 1'],
              ['12', 'douze', '[duz]', '10 + 2'],
              ['13', 'treize', '[tʁɛz]', '10 + 3'],
              ['14', 'quatorze', '[ka.tɔʁz]', '10 + 4'],
              ['15', 'quinze', '[kɛ̃z]', '10 + 5'],
              ['16', 'seize', '[sɛz]', '10 + 6'],
              ['17', 'dix-sept', '[di.sɛt]', '10 + 7'],
              ['18', 'dix-huit', '[di.zɥit]', '10 + 8 (liaison en z)'],
              ['19', 'dix-neuf', '[diz.nœf]', '10 + 9'],
              ['20', 'vingt', '[vɛ̃]', '2 dizaines']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v3-1', french: 'onze', english: 'eleven (11)', phonetic: '[ɔ̃z]', exampleSentence: 'J’ai onze billes dans mon sac.', exampleSentenceEnglish: 'I have eleven marbles in my bag.' },
        { id: 'v3-2', french: 'douze', english: 'twelve (12)', phonetic: '[duz]', exampleSentence: 'Il y a douze mois dans l’année.', exampleSentenceEnglish: 'There are twelve months in the year.' },
        { id: 'v3-3', french: 'treize', english: 'thirteen (13)', phonetic: '[tʁɛz]', exampleSentence: 'Treize élèves lèvent le doigt.', exampleSentenceEnglish: 'Thirteen pupils raise their hand.' },
        { id: 'v3-4', french: 'quatorze', english: 'fourteen (14)', phonetic: '[ka.tɔʁz]', exampleSentence: 'Le quatorze juillet est une fête.', exampleSentenceEnglish: 'The fourteenth of July is a holiday.' },
        { id: 'v3-5', french: 'quinze', english: 'fifteen (15)', phonetic: '[kɛ̃z]', exampleSentence: 'La récréation dure quinze minutes.', exampleSentenceEnglish: 'Recess lasts fifteen minutes.' },
        { id: 'v3-6', french: 'seize', english: 'sixteen (16)', phonetic: '[sɛz]', exampleSentence: 'Seize pommes rouges.', exampleSentenceEnglish: 'Sixteen red apples.' },
        { id: 'v3-7', french: 'dix-sept', english: 'seventeen (17)', phonetic: '[di.sɛt]', exampleSentence: 'Dix-sept oiseaux chantent.', exampleSentenceEnglish: 'Seventeen birds are singing.' },
        { id: 'v3-8', french: 'dix-huit', english: 'eighteen (18)', phonetic: '[di.zɥit]', exampleSentence: 'Dix-huit cahiers sur la table.', exampleSentenceEnglish: 'Eighteen notebooks on the table.' },
        { id: 'v3-9', french: 'dix-neuf', english: 'nineteen (19)', phonetic: '[diz.nœf]', exampleSentence: 'Dix-neuf feutres de couleur.', exampleSentenceEnglish: 'Nineteen colored markers.' },
        { id: 'v3-10', french: 'vingt', english: 'twenty (20)', phonetic: '[vɛ̃]', exampleSentence: 'J’ai eu vingt sur vingt en dictée !', exampleSentenceEnglish: 'I got twenty out of twenty on the spelling test!' }
      ],
      teacherNote: {
        advice: 'Faites bien écouter la liaison dans "dix-huit" [di-zuit]. Le "x" prend le son [z] devant le "h" muet.',
        commonMistake: 'Écrire "vingt" sans le "g" (vin) ou prononcer le "gt" à la fin. En français isolé, vingt se prononce comme le vin [vɛ̃].',
        classroomActivity: 'Le jeu du compte à rebours : On compte de 11 à 20 en sautant à cloche-pied, puis on redescend de 20 à 11 !'
      },
      culturalInsight: {
        title: 'Le 20/20 à l’école française',
        fact: 'En France, les devoirs et évaluations sont traditionnellement notés sur 20 ! Obtenir un "20 sur 20" (20/20) est la note parfaite tant espérée par tous les écoliers.'
      }
    },

    visuals: {
      title: 'Le Boulier des Nombres 11 à 20',
      caption: 'Touche chaque nombre pour entendre son nom en français.',
      items: [
        { label: '11 : Onze', translation: 'onze', pronounceText: 'onze', iconOrColor: '1️⃣1️⃣' },
        { label: '12 : Douze', translation: 'douze', pronounceText: 'douze', iconOrColor: '1️⃣2️⃣' },
        { label: '13 : Treize', translation: 'treize', pronounceText: 'treize', iconOrColor: '1️⃣3️⃣' },
        { label: '14 : Quatorze', translation: 'quatorze', pronounceText: 'quatorze', iconOrColor: '1️⃣4️⃣' },
        { label: '15 : Quinze', translation: 'quinze', pronounceText: 'quinze', iconOrColor: '1️⃣5️⃣' },
        { label: '16 : Seize', translation: 'seize', pronounceText: 'seize', iconOrColor: '1️⃣6️⃣' },
        { label: '17 : Dix-sept', translation: 'dix-sept', pronounceText: 'dix-sept', iconOrColor: '1️⃣7️⃣' },
        { label: '18 : Dix-huit', translation: 'dix-huit', pronounceText: 'dix-huit', iconOrColor: '1️⃣8️⃣' },
        { label: '19 : Dix-neuf', translation: 'dix-neuf', pronounceText: 'dix-neuf', iconOrColor: '1️⃣9️⃣' },
        { label: '20 : Vingt', translation: 'vingt', pronounceText: 'vingt', iconOrColor: '2️⃣0️⃣' }
      ]
    },

    pronunciation: {
      focusSound: 'La liaison dans "Dix-huit" et le nez dans "Onze, Quinze, Vingt"',
      soundRule: 'Les sons nasaux sont très importants : [ɔ̃] dans onze, [ɛ̃] dans quinze et vingt. Dans "dix-huit", on dit [di-zɥit].',
      items: [
        { word: 'Onze', phonetic: '[ɔ̃z]', english: '11', syllables: 'On - ze' },
        { word: 'Quinze', phonetic: '[kɛ̃z]', english: '15', syllables: 'Quin - ze' },
        { word: 'Dix-huit', phonetic: '[di-zɥit]', english: '18', syllables: 'Dix - huit' },
        { word: 'Vingt', phonetic: '[vɛ̃]', english: '20', syllables: 'Vingt' }
      ],
      tongueTwister: {
        french: 'Quinze lapins gris mangent seize carottes à dix-huit heures !',
        english: 'Fifteen grey rabbits eat sixteen carrots at six o’clock!'
      }
    },

    examples: {
      title: 'Compter dans la classe de CE1',
      dialogues: [
        { id: 'd3-1', speaker: 'La Maîtresse', avatarText: '👩‍🏫', french: 'Combien d’élèves y a-t-il dans la classe aujourd’hui ?', english: 'How many students are in the class today?', audioText: 'Combien d’élèves y a-t-il dans la classe aujourd’hui ?' },
        { id: 'd3-2', speaker: 'Léo', avatarText: '👦', french: 'Il y a dix-huit élèves présents et deux absents.', english: 'There are eighteen students present and two absent.', audioText: 'Il y a dix-huit élèves présents et deux absents.' },
        { id: 'd3-3', speaker: 'La Maîtresse', avatarText: '👩‍🏫', french: 'Très bien ! Dix-huit plus deux font vingt !', english: 'Very good! Eighteen plus two makes twenty!', audioText: 'Très bien ! Dix-huit plus deux font vingt !' }
      ],
      keyPhrases: [
        { french: 'Combien de... ?', english: 'How many... ?', usageTip: 'Pour demander une quantité (ex: Combien de crayons ?)' },
        { french: 'Il y a...', english: 'There is / There are...', usageTip: 'Pour indiquer le nombre d’objets ou personnes.' }
      ]
    },

    exercises: [
      {
        id: 'e3-1',
        type: 'multiple-choice',
        prompt: 'Combien font 10 + 4 ?',
        options: ['treize (13)', 'quatorze (14)', 'quinze (15)', 'douze (12)'],
        correctAnswer: 'quatorze (14)',
        explanation: '10 + 4 = 14, ce qui s’écrit "quatorze" en français.'
      },
      {
        id: 'e3-2',
        type: 'fill-blank',
        prompt: 'Le nombre qui vient juste après 15 (quinze) est ______ (16).',
        options: ['seize', 'quatorze', 'dix-sept', 'vingt'],
        correctAnswer: 'seize',
        explanation: 'Après quinze (15) vient seize (16).'
      },
      {
        id: 'e3-3',
        type: 'match-pairs',
        prompt: 'Relie le nombre en chiffres à son mot en lettres :',
        pairs: [
          { french: '11', english: 'onze' },
          { french: '12', english: 'douze' },
          { french: '18', english: 'dix-huit' },
          { french: '20', english: 'vingt' }
        ],
        correctAnswer: 'matched',
        explanation: 'Bravo ! Tu sais compter comme un champion !'
      }
    ],

    revision: {
      summaryList: [
        '11 = onze | 12 = douze | 13 = treize',
        '14 = quatorze | 15 = quinze | 16 = seize',
        '17 = dix-sept | 18 = dix-huit | 19 = dix-neuf',
        '20 = vingt (avec "gt" muet)'
      ],
      flashcards: [
        { front: '11', back: 'onze', hint: '10 + 1' },
        { front: '15', back: 'quinze', hint: '10 + 5' },
        { front: '18', back: 'dix-huit', hint: 'Attention à la liaison' },
        { front: '20', back: 'vingt', hint: 'Deux dizaines' }
      ],
      quickCheckRule: 'N’oublie pas le trait d’union : dix-sept, dix-huit, dix-neuf !'
    },

    test: {
      title: 'Évaluation Chapitre 3 : Les Nombres 11 à 20',
      passScore: 3,
      questions: [
        {
          id: 'q3-1',
          question: 'Comment s’écrit le nombre 12 en lettres ?',
          options: ['dix-deux', 'douze', 'onze', 'deux-dix'],
          correctAnswer: 'douze',
          hint: 'Fait partie de la famille en -ze.',
          explanation: '12 s’écrit "douze".'
        },
        {
          id: 'q3-2',
          question: 'Quelle est la bonne orthographe pour le nombre 20 ?',
          options: ['vin', 'vint', 'vingt', 'ving'],
          correctAnswer: 'vingt',
          hint: 'Il possède deux lettres muettes : g et t.',
          explanation: '20 s’écrit "vingt".'
        },
        {
          id: 'q3-3',
          question: 'Combien font 9 + 8 ?',
          options: ['seize (16)', 'dix-sept (17)', 'dix-huit (18)', 'quinze (15)'],
          correctAnswer: 'dix-sept (17)',
          hint: '9 + 8 = 17.',
          explanation: '9 + 8 = 17, qui s’écrit "dix-sept".'
        },
        {
          id: 'q3-4',
          question: 'Quel nombre manque dans la suite : 13, 14, ___, 16 ?',
          options: ['douze', 'quinze', 'dix-sept', 'onze'],
          correctAnswer: 'quinze',
          hint: 'C’est le nombre 15.',
          explanation: 'Entre 14 et 16 se trouve 15 (quinze).'
        }
      ],
      teacherAnswerKeyNotes: '1: douze | 2: vingt | 3: dix-sept (17) | 4: quinze (15).'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 4 : FRENCH ALPHABET A-L
  // -------------------------------------------------------------
  {
    id: 4,
    slug: 'french-alphabet-a-l',
    pageNumber: 16,
    frenchTitle: 'Chapitre 4 : L’Alphabet Français (A à L)',
    englishTitle: 'The French Alphabet (A to L)',
    unitTag: 'Unité 3 : Les Lettres & les Sons',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Reconnaître, chanter et prononcer les 12 premières lettres de l’alphabet français avec leurs mots-repères.',

    lesson: {
      introduction: 'L’alphabet français compte 26 lettres, tout comme l’anglais, mais beaucoup de lettres chantent d’une manière différente ! Commençons par explorer la première moitié : de A jusqu’à L.',
      grammarRules: [
        {
          title: 'Voyelles et consonnes de A à L',
          summary: 'Identifier les voyelles et les sons particuliers.',
          rulePoints: [
            'Les voyelles parmi ces lettres sont : A, E, I.',
            'La lettre C chante [s] devant E et I (comme cerise), et [k] devant A, O, U (comme cartable).',
            'La lettre G chante [ʒ] devant E et I (comme girafe), et [ɡ] devant A, O, U (comme gâteau).',
            'La lettre H est muette en français (on ne l’entend pas dans "hibou" ou "hôpital").'
          ],
          tips: 'Pour la lettre E, pense au son "euh". C’est la lettre la plus fréquente en français !',
          tableData: {
            headers: ['Lettre', 'Nom français', 'Prononciation', 'Mot repère illustré'],
            rows: [
              ['A a', 'ah', '[a]', 'Avion (Airplane)'],
              ['B b', 'bé', '[be]', 'Ballon (Ball)'],
              ['C c', 'cé', '[se]', 'Chat (Cat)'],
              ['D d', 'dé', '[de]', 'Dauphin (Dolphin)'],
              ['E e', 'euh', '[ə]', 'Éléphant (Elephant)'],
              ['F f', 'eff', '[ɛf]', 'Fleur (Flower)'],
              ['G g', 'gé', '[ʒe]', 'Gâteau (Cake)'],
              ['H h', 'ache', '[aʃ]', 'Hibou (Owl)'],
              ['I i', 'ee', '[i]', 'Île (Island)'],
              ['J j', 'jee', '[ʒi]', 'Jardin (Garden)'],
              ['K k', 'ka', '[ka]', 'Koala (Koala)'],
              ['L l', 'ell', '[ɛl]', 'Livre (Book)']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v4-1', french: 'un avion', english: 'an airplane', phonetic: '[a.vjɔ̃]', exampleSentence: 'L’avion vole dans le ciel.', exampleSentenceEnglish: 'The airplane flies in the sky.' },
        { id: 'v4-2', french: 'un ballon', english: 'a ball', phonetic: '[ba.lɔ̃]', exampleSentence: 'Je joue avec mon ballon.', exampleSentenceEnglish: 'I play with my ball.' },
        { id: 'v4-3', french: 'un chat', english: 'a cat', phonetic: '[ʃa]', exampleSentence: 'Le chat ronronne sur le lit.', exampleSentenceEnglish: 'The cat purrs on the bed.' },
        { id: 'v4-4', french: 'un dauphin', english: 'a dolphin', phonetic: '[do.fɛ̃]', exampleSentence: 'Le dauphin saute dans l’eau.', exampleSentenceEnglish: 'The dolphin jumps in the water.' },
        { id: 'v4-5', french: 'une fleur', english: 'a flower', phonetic: '[flœʁ]', exampleSentence: 'Une jolie fleur jaune.', exampleSentenceEnglish: 'A pretty yellow flower.' },
        { id: 'v4-6', french: 'un gâteau', english: 'a cake', phonetic: '[ɡɑ.to]', exampleSentence: 'Miam, un délicieux gâteau !', exampleSentenceEnglish: 'Yum, a delicious cake!' },
        { id: 'v4-7', french: 'un livre', english: 'a book', phonetic: '[livʁ]', exampleSentence: 'J’ouvre mon livre de lecture.', exampleSentenceEnglish: 'I open my reading book.' }
      ],
      teacherNote: {
        advice: 'Attention au piège entre les lettres G et J en français : G se nomme "gé" et J se nomme "ji" (exactement l’inverse de l’anglais !).',
        commonMistake: 'Prononcer le H avec aspiration comme en anglais. Rappelez aux élèves que le H français dort paisiblement : il ne fait aucun bruit !',
        classroomActivity: 'Abécédaire vivant : Chaque élève reçoit une lettre et doit mimer le mot repère correspondant.'
      },
      culturalInsight: {
        title: 'L’écriture cursive (attachée) en France',
        fact: 'Dans les écoles primaires françaises, dès le CP et le CE1, les enfants apprennent à écrire toutes les lettres en écriture attachée (cursive avec pleins et déliés), à la plume ou au stylo plume !'
      }
    },

    visuals: {
      title: 'L’Abécédaire Illustré de A à L',
      caption: 'Écoute la lettre et son mot repère.',
      items: [
        { label: 'A comme Avion', translation: 'Lettre A', pronounceText: 'A, comme Avion', iconOrColor: '✈️' },
        { label: 'B comme Ballon', translation: 'Lettre B', pronounceText: 'B, comme Ballon', iconOrColor: '🎈' },
        { label: 'C comme Chat', translation: 'Lettre C', pronounceText: 'C, comme Chat', iconOrColor: '🐱' },
        { label: 'D comme Dauphin', translation: 'Lettre D', pronounceText: 'D, comme Dauphin', iconOrColor: '🐬' },
        { label: 'E comme Éléphant', translation: 'Lettre E', pronounceText: 'E, comme Éléphant', iconOrColor: '🐘' },
        { label: 'F comme Fleur', translation: 'Lettre F', pronounceText: 'F, comme Fleur', iconOrColor: '🌸' },
        { label: 'G comme Gâteau', translation: 'Lettre G', pronounceText: 'G, comme Gâteau', iconOrColor: '🎂' },
        { label: 'H comme Hibou', translation: 'Lettre H', pronounceText: 'H, comme Hibou', iconOrColor: '🦉' },
        { label: 'I comme Île', translation: 'Lettre I', pronounceText: 'I, comme Île', iconOrColor: '🏝️' },
        { label: 'J comme Jardin', translation: 'Lettre J', pronounceText: 'J, comme Jardin', iconOrColor: '🌻' },
        { label: 'K comme Koala', translation: 'Lettre K', pronounceText: 'K, comme Koala', iconOrColor: '🐨' },
        { label: 'L comme Livre', translation: 'Lettre L', pronounceText: 'L, comme Livre', iconOrColor: '📚' }
      ]
    },

    pronunciation: {
      focusSound: 'Le piège classique : G [ʒe] vs J [ʒi]',
      soundRule: 'En français : la lettre G se prononce "GÉ" et la lettre J se prononce "JI". Ne les confonds pas avec l’anglais !',
      items: [
        { word: 'G', phonetic: '[ʒe]', english: 'Letter G', syllables: 'Gé' },
        { word: 'J', phonetic: '[ʒi]', english: 'Letter J', syllables: 'Ji' },
        { word: 'E', phonetic: '[ə]', english: 'Letter E', syllables: 'Euh' },
        { word: 'H', phonetic: '[aʃ]', english: 'Letter H', syllables: 'Ache' }
      ],
      tongueTwister: {
        french: 'Gaston le gorille et Julie la girafe jouent joyeusement !',
        english: 'Gaston the gorilla and Julie the giraffe play joyfully!'
      }
    },

    examples: {
      title: 'Épeler son prénom au tableau',
      dialogues: [
        { id: 'd4-1', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'Ali, peux-tu épeler ton prénom s’il te plaît ?', english: 'Ali, can you spell your first name please?', audioText: 'Ali, peux-tu épeler ton prénom s’il te plaît ?' },
        { id: 'd4-2', speaker: 'Ali', avatarText: '👦', french: 'Oui Maîtresse ! A - L - I : Ali !', english: 'Yes teacher! A - L - I: Ali!', audioText: 'Oui Maîtresse ! A - L - I : Ali !' },
        { id: 'd4-3', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'Bravo ! Et maintenant Léa ?', english: 'Well done! And now Lea?', audioText: 'Bravo ! Et maintenant Léa ?' },
        { id: 'd4-4', speaker: 'Léa', avatarText: '👧', french: 'L - É - A : Léa !', english: 'L - E acute - A: Lea!', audioText: 'L - É - A : Léa !' }
      ],
      keyPhrases: [
        { french: 'Comment ça s’écrit ?', english: 'How do you spell that?', usageTip: 'Question posée pour demander l’orthographe d’un mot.' },
        { french: 'Peux-tu épeler... ?', english: 'Can you spell... ?', usageTip: 'Pour demander les lettres une par une.' }
      ]
    },

    exercises: [
      {
        id: 'e4-1',
        type: 'multiple-choice',
        prompt: 'Quelle lettre vient entre "D" et "F" dans l’alphabet ?',
        options: ['B', 'C', 'E', 'G'],
        correctAnswer: 'E',
        explanation: 'L’ordre est A, B, C, D, E, F ! La lettre est donc E.'
      },
      {
        id: 'e4-2',
        type: 'fill-blank',
        prompt: 'En français, la lettre H est ______ (on ne l’entend pas dans "hibou").',
        options: ['muette', 'bruyante', 'double', 'chantante'],
        correctAnswer: 'muette',
        explanation: 'Le H ne produit aucun son en français, on dit qu’il est muet.'
      },
      {
        id: 'e4-3',
        type: 'match-pairs',
        prompt: 'Associe la lettre à son mot repère :',
        pairs: [
          { french: 'A', english: 'Avion' },
          { french: 'B', english: 'Ballon' },
          { french: 'C', english: 'Chat' },
          { french: 'L', english: 'Livre' }
        ],
        correctAnswer: 'matched',
        explanation: 'Magnifique ! Tu maîtrises les lettres de A à L.'
      }
    ],

    revision: {
      summaryList: [
        'A, B, C, D, E, F, G, H, I, J, K, L',
        'Voyelles : A, E, I',
        'G se dit "GÉ" et J se dit "JI"',
        'Le H est muet : Hibou, Hôpital'
      ],
      flashcards: [
        { front: 'Lettre E', back: 'Se prononce "euh"', hint: 'Voyelle' },
        { front: 'Lettre G', back: 'Se prononce "gé"', hint: 'Attention au piège avec J' },
        { front: 'Lettre J', back: 'Se prononce "ji"', hint: 'Comme Jardin' },
        { front: 'Lettre H', back: 'Se prononce "ache" (muette)', hint: 'Comme Hibou' }
      ],
      quickCheckRule: 'Rappelle-toi : A, B, C, D, E, F, G, H, I, J, K, L !'
    },

    test: {
      title: 'Évaluation Chapitre 4 : L’Alphabet A à L',
      passScore: 3,
      questions: [
        {
          id: 'q4-1',
          question: 'Comment se prononce la lettre "G" en français ?',
          options: ['ji', 'gé', 'gu', 'ga'],
          correctAnswer: 'gé',
          hint: 'Inverse de l’anglais.',
          explanation: 'La lettre G s’appelle "gé".'
        },
        {
          id: 'q4-2',
          question: 'Laquelle de ces trois lettres est une VOYELLE ?',
          options: ['B', 'D', 'I', 'F'],
          correctAnswer: 'I',
          hint: 'Elle a souvent un petit point sur la tête.',
          explanation: 'I est une voyelle (avec A, E, O, U, Y).'
        },
        {
          id: 'q4-3',
          question: 'Quel mot commence par la lettre "L" ?',
          options: ['Gâteau', 'Avion', 'Livre', 'Fleur'],
          correctAnswer: 'Livre',
          hint: 'Objet avec des pages qu’on lit.',
          explanation: 'Livre commence par la lettre L.'
        },
        {
          id: 'q4-4',
          question: 'Pourquoi dit-on que le H est "muet" dans le mot "hibou" ?',
          options: ['Parce qu’il crie fort', 'Parce qu’on ne le prononce pas', 'Parce qu’il est petit', 'Parce qu’il s’écrit en bleu'],
          correctAnswer: 'Parce qu’on ne le prononce pas',
          hint: 'Comme le silence.',
          explanation: 'Une lettre muette est une lettre écrite qu’on n’entend pas à l’oral.'
        }
      ],
      teacherAnswerKeyNotes: '1: gé | 2: I | 3: Livre | 4: Parce qu’on ne le prononce pas.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 5 : FRENCH ARTICLES
  // -------------------------------------------------------------
  {
    id: 5,
    slug: 'french-articles',
    pageNumber: 20,
    frenchTitle: 'Chapitre 5 : Les Articles (Le, La, L’, Les & Un, Une, Des)',
    englishTitle: 'French Definite and Indefinite Articles',
    unitTag: 'Unité 4 : La Boîte à Grammaire',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Distinguer le masculin, le féminin et le pluriel grâce aux petits mots placés devant les noms : le/la/l’/les et un/une/des.',

    lesson: {
      introduction: 'En français, presque tous les noms ont un genre : ils sont soit MASCULIN (comme un garçon), soit FÉMININ (comme une fille) ! Les articles sont les petits compagnons qui marchent devant le nom.',
      grammarRules: [
        {
          title: 'Articles Définis et Indéfinis',
          summary: 'La règle magique pour choisir le bon article.',
          rulePoints: [
            'Articles Définis (The) : LE (masculin singulier), LA (féminin singulier), L’ (devant une voyelle), LES (pluriel).',
            'Articles Indéfinis (A / An / Some) : UN (masculin singulier), UNE (féminin singulier), DES (pluriel).',
            'L’ÉLISION : Quand le mot commence par une voyelle (a, e, i, o, u, y) ou un h muet, "le" et "la" deviennent "l’" (ex: l’arbre, l’école, l’horloge).'
          ],
          tips: 'Au pluriel, la plupart des noms prennent un "-s" à la fin, et l’article devient toujours "les" ou "des" !',
          tableData: {
            headers: ['Type', 'Masculin Singulier', 'Féminin Singulier', 'Devant Voyelle', 'Pluriel'],
            rows: [
              ['Articles Définis (The)', 'LE chat / LE garçon', 'LA trousse / LA fille', 'L’oiseau / L’école', 'LES enfants / LES chats'],
              ['Articles Indéfinis (A / An / Some)', 'UN livre / UN chien', 'UNE pomme / UNE maison', 'UN arbre / UNE étoile', 'DES livres / DES pommes']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v5-1', french: 'le cahier', english: 'the notebook', phonetic: '[lə ka.je]', gender: 'm', exampleSentence: 'Le cahier est rouge.', exampleSentenceEnglish: 'The notebook is red.' },
        { id: 'v5-2', french: 'la règle', english: 'the ruler', phonetic: '[la ʁɛɡl]', gender: 'f', exampleSentence: 'La règle mesure 20 centimètres.', exampleSentenceEnglish: 'The ruler measures 20 centimeters.' },
        { id: 'v5-3', french: 'l’école', english: 'the school', phonetic: '[le.kɔl]', gender: 'f', exampleSentence: 'J’aime beaucoup l’école.', exampleSentenceEnglish: 'I like school very much.' },
        { id: 'v5-4', french: 'les crayons', english: 'the pencils', phonetic: '[le kʁɛ.jɔ̃]', gender: 'pl', exampleSentence: 'Les crayons sont bien taillés.', exampleSentenceEnglish: 'The pencils are well sharpened.' },
        { id: 'v5-5', french: 'un stylo', english: 'a pen', phonetic: '[œ̃ sti.lo]', gender: 'm', exampleSentence: 'Je prends un stylo bleu.', exampleSentenceEnglish: 'I take a blue pen.' },
        { id: 'v5-6', french: 'une gomme', english: 'an eraser', phonetic: '[yn ɡɔm]', gender: 'f', exampleSentence: 'Voici une gomme blanche.', exampleSentenceEnglish: 'Here is a white eraser.' },
        { id: 'v5-7', french: 'des ciseaux', english: 'scissors (some scissors)', phonetic: '[de si.zo]', gender: 'pl', exampleSentence: 'Des ciseaux à bouts ronds.', exampleSentenceEnglish: 'Round-tipped scissors.' }
      ],
      teacherNote: {
        advice: 'Faites chercher le genre d’un mot en posant la question rituelle : "Est-ce qu’on dit UN ou UNE ?"',
        commonMistake: 'Oublier l’apostrophe devant les voyelles : dire "le avion" au lieu de "l’avion". Rappelez aux enfants que deux voyelles qui se cognent se disputent : l’une s’en va et laisse une apostrophe !',
        classroomActivity: 'Le tri des deux paniers : Préparer des étiquettes et ranger les mots soit dans le panier bleu (Masculin / Le), soit dans le panier rose (Féminin / La).'
      },
      culturalInsight: {
        title: 'Le genre des objets en français',
        fact: 'Contrairement à l’anglais où tous les objets sont "it", en français une table est féminine ("la table") et un bureau est masculin ("le bureau"). Même les Français apprennent cela dès la petite enfance !'
      }
    },

    visuals: {
      title: 'Le Tableau des Articles Français',
      caption: 'Compare les articles définis et indéfinis.',
      items: [
        { label: 'LE garçon / UN garçon', translation: 'Masculin singulier', pronounceText: 'Le garçon, un garçon', iconOrColor: '👦' },
        { label: 'LA fille / UNE fille', translation: 'Féminin singulier', pronounceText: 'La fille, une fille', iconOrColor: '👧' },
        { label: 'L’arbre / UN arbre', translation: 'Devant une voyelle', pronounceText: 'L’arbre, un arbre', iconOrColor: '🌳' },
        { label: 'LES stylos / DES stylos', translation: 'Au pluriel (plusieurs)', pronounceText: 'Les stylos, des stylos', iconOrColor: '✏️' },
        { label: 'L’école / UNE école', translation: 'Voyelle féminine', pronounceText: 'L’école, une école', iconOrColor: '🏫' },
        { label: 'DES livres', translation: 'Pluriel indéfini', pronounceText: 'Des livres', iconOrColor: '📚' }
      ]
    },

    pronunciation: {
      focusSound: 'La différence entre "LE" [lə] et "LES" [le]',
      soundRule: '"LE" a la bouche arrondie comme un petit rond [lə]. "LES" a la bouche souriante et étirée [le]. Ne les confonds pas !',
      items: [
        { word: 'Le chat', phonetic: '[lə ʃa]', english: 'The cat (singular)', syllables: 'Le chat' },
        { word: 'Les chats', phonetic: '[le ʃa]', english: 'The cats (plural)', syllables: 'Les chats' },
        { word: 'Un chien', phonetic: '[œ̃ ʃjɛ̃]', english: 'A dog', syllables: 'Un chien' },
        { word: 'Une trousse', phonetic: '[yn tʁus]', english: 'A pencil case', syllables: 'U - ne trousse' }
      ],
      tongueTwister: {
        french: 'Le petit loup lit les livres de la louve !',
        english: 'The little wolf reads the books of the she-wolf!'
      }
    },

    examples: {
      title: 'Dans le cartable de classe',
      dialogues: [
        { id: 'd5-1', speaker: 'Léo', avatarText: '👦', french: 'Qu’est-ce que tu as dans ton cartable, Sarah ?', english: 'What do you have in your backpack, Sarah?', audioText: 'Qu’est-ce que tu as dans ton cartable, Sarah ?' },
        { id: 'd5-2', speaker: 'Sarah', avatarText: '👧', french: 'J’ai un cahier, une trousse, l’ardoise et des feutres !', english: 'I have a notebook, a pencil case, the slate, and some markers!', audioText: 'J’ai un cahier, une trousse, l’ardoise et des feutres !' },
        { id: 'd5-3', speaker: 'Léo', avatarText: '👦', french: 'Super ! Moi, j’ai oublié la règle sur le bureau.', english: 'Great! Me, I forgot the ruler on the desk.', audioText: 'Super ! Moi, j’ai oublié la règle sur le bureau.' }
      ],
      keyPhrases: [
        { french: 'C’est un / C’est une...', english: 'It is a (masc) / It is a (fem)...', usageTip: 'Pour désigner un objet singulier.' },
        { french: 'Ce sont des...', english: 'These are (plural)...', usageTip: 'Pour désigner plusieurs objets au pluriel.' }
      ]
    },

    exercises: [
      {
        id: 'e5-1',
        type: 'multiple-choice',
        prompt: 'Quel article met-on devant le mot féminin "gomme" ?',
        options: ['le', 'un', 'la', 'les'],
        correctAnswer: 'la',
        explanation: 'Gomme est féminin : on dit "la gomme" ou "une gomme".'
      },
      {
        id: 'e5-2',
        type: 'fill-blank',
        prompt: 'Le mot "oiseau" commence par une voyelle. On écrit donc : ______ oiseau.',
        options: ['l’', 'le', 'la', 'des'],
        correctAnswer: 'l’',
        explanation: 'Devant une voyelle (o), "le" s’élide en "l’" : l’oiseau.'
      },
      {
        id: 'e5-3',
        type: 'match-pairs',
        prompt: 'Associe le nom à son article indéfini correct :',
        pairs: [
          { french: 'stylo (masculin)', english: 'un' },
          { french: 'trousse (féminin)', english: 'une' },
          { french: 'crayons (pluriel)', english: 'des' },
          { french: 'arbre (masculin)', english: 'un' }
        ],
        correctAnswer: 'matched',
        explanation: 'Très bien ! Tu maîtrises les articles comme un chef.'
      }
    ],

    revision: {
      summaryList: [
        'Masculin : LE ou UN (le livre, un stylo)',
        'Féminin : LA ou UNE (la pomme, une table)',
        'Devant voyelle : L’ (l’école, l’ami)',
        'Pluriel : LES ou DES (les enfants, des bonbons)'
      ],
      flashcards: [
        { front: 'Le / Un', back: 'Masculin singulier', hint: 'Ex: Le cahier' },
        { front: 'La / Une', back: 'Féminin singulier', hint: 'Ex: La règle' },
        { front: 'L’', back: 'Devant une voyelle ou h muet', hint: 'Ex: L’éléphant' },
        { front: 'Les / Des', back: 'Pluriel', hint: 'Ex: Les oiseaux' }
      ],
      quickCheckRule: 'Règle d’or : Si le mot se termine par un "-s" au pluriel, l’article est toujours "les" ou "des" !'
    },

    test: {
      title: 'Évaluation Chapitre 5 : Les Articles',
      passScore: 3,
      questions: [
        {
          id: 'q5-1',
          question: 'Quel article défini convient pour "maison" (nom féminin) ?',
          options: ['Le', 'La', 'L’', 'Les'],
          correctAnswer: 'La',
          hint: 'On dit "une" maison.',
          explanation: '"Maison" est un nom féminin : on dit "La maison".'
        },
        {
          id: 'q5-2',
          question: 'Pourquoi écrit-on "l’éléphant" au lieu de "le éléphant" ?',
          options: ['Parce que c’est un gros animal', 'Parce que "éléphant" commence par une voyelle', 'Parce que c’est au pluriel', 'Parce que c’est féminin'],
          correctAnswer: 'Parce que "éléphant" commence par une voyelle',
          hint: 'La lettre É est une voyelle.',
          explanation: 'Devant une voyelle, "le" devient "l’" pour faciliter la prononciation.'
        },
        {
          id: 'q5-3',
          question: 'Quel est l’article indéfini pluriel pour "crayons" ?',
          options: ['un', 'une', 'des', 'les'],
          correctAnswer: 'des',
          hint: 'Indéfini au pluriel.',
          explanation: '"Des" est l’article indéfini pluriel ("des crayons").'
        },
        {
          id: 'q5-4',
          question: 'Complète la phrase : "Voici ______ trousse de Sophie."',
          options: ['le', 'la', 'les', 'l’'],
          correctAnswer: 'la',
          hint: 'Trousse est un mot féminin.',
          explanation: 'On dit "la trousse".'
        }
      ],
      teacherAnswerKeyNotes: '1: La | 2: Parce que "éléphant" commence par une voyelle | 3: des | 4: la.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 6 : SECONDARY COLOURS
  // -------------------------------------------------------------
  {
    id: 6,
    slug: 'secondary-colours',
    pageNumber: 24,
    frenchTitle: 'Chapitre 6 : Les Couleurs Secondaires',
    englishTitle: 'Secondary Colours and Color Mixing',
    unitTag: 'Unité 5 : L’Atelier d’Arts Plastiques',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Apprendre les couleurs secondaires (orange, violet, vert, marron, rose, gris), comprendre les mélanges de peinture et les accords de base.',

    lesson: {
      introduction: 'Après avoir appris le bleu, le rouge et le jaune (les trois couleurs primaires), plongeons dans la magie des mélanges ! En mélangeant deux couleurs primaires, on obtient une couleur secondaire magnifique.',
      grammarRules: [
        {
          title: 'Les mélanges magiques et l’accord des couleurs',
          summary: 'Comment naissent les couleurs et comment les accorder avec les noms.',
          rulePoints: [
            'Bleu + Jaune = VERT (Green)',
            'Rouge + Jaune = ORANGE (Orange)',
            'Rouge + Bleu = VIOLET (Purple)',
            'Rouge + Blanc = ROSE (Pink)',
            'Noir + Blanc = GRIS (Grey)',
            'Accord féminin : vert ➔ verte, violet ➔ violette, gris ➔ grise. Mais attention : "orange" et "marron" sont invariables (ils ne changent jamais !).'
          ],
          tips: 'Retiens bien : "marron" et "orange" restent toujours pareils, sans "e" ni "s" !',
          tableData: {
            headers: ['Couleur en français', 'Mélange créateur', 'Traduction anglaise', 'Féminin'],
            rows: [
              ['Vert', 'Bleu + Jaune', 'Green', 'Verte (une pomme verte)'],
              ['Orange', 'Rouge + Jaune', 'Orange', 'Orange (invariable)'],
              ['Violet', 'Bleu + Rouge', 'Purple / Violet', 'Violette (une robe violette)'],
              ['Rose', 'Rouge + Blanc', 'Pink', 'Rose (une trousse rose)'],
              ['Gris', 'Noir + Blanc', 'Grey', 'Grise (une souris grise)'],
              ['Marron', 'Mélange de trois couleurs', 'Brown', 'Marron (invariable)']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v6-1', french: 'orange', english: 'orange', phonetic: '[ɔ.ʁɑ̃ʒ]', exampleSentence: 'La carotte est orange.', exampleSentenceEnglish: 'The carrot is orange.' },
        { id: 'v6-2', french: 'violet / violette', english: 'purple (m / f)', phonetic: '[vjɔ.lɛ] / [vjɔ.lɛt]', exampleSentence: 'Le raisin est violet.', exampleSentenceEnglish: 'The grape is purple.' },
        { id: 'v6-3', french: 'vert / verte', english: 'green (m / f)', phonetic: '[vɛʁ] / [vɛʁt]', exampleSentence: 'L’herbe est toute verte au printemps.', exampleSentenceEnglish: 'The grass is all green in spring.' },
        { id: 'v6-4', french: 'rose', english: 'pink', phonetic: '[ʁoz]', exampleSentence: 'Le flamant rose dort sur une patte.', exampleSentenceEnglish: 'The pink flamingo sleeps on one leg.' },
        { id: 'v6-5', french: 'gris / grise', english: 'grey (m / f)', phonetic: '[ɡʁi] / [ɡʁiz]', exampleSentence: 'Le petit éléphant est gris.', exampleSentenceEnglish: 'The little elephant is grey.' },
        { id: 'v6-6', french: 'marron', english: 'brown', phonetic: '[ma.ʁɔ̃]', exampleSentence: 'Le tronc d’arbre est marron.', exampleSentenceEnglish: 'The tree trunk is brown.' }
      ],
      teacherNote: {
        advice: 'Faites réaliser l’expérience en classe avec de la gouache : mélanger deux noisettes de gouache rouge et jaune sous les yeux ébahis des élèves !',
        commonMistake: 'Prononcer le "t" dans "vert" au masculin. Le "t" de vert ne s’entend qu’au féminin ("verte") ! Au masculin, on dit juste [vɛr].',
        classroomActivity: 'La palette d’artiste : Chaque élève peint son arc-en-ciel et nomme à haute voix chaque bande de couleur en français.'
      },
      culturalInsight: {
        title: 'Claude Monet et les peintres impressionnistes',
        fact: 'La France est le pays des peintres impressionnistes comme Claude Monet. Dans son célèbre jardin de Giverny, il a planté des centaines de fleurs violettes, roses et orangées pour les peindre sur ses toiles !'
      }
    },

    visuals: {
      title: 'La Palette Magique des Couleurs',
      caption: 'Regarde les mélanges et découvre le nom des couleurs.',
      items: [
        { label: 'Vert (Green)', translation: 'Bleu + Jaune', pronounceText: 'Le vert, une pomme verte', iconOrColor: '🟢' },
        { label: 'Orange (Orange)', translation: 'Rouge + Jaune', pronounceText: 'L’orange, une orange', iconOrColor: '🟠' },
        { label: 'Violet (Purple)', translation: 'Bleu + Rouge', pronounceText: 'Le violet, une fleur violette', iconOrColor: '🟣' },
        { label: 'Rose (Pink)', translation: 'Rouge + Blanc', pronounceText: 'Le rose, un flamant rose', iconOrColor: '🌸' },
        { label: 'Gris (Grey)', translation: 'Noir + Blanc', pronounceText: 'Le gris, une souris grise', iconOrColor: '⚪' },
        { label: 'Marron (Brown)', translation: 'Couleur chocolat', pronounceText: 'Le marron, un chat marron', iconOrColor: '🟤' }
      ]
    },

    pronunciation: {
      focusSound: 'Le son [ʁ] dans "Vert", "Rose" et "Marron"',
      soundRule: 'Le "R" français se forme dans le fond de la gorge, doux et vibrant. Pour "violette", fais bien entendre le son [t] final.',
      items: [
        { word: 'Orange', phonetic: '[ɔ-ʁɑ̃ʒ]', english: 'Orange', syllables: 'O - range' },
        { word: 'Violet', phonetic: '[vjɔ-lɛ]', english: 'Purple (m)', syllables: 'Vio - let' },
        { word: 'Verte', phonetic: '[vɛʁt]', english: 'Green (f)', syllables: 'Ver - te' },
        { word: 'Marron', phonetic: '[ma-ʁɔ̃]', english: 'Brown', syllables: 'Mar - ron' }
      ],
      tongueTwister: {
        french: 'Une grenouille verte saute sur une feuille violette !',
        english: 'A green frog jumps onto a purple leaf!'
      }
    },

    examples: {
      title: 'En cours d’arts plastiques',
      dialogues: [
        { id: 'd6-1', speaker: 'Thomas', avatarText: '👦', french: 'Maîtresse, comment fait-on du vert avec la peinture ?', english: 'Teacher, how do we make green with paint?', audioText: 'Maîtresse, comment fait-on du vert avec la peinture ?' },
        { id: 'd6-2', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'C’est magique : prends une goutte de bleu et une goutte de jaune !', english: 'It’s magic: take a drop of blue and a drop of yellow!', audioText: 'C’est magique : prends une goutte de bleu et une goutte de jaune !' },
        { id: 'd6-3', speaker: 'Thomas', avatarText: '👦', french: 'Waouh, ça fait un magnifique vert grenouille ! Et pour le violet ?', english: 'Wow, it makes a magnificent frog green! And for purple?', audioText: 'Waouh, ça fait un magnifique vert grenouille ! Et pour le violet ?' },
        { id: 'd6-4', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'Mélange du bleu et du rouge !', english: 'Mix blue and red!', audioText: 'Mélange du bleu et du rouge !' }
      ],
      keyPhrases: [
        { french: 'De quelle couleur est... ?', english: 'What color is... ?', usageTip: 'Question posée pour demander la couleur d’un objet.' },
        { french: 'Il est vert / Elle est verte.', english: 'It is green (masc / fem).', usageTip: 'Pour répondre en accordant avec le genre.' }
      ]
    },

    exercises: [
      {
        id: 'e6-1',
        type: 'multiple-choice',
        prompt: 'Quel mélange de couleurs donne du VERT ?',
        options: ['Rouge + Jaune', 'Bleu + Jaune', 'Noir + Blanc', 'Rouge + Bleu'],
        correctAnswer: 'Bleu + Jaune',
        explanation: 'Bleu + Jaune = Vert !'
      },
      {
        id: 'e6-2',
        type: 'fill-blank',
        prompt: 'La fraise est rouge, mais la carotte est ______.',
        options: ['orange', 'violette', 'verte', 'grise'],
        correctAnswer: 'orange',
        explanation: 'La carotte a une belle couleur orange.'
      },
      {
        id: 'e6-3',
        type: 'match-pairs',
        prompt: 'Associe la couleur à son nom anglais :',
        pairs: [
          { french: 'violet', english: 'purple' },
          { french: 'gris', english: 'grey' },
          { french: 'vert', english: 'green' },
          { french: 'marron', english: 'brown' }
        ],
        correctAnswer: 'matched',
        explanation: 'Formidable ! Tu connais toutes les couleurs secondaires.'
      }
    ],

    revision: {
      summaryList: [
        'Bleu + Jaune = Vert',
        'Rouge + Jaune = Orange',
        'Bleu + Rouge = Violet',
        'Rouge + Blanc = Rose',
        'Noir + Blanc = Gris',
        'Marron et Orange sont invariables !'
      ],
      flashcards: [
        { front: 'Vert / Verte', back: 'Green', hint: 'Bleu + Jaune' },
        { front: 'Orange', back: 'Orange (invariable)', hint: 'Rouge + Jaune' },
        { front: 'Violet / Violette', back: 'Purple', hint: 'Bleu + Rouge' },
        { front: 'Marron', back: 'Brown', hint: 'Couleur du bois ou chocolat' }
      ],
      quickCheckRule: 'On dit : un cahier vert (masculin) mais une trousse verte (féminin) !'
    },

    test: {
      title: 'Évaluation Chapitre 6 : Les Couleurs Secondaires',
      passScore: 3,
      questions: [
        {
          id: 'q6-1',
          question: 'Quelle couleur obtient-on en mélangeant du bleu et du rouge ?',
          options: ['Vert', 'Orange', 'Violet', 'Rose'],
          correctAnswer: 'Violet',
          hint: 'Couleur des prunes et des raisins.',
          explanation: 'Bleu + Rouge = Violet.'
        },
        {
          id: 'q6-2',
          question: 'Comment accorde-t-on la couleur "vert" avec le mot féminin "pomme" ?',
          options: ['Une pomme vert', 'Une pomme verte', 'Une pomme vertte', 'Une pomme vertue'],
          correctAnswer: 'Une pomme verte',
          hint: 'On ajoute un "e" au féminin.',
          explanation: 'Au féminin, "vert" devient "verte".'
        },
        {
          id: 'q6-3',
          question: 'De quelle couleur est une petite souris ?',
          options: ['Rose', 'Grise', 'Orange', 'Verte'],
          correctAnswer: 'Grise',
          hint: 'Mélange de noir et blanc.',
          explanation: 'La souris est grise (gris au masculin, grise au féminin).'
        },
        {
          id: 'q6-4',
          question: 'Laquelle de ces couleurs ne change JAMAIS d’orthographe au féminin ?',
          options: ['vert', 'gris', 'marron', 'violet'],
          correctAnswer: 'marron',
          hint: 'Elle est invariable.',
          explanation: '"Marron" et "Orange" sont des adjectifs invariables en français.'
        }
      ],
      teacherAnswerKeyNotes: '1: Violet | 2: Une pomme verte | 3: Grise | 4: marron.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 7 : MONTHS OF THE YEAR
  // -------------------------------------------------------------
  {
    id: 7,
    slug: 'months-of-the-year',
    pageNumber: 28,
    frenchTitle: 'Chapitre 7 : Les Mois de l’Année',
    englishTitle: 'Months of the Year and Seasons',
    unitTag: 'Unité 6 : Le Temps qui Passe',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Connaître les 12 mois de l’année dans l’ordre, les 4 saisons et exprimer la date de son anniversaire.',

    lesson: {
      introduction: 'Une année complète compte 12 mois et 4 belles saisons. En français, contrairement à l’anglais, les noms des mois ne prennent JAMAIS de majuscule au milieu d’une phrase !',
      grammarRules: [
        {
          title: 'Les 12 mois et la règle des minuscules',
          summary: 'La liste ordonnée et la construction de la date.',
          rulePoints: [
            'Règle d’or : En français, on écrit "en janvier" avec un "j" minuscule (pas de majuscule).',
            'Pour dire son mois d’anniversaire : "Mon anniversaire est en..." ou "au mois de...".',
            'Les 4 saisons : le printemps (printemps fleuri), l’été (soleil et vacances), l’automne (feuilles rousses), l’hiver (froid et neige).'
          ],
          tips: 'En France, la rentrée des classes se fait toujours en septembre, après les grandes vacances d’été !',
          tableData: {
            headers: ['Numéro', 'Mois en français', 'Saison associée', 'Événement repère'],
            rows: [
              ['1', 'janvier', 'Hiver', 'Bonne année & galette des rois'],
              ['2', 'février', 'Hiver', 'Crêpes de la Chandeleur & Carnaval'],
              ['3', 'mars', 'Printemps', 'Arrivée du printemps et des fleurs'],
              ['4', 'avril', 'Printemps', 'Poisson d’avril & Pâques'],
              ['5', 'mai', 'Printemps', 'Fête du muguet et des mamans'],
              ['6', 'juin', 'Été', 'Fête de la musique & fin d’école'],
              ['7', 'juillet', 'Été', 'Grandes vacances & fête nationale (14 juillet)'],
              ['8', 'août', 'Été', 'Vacances à la plage'],
              ['9', 'septembre', 'Automne', 'La rentrée des classes !'],
              ['10', 'octobre', 'Automne', 'Chute des feuilles dorées'],
              ['11', 'novembre', 'Automne', 'Temps frais et brumeux'],
              ['12', 'décembre', 'Hiver', 'Fête de Noël et hiver']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v7-1', french: 'janvier', english: 'January', phonetic: '[ʒɑ̃.vje]', exampleSentence: 'En janvier, nous fêtons la nouvelle année.', exampleSentenceEnglish: 'In January, we celebrate the New Year.' },
        { id: 'v7-2', french: 'avril', english: 'April', phonetic: '[a.vʁil]', exampleSentence: 'En avril, ne te découvre pas d’un fil !', exampleSentenceEnglish: 'In April, do not shed a thread!' },
        { id: 'v7-3', french: 'juillet', english: 'July', phonetic: '[ʒɥi.jɛ]', exampleSentence: 'En juillet, c’est les vacances d’été.', exampleSentenceEnglish: 'In July, it is the summer holidays.' },
        { id: 'v7-4', french: 'septembre', english: 'September', phonetic: '[sɛp.tɑ̃bʁ]', exampleSentence: 'En septembre, c’est la rentrée scolaire.', exampleSentenceEnglish: 'In September, it is back to school.' },
        { id: 'v7-5', french: 'décembre', english: 'December', phonetic: '[de.sɑ̃bʁ]', exampleSentence: 'En décembre, arrive le Père Noël.', exampleSentenceEnglish: 'In December, Santa arrives.' },
        { id: 'v7-6', french: 'le printemps', english: 'spring', phonetic: '[lə pʁɛ̃.tɑ̃]', exampleSentence: 'Les hirondelles reviennent au printemps.', exampleSentenceEnglish: 'Swallows return in spring.' },
        { id: 'v7-7', french: 'l’été', english: 'summer', phonetic: '[le.te]', exampleSentence: 'J’adore nager à la mer en été.', exampleSentenceEnglish: 'I love swimming in the sea in summer.' }
      ],
      teacherNote: {
        advice: 'Faire chanter la comptine des 12 mois pour aider la mémorisation du rythme des syllabes.',
        commonMistake: 'Mettre une lettre majuscule au mois (ex: "En Septembre"). Insistez : en français, les mois restent en minuscules sauf s’ils commencent la phrase !',
        classroomActivity: 'La frise des anniversaires : Créer un wagon pour chaque mois et coller les photos des élèves dans leur wagon de naissance.'
      },
      culturalInsight: {
        title: 'Le Poisson d’Avril en France',
        fact: 'Le 1er avril en France, les écoliers fabriquent des poissons en papier et s’amusent à les scotcher discrètement dans le dos de leurs camarades et de leur maître en criant : "Poisson d’avril !" quand ils sont découverts.'
      }
    },

    visuals: {
      title: 'La Roue des 12 Mois & 4 Saisons',
      caption: 'Écoute les mois dans l’ordre du calendrier.',
      items: [
        { label: 'Janvier - Février', translation: 'L’Hiver froid', pronounceText: 'janvier, février', iconOrColor: '❄️' },
        { label: 'Mars - Avril - Mai', translation: 'Le Printemps fleuri', pronounceText: 'mars, avril, mai', iconOrColor: '🌱' },
        { label: 'Juin - Juillet - Août', translation: 'L’Été ensoleillé', pronounceText: 'juin, juillet, août', iconOrColor: '☀️' },
        { label: 'Septembre - Octobre', translation: 'L’Automne des feuilles', pronounceText: 'septembre, octobre', iconOrColor: '🍂' },
        { label: 'Novembre - Décembre', translation: 'Fin d’année & fêtes', pronounceText: 'novembre, décembre', iconOrColor: '🎄' },
        { label: 'Mon Anniversaire !', translation: 'Quel est ton mois ?', pronounceText: 'Mon anniversaire est en mai.', iconOrColor: '🎂' }
      ]
    },

    pronunciation: {
      focusSound: 'La prononciation de "Août" [ut] et "Juin" [ʒwɛ̃]',
      soundRule: '"Août" se prononce le plus souvent [out] ou [outte] très court en une seule syllabe ! "Juin" rime avec "bain" [ʒwɛ̃].',
      items: [
        { word: 'Janvier', phonetic: '[ʒɑ̃-vje]', english: 'January', syllables: 'Jan - vier' },
        { word: 'Août', phonetic: '[ut]', english: 'August', syllables: 'Août' },
        { word: 'Septembre', phonetic: '[sɛp-tɑ̃bʁ]', english: 'September', syllables: 'Sep - tem - bre' },
        { word: 'Décembre', phonetic: '[de-sɑ̃bʁ]', english: 'December', syllables: 'Dé - cem - bre' }
      ],
      tongueTwister: {
        french: 'En juillet et août, Julie joue au grand jeu sous le soleil !',
        english: 'In July and August, Julie plays the big game under the sun!'
      }
    },

    examples: {
      title: 'Quand est ton anniversaire ?',
      dialogues: [
        { id: 'd7-1', speaker: 'Léa', avatarText: '👧', french: 'Arthur, c’est quand ton anniversaire ?', english: 'Arthur, when is your birthday?', audioText: 'Arthur, c’est quand ton anniversaire ?' },
        { id: 'd7-2', speaker: 'Arthur', avatarText: '👦', french: 'Mon anniversaire est le douze mars, au printemps ! Et toi ?', english: 'My birthday is on March 12th, in spring! And you?', audioText: 'Mon anniversaire est le douze mars, au printemps ! Et toi ?' },
        { id: 'd7-3', speaker: 'Léa', avatarText: '👧', french: 'Moi, je suis née en octobre, pendant l’automne !', english: 'Me, I was born in October, during autumn!', audioText: 'Moi, je suis née en octobre, pendant l’automne !' }
      ],
      keyPhrases: [
        { french: 'C’est quand ton anniversaire ?', english: 'When is your birthday?', usageTip: 'Question posée pour connaître la date de naissance.' },
        { french: 'Mon anniversaire est en [mois].', english: 'My birthday is in [month].', usageTip: 'Pour répondre avec le nom du mois.' }
      ]
    },

    exercises: [
      {
        id: 'e7-1',
        type: 'multiple-choice',
        prompt: 'Quel mois vient juste après le mois d’avril ?',
        options: ['mars', 'mai', 'juin', 'juillet'],
        correctAnswer: 'mai',
        explanation: 'Dans le calendrier, après avril vient mai.'
      },
      {
        id: 'e7-2',
        type: 'fill-blank',
        prompt: 'En France, la rentrée des classes a lieu au mois de ______.',
        options: ['septembre', 'janvier', 'juillet', 'août'],
        correctAnswer: 'septembre',
        explanation: 'La rentrée scolaire est toujours en septembre.'
      },
      {
        id: 'e7-3',
        type: 'match-pairs',
        prompt: 'Associe chaque mois à sa saison principale :',
        pairs: [
          { french: 'janvier', english: 'hiver' },
          { french: 'avril', english: 'printemps' },
          { french: 'juillet', english: 'été' },
          { french: 'octobre', english: 'automne' }
        ],
        correctAnswer: 'matched',
        explanation: 'Bravo ! Tu connais parfaitement le rythme des saisons.'
      }
    ],

    revision: {
      summaryList: [
        '12 mois : janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre',
        '4 saisons : printemps, été, automne, hiver',
        'Pas de majuscule aux mois en français !',
        'Formule : "Mon anniversaire est en [mois]"'
      ],
      flashcards: [
        { front: 'Janvier', back: 'Le premier mois de l’année', hint: 'Bonne année' },
        { front: 'Juillet & Août', back: 'Les grandes vacances d’été', hint: 'Plage et soleil' },
        { front: 'Septembre', back: 'La rentrée des classes', hint: 'Retour à l’école' },
        { front: 'Décembre', back: 'Le dernier mois de l’année', hint: 'Noël' }
      ],
      quickCheckRule: 'Rappel : En français, écris "en mai" avec un petit "m" !'
    },

    test: {
      title: 'Évaluation Chapitre 7 : Les Mois de l’Année',
      passScore: 3,
      questions: [
        {
          id: 'q7-1',
          question: 'Combien y a-t-il de mois dans une année ?',
          options: ['10', '11', '12', '20'],
          correctAnswer: '12',
          hint: 'Une douzaine.',
          explanation: 'Il y a 12 mois dans une année.'
        },
        {
          id: 'q7-2',
          question: 'Quel est le premier mois de l’année ?',
          options: ['décembre', 'septembre', 'janvier', 'mars'],
          correctAnswer: 'janvier',
          hint: 'Celui où on se souhaite "Bonne Année !".',
          explanation: 'L’année commence le 1er janvier.'
        },
        {
          id: 'q7-3',
          question: 'Les noms des mois prennent-ils une majuscule au milieu d’une phrase en français ?',
          options: ['Oui, toujours', 'Non, jamais', 'Seulement en été', 'Seulement s’ils sont longs'],
          correctAnswer: 'Non, jamais',
          hint: 'Contrairement à l’anglais.',
          explanation: 'En français, les noms des mois s’écrivent en minuscules.'
        },
        {
          id: 'q7-4',
          question: 'En quelle saison tombe le mois de juillet ?',
          options: ['Au printemps', 'En été', 'En automne', 'En hiver'],
          correctAnswer: 'En été',
          hint: 'Saison chaude des vacances.',
          explanation: 'Juillet est en plein été.'
        }
      ],
      teacherAnswerKeyNotes: '1: 12 | 2: janvier | 3: Non, jamais | 4: En été.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 8 : PARTS OF THE HEAD
  // -------------------------------------------------------------
  {
    id: 8,
    slug: 'parts-of-the-head',
    pageNumber: 32,
    frenchTitle: 'Chapitre 8 : Les Parties de la Tête',
    englishTitle: 'Parts of the Head and Face',
    unitTag: 'Unité 7 : Le Corps Humain',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Nommer et situer les différentes parties du visage et de la tête, distinguer les formes singulières et plurielles (l’œil / les yeux).',

    lesson: {
      introduction: 'Regarde-toi dans le miroir ! Ta tête possède deux yeux pour voir, un nez pour sentir les bonnes odeurs, une bouche pour parler et sourire, et deux oreilles pour écouter la maîtresse.',
      grammarRules: [
        {
          title: 'Singulier et pluriel des parties du visage',
          summary: 'Attention au mot magique très spécial : l’œil / les yeux !',
          rulePoints: [
            'La tête (f) ➔ la tête toute entière.',
            'Le nez (m) ➔ un nez (ne change pas au pluriel car il finit par un "z").',
            'La bouche (f) ➔ avec les dents (f. pl.) et la langue.',
            'Les oreilles (f. pl.) ➔ une oreille au singulier.',
            'L’ŒIL et LES YEUX : C’est un pluriel irrégulier très particulier en français ! 1 œil ➔ 2 yeux.',
            'Les cheveux (m. pl.) ➔ prennent un "x" au pluriel (un cheveu ➔ des cheveux).'
          ],
          tips: 'On dit "J’ai les yeux bleus" ou "J’ai les cheveux bruns" avec le verbe avoir !',
          tableData: {
            headers: ['Partie en français', 'Genre & Nombre', 'En anglais', 'Phrase exemple'],
            rows: [
              ['la tête', 'Féminin singulier', 'the head', 'Je tourne la tête.'],
              ['les yeux', 'Masculin pluriel', 'the eyes', 'J’ouvre grand les yeux.'],
              ['le nez', 'Masculin singulier', 'the nose', 'Le clown a un nez rouge.'],
              ['la bouche', 'Féminin singulier', 'the mouth', 'Je souris avec la bouche.'],
              ['les oreilles', 'Féminin pluriel', 'the ears', 'J’écoute avec mes oreilles.'],
              ['les cheveux', 'Masculin pluriel', 'the hair', 'Elle a les cheveux bouclés.'],
              ['les dents', 'Féminin pluriel', 'the teeth', 'Je me brosse les dents.']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v8-1', french: 'la tête', english: 'the head', phonetic: '[la tɛt]', exampleSentence: 'J’ai un chapeau sur la tête.', exampleSentenceEnglish: 'I have a hat on my head.' },
        { id: 'v8-2', french: 'les yeux', english: 'the eyes', phonetic: '[le zjø]', exampleSentence: 'Le chat a les yeux verts.', exampleSentenceEnglish: 'The cat has green eyes.' },
        { id: 'v8-3', french: 'le nez', english: 'the nose', phonetic: '[lə ne]', exampleSentence: 'Pinocchio a un grand nez.', exampleSentenceEnglish: 'Pinocchio has a big nose.' },
        { id: 'v8-4', french: 'la bouche', english: 'the mouth', phonetic: '[la buʃ]', exampleSentence: 'Un grand sourire sur la bouche.', exampleSentenceEnglish: 'A big smile on the mouth.' },
        { id: 'v8-5', french: 'les oreilles', english: 'the ears', phonetic: '[le zɔ.ʁɛj]', exampleSentence: 'Le lapin a de longues oreilles.', exampleSentenceEnglish: 'The rabbit has long ears.' },
        { id: 'v8-6', french: 'les cheveux', english: 'the hair', phonetic: '[le ʃə.vø]', exampleSentence: 'Il a les cheveux courts.', exampleSentenceEnglish: 'He has short hair.' },
        { id: 'v8-7', french: 'les dents', english: 'the teeth', phonetic: '[le dɑ̃]', exampleSentence: 'Des dents bien blanches.', exampleSentenceEnglish: 'Very white teeth.' }
      ],
      teacherNote: {
        advice: 'Utilisez la célèbre chanson de maternelle et primaire "Savez-vous planter les choux à la mode de chez nous ? On les plante avec le nez, avec le coude..." ou "Jean Petit qui danse".',
        commonMistake: 'Dire "les œils" au lieu de "les yeux". Insistez bien sur ce pluriel irrégulier amusant.',
        classroomActivity: 'Jacques a dit : "Jacques a dit touchez votre nez ! Jacques a dit touchez vos deux oreilles ! Touchez la bouche ! (piège !)"'
      },
      culturalInsight: {
        title: 'La petite souris des dents de lait',
        fact: 'En France, quand une dent de lait tombe, l’enfant la glisse sous son oreiller avant de dormir. Pendant la nuit, ce n’est pas la fée des dents, mais "la petite souris" qui vient l’échanger contre une petite pièce de monnaie !'
      }
    },

    visuals: {
      title: 'Le Portrait de la Tête et du Visage',
      caption: 'Touche chaque partie du visage pour entendre sa prononciation.',
      items: [
        { label: 'Les cheveux', translation: 'Sur le haut du crâne', pronounceText: 'les cheveux', iconOrColor: '💇' },
        { label: 'Les yeux', translation: 'Pour regarder', pronounceText: 'les yeux', iconOrColor: '👀' },
        { label: 'Le nez', translation: 'Pour respirer et sentir', pronounceText: 'le nez', iconOrColor: '👃' },
        { label: 'La bouche', translation: 'Pour parler et sourire', pronounceText: 'la bouche', iconOrColor: '👄' },
        { label: 'Les oreilles', translation: 'Pour écouter', pronounceText: 'les oreilles', iconOrColor: '👂' },
        { label: 'Les dents', translation: 'Pour croquer la pomme', pronounceText: 'les dents', iconOrColor: '🦷' }
      ]
    },

    pronunciation: {
      focusSound: 'La liaison dans "Les yeux" [le-zjø] et "Les oreilles" [le-zɔ-ʁɛj]',
      soundRule: 'Quand on dit "les yeux" ou "les oreilles", le "s" de "les" s’accroche à la voyelle suivante et fait un son de petite abeille : [z] !',
      items: [
        { word: 'Les yeux', phonetic: '[le-zjø]', english: 'The eyes', syllables: 'Les - yeux' },
        { word: 'Le nez', phonetic: '[lə ne]', english: 'The nose', syllables: 'Le nez' },
        { word: 'La bouche', phonetic: '[la buʃ]', english: 'The mouth', syllables: 'La bou - che' },
        { word: 'Les oreilles', phonetic: '[le-zɔ-ʁɛj]', english: 'The ears', syllables: 'Les o - reil - les' }
      ],
      tongueTwister: {
        french: 'Le nez noir du renard renifle neuf noisettes !',
        english: 'The fox’s black nose sniffs nine hazelnuts!'
      }
    },

    examples: {
      title: 'Décrire son autoportrait en classe',
      dialogues: [
        { id: 'd8-1', speaker: 'Chloé', avatarText: '👧', french: 'Regarde mon dessin, Maîtresse ! J’ai dessiné mon visage.', english: 'Look at my drawing, Teacher! I drew my face.', audioText: 'Regarde mon dessin, Maîtresse ! J’ai dessiné mon visage.' },
        { id: 'd8-2', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'C’est magnifique Chloé ! De quelle couleur sont tes yeux ?', english: 'It is wonderful Chloe! What color are your eyes?', audioText: 'C’est magnifique Chloé ! De quelle couleur sont tes yeux ?' },
        { id: 'd8-3', speaker: 'Chloé', avatarText: '👧', french: 'J’ai les yeux marron et les cheveux longs.', english: 'I have brown eyes and long hair.', audioText: 'J’ai les yeux marron et les cheveux longs.' }
      ],
      keyPhrases: [
        { french: 'J’ai les yeux [couleur].', english: 'I have [color] eyes.', usageTip: 'Pour décrire la couleur de ses yeux.' },
        { french: 'J’ai les cheveux [longs / courts / bruns].', english: 'I have [long / short / brown] hair.', usageTip: 'Pour décrire sa chevelure.' }
      ]
    },

    exercises: [
      {
        id: 'e8-1',
        type: 'multiple-choice',
        prompt: 'Avec quelle partie du visage est-ce qu’on écoute la maîtresse ?',
        options: ['les yeux', 'le nez', 'les oreilles', 'la bouche'],
        correctAnswer: 'les oreilles',
        explanation: 'On écoute avec ses oreilles !'
      },
      {
        id: 'e8-2',
        type: 'fill-blank',
        prompt: 'Un œil au singulier devient les ______ au pluriel.',
        options: ['yeux', 'œils', 'dents', 'nez'],
        correctAnswer: 'yeux',
        explanation: 'C’est le pluriel irrégulier : un œil, des yeux.'
      },
      {
        id: 'e8-3',
        type: 'match-pairs',
        prompt: 'Associe la partie du visage à son rôle :',
        pairs: [
          { french: 'les yeux', english: 'pour voir' },
          { french: 'le nez', english: 'pour sentir' },
          { french: 'la bouche', english: 'pour parler' },
          { french: 'les dents', english: 'pour mâcher' }
        ],
        correctAnswer: 'matched',
        explanation: 'Superbe maîtrise des parties du visage !'
      }
    ],

    revision: {
      summaryList: [
        'La tête : l’ensemble',
        'Les yeux : un œil / des yeux (pluriel magique)',
        'Le nez : au centre du visage',
        'La bouche : avec les lèvres et les dents',
        'Les oreilles : pour entendre la musique',
        'Les cheveux : sur le dessus de la tête'
      ],
      flashcards: [
        { front: 'Les yeux', back: 'The eyes', hint: 'Liaison en [z]' },
        { front: 'Le nez', back: 'The nose', hint: 'Le "z" ne se prononce pas, son [e]' },
        { front: 'La bouche', back: 'The mouth', hint: 'Avec le sourire' },
        { front: 'Les oreilles', back: 'The ears', hint: 'Deux oreilles' }
      ],
      quickCheckRule: 'Retiens bien : Un œil ➔ Deux yeux !'
    },

    test: {
      title: 'Évaluation Chapitre 8 : Les Parties de la Tête',
      passScore: 3,
      questions: [
        {
          id: 'q8-1',
          question: 'Quel est le pluriel correct du mot "un œil" ?',
          options: ['des œils', 'des yeux', 'des oreilles', 'des têtes'],
          correctAnswer: 'des yeux',
          hint: 'Pluriel irrégulier français.',
          explanation: 'Le pluriel de œil est yeux.'
        },
        {
          id: 'q8-2',
          question: 'Comment prononce-t-on la fin du mot "le nez" ?',
          options: ['Comme [nɛz]', 'Comme [ne]', 'Comme [nys]', 'Comme [noz]'],
          correctAnswer: 'Comme [ne]',
          hint: 'Le z fait le son é.',
          explanation: '"Nez" se prononce [ne] exactement comme la lettre N.'
        },
        {
          id: 'q8-3',
          question: 'Qu’est-ce qui se trouve à l’intérieur de la bouche pour mâcher la nourriture ?',
          options: ['les cheveux', 'les yeux', 'les dents', 'le front'],
          correctAnswer: 'les dents',
          hint: 'On les brosse 2 fois par jour.',
          explanation: 'Les dents sont dans la bouche.'
        },
        {
          id: 'q8-4',
          question: 'Complète la phrase : "Le clown a un gros ______ rouge au milieu de la figure."',
          options: ['nez', 'oreille', 'œil', 'dent'],
          correctAnswer: 'nez',
          hint: 'En forme de balle rouge.',
          explanation: 'Le clown porte un nez rouge.'
        }
      ],
      teacherAnswerKeyNotes: '1: des yeux | 2: Comme [ne] | 3: les dents | 4: nez.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 9 : CLASSROOM ITEM SENTENCES
  // -------------------------------------------------------------
  {
    id: 9,
    slug: 'classroom-item-sentences',
    pageNumber: 36,
    frenchTitle: 'Chapitre 9 : Les Objets de la Classe en Phrases',
    englishTitle: 'Classroom Objects & Sentences',
    unitTag: 'Unité 8 : Dans la Classe',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Construire des phrases complètes pour décrire le matériel scolaire avec "Dans mon cartable, j’ai..." et "Sur ma table, il y a...".',
    featuredImage: '/src/assets/images/classroom_items_vignette_1791442713015.jpg',
    imageAlt: 'Table d’écolier avec cartable, trousse, cahier, crayons de couleur et tableau noir',

    lesson: {
      introduction: 'À l’école primaire, ton bureau et ton cartable sont remplis de trésors pour travailler : trousse, stylos, gomme, ciseaux et cahiers. Apprenons à faire de jolies phrases complètes pour les décrire !',
      grammarRules: [
        {
          title: 'Faire des phrases avec "Il y a" et "J’ai"',
          summary: 'La structure magique de la phrase en français.',
          rulePoints: [
            'Structure 1 : "Dans mon cartable, il y a..." (In my schoolbag, there is / are...).',
            'Structure 2 : "Sur ma table, j’ai..." (On my desk, I have...).',
            'Structure 3 : "Voici mon / ma / mes..." (Here is my...).',
            'Adjectif de couleur : en français, la couleur se place APRÈS le nom ! Ex: "un cahier bleu" (et non "un bleu cahier").'
          ],
          tips: 'Règle essentielle : Nom + Couleur ➔ un crayon jaune, une règle verte, des ciseaux rouges.',
          tableData: {
            headers: ['Objet scolaire', 'Genre', 'Dans la phrase', 'Traduction anglaise'],
            rows: [
              ['le cartable', 'Masculin', 'Dans mon cartable, je range mes livres.', 'The schoolbag / backpack'],
              ['la trousse', 'Féminin', 'Dans ma trousse, j’ai des crayons.', 'The pencil case'],
              ['le cahier', 'Masculin', 'J’écris la date sur mon cahier.', 'The notebook'],
              ['la règle', 'Féminin', 'Je trace un trait avec ma règle.', 'The ruler'],
              ['les ciseaux', 'Pluriel', 'Je découpe avec les ciseaux.', 'The scissors'],
              ['le tableau', 'Masculin', 'La maîtresse écrit au tableau.', 'The chalkboard']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v9-1', french: 'le cartable', english: 'the schoolbag / backpack', phonetic: '[lə kaʁ.tabl]', exampleSentence: 'Mon cartable est lourd aujourd’hui.', exampleSentenceEnglish: 'My schoolbag is heavy today.' },
        { id: 'v9-2', french: 'la trousse', english: 'the pencil case', phonetic: '[la tʁus]', exampleSentence: 'J’ouvre ma trousse pour prendre un stylo.', exampleSentenceEnglish: 'I open my pencil case to take a pen.' },
        { id: 'v9-3', french: 'le cahier', english: 'the notebook', phonetic: '[lə ka.je]', exampleSentence: 'Mon cahier du jour a une couverture bleue.', exampleSentenceEnglish: 'My daily notebook has a blue cover.' },
        { id: 'v9-4', french: 'la gomme', english: 'the eraser', phonetic: '[la ɡɔm]', exampleSentence: 'La gomme efface le crayon de papier.', exampleSentenceEnglish: 'The eraser erases the pencil lead.' },
        { id: 'v9-5', french: 'la colle', english: 'the glue stick', phonetic: '[la kɔl]', exampleSentence: 'Je colle ma feuille dans le cahier.', exampleSentenceEnglish: 'I paste my sheet into the notebook.' },
        { id: 'v9-6', french: 'le taille-crayon', english: 'the pencil sharpener', phonetic: '[lə taj.kʁɛ.jɔ̃]', exampleSentence: 'Mon taille-crayon a un petit réservoir.', exampleSentenceEnglish: 'My sharpener has a small container.' },
        { id: 'v9-7', french: 'l’ardoise', english: 'the slate', phonetic: '[laʁ.dwaz]', exampleSentence: 'J’écris le résultat sur l’ardoise.', exampleSentenceEnglish: 'I write the answer on the slate.' }
      ],
      teacherNote: {
        advice: 'Insistez sur la place de la couleur après le nom. C’est la plus grande différence par rapport à l’anglais ("a yellow pencil" ➔ "un crayon jaune").',
        commonMistake: 'Dire "un jaune crayon". Faites répéter la formule rythmée : "Objet d’abord, couleur après !"',
        classroomActivity: 'La devinette du cartable secret : Un élève pioche un objet les yeux bandés et dit : "Dans mon cartable, je touche une règle longue !"'
      },
      culturalInsight: {
        title: 'Le "Cartable" et l’ardoise en France',
        fact: 'En France, le sac d’école pour le primaire s’appelle traditionnellement le "cartable". Il a souvent deux fermoirs en métal sur le devant. Dans presque toutes les classes de CP et CE1, chaque enfant possède une ardoise effaçable pour répondre rapidement aux questions de calcul mental !'
      }
    },

    visuals: {
      title: 'L’Inventaire du Petit Écolier',
      caption: 'Regarde les affaires de classe et écoute les phrases complètes.',
      items: [
        { label: 'Un cartable bleu', translation: 'Dans mon cartable...', pronounceText: 'Dans mon cartable, j’ai un livre.', iconOrColor: '🎒' },
        { label: 'Une trousse rouge', translation: 'Dans ma trousse...', pronounceText: 'Dans ma trousse, il y a des crayons.', iconOrColor: '👝' },
        { label: 'Un cahier vert', translation: 'J’écris la leçon', pronounceText: 'Voici mon cahier vert.', iconOrColor: '📓' },
        { label: 'Une règle jaune', translation: 'Pour tracer des traits', pronounceText: 'Je prends ma règle jaune.', iconOrColor: '📏' },
        { label: 'Un tube de colle', translation: 'Pour coller les feuilles', pronounceText: 'J’utilise un tube de colle.', iconOrColor: '🧴' },
        { label: 'Une ardoise blanche', translation: 'Pour le calcul mental', pronounceText: 'J’écris sur mon ardoise.', iconOrColor: '📋' }
      ]
    },

    pronunciation: {
      focusSound: 'La prononciation de "Cartable" [kaʁ-tabl] et "Ardoise" [aʁ-dwaz]',
      soundRule: 'Prends ton temps pour prononcer le groupe de consonnes [bl] à la fin de "cartable", sans ajouter de voyelle supplémentaire.',
      items: [
        { word: 'Un cartable', phonetic: '[œ̃ kaʁ-tabl]', english: 'A backpack', syllables: 'Car - ta - ble' },
        { word: 'Une trousse', phonetic: '[yn tʁus]', english: 'A pencil case', syllables: 'Trous - se' },
        { word: 'L’ardoise', phonetic: '[laʁ-dwaz]', english: 'The slate', syllables: 'Ar - doi - se' }
      ],
      tongueTwister: {
        french: 'Dans le cartable de Claire, quatre crayons et trois cahiers clairs !',
        english: 'In Claire’s schoolbag, four pencils and three clear notebooks!'
      }
    },

    examples: {
      title: 'Préparer son cartable le matin',
      dialogues: [
        { id: 'd9-1', speaker: 'Maman', avatarText: '👩', french: 'Hugo, as-tu préparé ton cartable pour l’école ?', english: 'Hugo, did you prepare your schoolbag for school?', audioText: 'Hugo, as-tu préparé ton cartable pour l’école ?' },
        { id: 'd9-2', speaker: 'Hugo', avatarText: '👦', french: 'Oui Maman ! Dans mon cartable, j’ai ma trousse, mes feutres et mon cahier.', english: 'Yes Mom! In my schoolbag, I have my pencil case, my markers, and my notebook.', audioText: 'Oui Maman ! Dans mon cartable, j’ai ma trousse, mes feutres et mon cahier.' },
        { id: 'd9-3', speaker: 'Maman', avatarText: '👩', french: 'Et ta règle jaune ? Elle est sur ton bureau !', english: 'And your yellow ruler? It is on your desk!', audioText: 'Et ta règle jaune ? Elle est sur ton bureau !' },
        { id: 'd9-4', speaker: 'Hugo', avatarText: '👦', french: 'Oups, merci Maman, je la glisse dans la trousse !', english: 'Oops, thank you Mom, I slide it into the pencil case!', audioText: 'Oups, merci Maman, je la glisse dans la trousse !' }
      ],
      keyPhrases: [
        { french: 'Dans mon cartable, il y a...', english: 'In my schoolbag, there is...', usageTip: 'Pour énumérer le contenu de son sac.' },
        { french: 'Prête-moi ton stylo, s’il te plaît.', english: 'Lend me your pen, please.', usageTip: 'Demande polie à son voisin de classe.' }
      ]
    },

    exercises: [
      {
        id: 'e9-1',
        type: 'multiple-choice',
        prompt: 'Où range-t-on les stylos, la gomme et les crayons ?',
        options: ['dans l’assiette', 'dans la trousse', 'dans la chaussure', 'dans le jardin'],
        correctAnswer: 'dans la trousse',
        explanation: 'On range ses crayons et sa gomme dans sa trousse.'
      },
      {
        id: 'e9-2',
        type: 'fill-blank',
        prompt: 'En français, on dit "un cahier ______" (mettre la couleur après le nom).',
        options: ['bleu', 'gentil', 'hier', 'demain'],
        correctAnswer: 'bleu',
        explanation: 'La couleur vient après le nom : "un cahier bleu".'
      },
      {
        id: 'e9-3',
        type: 'match-pairs',
        prompt: 'Associe l’objet à son action :',
        pairs: [
          { french: 'la règle', english: 'pour mesurer' },
          { french: 'la gomme', english: 'pour effacer' },
          { french: 'les ciseaux', english: 'pour découper' },
          { french: 'la colle', english: 'pour coller' }
        ],
        correctAnswer: 'matched',
        explanation: 'Génial ! Tu es prêt pour une excellente journée de classe.'
      }
    ],

    revision: {
      summaryList: [
        'Le cartable : pour transporter toutes ses affaires',
        'La trousse : pour ranger stylos, gomme et ciseaux',
        'Le cahier : pour écrire la leçon',
        'Règle d’or : Nom + Couleur ➔ un crayon jaune, une gomme rose',
        'Phrase type : "Dans mon cartable, j’ai une trousse."'
      ],
      flashcards: [
        { front: 'Le cartable', back: 'The schoolbag', hint: 'Sur le dos' },
        { front: 'La trousse', back: 'The pencil case', hint: 'Pour les stylos' },
        { front: 'La règle', back: 'The ruler', hint: 'Pour tracer des lignes' },
        { front: 'La colle', back: 'The glue', hint: 'Pour coller les feuilles' }
      ],
      quickCheckRule: 'Place toujours la couleur APRÈS l’objet : "un stylo rouge", pas "un rouge stylo" !'
    },

    test: {
      title: 'Évaluation Chapitre 9 : Les Objets de la Classe',
      passScore: 3,
      questions: [
        {
          id: 'q9-1',
          question: 'Quelle phrase est correctement ordonnée en français ?',
          options: ['J’ai un jaune crayon.', 'J’ai un crayon jaune.', 'Crayon jaune un j’ai.', 'Jaune j’ai un crayon.'],
          correctAnswer: 'J’ai un crayon jaune.',
          hint: 'L’adjectif de couleur se place après le nom.',
          explanation: 'En français, on dit : "un crayon jaune".'
        },
        {
          id: 'q9-2',
          question: 'Quel objet utilise-t-on pour effacer une erreur au crayon à papier ?',
          options: ['la colle', 'la gomme', 'les ciseaux', 'la trousse'],
          correctAnswer: 'la gomme',
          hint: 'Elle frotte et efface.',
          explanation: 'On utilise une gomme pour effacer.'
        },
        {
          id: 'q9-3',
          question: 'Comment dit-on "In my schoolbag" en français ?',
          options: ['Sur mon cartable', 'Dans mon cartable', 'Sous mon cartable', 'Devant mon cartable'],
          correctAnswer: 'Dans mon cartable',
          hint: 'Le mot "dans" signifie "in".',
          explanation: '"Dans" correspond à "in".'
        },
        {
          id: 'q9-4',
          question: 'Que découpe-t-on avec des ciseaux ?',
          options: ['du papier', 'de la soupe', 'des crayons', 'la table'],
          correctAnswer: 'du papier',
          hint: 'Une feuille d’arbre ou de cahier.',
          explanation: 'Les ciseaux découpent le papier.'
        }
      ],
      teacherAnswerKeyNotes: '1: J’ai un crayon jaune. | 2: la gomme | 3: Dans mon cartable | 4: du papier.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 10 : EXTENDED FAMILY
  // -------------------------------------------------------------
  {
    id: 10,
    slug: 'extended-family',
    pageNumber: 40,
    frenchTitle: 'Chapitre 10 : La Famille Élargie',
    englishTitle: 'The Extended Family and Family Tree',
    unitTag: 'Unité 9 : Ma Famille & Mes Racines',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Nommer les membres de la famille élargie (grands-parents, oncle, tante, cousin, cousine) et expliquer leurs liens de parenté.',
    featuredImage: '/src/assets/images/french_family_tree_1791442723953.jpg',
    imageAlt: 'Arbre généalogique illustré d’une famille française réunie dans un jardin ensoleillé',

    lesson: {
      introduction: 'Après papa et maman, découvrons notre famille élargie : les grands-parents bienveillants, les oncles et tantes rigolos, et les cousins avec qui on adore jouer pendant les réunions de famille !',
      grammarRules: [
        {
          title: 'Les mots de la famille et les adjectifs possessifs',
          summary: 'Distinguer les générations et utiliser "mon", "ma", "mes".',
          rulePoints: [
            'Les grands-parents : le grand-père (papy) et la grand-mère (mamie).',
            'Les frères et sœurs des parents : l’oncle (tonton) et la tante (tata).',
            'Les enfants de l’oncle et la tante : le cousin (garçon) et la cousine (fille).',
            'Possessifs : MON grand-père (masculin), MA grand-mère (féminin), MES cousins (pluriel).'
          ],
          tips: 'En français familier très affectueux, les enfants disent souvent "mon papy" et "ma mamie", ou "tonton" et "tata" !',
          tableData: {
            headers: ['Lien de parenté', 'Mot officiel', 'Surnom affectueux', 'En anglais'],
            rows: [
              ['Le père du père/mère', 'le grand-père', 'papy / pépé', 'grandfather / grandpa'],
              ['La mère du père/mère', 'la grand-mère', 'mamie / mémé', 'grandmother / grandma'],
              ['Le frère du parent', 'l’oncle', 'tonton', 'uncle'],
              ['La sœur du parent', 'la tante', 'tata / tatie', 'aunt'],
              ['Le fils de l’oncle/tante', 'le cousin', 'cousin', 'cousin (boy)'],
              ['La fille de l’oncle/tante', 'la cousine', 'cousine', 'cousin (girl)']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v10-1', french: 'le grand-père', english: 'the grandfather', phonetic: '[lə ɡʁɑ̃.pɛʁ]', exampleSentence: 'Mon grand-père me lit de belles histoires.', exampleSentenceEnglish: 'My grandfather reads me nice stories.' },
        { id: 'v10-2', french: 'la grand-mère', english: 'the grandmother', phonetic: '[la ɡʁɑ̃.mɛʁ]', exampleSentence: 'Ma grand-mère prépare une tarte aux pommes.', exampleSentenceEnglish: 'My grandmother bakes an apple pie.' },
        { id: 'v10-3', french: 'l’oncle', english: 'the uncle', phonetic: '[lɔ̃kl]', exampleSentence: 'Mon oncle Marc habite à Lyon.', exampleSentenceEnglish: 'My uncle Marc lives in Lyon.' },
        { id: 'v10-4', french: 'la tante', english: 'the aunt', phonetic: '[la tɑ̃t]', exampleSentence: 'Ma tante m’a offert un livre.', exampleSentenceEnglish: 'My aunt gifted me a book.' },
        { id: 'v10-5', french: 'le cousin', english: 'the cousin (boy)', phonetic: '[lə ku.zɛ̃]', exampleSentence: 'Mon cousin joue au football avec moi.', exampleSentenceEnglish: 'My cousin plays soccer with me.' },
        { id: 'v10-6', french: 'la cousine', english: 'the cousin (girl)', phonetic: '[la ku.zin]', exampleSentence: 'Ma cousine a le même âge que moi.', exampleSentenceEnglish: 'My cousin is the same age as me.' }
      ],
      teacherNote: {
        advice: 'Attention à la distinction phonétique entre "cousin" [ku-zɛ̃] (son nasal) et "cousine" [ku-zin] (où le "n" s’entend clairement).',
        commonMistake: 'Dire "mon tante" ou "ma oncle". Rappelez : "oncle" est masculin (mon oncle) et "tante" est féminin (ma tante).',
        classroomActivity: 'Dessiner son arbre généalogique : Chaque enfant dessine un arbre avec des pommes où il écrit le prénom de ses grands-parents, oncles, tantes et cousins.'
      },
      culturalInsight: {
        title: 'Le repas du dimanche en famille en France',
        fact: 'En France, la tradition du grand repas de famille le dimanche midi rassemble souvent trois générations autour de la table : grands-parents, parents, enfants et cousins dégustent ensemble un bon poulet rôti ou un gâteau fait maison pendant plusieurs heures !'
      }
    },

    visuals: {
      title: 'L’Arbre Généalogique de la Famille',
      caption: 'Découvre les différentes branches de la famille élargie.',
      items: [
        { label: 'Le grand-père (Papy)', translation: 'Grand-père affectueux', pronounceText: 'mon grand-père', iconOrColor: '👴' },
        { label: 'La grand-mère (Mamie)', translation: 'Grand-mère gâteau', pronounceText: 'ma grand-mère', iconOrColor: '👵' },
        { label: 'L’oncle (Tonton)', translation: 'Le frère de papa ou maman', pronounceText: 'mon oncle', iconOrColor: '👨' },
        { label: 'La tante (Tata)', translation: 'La sœur de papa ou maman', pronounceText: 'ma tante', iconOrColor: '👩' },
        { label: 'Le cousin (Boy)', translation: 'Mon cousin de mon âge', pronounceText: 'mon cousin', iconOrColor: '👦' },
        { label: 'La cousine (Girl)', translation: 'Ma cousine préférée', pronounceText: 'ma cousine', iconOrColor: '👧' }
      ]
    },

    pronunciation: {
      focusSound: 'Le son nasal dans "Cousin" [zɛ̃] vs "Cousine" [zin]',
      soundRule: 'Pour "cousin", l’air passe par le nez : [ku-zɛ̃]. Pour "cousine", la bouche s’ouvre et fait résonner le "ne" : [ku-zin].',
      items: [
        { word: 'Le grand-père', phonetic: '[lə ɡʁɑ̃-pɛʁ]', english: 'Grandfather', syllables: 'Grand - père' },
        { word: 'La grand-mère', phonetic: '[la ɡʁɑ̃-mɛʁ]', english: 'Grandmother', syllables: 'Grand - mère' },
        { word: 'Mon cousin', phonetic: '[mɔ̃ ku-zɛ̃]', english: 'My cousin (boy)', syllables: 'Cou - sin' },
        { word: 'Ma cousine', phonetic: '[ma ku-zin]', english: 'My cousin (girl)', syllables: 'Cou - si - ne' }
      ],
      tongueTwister: {
        french: 'Mon grand-père et ma grand-mère préparent un grand potage pour leurs petits-enfants !',
        english: 'My grandfather and grandmother prepare a big soup for their grandchildren!'
      }
    },

    examples: {
      title: 'Les vacances chez les grands-parents',
      dialogues: [
        { id: 'd10-1', speaker: 'Léo', avatarText: '👦', french: 'Pendant les vacances, je vais chez mon papy et ma mamie à la campagne.', english: 'During the holidays, I go to my grandpa and grandma’s in the countryside.', audioText: 'Pendant les vacances, je vais chez mon papy et ma mamie à la campagne.' },
        { id: 'd10-2', speaker: 'Camille', avatarText: '👧', french: 'C’est génial ! Tes cousins viennent aussi ?', english: 'That’s great! Are your cousins coming too?', audioText: 'C’est génial ! Tes cousins viennent aussi ?' },
        { id: 'd10-3', speaker: 'Léo', avatarText: '👦', french: 'Oui, mon oncle et ma tante viennent avec mon cousin Tom et ma cousine Zoé !', english: 'Yes, my uncle and aunt are coming with my cousin Tom and my cousin Zoe!', audioText: 'Oui, mon oncle et ma tante viennent avec mon cousin Tom et ma cousine Zoé !' }
      ],
      keyPhrases: [
        { french: 'Voici mon grand-père / ma grand-mère.', english: 'Here is my grandfather / my grandmother.', usageTip: 'Pour présenter ses aïeux.' },
        { french: 'J’ai deux cousins et une cousine.', english: 'I have two cousins and one female cousin.', usageTip: 'Pour préciser la composition de sa famille.' }
      ]
    },

    exercises: [
      {
        id: 'e10-1',
        type: 'multiple-choice',
        prompt: 'Qui est la sœur de ton père ou de ta mère ?',
        options: ['ma grand-mère', 'ma tante', 'ma cousine', 'ma maîtresse'],
        correctAnswer: 'ma tante',
        explanation: 'La sœur de son père ou de sa mère est sa tante (tata).'
      },
      {
        id: 'e10-2',
        type: 'fill-blank',
        prompt: 'Le père de mon père est mon ______.',
        options: ['grand-père', 'oncle', 'cousin', 'frère'],
        correctAnswer: 'grand-père',
        explanation: 'Le père de ton père est ton grand-père (papy).'
      },
      {
        id: 'e10-3',
        type: 'match-pairs',
        prompt: 'Associe le membre masculin à son équivalent féminin :',
        pairs: [
          { french: 'le grand-père', english: 'la grand-mère' },
          { french: 'l’oncle', english: 'la tante' },
          { french: 'le cousin', english: 'la cousine' },
          { french: 'le père', english: 'la mère' }
        ],
        correctAnswer: 'matched',
        explanation: 'Excellent travail ! Tu connais parfaitement les liens de famille.'
      }
    ],

    revision: {
      summaryList: [
        'Grands-parents : le grand-père & la grand-mère',
        'Oncles & Tantes : l’oncle & la tante',
        'Cousins : le cousin (garçon) & la cousine (fille)',
        'Possessifs : MON (masculin), MA (féminin), MES (pluriel)'
      ],
      flashcards: [
        { front: 'Le grand-père', back: 'Grandfather (papy)', hint: 'Père des parents' },
        { front: 'La grand-mère', back: 'Grandmother (mamie)', hint: 'Mère des parents' },
        { front: 'L’oncle', back: 'Uncle (tonton)', hint: 'Frère des parents' },
        { front: 'La cousine', back: 'Cousin (girl)', hint: 'Fille de l’oncle/tante' }
      ],
      quickCheckRule: 'On dit : MON grand-père, MA tante, MES cousins !'
    },

    test: {
      title: 'Évaluation Chapitre 10 : La Famille Élargie',
      passScore: 3,
      questions: [
        {
          id: 'q10-1',
          question: 'Comment appelle-t-on le frère de ta maman ?',
          options: ['mon cousin', 'mon grand-père', 'mon oncle', 'mon neveu'],
          correctAnswer: 'mon oncle',
          hint: 'En langage affectueux, on dit souvent "tonton".',
          explanation: 'Le frère de sa mère ou de son père est son oncle.'
        },
        {
          id: 'q10-2',
          question: 'Qui sont les enfants de ton oncle et de ta tante ?',
          options: ['tes frères', 'tes cousins et cousines', 'tes voisins', 'tes parents'],
          correctAnswer: 'tes cousins et cousines',
          hint: 'Ils portent souvent le prénom Tom ou Léa.',
          explanation: 'Les enfants de ses oncles et tantes sont ses cousins et cousines.'
        },
        {
          id: 'q10-3',
          question: 'Quel adjectif possessif utilise-t-on devant "grand-mère" (nom féminin) ?',
          options: ['mon', 'ma', 'mes', 'son'],
          correctAnswer: 'ma',
          hint: 'Féminin singulier.',
          explanation: 'On dit "ma grand-mère".'
        },
        {
          id: 'q10-4',
          question: 'Comment s’appelle la fille de ton oncle ?',
          options: ['ton cousin', 'ta cousine', 'ta tante', 'ta sœur'],
          correctAnswer: 'ta cousine',
          hint: 'Forme féminine de cousin.',
          explanation: 'La fille de son oncle est sa cousine.'
        }
      ],
      teacherAnswerKeyNotes: '1: mon oncle | 2: tes cousins et cousines | 3: ma | 4: ta cousine.'
    }
  },

  // -------------------------------------------------------------
  // CHAPTER 11 : WILD ANIMALS
  // -------------------------------------------------------------
  {
    id: 11,
    slug: 'wild-animals',
    pageNumber: 44,
    frenchTitle: 'Chapitre 11 : Les Animaux Sauvages',
    englishTitle: 'Wild Animals and Nature',
    unitTag: 'Unité 10 : La Nature Sauvage',
    gradeLevel: 'Grade 2 / CE1',
    objective: 'Reconnaître, nommer et décrire les animaux sauvages en français avec leurs caractéristiques (le lion rugit, la girafe a un long cou).',
    featuredImage: '/src/assets/images/wild_animals_savanna_1791442735408.jpg',
    imageAlt: 'Savane africaine avec lion majestueux, grande girafe, éléphant, singe et zèbre rayé',

    lesson: {
      introduction: 'Partons en safari ! Dans la savane et la forêt tropicale vivent des animaux extraordinaires. Apprenons à les nommer en français et à décrire leurs particularités.',
      grammarRules: [
        {
          title: 'Nommer et décrire un animal sauvage',
          summary: 'Associer les noms d’animaux avec leurs adjectifs et leurs verbes d’action.',
          rulePoints: [
            'Le roi des animaux : le lion (rugit), la lionne, le lionceau.',
            'Le géant terrestre : l’éléphant (a une longue trompe).',
            'La plus grande : la girafe (a un long cou pour manger les feuilles).',
            'Le malicieux : le singe (saute d’arbre en arbre).',
            'Le rayé : le zèbre (a des rayures noires et blanches).',
            'Le grand carnivore : l’ours (habite dans la forêt ou la montagne).'
          ],
          tips: 'En français, "éléphant" et "ours" commencent par une voyelle : on dit donc "l’éléphant" et "l’ours" avec l’apostrophe !',
          tableData: {
            headers: ['Animal en français', 'Article & Nom', 'En anglais', 'Caractéristique en français'],
            rows: [
              ['le lion', 'Masculin', 'the lion', 'Il a une grande crinière dorée et rugit fort.'],
              ['l’éléphant', 'Masculin (voyelle)', 'the elephant', 'Il a de grandes oreilles et une trompe.'],
              ['la girafe', 'Féminin', 'the giraffe', 'Elle a un très long cou tacheté.'],
              ['le singe', 'Masculin', 'the monkey', 'Il est farceur et mange des bananes.'],
              ['le zèbre', 'Masculin', 'the zebra', 'Il a de belles rayures noires et blanches.'],
              ['l’ours', 'Masculin (voyelle)', 'the bear', 'Il a une épaisse fourrure et aime le miel.'],
              ['le crocodile', 'Masculin', 'the crocodile', 'Il a de grandes dents acérées et nage dans le fleuve.']
            ]
          }
        }
      ],
      vocabularyBox: [
        { id: 'v11-1', french: 'le lion', english: 'the lion', phonetic: '[lə ljɔ̃]', exampleSentence: 'Le lion rugit dans la savane.', exampleSentenceEnglish: 'The lion roars in the savanna.' },
        { id: 'v11-2', french: 'l’éléphant', english: 'the elephant', phonetic: '[le.le.fɑ̃]', exampleSentence: 'L’éléphant barrit avec sa trompe.', exampleSentenceEnglish: 'The elephant trumpets with its trunk.' },
        { id: 'v11-3', french: 'la girafe', english: 'the giraffe', phonetic: '[la ʒi.ʁaf]', exampleSentence: 'La girafe mange les feuilles du grand acacia.', exampleSentenceEnglish: 'The giraffe eats the leaves of the tall acacia.' },
        { id: 'v11-4', french: 'le singe', english: 'the monkey', phonetic: '[lə sɛ̃ʒ]', exampleSentence: 'Le petit singe grimpe à toute vitesse.', exampleSentenceEnglish: 'The little monkey climbs at full speed.' },
        { id: 'v11-5', french: 'le zèbre', english: 'the zebra', phonetic: '[lə zɛbʁ]', exampleSentence: 'Le zèbre galope avec le troupeau.', exampleSentenceEnglish: 'The zebra gallops with the herd.' },
        { id: 'v11-6', french: 'l’ours', english: 'the bear', phonetic: '[luʁs]', exampleSentence: 'L’ours brun pêche le saumon dans la rivière.', exampleSentenceEnglish: 'The brown bear fishes salmon in the river.' },
        { id: 'v11-7', french: 'le crocodile', english: 'the crocodile', phonetic: '[lə kʁɔ.kɔ.dil]', exampleSentence: 'Le crocodile se prélasse au soleil sur le sable.', exampleSentenceEnglish: 'The crocodile basks in the sun on the sand.' }
      ],
      teacherNote: {
        advice: 'Faire imiter les cris et bruits des animaux par les élèves : le lion rugit [roaaar], l’éléphant barrit, le singe crie !',
        commonMistake: 'Prononcer le "s" final d’ours : en français, le "s" d’ours se prononce bien [urs] !',
        classroomActivity: 'Le mime des animaux de la savane : Un élève mime un animal (la trompe de l’éléphant, les rayures du zèbre, le rugissement du lion) et la classe devine son nom en français.'
      },
      culturalInsight: {
        title: 'Le Jardin des Plantes et les zoos en France',
        fact: 'La Ménagerie du Jardin des Plantes à Paris, créée en 1794, est l’un des plus anciens zoos du monde ! Les enfants parisiens viennent y observer les animaux sauvages depuis plus de deux siècles.'
      }
    },

    visuals: {
      title: 'Le Grand Safari des Animaux Sauvages',
      caption: 'Explore chaque animal et écoute son nom et son rugissement.',
      items: [
        { label: 'Le lion', translation: 'Le roi de la savane', pronounceText: 'le lion', iconOrColor: '🦁' },
        { label: 'L’éléphant', translation: 'Le géant à trompe', pronounceText: 'l’éléphant', iconOrColor: '🐘' },
        { label: 'La girafe', translation: 'Au très long cou', pronounceText: 'la girafe', iconOrColor: '🦒' },
        { label: 'Le singe', translation: 'L’acrobate des arbres', pronounceText: 'le singe', iconOrColor: '🐒' },
        { label: 'Le zèbre', translation: 'Aux rayures élégantes', pronounceText: 'le zèbre', iconOrColor: '🦓' },
        { label: 'L’ours', translation: 'L’ours de la forêt', pronounceText: 'l’ours', iconOrColor: '🐻' },
        { label: 'Le crocodile', translation: 'Le reptile du fleuve', pronounceText: 'le crocodile', iconOrColor: '🐊' }
      ]
    },

    pronunciation: {
      focusSound: 'Le son [jɔ̃] dans "Lion" et [urs] dans "Ours"',
      soundRule: 'Pour "lion", ne coupe pas le mot : c’est une seule coulée rapide [ljɔ̃]. Pour "ours", fais bien siffler le [s] final [uʁs].',
      items: [
        { word: 'Le lion', phonetic: '[lə ljɔ̃]', english: 'The lion', syllables: 'Le lion' },
        { word: 'L’éléphant', phonetic: '[le-le-fɑ̃]', english: 'The elephant', syllables: 'É - lé - phant' },
        { word: 'La girafe', phonetic: '[la ʒi-ʁaf]', english: 'The giraffe', syllables: 'Gi - ra - fe' },
        { word: 'L’ours', phonetic: '[luʁs]', english: 'The bear', syllables: 'L’ours' }
      ],
      tongueTwister: {
        french: 'Six singes sages sautent sur seize solides souches sèches !',
        english: 'Six wise monkeys jump on sixteen solid dry stumps!'
      }
    },

    examples: {
      title: 'Visite au zoo avec l’école',
      dialogues: [
        { id: 'd11-1', speaker: 'Lucas', avatarText: '👦', french: 'Regarde là-bas, Maîtresse ! Quel est ce grand animal ?', english: 'Look over there, Teacher! What is this big animal?', audioText: 'Regarde là-bas, Maîtresse ! Quel est ce grand animal ?' },
        { id: 'd11-2', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'C’est une girafe ! Regarde comme son cou est long.', english: 'It’s a giraffe! Look how long its neck is.', audioText: 'C’est une girafe ! Regarde comme son cou est long.' },
        { id: 'd11-3', speaker: 'Lucas', avatarText: '👦', french: 'Et là, dans le bassin d’eau, c’est un crocodile vert !', english: 'And there, in the water basin, it’s a green crocodile!', audioText: 'Et là, dans le bassin d’eau, c’est un crocodile vert !' },
        { id: 'd11-4', speaker: 'Maîtresse', avatarText: '👩‍🏫', french: 'Exactement ! Et écoute, tout au bout, c’est le lion qui rugit !', english: 'Exactly! And listen, all the way at the end, that is the lion roaring!', audioText: 'Exactement ! Et écoute, tout au bout, c’est le lion qui rugit !' }
      ],
      keyPhrases: [
        { french: 'Quel est ton animal sauvage préféré ?', english: 'What is your favorite wild animal?', usageTip: 'Pour demander les goûts d’un camarade.' },
        { french: 'Mon animal préféré est le lion.', english: 'My favorite animal is the lion.', usageTip: 'Pour répondre avec enthousiasme.' }
      ]
    },

    exercises: [
      {
        id: 'e11-1',
        type: 'multiple-choice',
        prompt: 'Quel animal possède un très long cou pour attraper les feuilles en hauteur ?',
        options: ['le singe', 'l’ours', 'la girafe', 'le crocodile'],
        correctAnswer: 'la girafe',
        explanation: 'La girafe est célèbre pour son très long cou.'
      },
      {
        id: 'e11-2',
        type: 'fill-blank',
        prompt: 'Le zèbre a un pelage avec des rayures ______ et blanches.',
        options: ['noires', 'vertes', 'roses', 'bleues'],
        correctAnswer: 'noires',
        explanation: 'Le zèbre a des rayures noires et blanches.'
      },
      {
        id: 'e11-3',
        type: 'match-pairs',
        prompt: 'Associe chaque animal à sa particularité :',
        pairs: [
          { french: 'le lion', english: 'le roi des animaux' },
          { french: 'l’éléphant', english: 'une longue trompe' },
          { french: 'le singe', english: 'mange des bananes' },
          { french: 'l’ours', english: 'aime le miel' }
        ],
        correctAnswer: 'matched',
        explanation: 'Félicitations ! Tu es un véritable explorateur de la nature !'
      }
    ],

    revision: {
      summaryList: [
        'Le lion : roi de la savane, rugit fort',
        'L’éléphant : le plus gros des animaux terrestres, trompe et défenses',
        'La girafe : très grand cou, taches dorées',
        'Le singe : agile dans les arbres',
        'Le zèbre : rayures noires et blanches',
        'L’ours : grosse fourrure, pêche dans la rivière',
        'Le crocodile : reptile aux grandes dents'
      ],
      flashcards: [
        { front: 'Le lion', back: 'The lion', hint: 'Roi des animaux' },
        { front: 'L’éléphant', back: 'The elephant', hint: 'Avec une trompe' },
        { front: 'La girafe', back: 'The giraffe', hint: 'Un très long cou' },
        { front: 'Le singe', back: 'The monkey', hint: 'Aime les bananes' }
      ],
      quickCheckRule: 'Rappel d’apostrophe : On écrit "l’éléphant" et "l’ours" car ils commencent par une voyelle !'
    },

    test: {
      title: 'Évaluation Finale Chapitre 11 : Les Animaux Sauvages',
      passScore: 3,
      questions: [
        {
          id: 'q11-1',
          question: 'Quel animal est surnommé "le roi des animaux" ?',
          options: ['Le singe', 'Le lion', 'Le zèbre', 'L’éléphant'],
          correctAnswer: 'Le lion',
          hint: 'Il a une grande crinière.',
          explanation: 'Le lion est traditionnellement appelé le roi des animaux.'
        },
        {
          id: 'q11-2',
          question: 'Comment s’appelle le grand appendice qui sert de nez et de bras à l’éléphant ?',
          options: ['une trompe', 'une corne', 'une patte', 'une plume'],
          correctAnswer: 'une trompe',
          hint: 'Elle permet de boire et barrir.',
          explanation: 'L’éléphant possède une trompe.'
        },
        {
          id: 'q11-3',
          question: 'Quelle est la couleur des rayures du zèbre ?',
          options: ['bleues et jaunes', 'rouges et vertes', 'noires et blanches', 'violettes et roses'],
          correctAnswer: 'noires et blanches',
          hint: 'Couleurs contrastées bien connues.',
          explanation: 'Le zèbre a des rayures noires et blanches.'
        },
        {
          id: 'q11-4',
          question: 'Pourquoi écrit-on "l’ours" au lieu de "le ours" ?',
          options: ['Parce qu’ours commence par une voyelle (O)', 'Parce qu’il hiberne', 'Parce que c’est un mot féminin', 'Parce qu’il a des griffes'],
          correctAnswer: 'Parce qu’ours commence par une voyelle (O)',
          hint: 'Règle d’élision.',
          explanation: 'Devant la voyelle O, "le" devient "l’" : l’ours.'
        }
      ],
      teacherAnswerKeyNotes: '1: Le lion | 2: une trompe | 3: noires et blanches | 4: Parce qu’ours commence par une voyelle (O).'
    }
  }
];
