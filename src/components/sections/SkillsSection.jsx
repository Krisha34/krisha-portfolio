import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
const skills = [
  "Python", "React", "TailwindCSS", "HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS",
  "NLP", "Docker", "Git", "GitHub", "MongoDB", "SQL", "Jira", "VS Code", "Power BI","Kubernetes", "Flask" ,"Microsoft Excel","Pandas"," TensorFlow","Librosa","NLTK"," scikit-learn"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-blue-50 text-gray-800">
     <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-lg justify-center font-medium hover:bg-blue-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div></RevealOnScroll>
    </section>
  );
};
