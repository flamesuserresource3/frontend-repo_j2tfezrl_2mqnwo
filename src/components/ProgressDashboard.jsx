import React from 'react';
import { CheckCircle2, BarChart2 } from 'lucide-react';

const ProgressBar = ({ progress, color = '#0046FF' }) => (
  <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
    <div
      className="h-full rounded-full transition-all"
      style={{ width: `${progress}%`, backgroundColor: color }}
    />
  </div>
);

const ProgressItem = ({ title, score, status }) => {
  const color = status === 'Completed' ? '#0046FF' : '#FF8040';
  return (
    <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#2C2C2C]">{title}</p>
          <p className="text-xs text-[#2C2C2C]/70">Score: {score}%</p>
        </div>
        <span className={`inline-flex items-center gap-1 text-xs ${status === 'Completed' ? 'text-[#0046FF]' : 'text-[#FF8040]'}`}>
          <CheckCircle2 size={16} /> {status}
        </span>
      </div>
      <div className="mt-3">
        <ProgressBar progress={score} color={color} />
      </div>
    </div>
  );
};

const ProgressDashboard = () => {
  const items = [
    { title: 'Ethics Fundamentals', score: 92, status: 'Completed' },
    { title: 'Data Privacy & GDPR', score: 68, status: 'In Progress' },
    { title: 'Anti-Bribery & Corruption', score: 100, status: 'Completed' },
  ];

  const overall = Math.round(items.reduce((acc, i) => acc + i.score, 0) / items.length);

  return (
    <section id="progress" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C2C2C] flex items-center gap-2"><BarChart2/> Your Progress</h2>
            <p className="text-sm text-[#2C2C2C]/70">Track completion rates and assessment scores</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white border border-black/5 rounded-lg px-3 py-2 shadow-sm">
            <p className="text-xs text-[#2C2C2C]/70">Overall completion</p>
            <span className="text-sm font-semibold text-[#001BB7]">{overall}%</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <ProgressItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
