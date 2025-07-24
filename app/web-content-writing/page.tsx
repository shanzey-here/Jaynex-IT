import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ScrollEffects from "../components/ScrollEffects";

import Process from "../components/Process";
// import CTA from "../components/CTA";

export default function WebContentWriting() {
  const heroTitle = (
    <>
      Web Content{' '}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        Writing
      </span>
    </>
  );

  const heroSubtitle =
    'Transform your digital presence with compelling, SEO-optimized content that converts visitors into customers and builds lasting relationships with your audience.';

  const heroButtons = [
    { label: 'View Packages', href: '#pricing', variant: 'primary' as const },
    { label: 'Get Quote', href: '#contact', variant: 'secondary' as const },
  ];

  return (
    <ScrollEffects>
      <div className="content-offset">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          buttons={heroButtons}
          singleColumn={true}
        />
        <Services
          services={[
            {
              icon: '📝',
              title: 'Website Copy',
              description: 'Compelling homepage, about us, and service pages that clearly communicate your value proposition and convert visitors into customers.',
            },
            {
              icon: '📰',
              title: 'Blog Writing',
              description: 'Regular, high-quality blog posts that boost your SEO rankings, establish thought leadership, and engage your target audience.',
            },
            {
              icon: '🛍️',
              title: 'Product Descriptions',
              description: 'Persuasive product descriptions that highlight benefits, overcome objections, and drive purchase decisions.',
            },
            {
              icon: '📧',
              title: 'Email Marketing',
              description: 'Engaging email campaigns, newsletters, and automated sequences that nurture leads and drive conversions.',
            },
            {
              icon: '🔍',
              title: 'SEO Content',
              description: 'Search engine optimized content that ranks well on Google while providing genuine value to your readers.',
            },
            {
              icon: '📱',
              title: 'Social Media Content',
              description: 'Engaging social media posts, captions, and content strategies that build community and drive engagement.',
            },
          ]}
          sectionTitle="Our Web Content Writing Services"
          sectionDescription="Engaging and optimized content solutions to elevate your brand and connect with your audience."
        />
        <Process
          steps={[
            {
              title: 'Discovery & Research',
              description: 'We analyze your brand, target audience, competitors, and industry to understand your unique positioning and content needs.',
            },
            {
              title: 'Strategy Development',
              description: 'We create a comprehensive content strategy that aligns with your business objectives and resonates with your audience.',
            },
            {
              title: 'Content Creation',
              description: 'Our expert writers craft compelling, on-brand content that engages readers and drives desired actions.',
            },
            {
              title: 'Review & Optimization',
              description: 'We review, edit, and optimize all content for SEO, readability, and conversion before delivery.',
            },
            {
              title: 'Delivery & Support',
              description: 'We deliver your content on time and provide ongoing support to ensure maximum impact and results.',
            },
          ]}
          sectionTitle="Our Content Creation Process"
          sectionDescription="A structured approach to delivering high-quality content that drives engagement and conversions."
          sectionClassName="py-24 bg-white animate-on-scroll"
          gridClassName="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-5"
        />
       
        {/* <CTA
          title="Ready to Elevate Your Content?"
          description="Let's discuss your project and bring your vision to life with our expert content writing services."
          buttons={[
            { label: 'Start Your Project', href: 'mailto:jaynex.tech28@gmail.com', className: 'bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition' },
            { label: 'Get Free Quote', href: '/contact', className: 'border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition' },
          ]}
          sectionClassName="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24 text-center"
        /> */}
      </div>
    </ScrollEffects>
  );
}
