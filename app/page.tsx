import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/forms/booking-form";
import { Container } from "@/components/ui/container";
import { articles } from "@/data/articles";
import { cases } from "@/data/cases";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { reasons, site, situations, steps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.9fr] lg:gap-14 lg:py-14">
          <div className="fade-up order-2 max-w-xl lg:order-1">
            <p className="text-sm text-muted">{site.name}</p>
            <p className="mt-1 text-sm">Юрист в Минске</p>
            <h1 className="display mt-5 text-[2.6rem] text-ink sm:text-6xl lg:mt-6 lg:text-[4.4rem]">
              Разберёмся, что делать в вашей ситуации
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              Помогу разобраться в юридической ситуации, оценить возможные варианты и определить дальнейшие шаги.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-accent px-5 py-3 text-sheet hover:bg-ink">
                Записаться на консультацию
              </Link>
              <Link href="/services" className="border border-ink px-5 py-3 hover:bg-ink hover:text-sheet">
                Посмотреть услуги
              </Link>
            </div>
          </div>
          <figure className="order-1 lg:order-2">
            {/* DEMO PHOTO / PLACEHOLDER. Источник: Pexels, свободная лицензия. Это не фотография Дарьи Кузуровой. */}
            <Image
              src="/images/portrait.jpg"
              alt="Демонстрационный портрет: женщина за столом в светлом интерьере. Это не фотография юриста."
              width={1400}
              height={1867}
              priority
              className="h-72 w-full object-cover object-[center_62%] sm:h-80 lg:aspect-[4/5] lg:h-auto"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Демонстрационный портрет. На фотографии не Дарья Кузурова.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <h2 className="display text-4xl sm:text-5xl">С какими ситуациями обращаются</h2>
          <ul className="border-t border-line">
            {situations.map((item) => (
              <li key={item.text} className="border-b border-line">
                <Link href={item.href} className="flex items-baseline justify-between gap-6 py-5 text-xl hover:text-accent sm:text-2xl">
                  <span>{item.text}</span>
                  <span className="shrink-0 text-sm text-muted">Подробнее</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-4xl sm:text-5xl">Чем могу помочь</h2>
            <Link href="/services" className="hidden text-sm underline sm:inline">
              Все услуги
            </Link>
          </div>
          <div className="mt-10 border-t border-line">
            {services.map((item) => (
              <article key={item.slug} className="grid gap-3 border-b border-line py-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-10">
                <h3 className="display text-3xl">
                  <Link href={`/services/${item.slug}`} className="hover:text-accent">
                    {item.title}
                  </Link>
                </h3>
                <div>
                  <p className="max-w-xl text-muted">{item.short}</p>
                  <Link href={`/services/${item.slug}`} className="mt-4 inline-block text-sm underline">
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="border-b border-line">
        <Container className="py-16 lg:py-24">
          <h2 className="display max-w-xl text-4xl sm:text-5xl">Как проходит работа</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.index}>
                <p className="text-sm text-muted">{step.index}</p>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line bg-sheet">
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <h2 className="display text-4xl sm:text-5xl">Почему обращаются за консультацией</h2>
          <ul className="grid gap-8">
            {reasons.map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-4xl sm:text-5xl">Практика</h2>
            <Link href="/practice" className="text-sm underline">
              Все примеры
            </Link>
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">Учебные примеры. Это не реальные клиенты и не судебные дела.</p>
          <div className="mt-10 grid gap-14">
            {cases.slice(0, 2).map((item) => (
              <article key={item.slug} className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[0.7fr_1.3fr]">
                <h3 className="display text-3xl">
                  <Link href={`/practice/${item.slug}`} className="hover:text-accent">
                    {item.title}
                  </Link>
                </h3>
                <div className="grid gap-5">
                  <Block label="Ситуация" text={item.situation} />
                  <Block label="Результат" text={item.result} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid items-start gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          <figure>
            <Image
              src="/images/room.jpg"
              alt="Светлая комната с окном. Демонстрационная фотография интерьера."
              width={1400}
              height={1867}
              className="h-auto w-full object-cover"
            />
          </figure>
          <div>
            <p className="text-sm text-muted">О специалисте</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">{site.name}</h2>
            <p className="mt-2">
              {site.role}. {site.city}.
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted">
              В юридической работе важно не только знать нормы права, но и понимать ситуацию человека. Поэтому первая задача — разобраться в обстоятельствах и только после этого определить дальнейшие действия.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm underline">
              Подробнее обо мне
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 lg:py-24">
          <h2 className="display text-4xl sm:text-5xl">Отзывы</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {reviews.map((item) => (
              <figure key={item.name}>
                <blockquote className="text-lg leading-8">«{item.text}»</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  {item.name}. {item.topic}.
                  <span className="mt-1 block">Демонстрационный отзыв</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-4xl sm:text-5xl">Статьи</h2>
            <Link href="/blog" className="text-sm underline">
              Все статьи
            </Link>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {articles.slice(0, 3).map((item) => (
              <article key={item.slug}>
                <Link href={`/blog/${item.slug}`}>
                  <Image src={item.image} alt="" width={1200} height={800} className="aspect-[4/3] w-full object-cover" />
                </Link>
                <p className="mt-4 text-sm text-muted">{item.category}</p>
                <h3 className="mt-2 text-2xl leading-snug">
                  <Link href={`/blog/${item.slug}`} className="hover:text-accent">
                    {item.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1fr] lg:py-24">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Запись на консультацию</h2>
            <p className="mt-5 max-w-md text-muted">
              Напишите, что произошло. После заявки свяжемся, чтобы согласовать время. Контакты на прототипе демонстрационные.
            </p>
            <dl className="mt-8 grid gap-3 text-sm">
              <div>
                <dt className="text-muted">Город</dt>
                <dd>{site.cityLine}</dd>
              </div>
              <div>
                <dt className="text-muted">Телефон</dt>
                <dd>{site.phone}</dd>
              </div>
              <div>
                <dt className="text-muted">Почта</dt>
                <dd>{site.email}</dd>
              </div>
            </dl>
          </div>
          <BookingForm />
        </Container>
      </section>
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1">{text}</p>
    </div>
  );
}
