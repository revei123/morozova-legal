import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { advantages, profileTimeline, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "О юристе",
  description: `${site.name}, юрист, Минск. Профиль прототипа без реальных дипломов и достижений.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="pb-20">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <article className="panel p-5">
          <div className="flex h-40 items-end rounded-2xl bg-cobalt p-5 text-white">
            <div>
              <p className="text-5xl font-bold">АМ</p>
              <p className="text-sm text-lime">Демонстрационный профиль</p>
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold">{site.name}</h1>
          <p className="font-semibold text-cobalt">{site.role}</p>
          <p className="text-muted">{site.cityLine}</p>
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
        </div>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {profileTimeline.map((item, index) => (
          <li key={item.title} className="panel p-4">
            <span className="font-bold text-cobalt">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
