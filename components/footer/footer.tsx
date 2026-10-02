import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-sheet">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-3xl">{site.short}</p>
          <p className="mt-3 text-sm text-sheet/70">
            {site.role}. {site.cityLine}.
          </p>
          <p className="mt-4 text-sm leading-6 text-sheet/55">Прототип. Контакты, отзывы и примеры практики демонстрационные.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-sheet/50">Услуги</p>
          <ul className="mt-3 grid gap-2">
            {services.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="text-sm text-sheet/80 hover:text-sheet">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-sheet/50">Разделы</p>
          <ul className="mt-3 grid gap-2 text-sm text-sheet/80">
            <li><Link href="/about" className="hover:text-sheet">Обо мне</Link></li>
            <li><Link href="/practice" className="hover:text-sheet">Практика</Link></li>
            <li><Link href="/blog" className="hover:text-sheet">Статьи</Link></li>
            <li><Link href="/contact" className="hover:text-sheet">Контакты</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-sheet/50">Контакты</p>
          <ul className="mt-3 grid gap-2 text-sm text-sheet/80">
            <li>{site.city}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.telegram}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-sheet/50 sm:px-6">
          <span>{site.name}</span>
          <Link href="/privacy" className="hover:text-sheet">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
