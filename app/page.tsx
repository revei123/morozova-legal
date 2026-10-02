import Link from "next/link";
import { Lock, MapPin, MessageSquare, UserRound } from "lucide-react";
import { ArticleCard } from "@/components/blog/knowledge-base";
import { CaseGrid } from "@/components/cases/case-grid";
import { BookingForm } from "@/components/forms/booking-form";
import { HeroGraphic } from "@/components/hero/hero-graphic";
import { TopicPicker } from "@/components/hero/topic-picker";
import { ServiceGrid } from "@/components/services/service-grid";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { articles } from "@/data/articles";
import { faq } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { advantages, profileTimeline, site, steps } from "@/data/site";
import { Suspense } from "react";

const trust = [
  { icon: Lock, label: "Конфиденциальность" },
  { icon: MessageSquare, label: "Понятное объяснение" },
  { icon: UserRound, label: "Индивидуальный подход" },
  { icon: MapPin, label: "Минск" },
];

export default function HomePage() {
  return (
    <>
      <Container>
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold tracking-[0.14em]">LEGAL / DIGITAL</p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-6xl">Есть юридический вопрос?</h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-muted">Поможем разобраться в ситуации и определить дальнейшие шаги.</p>
            <div className="mt-6">
              <TopicPicker />
            </div>
          </div>
          <HeroGraphic />
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Ориентиры">
          {trust.map((item) => (
            <div key={item.label} className="panel flex items-center gap-3 px-4 py-4">
              <item.icon className="size-5 text-cobalt" aria-hidden />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </section>

        <section id="process" className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Как проходит работа</h2>
          <ol className="mt-8 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.index} className="relative panel p-5">
                {index < steps.length - 1 ? <span className="absolute right-0 top-8 hidden h-px w-4 translate-x-full bg-cobalt lg:block" aria-hidden /> : null}
                <span className="text-sm font-bold text-cobalt">{step.index}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Выберите направление</h2>
            <Link href="/services" className="text-sm font-semibold text-cobalt">Все услуги</Link>
          </div>
          <ServiceGrid />
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[280px_1fr]">
          <article className="panel p-5">
            <div className="flex h-28 items-end rounded-2xl bg-[linear-gradient(135deg,#1347d6,#0c2f93)] p-4 text-white">
              <div>
                <p className="text-3xl font-bold">АМ</p>
                <p className="text-xs text-lime">Демонстрационный профиль</p>
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold">{site.name}</h2>
            <p className="text-sm font-semibold text-cobalt">{site.role}</p>
            <p className="text-sm text-muted">{site.cityLine}</p>
          </article>
          <div>
            <h2 className="text-3xl font-bold">Почему со мной удобно работать</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {advantages.map((item) => (
                <article key={item.title} className="panel p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
            <ol className="mt-4 grid gap-3">
              {profileTimeline.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="font-bold text-cobalt">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-bold sm:text-5xl">Практика</h2>
            <Link href="/practice" className="text-sm font-semibold text-cobalt">Все кейсы</Link>
          </div>
          <CaseGrid />
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold sm:text-5xl">Отзывы</h2>
          <p className="mt-2 text-sm text-muted">Демонстрационные карточки, не отзывы реальных клиентов.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((item) => (
              <article key={item.name + item.date} className="panel p-4">
                <p className="text-sm tracking-widest text-cobalt" aria-label="5 из 5">★★★★★</p>
                <p className="mt-3 text-sm leading-6">«{item.text}»</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-muted">
                  <span>{item.name}</span>
                  <span>{item.date}</span>
                </div>
                <p className="mt-2 inline-flex rounded-full bg-canvas px-2 py-1 text-xs font-semibold">{item.topic}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-bold sm:text-5xl">База знаний</h2>
            <Link href="/blog" className="text-sm font-semibold text-cobalt">Все статьи</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {articles.slice(0, 3).map((item, index) => (
              <ArticleCard key={item.slug} item={item} index={index + 1} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold sm:text-5xl">Запишитесь на консультацию</h2>
            <p className="mt-4 leading-7 text-muted">Три коротких шага: тема, контакты, сообщение. Форма работает внутри прототипа и никуда не отправляет данные.</p>
          </div>
          <Suspense fallback={<div className="panel p-6">Загрузка формы…</div>}>
            <BookingForm />
          </Suspense>
        </section>

        <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Минск", site.cityLine],
            ["Онлайн-консультации", "Демонстрационный формат"],
            ["Телефон", site.phone],
            ["Email", site.email],
          ].map(([label, value]) => (
            <article key={label} className="panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">{label}</p>
              <p className="mt-2 font-bold">{value}</p>
            </article>
          ))}
          <article className="panel p-4 sm:col-span-2 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">Telegram</p>
            <p className="mt-2 font-bold">{site.telegram}</p>
          </article>
        </section>

        <section className="my-20">
          <h2 className="mb-6 text-3xl font-bold">Вопросы перед записью</h2>
          <Accordion items={faq} />
        </section>
      </Container>
    </>
  );
}
