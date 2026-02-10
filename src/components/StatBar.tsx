import SectionReveal from "./SectionReveal";

interface Stat {
  value: string;
  label: string;
}

const StatBar = ({ stats }: { stats: Stat[] }) => (
  <SectionReveal>
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border bg-card p-6 text-center">
          <p className="font-display text-2xl font-semibold text-foreground">{s.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </SectionReveal>
);

export default StatBar;
