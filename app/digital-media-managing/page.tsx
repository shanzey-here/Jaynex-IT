import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ScrollEffects from "../components/ScrollEffects";
// import ResultsClient from "./components/ResultsClient";
import Process from "../components/Process";
// import CTA from "../components/CTA";

export default function DigitalMediaManaging() {
  const heroTitle = (
    <>
      Amplify Your Brand with{' '}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        Digital Media Marketing
      </span>
    </>
  );

  const heroSubtitle =
    'Transform your social presence into a powerful business asset. We create compelling digital media strategies that engage audiences, build communities, and drive measurable results across all platforms.';

  const heroButtons = [
    { label: 'Explore Our Services', href: '#services', variant: 'primary' as const },
    { label: 'Start Your Campaign', href: '#contact', variant: 'secondary' as const },
  ];

  const heroFeatureCards = [
    { title: '📱 Social Media', description: 'Strategic campaigns' },
    { title: '🎬 Video Content', description: 'Engaging visuals' },
    { title: '📊 Analytics', description: 'Data-driven insights' },
    { title: '🎯 Targeted Ads', description: 'Precision marketing' },
  ];

  return (
    <ScrollEffects>
      <div className="content-offset">
        <Hero title={heroTitle} subtitle={heroSubtitle} buttons={heroButtons} featureCards={heroFeatureCards} />
        <Services
          services={[
            {
              icon: '📱',
              title: 'Social Media Management',
              description: 'Complete social media strategy and management across all major platforms.',
              features: [
                'Content creation and scheduling',
                'Community management',
                'Hashtag strategy',
                'Engagement optimization',
                'Monthly performance reports',
              ],
            },
            {
              icon: '🎬',
              title: 'Content Creation',
              description: 'High-quality visual and video content that captures attention and drives engagement.',
              features: [
                'Professional photography',
                'Video production and editing',
                'Graphic design',
                'Animation and motion graphics',
                'Brand-consistent visuals',
              ],
            },
            {
              icon: '🎯',
              title: 'Paid Advertising',
              description: 'Strategic paid campaigns that maximize ROI and reach your ideal customers.',
              features: [
                'Facebook & Instagram Ads',
                'Google Ads campaigns',
                'LinkedIn advertising',
                'YouTube promotions',
                'A/B testing and optimization',
              ],
            },
            {
              icon: '📊',
              title: 'Analytics & Reporting',
              description: 'Comprehensive tracking and analysis to measure success and optimize performance.',
              features: [
                'Advanced analytics setup',
                'Custom dashboard creation',
                'Monthly performance reports',
                'ROI tracking',
                'Strategy recommendations',
              ],
            },
            {
              icon: '💬',
              title: 'Influencer Marketing',
              description: 'Connect with relevant influencers to expand your reach and build authentic relationships.',
              features: [
                'Influencer identification',
                'Campaign management',
                'Content collaboration',
                'Performance tracking',
                'Relationship building',
              ],
            },
            {
              icon: '🔥',
              title: 'Brand Strategy',
              description: 'Develop a cohesive brand voice and visual identity across all digital channels.',
              features: [
                'Brand positioning',
                'Voice and tone development',
                'Visual identity guidelines',
                'Content strategy',
                'Competitive analysis',
              ],
            },
          ]}
          sectionTitle="Our Digital Media Managing Services"
          sectionDescription="We offer a full spectrum of digital media management solutions tailored to your business needs."
        />
        <Process
          steps={[
            {
              title: 'Discovery & Strategy',
              description: 'We analyze your brand, audience, and competitors to develop a customized digital media strategy.',
            },
            {
              title: 'Content Planning',
              description: 'Create a comprehensive content calendar with engaging posts, stories, and campaigns.',
            },
            {
              title: 'Creation & Publishing',
              description: 'Produce high-quality content and publish it across all relevant platforms at optimal times.',
            },
            {
              title: 'Monitor & Optimize',
              description: 'Continuously track performance, engage with your audience, and refine strategies for better results.',
            },
          ]}
          sectionTitle="Our Proven Process"
          sectionDescription="We follow a strategic approach to ensure your digital media marketing delivers maximum impact and measurable results."
          sectionClassName="py-24 bg-white animate-on-scroll"
          gridClassName="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4"
        />
        {/* <ResultsClient />
        <CTA
          title="Ready to Amplify Your Brand?"
          description="Let's discuss your project and bring your vision to life with our expert digital media management services."
          buttons={[
            { label: 'Start Your Project', href: '/contact', className: 'bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition' },
            { label: 'Get Free Consultation', href: 'mailto:jaynex.tech28@gmail.com', className: 'border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition' },
          ]}
          sectionClassName="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24 text-center"
        /> */}
      </div>
    </ScrollEffects>
  );
}
