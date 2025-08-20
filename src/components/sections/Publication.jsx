import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Publication = () => {
  return (
    <section id='publication' className='min-h-screen flex items-center justify-center py-20 bg-blue-50'>
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-center bg-clip-text text-transparent mb-12">
            Publications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publication 1 */}
            <div className="p-6 rounded-xl bg-white shadow hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Exploring Dual-Module Approaches for Sentiment Analysis in Call Recordings
              </h3>
              <p className="mb-4 text-gray-600 text-base text-justify">
                IEEE, 2024
              </p>
              <p className="mb-4 text-gray-600 text-lg text-justify">
                This paper presents a dual-module sentiment analysis system for call recordings, combining speech-to-text
                ML classification with audio-based emotion recognition using CNNs. It enables comparative analysis of text
                and audio cues through both live and file-based input modes.
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/10690070/"
                className="text-blue-600 font-medium hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper →
              </a>
            </div>

            {/* Publication 2 */}
            <div className="p-6 rounded-xl bg-white shadow hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Sentiment Analysis across Modalities: A Comprehensive Review of Text and Audio Approaches
              </h3>
              <p className="mb-4 text-gray-600 text-base text-justify">
                IEEE, 2024
              </p>
              <p className="mb-4 text-gray-600 text-lg text-justify">
                This paper offers a comprehensive overview of sentiment analysis research across modalities, focusing on
                key models and techniques used for analyzing text and audio data in emotion detection.
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/10480751"
                className="text-blue-600 font-medium hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
