import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import profileImg from '../../assets/krisha.jpg'; // Replace with your actual image path

export const Home = () => {
  return (
    <section
      id="home"
      className="py-42 flex items-center justify-center relative px-6 bg-blue-50"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full">
          
          {/* 🖼️ Profile Image Section */}
          <div className="mb-8 md:mb-0 md:mr-12">
            <img
              src={profileImg}
              alt="Krisha Elle"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>

          {/* 👋 Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">
              Hi! I am Krisha Elle.
            </h1>

            <p className="text-xl text-gray-800 mb-8 max-w-xl text-justify">
              I’m a CS grad student passionate about building practical solutions—from real-time web apps to AI-powered tools. I combine engineering precision with research depth to drive meaningful tech impact.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://drive.google.com/file/d/1rvkURdr2nk3QAI8vgOwIs17RGN__af9-/view?usp=sharing"
                className="text-lg bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-lg border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Contact Me
              </a>
            </div> 
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
