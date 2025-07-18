'use client';

import React, { useEffect, useRef, useState } from 'react';

const results = [
  { number: '300%', label: 'Average Engagement Increase' },
  { number: '150%', label: 'Follower Growth Rate' },
  { number: '50+', label: 'Successful Campaigns' },
  { number: '95%', label: 'Client Satisfaction Rate' },
];

const Results = () => {
  const [counts, setCounts] = useState(results.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            results.forEach((result, index) => {
              const targetStr = result.number;
              const targetNum = parseInt(targetStr.replace(/[^0-9]/g, ''));

              let current = 0;
              const increment = Math.ceil(targetNum / 30);

              const timer = setInterval(() => {
                current += increment;
                if (current >= targetNum) {
                  current = targetNum;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = current;
                  return newCounts;
                });
              }, 50);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="results py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white animate-on-scroll"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Results That Speak Volumes</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Our data-driven approach delivers measurable results that transform businesses and drive growth.
          </p>
        </div>
        <div className="results-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map(({ number, label }, index) => {
            return (
              <div
                key={index}
                className="result-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center"
              >
                <span className="result-number text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-2">
                  {counts[index]}
                  {number.includes('%') ? '%' : number.includes('+') ? '+' : ''}
                </span>
                <span className="result-label text-slate-300 font-semibold">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
