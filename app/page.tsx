import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollEffects from "./components/ScrollEffects";
import About from "./components/About";
import ContactClient from "./components/ContactClient";

export default function Home() {
  const heroTitle = (
    <>
      Transform Your Digital{" "}
      <span className="highlight bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
        Vision
      </span>{" "}
      Into Reality
    </>
  );

  const heroSubtitle =
    "We're JAYNEX IT, your trusted digital agency delivering cutting-edge digital solutions. From web development to business growth, we craft experiences that drive results.";

  const heroButtons = [
    {
      label: "Explore Services",
      href: "#services",
      variant: "primary" as const,
    },
    { label: "Start Project", href: "#contact", variant: "secondary" as const },
  ];

  const heroFeatureCards = [
    { title: "🚀 Innovation", description: "Cutting-edge digital solutions" },
    { title: "💼 Expertise", description: "Experienced software house" },
    { title: "📈 Growth", description: "Driving business success" },
  ];

  return (
    <ScrollEffects>
      <div className="content-offset">
        <Hero title={heroTitle} subtitle={heroSubtitle} buttons={heroButtons} featureCards={heroFeatureCards} />
        <Services
          services={[
            {
              icon: "💻",
              title: "Web Development",
              description:
                "Custom websites and web applications built with cutting-edge technologies. We create fast, secure, and scalable solutions tailored to your business needs.",
              href: "/web-development",
            },
            {
              icon: "📱",
              title: "Social Media Management",
              description:
                "Strategic social media campaigns that build brand awareness and engage your audience. We manage your online presence across all major platforms.",
              href: "/social-media-management",
            },
            {
              icon: "🎬",
              title: "Digital Media Managing",
              description:
                "Comprehensive digital asset management and content strategy. We help you organize, optimize, and distribute your digital content effectively.",
              href: "/digital-media-managing",
            },
            {
              icon: "✍️",
              title: "Web Content Writing",
              description:
                "Compelling, SEO-optimized content that converts visitors into customers. Our writers craft engaging copy that resonates with your target audience.",
              href: "/web-content-writing",
            },
            {
              icon: "🎨",
              title: "UI/UX Design",
              description:
                "User-centered design solutions that enhance user experience and drive engagement. We create intuitive interfaces that users love.",
              href: "/ui-ux",
            },
            {
              icon: "📈",
              title: "Business Development",
              description:
                "Strategic planning and growth optimization to scale your business. We help identify opportunities and implement solutions for sustainable growth.",
              href: "/business-development",
            },
          ]}
          sectionTitle="Our Expertise"
          sectionDescription="We offer comprehensive digital solutions to accelerate your business growth and establish a strong online presence."
        />
        <About />
        <ContactClient />
      </div>
    </ScrollEffects>
  );
}
