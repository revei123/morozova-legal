import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Контакты",
  description: "Запись на консультацию к юристу в Минске. Телефон, почта и форма заявки на прототипе демонстрационные.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1fr] lg:py-20">
      <div>
        <h1 className="display text-5xl sm:text-6xl">Запись на консультацию</h1>
        <p className="mt-5 max-w-md text-lg text-muted">После получения заявки мы свяжемся с вами для согласования удобного времени.</p>
        <dl className="mt-8 grid gap-4">
          {[
            ["Город", `${site.cityLine}. Возможна онлайн-консультация.`],
            ["Телефон", site.phone],
            ["Почта", site.email],
            ["Telegram", site.telegram],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-line pt-3">
              <dt className="text-sm text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-muted">Контакты демонстрационные.</p>
      </div>
      <BookingForm />
    </Container>
  );
}
