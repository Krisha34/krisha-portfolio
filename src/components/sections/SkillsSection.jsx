import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
const skills = [
  // Languages
  "Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML", "CSS",
  // Frontend
  "React.js", "Next.js", "TailwindCSS",
  // Backend
  "Node.js", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "Flask",
  // AI / ML
  "LangChain", "LangGraph", "RAG", "NLP", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "NLTK", "Librosa", "OpenCV", "PyMuPDF",
  // Cloud & DevOps
  "AWS", "Microsoft Azure", "Docker", "Kubernetes", "GitHub Actions (CI/CD)", "Linux", "Terraform",
  // Databases & Tools
  "PostgreSQL", "MongoDB", "MySQL", "Supabase", "ChromaDB", "Pinecone", "Redis",
  "Git", "GitHub", "Jira", "Postman", "VS Code", "Power BI", "Jupyter", "Microsoft Excel",
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
