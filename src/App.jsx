import React from 'react';
import Navbar from './components/Navbar';
import CourseCatalog from './components/CourseCatalog';
import ProgressDashboard from './components/ProgressDashboard';
import XAPISimulator from './components/XAPISimulator';

function App() {
  return (
    <div id="home" className="min-h-screen bg-[#F5F1DC] text-[#2C2C2C]">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#001BB7] bg-white border border-black/5 rounded-full px-3 py-1 shadow-sm">Enterprise Ethics & Compliance</span>
                <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-[#2C2C2C]">
                  Professional, xAPI‑ready training for modern organizations
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#2C2C2C]/80">
                  Deliver engaging modules, track learner progress, and generate compliance-ready reports with a clean, accessible interface.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <a href="#catalog" className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-[#0046FF] text-white hover:bg-[#001BB7] transition-colors">Explore Catalog</a>
                  <a href="#activity" className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium border border-black/10 bg-white text-[#001BB7] hover:border-[#001BB7] transition-colors">Try xAPI</a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <p className="text-sm font-semibold">Compliance Snapshot</p>
                      <div className="mt-2 h-2 rounded-full bg-black/10 overflow-hidden">
                        <div className="h-full w-3/4 bg-[#0046FF]"></div>
                      </div>
                      <p className="mt-2 text-xs text-[#2C2C2C]/70">Organization-wide completion: 75%</p>
                    </div>
                    <div className="col-span-1">
                      <div className="h-full rounded-xl bg-gradient-to-br from-[#0046FF] to-[#001BB7] flex items-center justify-center text-white font-semibold">xAPI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CourseCatalog />
        <ProgressDashboard />
        <XAPISimulator />
      </main>

      <footer className="mt-10 py-8 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 text-sm text-[#2C2C2C]/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} EthicsLearn • Built for corporate training</p>
          <p>Primary #0046FF • Secondary #001BB7 • Accent #FF8040</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
