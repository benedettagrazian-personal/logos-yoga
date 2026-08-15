// ─────────────────────────────────────────────────────────────────────────────
// content.ts — Tutti i testi e dati di Logos Yoga Studio
// Aggiorna questo file per modificare contenuti senza toccare la UI.
// ─────────────────────────────────────────────────────────────────────────────

export type Level = "Principiante" | "Intermedio" | "Avanzato" | "Tutti i livelli";

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialization: string;
  image: string;
  imageAlt: string;
  // Dettagli espandibili
  practices: string[];       // Pratiche insegnate
  certifications: string[];  // Certificazioni conseguite
  philosophy: string;        // Frase / approccio personale
}

export interface YogaClass {
  id: string;
  title: string;
  description: string;
  level: Level;
  duration: number; // minuti
  teacher: string; // teacher.name
  image: string;
  imageAlt: string;
}

// ─── Studio ────────────────────────────────────────────────────────────────

export const studio = {
  name: "Logos Yoga Studio",
  tagline: "Respira. Muoviti. Trasformati.",
  subtitle:
    "Uno spazio di pratica e trasformazione nel cuore della città. Vieni a scoprire come lo yoga può diventare la tua ancora quotidiana.",
  address: "Via Firenze 27, 59100 Prato PO",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Logos+Yoga+Studio+Via+Firenze+27+Prato",
  email: "info@logosyoga.it",
  phone: "+39 335 754 8104",
  instagram: "https://www.instagram.com/logosyogastudio",
  instagramHandle: "@logosyogastudio",
  // Slug Momoyoga — aggiorna con il vero slug dello studio
  // Es: se l'URL è https://www.momoyoga.com/logos-yoga/ → slug = "logos-yoga"
  momoyogaSlug: "logos-yoga",
};

// ─── Insegnanti ────────────────────────────────────────────────────────────

export const teachers: Teacher[] = [
  {
    id: "tatiana-pacini",
    name: "Tatiana Pacini",
    role: "Fondatrice",
    bio: "Il mio percorso nello yoga è un cammino continuo di studio e trasformazione, nato dalla convinzione che la pratica possa diventare uno strumento terapeutico e di vita.",
    specialization: "Hatha Yoga & Yoga Terapeutico",
    image: "/teachers/tatiana.jpg",
    imageAlt: "Tatiana Pacini, fondatrice di Logos Yoga Studio",
    practices: [
      "Yoga e Respiro che Cura",
      "Yoga e perineo",
      "Yoga e fibromialgia",
      "Yoga e colon irritabile",
      "Yoga ed ernia iatale e reflusso",
      "Yoga nelle aziende",
    ],
    certifications: [
      "Corso di Formazione per Insegnanti Hatha Yoga 200h, diploma affiliati CSEN, Firenze (2016/17)",
      "Diploma per Istruttore Nazionale Yoga Liv2 intermedio 500h, Scuola Yoga CONI/CSEN (2019-21)",
      "Certificato Yoga Terapia, SM Yoga Research Institute, Vrindavan/India — Dr. Balmukund Shastri (marzo 2024)",
      "Master di YogaTerapia online, Asia Darshana — Roma (in corso, 2025/26)",
    ],
    philosophy:
      "Lo yoga, come anche il concetto del Logos secondo la filosofia di Eraclito, è inteso come un giusto equilibrio tra gli opposti e come Unione tra Corpo, Mente e Spirito.",
  },
  {
    id: "monica-formica",
    name: "Monica Formica",
    role: "Insegnante",
    bio: "Allieva diretta di Sri Sri Ravi Shankar dal 2000, dedico la mia vita alla meditazione e al respiro come strumenti di riequilibrio profondo e di pace interiore.",
    specialization: "Sri Sri Yoga e Meditazione",
    image: "/teachers/monica.jpg",
    imageAlt: "Monica Formica, insegnante di Logos Yoga Studio",
    practices: [
      "Sudarshan Kriya Yoga (SKY)",
      "Meditazione guidata",
      "Pranayama",
      "Sri Sri Yoga",
    ],
    certifications: [
      "S.K.Y. Teacher Training, European Art of Living Academy — 1200h (1999)",
      "Terapista SKY dal 2009, formazione 300h (2008–2010)",
      "Sri Sri Yoga Teacher Training 200h, Ministero AYUSH & Yoga Alliance (2013, rinnovato 2017)",
    ],
    philosophy:
      "Il respiro è la via più diretta per riequilibrare il sistema nervoso. Ho portato la pratica SKY dai centri di formazione al carcere Le Vallette di Torino, fino a una sperimentazione clinica sul PTSD al Fatebenefratelli di Milano: la meditazione appartiene a tutti.",
  },
  {
    id: "debora-pugi",
    name: "Debora Pugi",
    role: "Insegnante",
    bio: "Da oltre trent'anni studio il movimento e l'equilibrio psicofisico, unendo la formazione posturale alla scienza del respiro per accompagnare la persona a guarire nel corpo e nelle emozioni.",
    specialization: "Yoga sulla Sedia e Posturale",
    image: "/teachers/debora.jpg",
    imageAlt: "Debora Pugi, insegnante di Logos Yoga Studio",
    practices: [
      "Yoga sulla Sedia",
      "Yoga Posturale",
      "Yoga Terapia",
      "Pranayama",
      "Trattamento delle patologie della colonna vertebrale",
    ],
    certifications: [
      "Diploma ISEF (1992)",
      "Specializzazioni in lavoro posturale e patologie della colonna vertebrale",
      "Formazione in Yoga Terapia e Pranayama",
      "Yoga Alliance RYT-500 Plus Advanced Diploma / RYT YIN 50",
    ],
    philosophy:
      "Il corpo racconta ciò che la mente non dice. Curare la postura e il respiro significa accompagnare la persona a guarire non solo fisicamente, ma anche emotivamente.",
  },
];

// ─── Pratiche ──────────────────────────────────────────────────────────────
// Elenco di tutte le pratiche insegnate, raccolte dai profili delle insegnanti.

export interface Practice {
  title: string;
  description: string;
  teacher: string;
  extraSections?: {
    title: string;
    text?: string;
    items?: { label: string; text: string }[];
  }[];
  highlightsTitle?: string;
  highlights?: { label: string; text: string }[];
  quote?: { text: string; author: string };
  closing?: string;
}

export const allPractices: Practice[] = [
  {
    title: "Yoga e Respiro che Cura",
    description:
      "Un percorso che usa il respiro come strumento terapeutico, per ritrovare equilibrio ed energia vitale.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Yoga e Perineo",
    description:
      "Lavoro mirato sul pavimento pelvico, per consapevolezza e tono di una zona spesso trascurata.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Yoga e Fibromialgia",
    description:
      "Sequenze dolci pensate per chi convive con dolore cronico diffuso, per alleviare la tensione e ritrovare comfort nel corpo.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Yoga e Colon Irritabile",
    description:
      "Pratiche di respiro e movimento dolce a supporto del benessere digestivo e della gestione dello stress.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Yoga ed Ernia Iatale e Reflusso",
    description:
      "Un approccio delicato pensato per chi convive con reflusso ed ernia iatale, tra postura, respiro e rilassamento.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Yoga nelle Aziende",
    description:
      "Sessioni pensate per il contesto lavorativo, per gestire lo stress e migliorare postura e concentrazione durante la giornata.",
    teacher: "Tatiana Pacini",
  },
  {
    title: "Sri Sri Yoga",
    description:
      "Sri Sri Yoga è un ritorno alle radici autentiche e olistiche dello yoga. Ben oltre il semplice esercizio fisico, questa pratica integra corpo, respiro, mente e spirito in un percorso profondo di benessere e consapevolezza.",
    teacher: "Monica Formica",
    highlightsTitle: "Gli elementi chiave",
    highlights: [
      {
        label: "Asana (posizioni)",
        text: "Movimenti fluidi che donano forza, flessibilità e vitalità, eseguiti con totale presenza.",
      },
      {
        label: "Pranayama (respiro)",
        text: "Tecniche di respirazione consapevole per calmare la mente e riequilibrare il sistema nervoso.",
      },
      {
        label: "Meditazione",
        text: "Il culmine della pratica, un momento di profondo riposo per rigenerare l'essere.",
      },
      {
        label: "Saggezza",
        text: "La filosofia millenaria applicata alla vita quotidiana per vivere con gioia e centratura.",
      },
    ],
    quote: {
      text: "Lo yoga non è solo eseguire posture. È una scienza completa che unisce corpo, mente, respiro e anima.",
      author: "Sri Sri Ravi Shankar",
    },
    closing:
      "Un viaggio di autoguarigione e scoperta interiore, per ritrovare la tua vera natura.",
  },
  {
    title: "Ayurveda",
    description:
      "Sri Sri Ayurveda rappresenta la purezza della medicina tradizionale indiana integrata nella vita moderna. Più che un sistema di cura, è una guida per vivere in armonia con le leggi della natura. Riconoscendo che ogni individuo ha una costituzione unica (Prakriti), offre un percorso personalizzato per mantenere o ritrovare il perfetto equilibrio psicofisico.",
    teacher: "Monica Formica",
    highlightsTitle: "La visione olistica",
    highlights: [
      {
        label: "Armonia dei Dosha",
        text: "Bilancia le energie vitali (Vata, Pitta, Kapha) attraverso rimedi naturali, trattamenti specifici e alimentazione consapevole.",
      },
      {
        label: "Purificazione e disintossicazione",
        text: "Elimina le tossine fisiche e mentali per risvegliare la naturale capacità di autoguarigione del corpo.",
      },
      {
        label: "Prevenzione totale",
        text: "Insegna una routine quotidiana che preserva la giovinezza, la vitalità e la chiarezza mentale nel tempo.",
      },
    ],
    closing:
      "La salute è l'equilibrio tra un corpo privo di tossine, una mente in pace e un cuore colmo di gioia.",
  },
  {
    title: "Terapia Marma",
    description:
      "La Terapia Marma è un'antica pratica di cura ayurvedica che agisce come un ponte tra il corpo fisico, la mente e la nostra energia vitale, il Prana. Attraverso un tocco sensibile e consapevole, questa disciplina permette di sciogliere i blocchi profondi, restituendo al corpo la sua naturale capacità di autoguarigione e rigenerazione.",
    teacher: "Monica Formica",
    extraSections: [
      {
        title: "I punti Marma",
        text: "Nel nostro corpo esistono 107 punti vitali (chiamati Marma), situati nei punti di incontro tra muscoli, tendini, articolazioni e canali energetici. Sono veri e propri portali d'accesso alla nostra energia interiore. Quando lo stress, la stanchezza o le tensioni quotidiane bloccano questi punti, il flusso del Prana si interrompe, creando rigidità fisica e affaticamento mentale.",
      },
      {
        title: "Come si svolge una sessione?",
        text: "La Terapia Marma non è un massaggio muscolare profondo, ma un trattamento di straordinaria delicatezza e precisione.",
        items: [
          {
            label: "Stimolazione dolce",
            text: "Attraverso una pressione leggera e calibrata eseguita con le dita, l'operatore stimola i punti chiave per liberare l'energia bloccata.",
          },
          {
            label: "Un'esperienza di profondo ascolto",
            text: "Ogni seduta è un invito a rallentare, ad ascoltare il proprio respiro e a scivolare in uno stato di quiete consapevole.",
          },
        ],
      },
    ],
    highlightsTitle: "I benefici del trattamento",
    highlights: [
      {
        label: "Rilassamento profondo del sistema nervoso",
        text: "Calma la mente, riduce lo stress e favorisce un sonno ristoratore.",
      },
      {
        label: "Sollievo dalle tensioni fisiche",
        text: "Scioglie i blocchi articolari e muscolari, donando un'immediata sensazione di leggerezza.",
      },
      {
        label: "Rigenerazione energetica",
        text: "Ripristina il libero fluire del Prana, restituendo vitalità e chiarezza mentale.",
      },
      {
        label: "Integrazione e presenza",
        text: "Aiuta a ritrovare una profonda connessione tra corpo, mente e respiro.",
      },
    ],
    closing:
      "«La Terapia Marma è un viaggio di ritorno all'equilibrio naturale, dove il tocco incontra il silenzio per rigenerare la tua parte più profonda.»",
  },
  {
    title: "Pranayama",
    description:
      "La scienza del respiro applicata alla pratica quotidiana, per calmare la mente e sostenere l'energia vitale.",
    teacher: "Monica Formica, Debora Pugi",
  },
  {
    title: "Yoga sulla Sedia",
    description:
      "Una pratica accessibile a tutti, svolta con il supporto di una sedia — ideale per chi ha mobilità ridotta.",
    teacher: "Debora Pugi",
  },
  {
    title: "Yoga Posturale",
    description:
      "Lavoro mirato sull'allineamento e la consapevolezza corporea, per prendersi cura della colonna nella vita di ogni giorno.",
    teacher: "Debora Pugi",
  },
  {
    title: "Yoga Terapia",
    description:
      "Un approccio che integra tecnica yogica e attenzione clinica, per accompagnare la persona in un percorso di cura personalizzato.",
    teacher: "Debora Pugi",
  },
  {
    title: "Trattamento delle Patologie della Colonna Vertebrale",
    description:
      "Un lavoro specifico su postura e movimento, pensato per chi convive con problematiche alla schiena.",
    teacher: "Debora Pugi",
  },
];

// ─── Classi ────────────────────────────────────────────────────────────────

export const classes: YogaClass[] = [
  {
    id: "hatha-yoga-terapeutico",
    title: "Hatha Yoga Terapeutico",
    description:
      "La pratica classica delle posizioni yogiche unita a un approccio terapeutico su respiro, perineo e colonna. Costruisce forza, flessibilità e consapevolezza del corpo.",
    level: "Tutti i livelli",
    duration: 75,
    teacher: "Tatiana Pacini",
    image: "/classes/hatha-yoga-terapeutico.jpg",
    imageAlt: "Tatiana Pacini durante una lezione di Hatha Yoga Terapeutico",
  },
  {
    id: "yoga-sedia-posturale",
    title: "Yoga sulla Sedia e Posturale",
    description:
      "Una pratica accessibile a tutti, pensata per il benessere della colonna vertebrale e la correzione posturale — ideale anche per chi ha mobilità ridotta.",
    level: "Tutti i livelli",
    duration: 60,
    teacher: "Debora Pugi",
    image: "/classes/yoga-sedia-posturale.jpg",
    imageAlt: "Debora Pugi durante una lezione di Yoga sulla Sedia e Posturale",
  },
  {
    id: "sri-sri-yoga-meditazione",
    title: "Sri Sri Yoga e Meditazione",
    description:
      "Un ritorno alle radici autentiche dello yoga: asana fluide, pranayama e meditazione si intrecciano con la saggezza millenaria in un percorso che integra corpo, respiro, mente e spirito.",
    level: "Tutti i livelli",
    duration: 75,
    teacher: "Monica Formica",
    image: "/classes/sri-sri-yoga-meditazione.jpg",
    imageAlt: "Monica Formica durante una lezione di Sri Sri Yoga e Meditazione",
  },
];

// ─── Calendario settimanale ────────────────────────────────────────────────
// Esempio statico — da aggiornare con l'orario definitivo delle classi.

export const weekDays = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
];

export interface ScheduleSlot {
  time: string;
  classesByDay: Partial<Record<(typeof weekDays)[number], { title: string; teacher: string }>>;
}

export const weeklySchedule: ScheduleSlot[] = [
  {
    time: "7:00 – 8:00",
    classesByDay: {
      Martedì: { title: "Hatha e Respiro che Cura", teacher: "Tatiana Pacini" },
      Giovedì: { title: "Hatha e Respiro che Cura", teacher: "Tatiana Pacini" },
    },
  },
  {
    time: "7:30",
    classesByDay: {
      Venerdì: {
        title: "Yoga e Meditazione Antistress (su richiesta)",
        teacher: "Monica Formica",
      },
    },
  },
  {
    time: "9:00 – 10:30",
    classesByDay: {
      Martedì: { title: "Yoga, Respiro e Meditazione", teacher: "Monica Formica" },
      Mercoledì: { title: "Yoga, Meditazione e Conoscenza", teacher: "Monica Formica" },
    },
  },
  {
    time: "12:30 – 13:30",
    classesByDay: {
      Martedì: { title: "Il Respiro della Schiena", teacher: "Tatiana Pacini" },
      Giovedì: { title: "Il Respiro della Schiena", teacher: "Tatiana Pacini" },
    },
  },
  {
    time: "13:30 – 14:30",
    classesByDay: {
      Mercoledì: { title: "Yoga Fibromialgia", teacher: "Tatiana Pacini" },
      Venerdì: { title: "Yoga Fibromialgia", teacher: "Tatiana Pacini" },
    },
  },
  {
    time: "13:30 – 14:45",
    classesByDay: {
      Lunedì: { title: "Sri Sri Yoga", teacher: "Monica Formica" },
    },
  },
  {
    time: "16:00 – 17:00",
    classesByDay: {
      Mercoledì: { title: "Yoga Parkinson", teacher: "Tatiana Pacini" },
      Venerdì: { title: "Yoga Parkinson", teacher: "Tatiana Pacini" },
    },
  },
  {
    time: "17:30 – 18:30",
    classesByDay: {
      Venerdì: { title: "Postural Therapy", teacher: "Debora Pugi" },
    },
  },
  {
    time: "18:00 – 19:00",
    classesByDay: {
      Lunedì: { title: "Postural Yoga Therapy", teacher: "Debora Pugi" },
    },
  },
  {
    time: "19:45",
    classesByDay: {
      Mercoledì: { title: "Sri Sri Yoga", teacher: "Monica Formica" },
    },
  },
  {
    time: "20:00",
    classesByDay: {
      Martedì: { title: "Art of Living Satsang", teacher: "Monica Formica" },
    },
  },
];

export const whatsappBookingUrl = "https://chat.whatsapp.com/JV1F8seCfPr9M9KUs9Rnek";

// ─── Navigazione ───────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Classi", href: "/classi" },
  { label: "Pratiche", href: "/pratiche" },
  { label: "La nostra storia", href: "/chi-siamo" },
  { label: "Obiettivi", href: "/obiettivi" },
];

// ─── Home page ─────────────────────────────────────────────────────────────

export const homePage = {
  hero: {
    headline: "Il tuo posto del cuore",
    subheadline:
      "Logos Yoga Studio è uno spazio per ritrovare la propria luce interiore da risvegliare attraverso la pratica.",
    ctaPrimary: { label: "Scopri le classi", href: "/classi" },
    ctaStory: { label: "La nostra storia", href: "/chi-siamo" },
  },
  intro: {
    title: "Uno spazio fatto per te",
    body: "Logos Yoga Studio nasce dalla passione per lo yoga e dalla convinzione che ogni persona meriti uno spazio autentico di cura e ascolto. La nostra sala — illuminata dalla luce naturale e ispirata al mandorlo in fiore — è pensata per farti sentire a casa dal primo respiro.",
    body2:
      "Con insegnanti certificati e classi adatte a ogni livello, ti accompagniamo passo dopo passo nel tuo percorso yogico.",
  },
};

// ─── Chi siamo page ────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    title: "La nostra storia",
    subtitle: "Yoga, comunità e trasformazione da oltre un decennio.",
  },
  story: {
    title: "Le origini",
    paragraphs: [
      "LYS - Logos Yoga Studio nasce da un sentimento, non da un calcolo: il desiderio di dedicarsi allo yoga e di portare questa disciplina millenaria — capace di donare concentrazione, equilibrio ed energia — anche nel mondo dello sport. Il nostro obiettivo è trasmettere valori essenziali come l'amore per sé e per l'altro, il rispetto e la forza interiore, attraverso una respirazione corretta e consapevole.",
      "Il progetto è nato dalla condivisione: insieme a due amiche che vivono la stessa passione da anni, abbiamo dato vita a Logos Yoga Studio. Un grazie di cuore a Monica e Debora, che hanno aderito con entusiasmo fin dal primo giorno.",
    ],
  },
  philosophy: {
    title: "La nostra filosofia",
    points: [
      {
        title: "Curiosità, senza giudizio",
        text: "Nasciamo da un sogno semplice: creare uno spazio dove chiunque possa avvicinarsi allo yoga con curiosità e senza giudizio.",
      },
      {
        title: "Il significato di Logos",
        text: "'Logos' — parola greca per 'ragione', 'parola', 'principio ordinatore' — riflette la nostra filosofia: lo yoga come strumento per ritrovare ordine interiore, chiarezza e connessione con il sé autentico.",
      },
      {
        title: "Un'Associazione che coniuga Yoga e Sport",
        text: "L'Associazione Lys promuove la crescita personale e sinergica di corpo, mente e stili di vita, rispettosi degli equilibri biologici. Ci rivolgiamo ad atleti e chiunque voglia imparare dall'antica conoscenza dello Yoga.",
      },
    ],
  },
};

// ─── Obiettivi page ────────────────────────────────────────────────────────

export const goalsPage = {
  hero: {
    tagline: "L'associazione LYS",
    title: "I nostri obiettivi",
    subtitle:
      "Un progetto nato dalla passione condivisa per lo yoga e per il benessere di chi lo pratica — a partire dagli sportivi.",
  },
  sportIntro: {
    title: "Lo yoga nello sport: la mente del campione",
    text: "La performance fisica non può prescindere dall'equilibrio mentale. Molti sportivi di fama internazionale si affidano allo yoga e alla meditazione per restare centrati.",
    quotes: [
      {
        text: "Il respiro consapevole è fondamentale, specialmente sotto tensione. Da fuori sembro immobile, ma dentro c'è una tempesta: il respiro è la via più veloce per recuperare.",
        author: "Novak Djokovic",
      },
      {
        text: "Meditazione e yoga non sono pratiche religiose: sono una questione di salute e serenità. In un mondo che corre, fermarsi è vitale.",
        author: "Novak Djokovic",
      },
    ],
  },
  mission: {
    title: "La nostra missione",
    text: "Logos Yoga Studio nasce per essere uno spazio aperto a tutti: agli atleti che vogliono migliorare concentrazione e prevenire infortuni, e a chiunque cerchi un'oasi di pace nella frenesia quotidiana. Attraverso movimento, ascolto e respiro, vi accompagniamo a scoprire la vostra forza interiore.",
  },
  stats: {
    title: "La scienza dietro la performance",
    subtitle: "Cosa dicono le ricerche sulla medicina dello sport.",
    items: [
      {
        value: "35–40%",
        text: "degli atleti d'élite integra Yoga e Pranayama nella routine settimanale per il recupero e la gestione dello stress pre-gara.",
      },
      {
        value: "50%+",
        text: "dei giocatori NBA e NFL usa lo yoga per preservare l'elasticità muscolare e prevenire infortuni strutturali.",
      },
      {
        value: "30–60%",
        text: "degli sportivi soffre di ansia da prestazione: il Pranayama è tra gli strumenti più rapidi per ritrovare lucidità.",
      },
    ],
  },
  benefits: {
    title: "Corpo e mente, in equilibrio",
    physical: {
      title: "Benefici fisici",
      points: [
        "Più capacità respiratoria sotto sforzo",
        "Prevenzione infortuni grazie a mobilità e muscoli stabilizzatori",
        "Recupero più rapido, meno cortisolo",
      ],
    },
    mental: {
      title: "Benefici mentali",
      points: [
        "Più resilienza nella gestione di errori e pressione",
        "Maggiore consapevolezza dei segnali del corpo",
        "Visualizzazione strategica prima della gara",
      ],
    },
  },
  champions: {
    title: "La parola ai campioni",
    items: [
      {
        name: "Novak Djokovic",
        sport: "Tennis",
        text: "Meditazione quotidiana e respirazione consapevole, fondamentali quanto l'allenamento in campo.",
      },
      {
        name: "LeBron James",
        sport: "Basket",
        text: "Yoga dinamico e mindfulness prima di ogni partita, per esplosività ed equilibrio psicofisico.",
      },
      {
        name: "Erling Haaland",
        sport: "Calcio",
        text: "La sua esultanza nella posizione del loto è diventata iconica: la meditazione lo aiuta a restare nel presente.",
      },
      {
        name: "All Blacks",
        sport: "Rugby",
        text: "Mobilità profonda e respirazione guidata per gestire gli impatti fisici e mantenere la calma in campo.",
      },
    ],
  },
  closing: {
    title: "LYS è aperta a tutti",
    text: "Yoga, meditazione e lavoro sul respiro non sono una prerogativa degli atleti professionisti. Il nostro metodo è universale, accessibile e modulabile: che tu voglia migliorare i tempi di recupero o semplicemente respirare in modo più consapevole, la salute del corpo e la calma della mente sono un diritto di tutti.",
    cta: { label: "Contattaci e unisciti a LYS" },
  },
};
