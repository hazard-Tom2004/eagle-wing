import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';
import Card from '@/components/Card';
import { orgInfo } from '@/data/navigation';

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

const coreValues: CoreValue[] = [
  {
    title: 'Gospel-Centered',
    description: 'Everything flows from our faith in Jesus Christ and His transformative power.',
    icon: '✝️',
  },
  {
    title: 'Empowerment-Focused',
    description: 'We believe in equipping people to become agents of change in their communities.',
    icon: '💪',
  },
  {
    title: 'Integrity & Transparency',
    description: 'We operate with honesty, accountability, and stewardship of resources entrusted to us.',
    icon: '🔒',
  },
  {
    title: 'Global Vision',
    description: 'We embrace a worldwide perspective while maintaining local relevance and impact.',
    icon: '🌍',
  },
  {
    title: 'Partnership',
    description: 'We work collaboratively with churches, organizations, and communities to maximize impact.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We pursue quality in all we do, honoring God with our best efforts and resources.',
    icon: '⭐',
  },
];

/**
 * About Us Page (/about)
 * Organization overview, vision, mission, history, and core values
 */
export default function About() {
  return (
    <AnimatedPage>
      {/* Hero */}
      <HeroSection
        title="About Eagles Wings"
        subtitle={orgInfo.motto}
        description="Learn about our mission to empower leaders and transform communities"
      />

      {/* Organization Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-navy mb-8">Who We Are</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong className="text-primary-navy">{orgInfo.name}</strong> is a faith-based international non-profit organization
              committed to advancing God&apos;s kingdom through spiritual and economic empowerment.
            </p>
            <p className="text-lg">
              Founded on the principle that lasting transformation requires both spiritual foundation and
              practical opportunity, we work across multiple regions to equip Christian leaders, develop
              entrepreneurial skills, and build strong, resilient communities.
            </p>
            <p className="text-lg">
              Our motto—<em className="text-secondary font-semibold">{orgInfo.motto}</em>—reflects our
              belief that when believers are lifted by God&apos;s grace and empowered through strategic
              support, they soar to new heights of service and effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Our Vision"
              description={orgInfo.vision}
              icon="👁️"
              variant="elevated"
              className="md:col-span-1"
            />
            <Card
              title="Our Mission"
              description={orgInfo.mission}
              icon="🎯"
              variant="elevated"
              className="md:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary-navy mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
                variant="outline"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brief History */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-navy mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Eagles Wings World Changers Outreach was birthed from a burden shared by faithful
              Christian leaders across Africa and the diaspora. Recognizing the need for holistic
              empowerment—one that addresses both spiritual growth and practical opportunity—our
              founders came together with a clear vision.
            </p>
            <p>
              Over the years, we have grown from a small initiative to an international network,
              touching lives across multiple continents. Our work has expanded to encompass Christian
              leadership training, entrepreneurship development, prayer networks, community programs,
              and Gospel publication efforts.
            </p>
            <p>
              Today, we remain committed to our founding principles: that the Gospel transforms lives,
              that empowerment is multidimensional, and that the best leaders are those who serve with
              integrity and humility. Every program, partnership, and initiative reflects our desire to
              see God&apos;s kingdom advanced and communities flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-footer-bg text-neutral-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-accent-blue mb-8">
            Whether you&apos;re a leader seeking growth, an entrepreneur pursuing opportunity, or a believer in prayer and partnership—there&apos;s a place for you.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </AnimatedPage>
  );
}
