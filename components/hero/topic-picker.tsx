"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { topics } from "@/data/site";
import type { TopicId } from "@/types/content";

export function TopicPicker() {
  const [topic, setTopic] = useState<TopicId | null>(null);
  const match = useMemo(() => services.find((item) => item.topic === topic), [topic]);

  return (
    <div className="panel p-4 sm:p-5">
      <p className="text-sm font-semibold">С чем вам нужна помощь?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Тема вопроса">
        {topics.map((item) => {
          const active = topic === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setTopic(item.id)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                active ? "bg-cobalt text-white" : "bg-canvas text-ink hover:bg-cobalt/10"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className={`mt-4 grid transition-all duration-300 ${match ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          {match ? (
            <div className="flex flex-col gap-3 rounded-2xl bg-canvas p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">Подходящая услуга</p>
                <p className="mt-1 text-lg font-bold">{match.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{match.short}</p>
              </div>
              <Link href={`/contact?topic=${match.topic}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-cobalt">
                Получить консультацию
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
