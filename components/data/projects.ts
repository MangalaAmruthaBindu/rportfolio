// components/data/projects.ts
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  color?: string;
  image?: string;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "ImportantGermanVocabulary",
    desc: "Vocabulary trainer with SRS & audio micro‑interactions",
    tags: ["Expo", "NativeWind"],
    color: "#3b0764",
    image: "/images/fp1.png",
    link: "/work/ImportantGermanVocabulary",
  },
  {
    title: "YatriMitra",
    desc: "Offline itinerary with maps & deep links",
    tags: ["React Query", "Maps"],
    color: "#052e48",
    link: "/work/yatrimitra",
    image: "/images/appeimg1.png",

  },
];