import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  name: string;
  description: string;
  url: string;
  category: string;
  phone?: string;
  email?: string;
}

const ResourceCard = ({ name, description, url, category, phone, email }: ResourceCardProps) => (
  <article className="pixel-border bg-card p-5 flex flex-col gap-3 hover:bg-muted transition-colors">
    <span className="font-pixel text-[8px] text-secondary tracking-wider">{category}</span>
    <h3 className="font-pixel text-[10px] md:text-xs text-primary leading-relaxed">{name}</h3>
    <p className="font-retro text-lg text-card-foreground leading-relaxed flex-1">{description}</p>
    <div className="flex flex-col gap-1 font-retro text-base text-muted-foreground">
      {phone && <span>📞 {phone}</span>}
      {email && <span>📧 {email}</span>}
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-pixel text-[8px] text-accent hover:text-primary transition-colors mt-2"
    >
      VISIT <ExternalLink size={12} />
    </a>
  </article>
);

const nonprofits: ResourceCardProps[] = [
  {
    name: 'THE ABLEGAMERS CHARITY',
    description: 'Free accessibility assessments to find the right gaming equipment for each individual. Also maintains a database of game accessibility reviews.',
    url: 'https://ablegamers.org/',
    category: 'NONPROFIT',
    phone: '703/891-9017',
    email: 'inquiries@ablegamers.com',
  },
  {
    name: 'WARFIGHTER ENGAGED',
    description: 'Modifies controllers, makes prosthetic enhancements, and recreational devices for wounded and disabled veterans — all at no cost.',
    url: 'https://warfighterengaged.org/',
    category: 'NONPROFIT',
  },
  {
    name: 'SPECIALEFFECT',
    description: 'UK-based organization promoting accessible gaming with YouTube resources and an accessibility blog for gamers and developers alike.',
    url: 'https://www.specialeffect.org.uk/',
    category: 'NONPROFIT',
  },
];

const adaptiveResources: ResourceCardProps[] = [
  {
    name: 'XBOX ADAPTIVE CONTROLLER',
    description: 'A unified hub designed for gamers with limited mobility. Created in partnership with disability community organizations.',
    url: 'https://www.xbox.com/en-US/xbox-one/accessories/controllers/xbox-adaptive-controller',
    category: 'ADAPTIVE HARDWARE',
  },
  {
    name: 'EVIL CONTROLLERS',
    description: 'Individually customized controllers for gamers with disabilities and limited mobility, created in partnership with AbleGamers.',
    url: 'https://www.evilcontrollers.com/accessible-gaming',
    category: 'ADAPTIVE HARDWARE',
    phone: '877/880-3845',
    email: 'custom@evilcontrollers.com',
  },
  {
    name: 'BLUE TIP GAMING',
    description: 'Ideal for gamers with extremely limited mobility. Works with AbleGamers to deliver accessible gaming solutions.',
    url: 'https://bluetipgaming.com/',
    category: 'ADAPTIVE HARDWARE',
    phone: '888/317-0867',
  },
  {
    name: 'VOICEATTACK',
    description: 'Voice-activated control for PC games. Create custom voice commands to play any game hands-free.',
    url: 'https://www.voiceattack.com/',
    category: 'SOFTWARE',
  },
];

const reviewSites: ResourceCardProps[] = [
  {
    name: 'DAGERS SYSTEM',
    description: 'A source for video game accessibility reviews, helping disabled gamers find playable titles.',
    url: 'https://dagersystem.com/review/',
    category: 'REVIEWS',
  },
  {
    name: 'GAME ACCESSIBILITY',
    description: 'Educates gamers about accessible games and serves as an academic resource for gaming industry professionals.',
    url: 'https://www.game-accessibility.com/',
    category: 'EDUCATION',
  },
  {
    name: 'IGDA GAME ACCESSIBILITY SIG',
    description: 'International Game Developers Association group focused on making games more accessible from the development side.',
    url: 'https://igda-gasig.org/',
    category: 'INDUSTRY',
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-lg md:text-2xl text-center text-primary text-glow mb-12">
          ♦ RESOURCE HUB ♦
        </h2>

        {/* Nonprofits */}
        <div className="mb-14">
          <h3 className="font-pixel text-xs md:text-sm text-secondary mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-secondary inline-block" aria-hidden="true" />
            NONPROFIT ORGANIZATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nonprofits.map((r) => <ResourceCard key={r.name} {...r} />)}
          </div>
        </div>

        {/* Adaptive Hardware/Software */}
        <div className="mb-14">
          <h3 className="font-pixel text-xs md:text-sm text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent inline-block" aria-hidden="true" />
            ADAPTIVE CONTROLLERS & SOFTWARE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {adaptiveResources.map((r) => <ResourceCard key={r.name} {...r} />)}
          </div>
        </div>

        {/* Reviews & Education */}
        <div>
          <h3 className="font-pixel text-xs md:text-sm text-neon mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-neon inline-block" aria-hidden="true" />
            REVIEWS & EDUCATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviewSites.map((r) => <ResourceCard key={r.name} {...r} />)}
          </div>
        </div>

        <p className="font-retro text-sm text-muted-foreground mt-10 text-center max-w-2xl mx-auto">
          Source: <a href="https://amputee-coalition.org/resources/adaptive-gaming-resources/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline">Amputee Coalition — Adaptive Gaming Resources</a>
        </p>
      </div>
    </section>
  );
};

export default ResourcesSection;
