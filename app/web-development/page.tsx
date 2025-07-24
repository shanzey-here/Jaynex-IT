import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ScrollEffects from "../components/ScrollEffects";
import TechStack from "./components/TechStack";
import ContactForm from "./components/ContactForm";
import Process from "../components/Process";

// import CTA from "../components/CTA";

export default function WebDevelopmentPage() {
  const heroTitle = (
    <>
      Professional{' '}
      <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Web Development
      </span>{' '}
      Services
    </>
  );

  const heroSubtitle =
    'Transform your ideas into powerful, responsive websites and web applications that drive business growth and deliver exceptional user experiences.';

  const heroButtons = [
    { label: 'Start Your Project', href: '#contact', variant: 'primary' as const },
    { label: 'View Portfolio', href: '#portfolio', variant: 'secondary' as const },
  ];

  return (
    <ScrollEffects>
      <main className="content-offset">
        <Hero title={heroTitle} subtitle={heroSubtitle} buttons={heroButtons} singleColumn={true} />
        <Services
          services={[
            {
              icon: "🌐",
              title: "Custom Website Development",
              description:
                "Bespoke websites built from scratch, perfectly tailored to your brand and business requirements.",
              features: [
                "Responsive design for all devices",
                "SEO-optimized structure",
                "Fast loading speeds",
                "Content management system",
                "Analytics integration",
              ],
            },
            {
              icon: "⚛️",
              title: "React Web Applications",
              description:
                "Modern, interactive web applications built with React for superior performance and user experience.",
              features: [
                "Single Page Applications (SPA)",
                "Component-based architecture",
                "State management (Redux/Context)",
                "API integration",
                "Real-time functionality",
              ],
            },
            {
              icon: "🛒",
              title: "E-commerce Solutions",
              description:
                "Complete online store development with secure payment processing and inventory management.",
              features: [
                "Shopping cart functionality",
                "Payment gateway integration",
                "Inventory management",
                "Order tracking system",
                "Admin dashboard",
              ],
            },
            {
              icon: "📱",
              title: "Progressive Web Apps",
              description:
                "App-like experiences that work seamlessly across all devices and platforms.",
              features: [
                "Offline functionality",
                "Push notifications",
                "App-like interface",
                "Cross-platform compatibility",
                "Fast installation",
              ],
            },
            {
              icon: "🔧",
              title: "Website Maintenance",
              description:
                "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
              features: [
                "Regular security updates",
                "Performance optimization",
                "Content updates",
                "Backup management",
                "24/7 monitoring",
              ],
            },
            {
              icon: "🚀",
              title: "Performance Optimization",
              description:
                "Speed up your existing website and improve search engine rankings with our optimization services.",
              features: [
                "Page speed optimization",
                "Image compression",
                "Code minification",
                "CDN implementation",
                "Database optimization",
              ],
            },
          ]}
          sectionTitle="Our Web Development Services"
          sectionDescription="We offer a full spectrum of web development solutions tailored to your business needs."
        />
        <TechStack />
        <Process
          steps={[
            {
              title: "Discovery & Planning",
              description: "We analyze your requirements, research your market, and create a detailed project roadmap.",
            },
            {
              title: "Design & Prototyping",
              description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
            },
            {
              title: "Development",
              description: "Building your website using best practices, clean code, and modern technologies.",
            },
            {
              title: "Testing & QA",
              description: "Rigorous testing across devices, browsers, and performance benchmarks.",
            },
            {
              title: "Launch & Support",
              description: "Deploying your website and providing ongoing maintenance and support.",
            },
          ]}
          sectionTitle="Our Development Process"
          sectionDescription="We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations."
        />

        {/* <CTA
          title="Ready to Build Your Dream Website?"
          description="Let's discuss your project and bring your vision to life with our expert web development services."
          buttons={[
            {
              label: "Get Free Quote",
              href: "/contact",
              className: "bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition",
            },
            {
              label: "Contact Us",
              href: "mailto:jaynex.tech28@gmail.com",
              className: "border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition",
            },
          ]}
          sectionClassName="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24 text-center"
        /> */}
        <ContactForm />
      </main>
    </ScrollEffects>
  );
}
