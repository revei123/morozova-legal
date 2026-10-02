import Link from "next/link";
import { cases } from "@/data/cases";

export function CaseGrid({ linked = true }: { linked?: boolean }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {cases.map((item) => {
        const card = (
          <article className="panel lift h-full p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{item.topic}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <Label name="PROBLEM" text={item.problem} />
            <Label name="APPROACH" text={item.approach} />
            <Label name="RESULT" text={item.result} />
          </article>
        );
        return linked ? (
          <Link key={item.slug} href={`/practice/${item.slug}`} className="block">
            {card}
          </Link>
        ) : (
          <div key={item.slug}>{card}</div>
        );
      })}
    </div>
  );
}

function Label({ name, text }: { name: string; text: string }) {
  return (
    <div className="mt-4 border-t border-line pt-3">
      <p className="text-[11px] font-bold tracking-[0.16em] text-cobalt">{name}</p>
      <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
