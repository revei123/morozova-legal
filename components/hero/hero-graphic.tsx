export function HeroGraphic() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-line bg-white p-5 sm:min-h-[420px]" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7ebf2_1px,transparent_1px),linear-gradient(to_bottom,#e7ebf2_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute right-8 top-8 size-28 rounded-full border border-cobalt/30" />
      <div className="absolute bottom-10 left-8 h-24 w-40 rotate-[-8deg] rounded-2xl border border-cobalt bg-cobalt/5" />
      <div className="absolute left-1/2 top-16 h-px w-40 bg-cobalt" />
      <span className="absolute left-6 top-6 rounded-full bg-lime px-3 py-1 text-xs font-bold tracking-[0.16em]">LEGAL</span>
      <span className="absolute right-6 top-16 text-6xl font-bold text-cobalt">01</span>
      <span className="absolute bottom-24 right-8 text-sm font-bold tracking-[0.2em] text-ink">CASE</span>
      <span className="absolute left-8 top-1/2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Consultation</span>
      <span className="absolute bottom-6 right-6 rounded-xl bg-ink px-3 py-2 text-xs font-semibold tracking-[0.16em] text-lime">MINSK</span>
    </div>
  );
}
