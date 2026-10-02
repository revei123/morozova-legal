import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="pb-24">
      <p className="text-sm font-bold text-cobalt">404</p>
      <h1 className="mt-2 text-4xl font-bold">Страница не найдена</h1>
      <Link href="/" className="mt-6 inline-flex rounded-xl bg-cobalt px-4 py-3 font-semibold text-white">На главную</Link>
    </Container>
  );
}
