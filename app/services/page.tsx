import type { Metadata } from "next";
import { ServiceGrid } from "@/components/services/service-grid";
import { Container } from "@/components/ui/container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Услуги",
  description: "Направления юридической помощи: договоры, семья, споры, суд, документы и консультация. Прототип, Минск.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Container className="pb-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Выберите направление</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Каждая карточка ведет на отдельную страницу услуги.</p>
      <div className="mt-8">
        <ServiceGrid />
      </div>
    </Container>
  );
}
