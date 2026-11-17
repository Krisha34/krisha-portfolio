import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import badges from '../../data/badges.json';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-blue-50 text-gray-800">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Licenses & Certifications
          </h2>
          <p className="text-center text-sm text-gray-600 mb-10">
            Synced from{' '}
            <a
              href="https://www.credly.com/users/krisha-elle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Credly
            </a>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <a
                key={badge.id}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow hover:-translate-y-1 hover:shadow-md transition"
              >
                <img
                  src={badge.imageUrl}
                  alt={badge.name}
                  className="w-20 h-20 object-contain mb-3"
                  loading="lazy"
                />
                <h3 className="text-sm font-semibold text-blue-900 leading-snug">{badge.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{badge.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
