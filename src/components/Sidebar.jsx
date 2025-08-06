import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaBars } from 'react-icons/fa';

/**
 * Sidebar navigation for portfolio sections.
 * Collapsible, with icons and labels for each section.
 */
const navItems = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'About', icon: <FaUser />, href: '#about' },
  { label: 'My Skills', icon: <FaTools />, href: '#skills' },
  { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { label: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
  { label: 'Education', icon: <FaGraduationCap />, href: '#education' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 h-full bg-cream shadow-lg flex flex-col transition-all duration-300 z-50 ${collapsed ? 'w-20' : 'w-56'}`}
    >
      <button
        className="p-4 focus:outline-none text-xl text-gray-700 hover:text-blue-600"
        onClick={() => setCollapsed((c) => !c)}
        aria-label="Toggle sidebar"
      >
        <FaBars />
      </button>
      <ul className="flex-1 flex flex-col gap-2 mt-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-800 hover:bg-blue-100 transition-colors group"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-base font-medium transition-all duration-200 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar; 