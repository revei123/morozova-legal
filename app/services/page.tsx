import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Услуги",
  description: "Семейные вопросы, договоры и документы, гражданские споры, судебное сопровождение и консультации. Юрист в Минске.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Container className="py-14 lg:py-20">
      <h1 className="display max-w-3xl text-5xl sm:text-6xl">Чем могу помочь</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">Выберите ситуацию, которая ближе к вашей. На каждой странице — что обычно приносят и как проходит работа.</p>
      <div className="mt-12 border-t border-line">
        {services.map((item) => (
          <article key={item.slug} className="grid gap-3 border-b border-line py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
            <h2 className="display text-3xl">
              <Link href={`/services/${item.slug}`} className="hover:text-accent">{item.title}</Link>
            </h2>
            <div>
              <p className="max-w-xl text-muted">{item.description}</p>
              <Link href={`/services/${item.slug}`} className="mt-4 inline-block text-sm underline">Подробнее</Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
