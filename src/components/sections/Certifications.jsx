import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services (AWS)' },
  { name: 'Oracle Database SQL Certified Associate', issuer: 'Oracle' },
  { name: 'Oracle Fusion Cloud Applications HCM Process Essentials Certified', issuer: 'Oracle' },
  { name: 'Claude Certified Developer - Foundations', issuer: 'Anthropic' },
  { name: 'Claude Partner Badge - Claude Code', issuer: 'Anthropic' },
  { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'Aug 2026' },
  { name: 'Claude Code 101', issuer: 'Anthropic', date: 'Aug 2026' },
  { name: 'Gemini Enterprise Agent Development', issuer: 'Google' },
  { name: 'IBM Generative & Agentic AI Expert - Developer', issuer: 'IBM' },
  { name: '2026 IBMer watsonx Challenge', issuer: 'IBM' },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-blue-50 text-gray-800">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Licenses & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow hover:-translate-y-1 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer}
                  {cert.date && ` · ${cert.date}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
