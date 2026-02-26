const stats = [
  { value: '1B+', label: 'GAMERS WITH DISABILITIES WORLDWIDE' },
  { value: '20%', label: 'OF PLAYERS HAVE A DISABILITY' },
  { value: '46M+', label: 'US GAMERS WITH DISABILITIES' },
];

const StatsBar = () => (
  <section className="py-12 px-4 border-y border-border">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="font-pixel text-2xl md:text-3xl text-accent text-glow-accent mb-2">{s.value}</p>
          <p className="font-retro text-base text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
