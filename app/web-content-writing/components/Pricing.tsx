import React from 'react';

const packages = [
  {
    title: 'Starter',
    price: '$299',
    period: 'per month',
    features: [
      '4 Blog Posts (500 words each)',
      'Basic SEO Optimization',
      '1 Round of Revisions',
      'Content Calendar',
      'Email Support',
    ],
    featured: false,
  },
  {
    title: 'Professional',
    price: '$599',
    period: 'per month',
    features: [
      '8 Blog Posts (750 words each)',
      'Advanced SEO Optimization',
      'Website Copy (up to 5 pages)',
      '2 Rounds of Revisions',
      'Social Media Content',
      'Priority Support',
    ],
    featured: true,
  },
  {
    title: 'Enterprise',
    price: '$999',
    period: 'per month',
    features: [
      '12 Blog Posts (1000+ words each)',
      'Complete SEO Strategy',
      'Email Marketing Content',
      'Unlimited Revisions',
      'Content Performance Reports',
      'Dedicated Account Manager',
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Content Writing Packages</h2>
        <p className="section-intro text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Choose the perfect package for your content needs, or let us create a custom solution tailored to your specific requirements.
        </p>
        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(({ title, price, period, features, featured }, index) => (
            <div
              key={index}
            className={`pricing-card bg-white border-2 rounded-2xl p-10 text-center relative transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                featured ? 'border-blue-600 scale-105 shadow-lg' : 'border-gray-200'
              }`}
            >
              {featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="pricing-title text-2xl font-bold mb-4">{title}</h3>
              <div className="pricing-price text-4xl font-extrabold text-blue-600 mb-1">{price}</div>
              <div className="pricing-period text-gray-500 mb-6">{period}</div>
              <ul className="pricing-features list-none mb-6">
                {features.map((feature, i) => (
                  <li key={i} className="border-b border-gray-100 py-2 text-gray-600 flex items-center justify-center">
                    <span className="mr-2 text-green-500 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary inline-block px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-colors">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
