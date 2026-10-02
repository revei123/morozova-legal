import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Политика конфиденциальности",
  description: "Как прототип обращается с данными формы записи.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="display text-5xl">Политика конфиденциальности</h1>
      <div className="mt-8 grid gap-4 text-muted">
        <p>Это текст для прототипа сайта {site.name}. Форма не сохраняет заявки и не передаёт их третьим лицам.</p>
        <p>Имя, телефон и описание ситуации нужны только чтобы показать, как выглядит запись. Скрытое поле защищает форму от автоматических отправок.</p>
        <p>Когда сайт начнёт принимать настоящие обращения, этот текст нужно заменить на политику с реальным оператором данных.</p>
      </div>
    </Container>
  );
}
