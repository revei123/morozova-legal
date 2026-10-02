export const site = {
  name: "Морозова Алина Игоревна",
  short: "Морозова",
  brand: "Морозова / Legal",
  role: "Юрист",
  city: "Минск",
  country: "Беларусь",
  cityLine: "Минск, Беларусь",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://morozova-legal.vercel.app"),
  title: "Морозова Алина — юридическая помощь в Минске",
  description:
    "Цифровой сервис частной практики: поможем разобраться в юридической ситуации и определить дальнейшие шаги. Прототип, Минск.",
  phone: "+375 29 000-00-00",
  email: "hello@morozova.demo",
  telegram: "@morozova_legal_demo",
};

export const nav = [
  { href: "/services", label: "Услуги" },
  { href: "/#process", label: "Как работаем" },
  { href: "/practice", label: "Практика" },
  { href: "/blog", label: "Блог" },
] as const;

export const topics = [
  { id: "contract" as const, label: "Договор", slug: "dogovornoe-pravo" },
  { id: "family" as const, label: "Семья", slug: "semeinye-voprosy" },
  { id: "dispute" as const, label: "Спор", slug: "grazhdanskie-spory" },
  { id: "court" as const, label: "Суд", slug: "sudebnoe-soprovozhdenie" },
  { id: "documents" as const, label: "Документы", slug: "analiz-dokumentov" },
  { id: "other" as const, label: "Другое", slug: "konsultaciya" },
];

export const steps = [
  { index: "01", title: "Описываете ситуацию", text: "Коротко: что произошло и какой вопрос нужно закрыть." },
  { index: "02", title: "Разбираем документы и обстоятельства", text: "Смотрим факты, сроки и то, чего в материалах пока нет." },
  { index: "03", title: "Определяем варианты действий", text: "Без обещания исхода: какие шаги возможны и чем они отличаются." },
  { index: "04", title: "Вы получаете понятный план", text: "Что сделать сейчас, что можно отложить и какие документы нужны." },
];

export const advantages = [
  { title: "Сначала ситуация, потом норма", text: "Ответ строится от ваших фактов, а не от общего шаблона." },
  { title: "Короткие формулировки", text: "После разговора понятно, что делать на этой неделе." },
  { title: "Онлайн или в Минске", text: "Формат выбирается под задачу, а не под витрину офиса." },
  { title: "Конфиденциально", text: "Обращение не становится примером на сайте." },
];

export const profileTimeline = [
  { title: "Образование", text: "Демонстрационная отметка: учебное заведение и год здесь не указаны, пока нет подтвержденных данных." },
  { title: "Профессиональное развитие", text: "Демонстрационная отметка: курсы и сертификаты не перечисляются как реальные." },
  { title: "Практика", text: "Демонстрационная отметка: стаж, число дел и работодатели не публикуются." },
  { title: "Текущая специализация", text: "Договоры, семейные вопросы, споры, документы и консультации. Это направления прототипа, не подтвержденный рейтинг." },
];
