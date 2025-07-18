import React from "react";
import Hero from "../components/Hero";
import ScrollEffects from "../components/ScrollEffects";
import Contact from "../components/Contact";

export default function ContactPage() {
  const heroTitle = (
    <>
      Get in Touch with{' '}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        JAYNEX IT
      </span>
    </>
  );

  const heroSubtitle =
    'We’re here to help you with your digital transformation journey. Reach out to us for expert advice, project inquiries, or any questions you may have.';

  return (
    <ScrollEffects>
      <main className="content-offset">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          singleColumn={true}
        />
        <Contact />
      </main>
    </ScrollEffects>
  );
}
