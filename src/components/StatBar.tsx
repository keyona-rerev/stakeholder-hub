import SectionReveal from "./SectionReveal";

interface Stat {
  value: string;
  label: string;
}

const StatBar = ({ stats }: { stats: Stat[] }) => (
  <SectionReveal>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className="group relative overflow-hidden rounded-xl border bg-card p-6 text-center card-hover">
          <div className="absolute inset-x-0 top-0 h-1 hero-gradient opacity-60" />
          <p className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </SectionReveal>
);

export default StatBar;
