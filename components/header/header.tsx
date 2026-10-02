"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="min-w-0 leading-tight" onClick={() => setOpen(false)}>
          <span className="block text-[15px] font-semibold tracking-tight">{site.short}</span>
          <span className="block text-xs text-muted">Юрист в Минске</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="bg-accent px-3 py-2 text-sm text-sheet transition hover:bg-ink sm:px-4">
            <span className="sm:hidden">Записаться</span>
            <span className="hidden sm:inline">Записаться на консультацию</span>
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
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
        <nav id="mobile-nav" className="border-t border-line bg-sheet px-4 py-3 lg:hidden" aria-label="Мобильная навигация">
          <ul className="grid">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-lg" onClick={() => setOpen(false)}>
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
