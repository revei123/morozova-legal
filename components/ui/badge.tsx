export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cobalt/10 px-3 py-1 text-xs font-semibold tracking-wide text-cobalt">
      {children}
    </span>
  );
}
