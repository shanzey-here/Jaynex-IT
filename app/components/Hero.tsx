import React from 'react';
import Button from './ui/Button';

type FeatureCard = {
  title: string;
  description: string;
};

type HeroProps = {
  title: React.ReactNode;
  subtitle: string;
  buttons?: { label: string; href: string; variant?: 'primary' | 'secondary' }[];
  featureCards?: FeatureCard[];
  className?: string;
  singleColumn?: boolean;
};

export default function Hero({ title, subtitle, buttons = [], featureCards = [], className = '', singleColumn = false }: HeroProps) {
  return (
    <section
      className={`hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center relative overflow-hidden py-24 sm:py-16 md:py-20 ${className}`}
    >
      <div
        className={`container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-8 sm:pt-0 ${
          singleColumn
            ? 'grid grid-cols-1 items-center justify-center'
            : 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'
        }`}
      >
        <div className={`hero-text ${singleColumn ? 'text-center' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight animate-slideInLeft">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 animate-slideInLeft animate-delay-200">{subtitle}</p>
          <div className={`hero-buttons flex flex-col sm:flex-row gap-4 animate-slideInLeft animate-delay-400 ${singleColumn ? 'justify-center items-center' : ''}`}>
            {buttons.map(({ label, href, variant = 'primary' }) => (
              <Button key={label} variant={variant} href={href}>
                {label}
              </Button>
            ))}
          </div>
        </div>
        {!singleColumn && featureCards.length > 0 && (
          <div className="hero-visual animate-slideInRight grid grid-cols-1 gap-1">
            {featureCards.map(({ title, description }, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 m-2 sm:m-4 animate-floatCard animate-delay-neg-${index}s`}
              >
                <h4 className="text-white mb-2">{title}</h4>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
