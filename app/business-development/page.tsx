import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ScrollEffects from '../components/ScrollEffects';


export default function BusinessDevelopmentPage() {
   const heroTitle = (
     <>
       Strategic{' '}
       <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
         Business Development
       </span>
     </>
   );

   const heroSubtitle =
     'Accelerate your business growth with our comprehensive development strategies. We help you identify opportunities, optimize operations, and implement solutions for sustainable success.';

   const heroButtons = [
     { label: 'Start Your Growth', href: '#contact', variant: 'primary' as const },
     { label: 'Schedule Consultation', href: 'mailto:info@jaynex.com', variant: 'secondary' as const },
   ];

   return (
     <ScrollEffects>
       <div className="content-offset">
         <Hero title={heroTitle} subtitle={heroSubtitle} buttons={heroButtons} singleColumn={true}/>
         <Services
           services={[
             {
               icon: '📊',
               title: 'Strategic Planning',
               description: 'Develop comprehensive business strategies that align with your goals and market opportunities.',
               features: [
                 'Market analysis and research',
                 'Competitive positioning',
                 'Growth roadmap creation',
                 'KPI development and tracking',
               ],
             },
             {
               icon: '🎯',
               title: 'Market Expansion',
               description: 'Identify and capitalize on new market opportunities to expand your business reach.',
               features: [
                 'Target market identification',
                 'Entry strategy development',
                 'Partnership opportunities',
                 'Risk assessment and mitigation',
               ],
             },
             {
               icon: '💼',
               title: 'Business Process Optimization',
               description: 'Streamline operations and improve efficiency to maximize your business potential.',
               features: [
                 'Workflow analysis and improvement',
                 'System integration solutions',
                 'Performance optimization',
                 'Cost reduction strategies',
               ],
             },
             {
               icon: '🚀',
               title: 'Growth Strategy Implementation',
               description: 'Execute proven strategies to accelerate your business growth and market presence.',
               features: [
                 'Revenue growth planning',
                 'Customer acquisition strategies',
                 'Product/service development',
                 'Scaling operations support',
               ],
             },
             {
               icon: '🤝',
               title: 'Partnership Development',
               description: 'Build strategic partnerships and alliances that drive mutual growth and success.',
               features: [
                 'Partner identification and vetting',
                 'Partnership agreement structuring',
                 'Collaboration strategy development',
                 'Relationship management',
               ],
             },
             {
               icon: '📈',
               title: 'Digital Transformation',
               description: 'Modernize your business operations with cutting-edge digital solutions and technologies.',
               features: [
                 'Technology assessment and planning',
                 'Digital strategy development',
                 'Implementation roadmap',
                 'Change management support',
               ],
             },
           ]}
           sectionTitle="Our Business Development Services"
           sectionDescription="We offer a full spectrum of business development solutions tailored to your business needs."
         />

       </div>
     </ScrollEffects>
   );
}
