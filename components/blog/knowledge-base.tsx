"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import type { Article } from "@/types/content";

const categories = ["Все", "Договоры", "Семья", "Суды", "Документы"] as const;

export function KnowledgeBase() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Все");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((item) => {
      const byCategory = category === "Все" || item.category === category;
      const byQuery = !q || `${item.title} ${item.excerpt}`.toLowerCase().includes(q);
      return byCategory && byQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="panel p-4">
        <label htmlFor="article-search" className="text-sm font-semibold">
          Поиск статей
        </label>
        <input
          id="article-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Например, договор"
          className="mt-3 w-full rounded-xl border border-line bg-canvas px-4 py-3 outline-none"
        />
        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Категории">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold ${category === item ? "bg-ink text-white" : "bg-canvas"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {list.map((item, index) => (
          <ArticleCard key={item.slug} item={item} index={articles.indexOf(item) + 1 || index + 1} />
        ))}
        {list.length === 0 ? <p className="text-muted">По этому запросу статей нет.</p> : null}
      </div>
    </div>
  );
}

export function ArticleCard({ item, index }: { item: Article; index: number }) {
  return (
    <article className="panel lift flex h-full flex-col p-5">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="text-cobalt">{String(index).padStart(2, "0")}</span>
        <span className="text-muted">{item.category}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.excerpt}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-muted">{item.minutes} мин</span>
        <Link href={`/blog/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
          Читать
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
