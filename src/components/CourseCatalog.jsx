import React from 'react';
import { BookOpen, Shield, FileText, Play } from 'lucide-react';

const courses = [
  {
    id: 'c-ethics-101',
    title: 'Ethics Fundamentals',
    description: 'Core principles of ethical decision-making in the workplace.',
    duration: '45 min',
    level: 'Beginner',
    color: 'from-[#0046FF] to-[#001BB7]'
  },
  {
    id: 'c-privacy-gdpr',
    title: 'Data Privacy & GDPR',
    description: 'Understand data protection, privacy by design, and GDPR basics.',
    duration: '60 min',
    level: 'Intermediate',
    color: 'from-[#001BB7] to-[#0046FF]'
  },
  {
    id: 'c-anti-bribery',
    title: 'Anti-Bribery & Corruption',
    description: 'Recognize risk, report concerns, and comply with ABAC policies.',
    duration: '40 min',
    level: 'Intermediate',
    color: 'from-[#FF8040] to-[#0046FF]'
  },
  {
    id: 'c-code-of-conduct',
    title: 'Code of Conduct',
    description: 'Company standards for professional behavior and integrity.',
    duration: '35 min',
    level: 'All Levels',
    color: 'from-[#0046FF] to-[#FF8040]'
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="group rounded-xl bg-white border border-black/5 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[#2C2C2C]">{course.title}</h3>
            <p className="mt-1 text-sm text-[#2C2C2C]/70">{course.description}</p>
          </div>
          <div className="h-10 w-10 rounded-md bg-[#F5F1DC] flex items-center justify-center border border-black/5">
            <BookOpen className="text-[#001BB7]" size={18} />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-[#2C2C2C]/80">
          <span className="inline-flex items-center gap-1"><Shield size={14}/> {course.level}</span>
          <span className="inline-flex items-center gap-1"><FileText size={14}/> {course.duration}</span>
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-[#0046FF] text-white hover:bg-[#001BB7] transition-colors">
          <Play size={16}/> Start Module
        </button>
      </div>
    </div>
  );
};

const CourseCatalog = () => {
  return (
    <section id="catalog" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C2C2C]">Course Catalog</h2>
            <p className="text-sm text-[#2C2C2C]/70">Ethics and compliance modules designed for enterprise learning</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
