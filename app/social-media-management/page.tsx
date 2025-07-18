import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ScrollEffects from "../components/ScrollEffects";
import ProvidingClient from "./components/ProvidingClient";
import Process from "../components/Process";
import CTA from "../components/CTA";

export default function SocialMediaManagementPage() {
  const heroTitle = (
    <>
      Amplify Your{' '}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        Social Presence
      </span>{' '}
      With Expert Management
    </>
  );

  const heroSubtitle =
    'Transform your social media into a powerful business tool. We create engaging content, build communities, and drive meaningful interactions that convert followers into customers.';

  const heroButtons = [
    { label: 'Our Approach', href: '#features', variant: 'primary' as const },
    { label: 'Start Campaign', href: '#contact', variant: 'secondary' as const },
  ];

  const heroFeatureCards = [
    { title: '📈 Growth Strategy', description: 'Data-driven social growth' },
    { title: '🎯 Content Creation', description: 'Engaging visual content' },
    { title: '💬 Community Building', description: 'Active audience engagement' },
  ];

  return (
    <ScrollEffects>
      <main className="content-offset">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          buttons={heroButtons}
          featureCards={heroFeatureCards}
        />
        <Services
          services={[
            {
              icon: '📊',
              title: 'Strategic Planning',
              description:
                'We develop comprehensive social media strategies tailored to your brand goals, target audience, and industry trends to maximize your online impact.',
            },
            {
              icon: '🎨',
              title: 'Content Creation',
              description:
                'Our creative team produces high-quality visual content, engaging copy, and multimedia posts that resonate with your audience and drive engagement.',
            },
            {
              icon: '📅',
              title: 'Posting & Scheduling',
              description:
                "Consistent posting schedule across all platforms with optimal timing to reach your audience when they're most active and engaged.",
            },
            {
              icon: '💬',
              title: 'Community Management',
              description:
                'Active engagement with your audience, responding to comments, managing conversations, and building a loyal community around your brand.',
            },
            {
              icon: '📈',
              title: 'Analytics & Reporting',
              description:
                'Detailed performance tracking and monthly reports showing growth metrics, engagement rates, and actionable insights for continuous improvement.',
            },
            {
              icon: '🎯',
              title: 'Paid Advertising',
              description:
                'Strategic social media advertising campaigns to expand your reach, target specific demographics, and drive conversions with optimized ad spend.',
            },
          ]}
          sectionTitle="Complete Social Media Solutions"
          sectionDescription="From strategy to execution, we handle every aspect of your social media presence to ensure maximum impact and engagement."
        />
        <ProvidingClient />
        <Process
          steps={[
            {
              title: 'Discovery & Audit',
              description: 'We analyze your current social presence and identify opportunities for growth',
            },
            {
              title: 'Strategy Development',
              description: 'Create a comprehensive social media strategy aligned with your business goals',
            },
            {
              title: 'Content Planning',
              description: 'Develop content calendars and create engaging posts for all platforms',
            },
            {
              title: 'Implementation',
              description: 'Execute the strategy with consistent posting and active community management',
            },
            {
              title: 'Monitor & Optimize',
              description: 'Track performance metrics and continuously optimize for better results',
            },
          ]}
          sectionTitle="Our Social Media Management Process"
          sectionDescription="We follow a proven process to deliver outstanding results for your brand."
          sectionClassName="py-24 bg-white animate-on-scroll"
          gridClassName="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4"
        />
        <CTA
          title="Ready to Grow Your Social Presence?"
          description="Let's discuss your project and bring your vision to life with our expert social media management services."
          buttons={[
            { label: 'Start Your Campaign', href: '/contact', className: 'bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition' },
            { label: 'View All Services', href: '/' , className: 'border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition' },
          ]}
          sectionClassName="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24 text-center"
        />
      </main>
    </ScrollEffects>
  );
}
