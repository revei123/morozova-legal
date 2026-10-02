import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cases } from "@/data/cases";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Практика",
  description: "Демонстрационные примеры: ситуация, задача, работа и результат. Это не реальные судебные дела.",
  path: "/practice",
});

export default function PracticePage() {
  return (
    <Container className="py-14 lg:py-20">
      <h1 className="display max-w-3xl text-5xl sm:text-6xl">Практика</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">Три учебных примера. Здесь нет имён клиентов, номеров дел и обещания такого же результата.</p>
      <div className="mt-12 grid gap-16">
        {cases.map((item) => {
          const service = getService(item.serviceSlug);
          return (
            <article key={item.slug} className="border-t border-line pt-8">
              <h2 className="display max-w-2xl text-3xl sm:text-4xl">
                <Link href={`/practice/${item.slug}`} className="hover:text-accent">{item.title}</Link>
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Field label="Ситуация" text={item.situation} />
                <Field label="Задача" text={item.task} />
                <Field label="Работа" text={item.work} />
                <Field label="Результат" text={item.result} />
              </div>
              {service ? (
                <Link href={`/services/${service.slug}`} className="mt-6 inline-block text-sm underline">
                  {service.title}
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>
    </Container>
  );
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
}
