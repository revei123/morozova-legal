import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profileNotes, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "О специалисте",
  description: `${site.name}, юрист в Минске. О том, как начинается работа с ситуацией. Образование и стаж на прототипе не указаны.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-14 lg:py-20">
      <p className="text-sm text-muted">О специалисте</p>
      <div className="mt-6 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <figure>
          {/* DEMO PHOTO / PLACEHOLDER. Не является фотографией клиента. */}
          <Image
            src="/images/portrait.jpg"
            alt="Демонстрационный портрет. Это не фотография Дарьи Кузуровой."
            width={1400}
            height={1867}
            priority
            className="h-auto w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-muted">Демонстрационный портрет. На фотографии не Дарья Кузурова.</figcaption>
        </figure>
        <div>
          <h1 className="display text-5xl sm:text-6xl">{site.name}</h1>
          <p className="mt-3 text-lg">{site.role}. {site.city}.</p>
          <p className="mt-6 max-w-xl text-lg text-muted">
            В юридической работе важно не только знать нормы права, но и понимать ситуацию человека. Поэтому первая задача — разобраться в обстоятельствах и только после этого определить дальнейшие действия.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            Если вы не знаете, с чего начать, достаточно коротко описать, что произошло. Документы можно принести неполным комплектом.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-accent px-5 py-3 text-sheet">Записаться на консультацию</Link>
        </div>
      </div>
      <ol className="mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
        {profileNotes.map((item) => (
          <li key={item.title}>
            <h2 className="text-xl">{item.title}</h2>
            <p className="mt-3 text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
