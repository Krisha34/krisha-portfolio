import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  return (
    <section id='about' className='pt-16 pb-24 scroll-mt-20 '>
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            About Me
          </h2>


          <div className='rounded-xl glass p-1 border-white/10 border hover:-translate-y-2 transition-all'>
            <p className='text-xl leading-relaxed text-gray-800 text-justify'>
              I’m passionate about building systems that scale and solve problems people actually face. I’ve worked on a range of impactful projects—from developing a voice-based sentiment analysis platform using NLP and CNNs to leading the full-stack development of a secure, real-time event booking portal. My technical toolkit includes Python, React, Node.js, TensorFlow, and cloud services, and I’m equally comfortable working with structured data pipelines or interactive frontends.
              I’ve interned at Siemens and contributed to public health research with the Pune Knowledge Cluster, where I transformed raw COVID-19 data into actionable insights.
              What drives me is turning research-backed ideas into robust, efficient software that solves real-world problems.
              I aim to work at the forefront of tech, combining creativity, data, and code to engineer smarter solutions for tomorrow. Outside of tech, I find creative balance through classical music and dance and I have been actively involved in leadership and community work.
              </p>    </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
