import React from 'react';
import { Shield, BookOpen, BarChart2 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#F5F1DC]/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-[#0046FF] flex items-center justify-center shadow-sm">
            <Shield className="text-white" size={20} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-[#001BB7]">EthicsLearn</p>
            <p className="text-xs text-[#2C2C2C]/70">Compliance Training</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#2C2C2C]">
          <a href="#catalog" className="hover:text-[#0046FF] transition-colors flex items-center gap-1"><BookOpen size={16}/> Catalog</a>
          <a href="#progress" className="hover:text-[#0046FF] transition-colors flex items-center gap-1"><BarChart2 size={16}/> Progress</a>
          <a href="#activity" className="hover:text-[#0046FF] transition-colors">xAPI Activity</a>
        </nav>
        <a href="#catalog" className="ml-4 inline-flex items-center gap-2 bg-[#0046FF] text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-[#001BB7] transition-colors">
          Browse Courses
        </a>
      </div>
    </header>
  );
};

export default Navbar;
