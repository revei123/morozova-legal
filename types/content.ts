export type TopicId = "contract" | "family" | "dispute" | "court" | "documents" | "other";

export type Service = {
  slug: string;
  topic: TopicId;
  title: string;
  short: string;
  description: string;
  situations: string[];
  includes: string[];
  steps: { title: string; text: string }[];
  size: "lg" | "sm";
};

export type CaseStudy = {
  slug: string;
  title: string;
  topic: string;
  problem: string;
  approach: string;
  result: string;
};

export type Review = {
  name: string;
  date: string;
  topic: string;
  text: string;
};

export type Article = {
  slug: string;
  title: string;
  category: "Договоры" | "Семья" | "Суды" | "Документы";
  excerpt: string;
  minutes: number;
  date: string;
  dateISO: string;
  paragraphs: string[];
};

export type FaqItem = { question: string; answer: string };
