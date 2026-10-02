export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  situations: string[];
  help: string[];
  documents: string[];
  steps: { title: string; text: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  serviceSlug: string;
  situation: string;
  task: string;
  work: string;
  result: string;
};

export type Review = {
  name: string;
  topic: string;
  text: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  minutes: number;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  serviceSlug: string;
  related: string[];
  paragraphs: string[];
};

export type FaqItem = { question: string; answer: string };
