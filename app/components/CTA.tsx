import React from 'react';
import Link from 'next/link';

type Button = {
  label: string;
  href: string;
  className?: string;
};

type CTAProps = {
  title: string;
  description: string;
  buttons: Button[];
  sectionClassName?: string;
};

const CTA: React.FC<CTAProps> = ({ title, description, buttons, sectionClassName = '' }) => {
  return (
    <section id="contact" className={`${sectionClassName} py-16 text-center`}>
      <div className="container mx-auto px-8">
        <div className="cta-content animate-on-scroll">
          <h2 className="text-3xl font-extrabold mb-6">{title}</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">{description}</p>
          <div className="hero-buttons flex justify-center gap-6 flex-wrap">
            {buttons.map((button, index) => (
              <Link key={index} href={button.href} passHref>
                <button className={button.className}>{button.label}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
