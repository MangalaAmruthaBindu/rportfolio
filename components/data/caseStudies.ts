// components/data/caseStudies.ts
export type Metric = { label: string; value: string };
export type CaseQuote = { text: string; author: string; title?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  color?: string;            // used for hero art
  tags: string[];
  meta: {
    role: string;
    timeline: string;
    company?: string;
    team?: string;
  };
  problem: string;
  solution: string;
  features?: string[];
  tech: string[];
  metrics?: Metric[];
  screenshots?: { src?: string; alt: string; color?: string }[];
  quote?: CaseQuote;
  links?: { website?: string; appStore?: string; playStore?: string };
  ogImage?: string;
  heroVideo?: string;   // e.g. "/videos/germanvocab.mp4"
  heroPoster?: string;  // e.g. "/images/germanvocab-poster.jpg"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ImportantGermanVocabulary",
    title: "ImportantGerman Vocabulary",
    summary: "Vocabulary trainer with SRS, audio micro‑interactions, and delightful UX to keep learners engaged.",
    color: "#3b0764",
    tags: ["Education", "Mobile", "Offline-first"],
    meta: { role: "Lead RN Developer", timeline: "8 weeks", company: "Solo project", team: "1 dev" },
    problem:
  "German learners struggled to remember high-frequency words consistently and lacked a focused, structured way to practice vocabulary with pronunciation and revision.",

   solution:
  "Built a concept-based vocabulary system with flashcards, quizzes, audio pronunciation, and progress tracking. Optimized UI flow, lesson continuity, and learning feedback for daily, efficient practice.",

  features: [
  "Concept-based German vocabulary (A1–B2)",
  "Flashcards with clear meanings and examples",
  "Quiz practice for active recall",
  "Audio pronunciation for listening accuracy",
  "Progress tracking and learning insights",
],

    tech: ["Expo", "TypeScript", "React Query", "SQLite", "Reanimated", "NativeWind"],
    heroVideo: "/videos/v1.1.mp4",
    metrics: [
      { label: "Cold start", value: "~1.2s" },
      { label: "Offline coverage", value: "100%" },
    ],
    screenshots: [
      {  src:"/images/appgerimg1.png",alt: "Decks overview", color: "#4c1d95" },
      { src:"/images/appgerimg2.png",alt: "Quiz flow", color: "#581c87" },
      { src:"/images/appgerimg3.png",alt: "Progress chart", color: "#6d28d9" },
    ],
    quote: {
  text: "Learning feels focused and efficient. The concept-based structure really helps words stick.",
  author: "Beta Tester",
  title: "German Learner",
},

    links: { website: "#", appStore: "https://play.google.com/store/apps/details?id=com.anonymous.impvocger&pcampaignid=web_share", playStore: "https://play.google.com/store/apps/details?id=com.anonymous.impvocger&pcampaignid=web_share" },
  },
  {
    slug: "yatrimitra",
    title: "YatriMitra",
    summary:   "A language-first marketplace connecting international travelers with verified local guides in India, focused on trust, safety, and seamless communication.",
    color: "#052e48",
    tags: ["Travel", "Marketplace", "Localization", "Safety", "Gig Economy"],
    meta: { role: "Full-Stack / Mobile App Developer",
  timeline: "8–10 weeks",
  company: "Personal / Startup Project",
  team: "Product Designer + Full-Stack Developer"},
    problem:   "International travelers visiting India struggle to find trustworthy local guides who speak their language. Language barriers, safety concerns, and lack of verified local connections make exploring cities stressful and unreliable.",
    solution:  "Built a language-first marketplace that connects verified local guides with international travelers. Users choose a city and language, view vetted guide profiles, and book or chat instantly—ensuring safe, human-led travel experiences.",

    features: [
      "Dual-role onboarding (Traveller / Guide)",
    "Government ID & passport verification for trust",
  "Language-based guide discovery",
  "Location and city-based filtering",
  "Women-only guide option for safety",
  "In-app chat and direct booking",
  "Ratings, reviews, and verification badges",
  "Secure payments and escrow-style bookings",
    ],
    tech: ["React Native", "React Query", "Maps SDK", "MMKV"],
    heroVideo: "/videos/v2.1.mp4",

    metrics: [
      { label: "Offline nav", value: "Core flows" },
      { label: "Sync conflicts", value: "Resolved automatically" },
    ],
    screenshots: [
      { src:"/images/appeimg1.png", alt: "Itinerary overview", color: "#003e5a" },
      { src:"/images/appeimg2.png", alt: "Users registration overview", color: "#0b3a52" },
      { src:"/images/appeimg3.png", alt: "Contacting the user overview", color: "#005a7a" },
    ],
    quote: {
      text: "Building YatriMitra taught us how trust, verification, and language-first design can simplify real-world travel problems at scale.",
      author: "Developer",
    },
    links: { website: "https://expo.dev/accounts/moneyle/projects/yatmitra/builds/adacfcce-e1af-4e0b-bc3f-49e19a2efef0" },
  },
  {
    slug: "physiohome",
    title: "PhysioHome",
    summary: "At-home physiotherapy companion with exercise player, timers, reminders, and progress tracking.",
    color: "#1f2937",
    tags: ["Health", "Wellness"],
    meta: { role: "Full‑stack RN", timeline: "10 weeks", company: "Startup", team: "RN dev + Backend + Designer" },
    problem: "Patients struggled to follow plans consistently and track progress outside the clinic.",
    solution:
      "Designed an engaging exercise player with clear cues and reminders. Offline-first data + sync ensure reliability.",
    features: [
      "Haptics + audio for pacing",
      "Reminder scheduling",
      "Progress charts",
      "Secure sync",
    ],
    tech: ["Expo", "Reanimated", "Firebase", "SQLite", "Skia"],
    metrics: [
      { label: "Adherence", value: "Improved" },
      { label: "Session length", value: "Optimized" },
    ],
    screenshots: [
      { alt: "Exercise player", color: "#2b3544" },
      { alt: "Reminders", color: "#111827" },
      { alt: "Progress", color: "#374151" },
    ],
    quote: {
      text: "Patients actually complete their plans now. The UX feels thoughtful.",
      author: "Clinical Advisor",
    },
    links: { website: "#" },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}