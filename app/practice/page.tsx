import type { Metadata } from "next";
import { CaseGrid } from "@/components/cases/case-grid";
import { Container } from "@/components/ui/container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Практика",
  description: "Демонстрационные карточки: проблема, подход и результат. Это не реальные судебные дела.",
  path: "/practice",
});

export default function PracticePage() {
  return (
    <Container className="pb-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Практика</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted">Четыре учебные карточки формата проблема / подход / результат. Имена клиентов и судебные номера не используются.</p>
      <div className="mt-8">
        <CaseGrid />
      </div>
    </Container>
  );
}
