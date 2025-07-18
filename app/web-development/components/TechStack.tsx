// app/web-development/components/TechStack.tsx
import React from "react";
import { SiReact, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiAmazon, SiPython, SiNodedotjs } from "react-icons/si";

const techStack = [
  { icon: <SiReact className="text-sky-500" />, title: "React", desc: "Modern UI library" },
  { icon: <SiNodedotjs className="text-green-600" />, title: "Node.js", desc: "Server-side JavaScript" },
  { icon: <SiPython className="text-yellow-500" />, title: "Python", desc: "Backend development" },
  { icon: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", desc: "Utility-first CSS" },
  { icon: <SiMongodb className="text-green-700" />, title: "MongoDB", desc: "NoSQL database" },
  { icon: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", desc: "Relational database" },
  { icon: <SiAmazon className="text-orange-400" />, title: "AWS", desc: "Cloud hosting" },
  { icon: <SiFirebase className="text-yellow-400" />, title: "Firebase", desc: "Backend as a Service" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-200 ">
      <div className="max-w-7xl mx-auto px-4 text-center animate-on-scroll">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Technologies We Use</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          We leverage cutting-edge technologies to build robust, scalable, and future-proof web solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow hover:-translate-y-1 transition animate-on-scroll hover:shadow-lg"
            >
              <div className="text-4xl mb-3 flex justify-center">{tech.icon}</div>
              <h4 className="text-lg font-semibold text-slate-800">{tech.title}</h4>
              <p className="text-sm text-slate-500">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
