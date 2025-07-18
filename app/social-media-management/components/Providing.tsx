'use client';

import React from 'react';

const Providing = () => {
  const services = [
    { title: '📘 Facebook Management', desc: 'Build communities and drive engagement with targeted Facebook strategies' },
    { title: '📷 Instagram Growth', desc: 'Visual storytelling and influencer-style content that captures attention' },
    { title: '🐦 Twitter Engagement', desc: 'Real-time conversations and thought leadership in your industry' },
    { title: '💼 LinkedIn Professional', desc: 'B2B networking and professional brand building for business growth' },
    { title: '🎵 TikTok Creative', desc: 'Trending content and viral marketing strategies for younger demographics' },
    { title: '📺 YouTube Channel', desc: 'Video content strategy and channel optimization for long-term growth' },
  ];

  return (
    <section id="services" className="section services bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4">Platform Expertise</h2>
          <p className="text-lg text-[#64748b] max-w-[600px] mx-auto">We manage your presence across all major social media platforms with platform-specific strategies for maximum effectiveness.</p>
        </div>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item service-card bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] p-8 rounded-[15px] text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
            >
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">{service.title}</h3>
              <p className="text-[#64748b] text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providing;