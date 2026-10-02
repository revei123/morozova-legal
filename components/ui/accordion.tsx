"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/content";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-4 text-left text-lg"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.question}
              <span className="text-muted" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div className={`accordion-panel ${isOpen ? "is-open" : ""}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
