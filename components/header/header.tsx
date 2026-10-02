"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-3 rounded-2xl border border-line bg-white px-3 shadow-[0_12px_40px_rgba(18,20,24,0.08)] sm:px-4">
        <Link href="/" className="min-w-0 pl-2 leading-tight" onClick={() => setOpen(false)}>
          <span className="block text-sm font-bold tracking-tight">{site.short}</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt">Legal</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-cobalt">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="rounded-xl bg-cobalt px-3 py-2 text-sm font-semibold text-white hover:bg-cobalt-deep sm:px-4">
            Консультация
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="mx-auto mt-2 max-w-[1180px] rounded-2xl border border-line bg-white p-4 shadow-lg lg:hidden" aria-label="Мобильная навигация">
          <ul className="grid gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-xl px-3 py-3 text-lg font-semibold hover:bg-canvas" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
