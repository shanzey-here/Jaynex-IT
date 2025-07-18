import React from 'react';
import Link from 'next/link';

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
      {number}
    </div>
    <div className="text-slate-600 font-semibold">
      {label}
    </div>
  </div>
);

const About = () => {

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose JAYNEX IT?
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We're not just another software house. We're your digital transformation partners, 
              committed to delivering exceptional results that exceed expectations.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team combines technical expertise with creative vision to build solutions that 
              are not only functional but also beautiful and user-friendly. We believe in long-term 
              partnerships and work closely with our clients to understand their unique challenges and goals.
            </p>
            
            <div className="pt-6">
              <Link 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-on-scroll">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;