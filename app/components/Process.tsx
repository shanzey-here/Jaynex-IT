import React from 'react';

type Step = {
  title: string;
  description: string;
};

type ProcessProps = {
  steps: Step[];
  sectionTitle?: string;
  sectionDescription?: string;
  sectionClassName?: string;
  gridClassName?: string;
};

const Process: React.FC<ProcessProps> = ({
  steps,
  sectionTitle = 'Our Development Process',
  sectionDescription = 'We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.',
  sectionClassName = 'py-24 bg-white animate-on-scroll',
  gridClassName = 'grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
}) => {
  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">{sectionTitle}</h2>
        <p className="text-slate-600 max-w-xl mx-auto">{sectionDescription}</p>
        <div className={gridClassName}>
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 text-white text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h4 className="text-lg font-semibold text-slate-800">{step.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
