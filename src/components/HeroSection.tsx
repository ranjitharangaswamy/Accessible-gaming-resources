const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      
      {/* Pixel art decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary animate-pixel-float" aria-hidden="true" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent animate-pixel-float" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-secondary animate-pixel-float" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-neon animate-pixel-float" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-retro text-2xl text-accent mb-6 tracking-widest">
          ▶ PRESS START ◀
        </p>
        
        <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-primary text-glow leading-relaxed mb-8">
          ACCESSIBLE
          <br />
          <span className="text-accent text-glow-accent">GAMING</span>
          <br />
          FOR ALL
        </h1>

        <p className="font-retro text-xl md:text-2xl text-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Everyone deserves to play. Discover the organizations, tools,
          and adaptive controllers making gaming inclusive for all abilities.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#resources" className="pixel-border bg-primary text-primary-foreground font-pixel text-xs px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors">
            EXPLORE RESOURCES
          </a>
          <a href="#why" className="pixel-border bg-muted text-foreground font-pixel text-xs px-6 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors">
            WHY IT MATTERS
          </a>
        </div>

        <p className="font-retro text-lg text-muted-foreground mt-12 animate-blink">
          ▼ SCROLL DOWN ▼
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
