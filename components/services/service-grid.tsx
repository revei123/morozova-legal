import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {services.map((item) => (
        <article
          key={item.slug}
          className={`panel lift flex min-h-52 flex-col justify-between p-5 ${item.size === "lg" ? "md:col-span-2 md:min-h-64" : "md:col-span-1"}`}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">{item.size === "lg" ? "Направление" : "Быстрый вход"}</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.short}</p>
          </div>
          <Link href={`/services/${item.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cobalt">
            Подробнее
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </article>
      ))}
    </div>
  );
}
