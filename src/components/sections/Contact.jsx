// import React, { useState } from 'react'
// import { RevealOnScroll } from '../RevealOnScroll'
// import emailjs from "emailjs-com"
// export const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",

//     })
//     const SERVICE_ID = "service_3i01zhk"
//     const TEMPLATE_ID = "template_dssqlpn"
//     const PUBLIC_KEY = "W0BQRDLHYTyuk4fmQ"
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
//             alert("Message sent");
//             setFormData({ name: "", email: "", message: "" })

//         }).catch(() => alert("Oops! Something went wrong,please try again."));
//     };

//     return <section id='contact' className='flex min-h-screen justify-center items-center py-20'>

//         <RevealOnScroll>
//             <div className="px-4 w-150">
//                 <h2 className="text-3xl my-5 font-bold bg-gradient-to-r from-blue-300 to-cyan-400 text-center bg-clip-text text-transparent">Get In Touch</h2>
//                 <form className='space-y-6' action="" onSubmit={handleSubmit}>
//                     <div className='relative'>
//                         <input onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                             value={formData.name} placeholder='Name' type="text" id='name' name='name' required className='w-full bg-white/5 rounded border border-white/29 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
//                     </div>
//                     <div className='relative'>
//                         <input onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                             value={formData.email} placeholder='Email' type="email" id='email' name='name' required className='w-full bg-white/5 rounded border border-white/29 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
//                     </div>
//                     <div className='relative'>
//                         <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })}

//                             rows={5} alue={formData.message} placeholder='Your Message..' id='Message' name='message' required className='w-full bg-white/5 rounded border border-white/29 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
//                     </div>
//                     <button type='submit' className='hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium overflow-hidden transition relative w-full bg-blue-500 text-white p-2.5'> Send message</button>
//                 </form>
//             </div>
//         </RevealOnScroll>
//     </section>
// }
import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
      alert("Message sent");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => alert("Oops! Something went wrong, please try again."));
  };

  return (
    <section id='contact' className='flex min-h-screen justify-center items-center py-20 bg-blue-50 text-gray-900'>
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl text-center">
          <h2 className="text-3xl my-6 font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Contact Form */}
          <form className='space-y-6 mb-10' onSubmit={handleSubmit}>
            <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
              placeholder='Name'
              name='name'
              required
              className='w-full bg-transparent border border-blue-300 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition'
            />
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              placeholder='Email'
              type='email'
              name='email'
              required
              className='w-full bg-transparent border border-blue-300 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition'
            />
            <textarea
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              value={formData.message}
              placeholder='Your Message...'
              name='message'
              rows={5}
              required
              className='w-full bg-transparent border border-blue-300 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition'
            />
            <button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded transition'
            >
              Send message
            </button>
          </form>
<div className="text-center mt-10 space-y-3">
  {/* Name */}
  <h3 className="text-xl font-semibold text-gray-600 p-2">@KrishaElle</h3>

  {/* Phone & Email */}
  <div className="flex justify-center p-2 items-center gap-x-6 flex-wrap text-gray-800">
    <p className='text-md flex items-center'>
      <FaPhoneAlt className='inline mr-2 text-blue-500' />9309043663
    </p>
    <p className='text-md flex items-center'>
      <FaEnvelope className='inline mr-2 text-blue-500' />krisharelle@gmail.com
    </p>
  </div>

  {/* Icons */}
  <div className="flex justify-center items-center gap-6 mt-2">
    <a
      href="https://www.linkedin.com/in/krisha-elle-503203215/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 text-2xl"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/Krisha34"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 text-2xl"
    >
      <FaGithub />
    </a>
  </div>
</div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
