// import React from 'react'
// import { RevealOnScroll } from '../RevealOnScroll'
// export const Projects = () => {
//   return (
//     <section id='projects' className='min-h-screen flex  items-center justify-center py-10'>
//       <RevealOnScroll>
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-center bg-clip-text text-transparent">
//           Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           <div className='p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
//             <h3 className='text-xl font-bold mb-2'> HermesPass–Movie and Event Booking Portal</h3>
//             <p className='mb-4 text-gray-400'>• Collaborated in a team to build and deploy a full-stack event booking platform with customer login, Google OAuth, seat
//               selection, and Stripe-based payments,enhancing the user experience and transaction security.
//               • Developed search, filter, and real-time event display features, along with admin dashboards for managing events, offers,
//               media, and integrated Google AdSense , boosting operational efficiency for event organizers.
//               • Stack: React.js, Node.js, Express.js, MongoDB, Stripe API, Google OAuth</p>

//             <div className='flex justify-between items center'>
//               <a
//                 href="https://beamish-baklava-7a2363.netlify.app/"
//                 className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>

//           <div className='p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
//             <h3 className='text-xl font-bold mb-2'> Sentiment Analysis of Voice Calls</h3>
//             <p className='mb-4 text-gray-400'> Led the development of a dual-module sentiment analysis system for voice calls, combining speech-to-text sentiment
//  classification and audio-based emotion detection.
//  • Implemented speech-to-text NLP using Google Speech API and trained classifiers (Random Forest, Naive Bayes, SVM),
//  achieving 70% accuracy. Engineered audio classification with Librosa and CNNs, applying augmentation techniques
//  (noise injection, pitch shift), achieving 60% accuracy across 7 emotions.
//  • Stack: Flask, Google Speech API, TensorFlow, scikit-learn, NLTK, Librosa</p>

//             <div className='flex justify-between items center'>
//               <a
//                 href="#"
//                 className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//             <div className='p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
//             <h3 className='text-xl font-bold mb-2'>Covid-19 Dashboard using Power BI </h3>
//             <p className='mb-4 text-gray-400'>Analyzed COVID-19 datasets to extract key public health insights by cleaning, transforming, and formatting data in Excel; developed a dynamic Power BI dashboard to visualize infection trends across demographics, enhancing data-driven policy recommendations.</p>

//             <div className='flex justify-between items center'>
//               <a
//                 href="#"
//                 className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//                     <div className='p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
//             <h3 className='text-xl font-bold mb-2'>  Flipbook Library</h3>
//             <p className='mb-4 text-gray-400'>• Built a web-based Flipbook Library application enabling users to create and interactively view digital flipbooks with
//  animated page transitions.
//  • Engineered AJAX-driven image upload and editing modules with asynchronous processing and optimized frontend UX.
//  • Stack: JavaScript, jQuery, Turn.js, AJAX, PHP, MySQL, HTML/CSS</p>

//             <div className='flex justify-between items center'>
//               <a
//                 href="#"
//                 className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//   <div className='p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
//             <h3 className='text-xl font-bold mb-2'> Panchakarma Ayurveda Clinic Website</h3>
//             <p className='mb-4 text-gray-400'> Developed a health-focused web application that offers personalized millet-based remedies aligned with Ayurvedic principles. Users can explore a list of health conditions, each mapped to specific millets and their nutritional benefits to support holistic wellness.
// Tech Stack: HTML, CSS, JavaScript</p>

//             <div className='flex justify-between items center'>
//               <a
//                 href="https://panchakarma-speciality-clinic.netlify.app/"
//                 className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       </RevealOnScroll>
//     </section>
//   )
// }

import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

import hermespass from '../../assets/hermespass.png';
import sentiment from '../../assets/sentiment.png';
import dashboard from '../../assets/dashboard.png';
import flipbook from '../../assets/flipbook.png';
import ayurveda from '../../assets/ayurveda.png';
import ard from '../../assets/ard.jpg';
import bluepeak from '../../assets//bluepeak.png';
import cloud from '../../assets/cloud.png';
const projects = [
    {
    title: 'Agentic AI Claims Leakage Detection — 2nd Place, Plutus × Aperture',
    image: null,
    link: '#',
    description:
      'Built a multi-agent AI system with 3 autonomous agents (Python, FastAPI, React) leveraging Gemini 2.5-Flash and RAG (ChromaDB vector search) to evaluate insurance claim risk, with prompt pipelines for structured JSON outputs. Established an event-driven WebSocket system to deliver real-time AI decisions (approve/flag) with a human-in-the-loop approval workflow.',
    techStack: ['Python', 'FastAPI', 'React', 'Gemini 2.5-Flash', 'ChromaDB', 'RAG', 'WebSockets', 'ServiceNow FSO'],
  },
    {
    title: 'BluePeak Scout — AI Market Intelligence Platform',
    image: bluepeak,
    link: 'https://github.com/Krisha34/BluePeak-Scout-The-AI-Market-Intelligence-Copilot',
    description:
      'Engineered a full-stack application (Next.js, FastAPI) to automate competitor research workflows, eliminating ~10 hours/week of manual analysis through structured ingestion and backend processing pipelines. Implemented a RAG pipeline (LangChain + Chroma/Pinecone) with embedding-based retrieval and hybrid semantic search, with conversation history persisted in Supabase. Integrated WebSocket-based real-time updates and backend notification workflows (email + Slack) within a unified FastAPI service.',
techStack: [
  'FastAPI',
  'Python',
  'Next.js',
  'React',
  'TypeScript',
  'LangChain',
  'LangGraph',
  'Claude API',
  'ChromaDB',
  'Pinecone',
  'Redis',
  'Supabase',
  'PostgreSQL',
  'REST APIs',
  'WebSockets',
  'Docker'
],

  },
    {
    title: 'Cloud-Native Microservices Platform',
    image: cloud,
    link: '#',
    description:
      'Developed a secure backend using Java (Spring Boot), JWT authentication, and PostgreSQL, implementing REST APIs for core microservices. Containerized services with Docker and deployed to Azure Kubernetes Service (AKS) using GitHub Actions, reducing deployment time by 80%. Integrated four microservices through an API Gateway to enable a cloud-native, production-ready system emphasizing scalability and reliability.',
    techStack: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Docker', 'Kubernetes', 'Microsoft Azure (AKS)', 'Terraform', 'GitHub Actions']
,
  },
  {
    title: 'HermesPass – Movie and Event Booking Portal',
    image: hermespass,
    link: 'https://beamish-baklava-7a2363.netlify.app/',
    description:
      'Built a scalable MERN-based booking platform with JWT and Google OAuth authentication, interactive seat selection, real-time search/filtering, and secure Stripe payments. Implemented Docker-based containerization with CI/CD pipelines (GitHub Actions) and deployed on Render Cloud. Added admin dashboards, media uploads, and modular REST APIs for efficient event management and real-time analytics.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Google OAuth'],
  },
  {
    title: 'Sentiment Analysis of Voice Calls',
    image: sentiment,
    link: 'https://github.com/Krisha34/Sentiment-analysis-of-voice-calls',
    description:
      'Led an end-to-end dual-module sentiment analysis system with a speech-to-text classifier (70% accuracy) and a CNN-based audio emotion detector (60% accuracy), delivered through a Flask-based full-stack application integrating Google Speech-to-Text API.',
    techStack: ['Flask', 'Google Speech API', 'TensorFlow', 'scikit-learn', 'NLTK', 'Librosa'],
  },
  {
    title: 'Covid-19 Dashboard using Power BI',
    image: dashboard,
    link: '#',
    description:
      'Cleaned and transformed large-scale COVID-19 datasets in Excel and developed an interactive Power BI dashboard to visualize infection trends across demographics and support public health decisions.',
    techStack: ['Microsoft Excel', 'Power BI'],
  },
  {
    title: 'Flipbook Library',
    image: flipbook,
    link: '#',
    description:
      'Built a web-based flipbook system allowing users to upload images and interactively flip through pages with animated transitions. Engineered AJAX-driven uploads and frontend editing for a smooth user experience.',
    techStack: ['JavaScript', 'jQuery', 'Turn.js', 'AJAX', 'PHP', 'MySQL'],
  },
  {
    title: 'Panchakarma Ayurveda Clinic Website',
    image: ayurveda,
    link: 'https://panchakarma-speciality-clinic.netlify.app/',
    description:
      'Created a health-focused web application for browsing millet-based Ayurvedic remedies. Designed a clean UX to let users explore health conditions and view mapped nutritional solutions for holistic wellness.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
    {
    title: 'Smart irrigation system and water level sensing',
    image: ard,
        link: '#',

    description:
      'Developed an Arduino-based system that automates irrigation based on real-time soil moisture levels and monitors water tank levels using an ultrasonic sensor. The pump activates only when the soil is dry, with LEDs indicating water availability, ensuring efficient and sustainable water usage.',
    techStack: ['Arduino UNO', 'Soil Moisture Sensor', 'Ultrasonic Sensor (HC-SR04)', 'Relay Module', 'LEDs'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-10 bg-blue-50">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-center bg-clip-text text-transparent mb-10">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {projects.map((project, index) => (
  <div
    key={index}
    className="p-6 rounded-xl bg-white shadow hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
  >
    {project.image && (
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
    )}
    <h3 className="text-xl font-bold mb-2 text-blue-900">{project.title}</h3>
    <p className="mb-4 text-gray-700 text-lg text-justify">{project.description}</p>

    <div className="mb-4 flex flex-wrap gap-2">
      {project.techStack.map((tech, idx) => (
        <span
          key={idx}
          className="bg-blue-500/10 text-blue-500 rounded text-base px-2 py-1 hover:bg-blue-500/20 hover:shadow transition"
        >
          {tech}
        </span>
      ))}
    </div>

{(project.title !== 'Covid-19 Dashboard using Power BI' &&
  project.title !== 'Flipbook Library' &&
  project.title !== 'Cloud-Native Microservices Platform' &&
  project.title !== 'Agentic AI Claims Leakage Detection — 2nd Place, Plutus × Aperture' &&
  project.title !== 'Smart irrigation system and water level sensing' ) && (
  <a
    href={project.link}
    className="inline-block mt-2 text-base font-medium text-blue-600 hover:text-indigo-600 transition-colors"
  >
    View Project →
  </a>
)}

  </div>
))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

