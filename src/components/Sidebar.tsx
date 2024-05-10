'use client'
// components/Sidebar.tsx
import React, { useState, useEffect } from 'react';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 justify-center fixed" style={{ height: '100vh' }}>
      <div className={`size-4 md:size-8 rounded-full flex justify-center items-center transition-colors duration-300 ease-in-out ${activeSection === 'section1' ? 'bg-gradient-to-r from-red-400 to-red-900' : ''}`} ></div>
      <div className="bg-black rounded-lg" style={{ width: '4%', height: '30%' }}></div>
      <div className={`size-4 md:size-8 rounded-full border-black flex justify-center items-center transition-colors duration-300 ease-in-out ${activeSection === 'section2' ? 'bg-gradient-to-r from-emerald-500 to-emerald-900' : ''}`} ></div>
      <div className="bg-black rounded-lg" style={{ width: '4%', height: '30%' }}></div>
      <div className={`size-4 md:size-8 rounded-full border-black flex justify-center items-center transition-colors duration-300 ease-in-out ${activeSection === 'section3' ? 'bg-gradient-to-r from-slate-500 to-slate-800' : ''}`} ></div>
    </div>
  );
};

export default Sidebar;
