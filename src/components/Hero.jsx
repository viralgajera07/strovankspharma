import React, { useState } from 'react';
import { Search, ShieldCheck, Play, ArrowRight, Activity, Sparkles, Award, Globe, Building, Briefcase, FileCheck } from 'lucide-react';

export default function Hero({ onSearchSubmit, onOpenBatchVerifier, onOpenMoleculeModal }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
  };

  const metrics = [
    { label: 'Approved Formulations', value: '500+', icon: Award, detail: 'Across 12 Product Divisions' },
    { label: 'WHO-GMP Certified', value: '100%', icon: ShieldCheck, detail: 'ISO 9001:2015 Approved' },
    { label: 'Export Destinations', value: '30+', icon: Globe, detail: 'Global Pharmaceutical Reach' },
    { label: 'Monopoly Franchises', value: '1,200+', icon: Briefcase, detail: 'Distributor Partners Nationwide' },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Logo DNA Ribbon Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A887]/10 border border-[#00A887]/30 text-brand-teal text-xs font-bold uppercase tracking-wider shadow-sm mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Leading WHO-GMP Certified Pharmaceutical Manufacturer & Exporter
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Pioneering Healthcare Excellence Through <span className="gradient-text">Quality Medicines</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
            Strovanks Pharma produces high-purity pharmaceutical tablets, injections, oral syrups, softgels, topicals, and nutraceuticals. Trusted by doctors, hospitals, and PCD franchise partners across 30+ nations.
          </p>

          {/* Hero Formulations Search Form */}
          <form
            onSubmit={handleSearch}
            className="hero-search-form max-w-2xl mx-auto flex items-center justify-between p-1.5 pl-4 rounded-full glass-panel border border-white/20 shadow-xl transition-all hover:border-[#00A887]/50 focus-within:border-[#00A887] group"
          >
            <div className="text-brand-cyan shrink-0 pr-2 flex items-center justify-center">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search formulation composition or brand (e.g. Strovaclav, Cefixime, Pantoprazole)..."
              className="hero-search-input w-full flex-1 min-w-0 bg-transparent border-none outline-none text-sm md:text-base py-2.5 px-2"
              style={{ color: 'var(--text-main)' }}
            />
            <button type="submit" className="btn btn-primary rounded-full px-6 py-3 font-bold text-xs uppercase tracking-wider shrink-0 shadow-md ml-auto">
              Search Products
            </button>
          </form>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#products" className="btn btn-primary rounded-xl px-6 py-3">
              View Product Range <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#franchise" className="btn btn-secondary rounded-xl px-6 py-3">
              <Briefcase className="w-4 h-4 text-brand-cyan" />
              PCD Franchise & Mfg Inquiry
            </a>

            <button onClick={onOpenBatchVerifier} className="btn btn-outline rounded-xl px-6 py-3">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              Verify Batch CoA
            </button>
          </div>

        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t border-white/10">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="glass-panel p-6 text-center group hover:scale-[1.02] transition-transform border border-white/10">
                <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan group-hover:bg-[#00A887] group-hover:text-white transition-colors shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1 font-mono">{m.value}</div>
                <div className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{m.label}</div>
                <div className="text-xs text-slate-400 mt-0.5" style={{ color: 'var(--text-muted)' }}>{m.detail}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

