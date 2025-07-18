import React from 'react';
import { SiFigma, SiAdobexd, SiSketch, SiAdobephotoshop, SiAdobeillustrator, SiMaze, SiHotjar, SiFramer } from 'react-icons/si';

const DesignTools = () => {
  const tools = [
    { icon: <SiFigma />, name: "Figma", description: "Design & prototyping" },
    { icon: <SiAdobexd />, name: "Adobe XD", description: "UI/UX design" },
    { icon: <SiSketch />, name: "Sketch", description: "Interface design" },
    { icon: <SiAdobephotoshop />, name: "Photoshop", description: "Image editing" },
    { icon: <SiAdobeillustrator />, name: "Illustrator", description: "Vector graphics" },
    { icon: <SiMaze />, name: "Maze", description: "User testing" },
    { icon: <SiHotjar />, name: "Hotjar", description: "User analytics" },
    { icon: <SiFramer />, name: "Framer", description: "Animation & motion" },
  ];

  return (
    <section className="tech-stack py-24 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-title text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Design Tools & Software</h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            We use industry-leading design tools to create exceptional user experiences and pixel-perfect interfaces.
          </p>
        </div>
        <div className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tech-item bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll"
            >
              <div className="tech-icon text-4xl mb-4">{tool.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h4>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignTools;
