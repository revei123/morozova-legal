import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/forms/booking-form";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Консультация",
  description: "Запись на консультацию: тема, контакты и сообщение. Прототип, Минск.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="pb-20">
      <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Запишитесь на консультацию</h1>
          <p className="mt-4 leading-7 text-muted">Форма только показывает сценарий записи. Сообщение не уходит на почту.</p>
          <dl className="mt-6 grid gap-3">
            {[
              ["Город", site.cityLine],
              ["Формат", "Онлайн-консультации"],
              ["Телефон", site.phone],
              ["Email", site.email],
              ["Telegram", site.telegram],
            ].map(([label, value]) => (
              <div key={label} className="panel px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">{label}</dt>
                <dd className="font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Suspense fallback={<div className="panel p-6">Загрузка формы…</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </Container>
  );
}
