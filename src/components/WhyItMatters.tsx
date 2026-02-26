import { Heart, Gamepad2, Brain, Users } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'THERAPEUTIC',
    description: 'Gaming provides therapeutic benefits including improved motor skills, cognitive function, and emotional well-being for people with disabilities.',
  },
  {
    icon: Brain,
    title: 'SKILL BUILDING',
    description: 'Video games help develop problem-solving, coordination, and social skills regardless of physical ability.',
  },
  {
    icon: Users,
    title: 'COMMUNITY',
    description: 'Gaming connects people across all abilities, creating inclusive communities and friendships that transcend physical limitations.',
  },
  {
    icon: Gamepad2,
    title: 'INDEPENDENCE',
    description: 'Adaptive gaming technology empowers individuals with disabilities to participate in entertainment independently.',
  },
];

const WhyItMatters = () => {
  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-lg md:text-2xl text-center text-accent text-glow-accent mb-4">
          ★ WHY IT MATTERS ★
        </h2>
        <p className="font-retro text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gaming can allow those who are disabled to learn new skills and provide therapeutic benefits. Here's why accessible gaming changes lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="pixel-border bg-card p-6 hover:bg-muted transition-colors group">
              <r.icon className="text-primary mb-4 group-hover:text-accent transition-colors" size={32} />
              <h3 className="font-pixel text-xs text-primary mb-3">{r.title}</h3>
              <p className="font-retro text-lg text-card-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
