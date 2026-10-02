import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="text-lg font-bold">{site.brand}</p>
          <p className="mt-2 text-sm text-white/60">{site.role}. {site.city}.</p>
          <p className="mt-4 text-xs text-white/45">Прототип. Контакты и практика демонстрационные.</p>
        </div>
        <FooterCol title="Services">
          {services.slice(0, 4).map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="block text-sm text-white/75 hover:text-lime">
              {item.title}
            </Link>
          ))}
        </FooterCol>
        <FooterCol title="Practice">
          <Link href="/practice" className="block text-sm text-white/75 hover:text-lime">Кейсы</Link>
          <Link href="/about" className="block text-sm text-white/75 hover:text-lime">Профиль</Link>
          <Link href="/#process" className="block text-sm text-white/75 hover:text-lime">Как работаем</Link>
        </FooterCol>
        <FooterCol title="Resources">
          <Link href="/blog" className="block text-sm text-white/75 hover:text-lime">База знаний</Link>
          <Link href="/contact" className="block text-sm text-white/75 hover:text-lime">Запись</Link>
        </FooterCol>
        <FooterCol title="Contact">
          <p className="text-sm text-white/75">{site.city}</p>
          <p className="text-sm text-white/75">{site.phone}</p>
          <p className="text-sm text-white/75">{site.email}</p>
          <p className="text-sm text-white/75">{site.telegram}</p>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:px-6">
          <span>Legal · {site.name}</span>
          <Link href="/privacy" className="hover:text-white">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid content-start gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">{title}</p>
      {children}
    </div>
  );
}
