"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/content";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="panel overflow-hidden rounded-2xl">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.question}
              <ChevronDown className={`size-5 shrink-0 text-cobalt transition ${isOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            <div className={`accordion-panel ${isOpen ? "is-open" : ""}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
