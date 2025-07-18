import React from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

type PortfolioProps = {
  projects: Project[];
  sectionTitle?: string;
  sectionDescription?: string;
  sectionClassName?: string;
  gridClassName?: string;
};

const Portfolio: React.FC<PortfolioProps> = ({
  projects,
  sectionTitle = 'Recent Projects',
  sectionDescription = 'Take a look at some of our recent projects that showcase our expertise and creativity.',
  sectionClassName = 'bg-gradient-to-br from-slate-800 to-slate-700 text-white py-24',
  gridClassName = 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}) => {
  return (
    <section id="portfolio" className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">{sectionDescription}</p>
        </div>
        <div className={gridClassName}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition hover:translate-y-[-4px] hover:bg-white/15 animate-on-scroll"
            >
              <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
