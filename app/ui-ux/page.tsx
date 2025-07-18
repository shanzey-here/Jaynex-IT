import Hero from '../components/Hero';
import Services from '../components/Services';
import ScrollEffects from '../components/ScrollEffects';
import DesignTools from './components/DesignTools';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

export default function UIUX() {
  const heroTitle = (
    <>
      Expert{' '}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        UI/UX Design
      </span>{' '}
      Services
    </>
  );

  const heroSubtitle =
    'Transform your digital presence with stunning, user-centered designs that enhance user experience and drive business growth through intuitive interfaces.';

  const heroButtons = [
    { label: 'Start Your Design', href: '#contact', variant: 'primary' as const },
    { label: 'View Portfolio', href: '#portfolio', variant: 'secondary' as const },
  ];

  return (
    <ScrollEffects>
      <div className="content-offset">
        <Hero title={heroTitle} subtitle={heroSubtitle} buttons={heroButtons} singleColumn={true} />
        <Services
          services={[
            {
              icon: '🎨',
              title: 'UI Design',
              description: 'Beautiful, modern interfaces that captivate users while maintaining functionality and brand consistency.',
              features: [
                'Visual design systems',
                'Interactive prototypes',
                'Responsive layouts',
                'Brand-aligned aesthetics',
                'Icon & illustration design',
              ],
            },
            {
              icon: '👥',
              title: 'UX Research',
              description: 'Data-driven insights to understand user behavior and create designs that truly serve your audience.',
              features: [
                'User interviews & surveys',
                'Competitive analysis',
                'User journey mapping',
                'Persona development',
                'Usability testing',
              ],
            },
            {
              icon: '📱',
              title: 'Mobile App Design',
              description: 'Native and cross-platform mobile app designs optimized for iOS and Android platforms.',
              features: [
                'iOS & Android guidelines',
                'Touch-friendly interfaces',
                'Micro-interactions',
                'App store optimization',
                'Progressive disclosure',
              ],
            },
            {
              icon: '💻',
              title: 'Web Design',
              description: 'Responsive web designs that work seamlessly across all devices and browsers.',
              features: [
                'Desktop & mobile responsive',
                'Landing page design',
                'E-commerce interfaces',
                'Dashboard design',
                'Accessibility compliance',
              ],
            },
            {
              icon: '🧩',
              title: 'Design Systems',
              description: 'Comprehensive design systems that ensure consistency and scalability across all digital touchpoints.',
              features: [
                'Component libraries',
                'Style guides',
                'Design tokens',
                'Pattern documentation',
                'Brand guidelines',
              ],
            },
            {
              icon: '🔄',
              title: 'UX Audit & Optimization',
              description: 'Comprehensive analysis of existing designs with actionable recommendations for improvement.',
              features: [
                'Heuristic evaluation',
                'Conversion optimization',
                'Performance analysis',
                'A/B testing setup',
                'Redesign strategies',
              ],
            },
          ]}
          sectionTitle="Our UI/UX Design Services"
          sectionDescription="We offer a full spectrum of UI/UX design solutions tailored to your business needs."
        />
        <Process
          steps={[
            {
              title: 'Research & Discovery',
              description: 'Understanding your users, business goals, and market landscape through comprehensive research.',
            },
            {
              title: 'Information Architecture',
              description: 'Organizing content and features into logical, user-friendly structures and navigation flows.',
            },
            {
              title: 'Wireframing & Prototyping',
              description: 'Creating low and high-fidelity prototypes to validate concepts and user interactions.',
            },
            {
              title: 'Visual Design',
              description: 'Applying visual elements, colors, typography, and imagery to create stunning interfaces.',
            },
            {
              title: 'Testing & Iteration',
              description: 'Conducting user testing and refining designs based on feedback and performance data.',
            },
          ]}
          sectionTitle="Our Design Process"
          sectionDescription="We follow a user-centered design methodology to create intuitive, engaging experiences that drive results."
          sectionClassName="process py-24 bg-white"
          gridClassName="process-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        />
        <DesignTools />
        <Portfolio
          projects={[
            {
              title: 'FinTech Mobile App',
              description: 'Complete mobile banking app redesign with improved user flows and modern visual design.',
              tags: ['Mobile Design', 'FinTech', 'iOS', 'Android'],
            },
            {
              title: 'E-commerce Platform',
              description: 'Comprehensive redesign of shopping experience with focus on conversion optimization.',
              tags: ['E-commerce', 'Web Design', 'UX Research', 'Conversion'],
            },
            {
              title: 'SaaS Dashboard',
              description: 'Complex data visualization dashboard with intuitive navigation and clean information hierarchy.',
              tags: ['Dashboard', 'Data Viz', 'SaaS', 'B2B'],
            },
          ]}
          sectionTitle="Recent Design Projects"
          sectionDescription="Explore our latest UI/UX design projects that showcase our creativity and user-centered approach."
        />
        <CTA
          title="Ready to Build Your Dream Website?"
          description="Let's discuss your project and bring your vision to life with our expert web development services."
          buttons={[
            { label: 'Start Your Design', href: '/contact', className: 'bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition' },
            { label: 'View Portfolio', href: '#portfolio', className: 'border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition' },
          ]}
          sectionClassName="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24 text-center"
        />
      </div>
    </ScrollEffects>
  );
}
