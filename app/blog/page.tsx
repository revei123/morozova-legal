import type { Metadata } from "next";
import { KnowledgeBase } from "@/components/blog/knowledge-base";
import { Container } from "@/components/ui/container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "База знаний",
  description: "Короткие демонстрационные статьи о договорах, семье, судах и документах.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Container className="pb-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">База знаний</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted">Материалы для ориентира. Это не индивидуальная консультация.</p>
      <div className="mt-8">
        <KnowledgeBase />
      </div>
    </Container>
  );
}
