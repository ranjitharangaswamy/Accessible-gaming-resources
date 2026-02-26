const FooterSection = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-pixel text-xs text-primary text-glow mb-4">GAME OVER? NEVER.</p>
      <p className="font-retro text-lg text-muted-foreground mb-6">
        Accessibility in gaming is not a feature — it's a right.<br />
        Share this page. Spread awareness. Level up inclusion.
      </p>
      <div className="flex justify-center gap-6 font-retro text-base">
        <a href="https://amputee-coalition.org/resources/adaptive-gaming-resources/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors underline">
          Amputee Coalition
        </a>
        <a href="https://ablegamers.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors underline">
          AbleGamers
        </a>
        <a href="https://www.specialeffect.org.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors underline">
          SpecialEffect
        </a>
      </div>
      <p className="font-retro text-sm text-muted-foreground mt-8">
        Built with ♥ for accessibility awareness
      </p>
    </div>
  </footer>
);

export default FooterSection;
