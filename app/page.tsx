import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import AnimatedPage from '@/components/AnimatedPage';
import { missionAreas } from '@/data/missionAreas';
import { orgInfo } from '@/data/navigation';

/**
 * Home Page (/)
 * Landing page with hero, mission overview, and key areas
 * Modern, professional design inspired by service marketplaces
 */
export default function Home() {
  const heroButtons = [
    {
      label: 'Learn More',
      href: '/about',
      variant: 'secondary' as const,
    },
    {
      label: 'Support Us',
      href: '/support',
      variant: 'light' as const,
    },
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <HeroSection
        title={orgInfo.name}
        subtitle={orgInfo.motto}
        description="Empowering leaders, strengthening communities, transforming lives through spiritual and economic development"
        ctaButtons={heroButtons}
      />

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <h2 className="text-3xl font-bold text-primary-navy">Our Vision</h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                {orgInfo.vision}
              </p>
              <p className="text-gray-700 italic">
                We believe that true transformation comes through empowering hearts and hands—spiritually and economically—to build thriving communities rooted in Christ.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-primary-navy">Our Mission</h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                {orgInfo.mission}
              </p>
              <p className="text-gray-700 italic">
                Through partnerships, prayer, and purposeful action, we equip God&apos;s people to be agents of change in their communities and across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Areas Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary-navy mb-4">What We Do</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our work spans multiple areas, all united by our commitment to Gospel-centered empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {missionAreas.map((area, index) => (
              <div key={area.id} style={{ animationDelay: `${index * 0.1}s` }} className="stagger-item">
                <Card
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                  variant="elevated"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy via-accent-blue to-accent-blue text-neutral-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 glass-card rounded-full opacity-10 animate-bounce-gentle"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 glass-card rounded-full opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-black">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ready to Make an Impact?</h2>
          <p className="text-lg mb-8  animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Whether through prayer, partnership, or support, you can be part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="/support"
              className="btn-primary"
            >
              Support the Mission
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8 rounded-xl animate-scale-in" style={{ animationDelay: '0s' }}>
              <div className="text-5xl font-bold text-accent-blue mb-2">5+</div>
              <p className="text-gray-700 font-semibold">Key Mission Areas</p>
            </div>
            <div className="text-center glass-card p-8 rounded-xl animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-accent-blue mb-2">∞</div>
              <p className="text-gray-700 font-semibold">Global Impact</p>
            </div>
            <div className="text-center glass-card p-8 rounded-xl animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold text-primary-navy mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Faith-Driven Work</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
