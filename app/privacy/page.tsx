import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Конфиденциальность",
  description: "Как прототип обращается с данными формы записи.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl pb-20">
      <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>
      <div className="mt-6 grid gap-4 leading-7 text-muted">
        <p>Это демонстрационный текст для прототипа. Форма не сохраняет заявки в базу и не отправляет их третьим лицам.</p>
        <p>Поля имени, телефона и email нужны только для того, чтобы показать сценарий записи. Поле «компания» скрыто и используется как защита от автоматических отправок.</p>
        <p>Если сайт начнет принимать настоящие обращения, этот текст нужно заменить на политику с реальным оператором данных.</p>
      </div>
    </Container>
  );
}
