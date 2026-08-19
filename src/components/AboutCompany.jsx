import React, { useState } from 'react';
import { Building2, ShieldCheck, Award, Globe, Microchip, CheckCircle2, Factory, Sparkles, Target, Eye } from 'lucide-react';

export default function AboutCompany() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Approved Formulations', value: '500+', sub: 'Across 12 Therapeutics' },
    { label: 'Global Export Nations', value: '30+', sub: 'Asia, Africa & LatAm' },
    { label: 'Manufacturing Facility', value: 'WHO-GMP', sub: 'ISO 9001:2015 Accredited' },
    { label: 'Annual Production Capacity', value: '1.2B+', sub: 'Units per Annum' },
  ];

  const pillars = [
    {
      icon: Factory,
      title: 'State-of-the-Art Infrastructure',
      desc: 'Formulated in Class 10,000 Cleanrooms with automated blister packaging, strict humidity controls, and online inspection systems.',
      iconColor: 'text-cyan-600'
    },
    {
      icon: ShieldCheck,
      title: 'Stringent QA & QC Protocols',
      desc: 'Every single batch undergoes HPLC assay testing, stability chamber degradation profiling, and zero-microbial risk assurance.',
      iconColor: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'Export & Regulatory CTD Support',
      desc: 'Complete Common Technical Document (CTD) dossiers, Certificates of Pharmaceutical Product (COPP), and free-sale certificates.',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Award,
      title: 'PCD Franchise Monopoly Rights',
      desc: 'Exclusive region-wise distribution rights, comprehensive visual aids, medical representative support material, and fast dispatch.',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section id="about" className="section bg-white relative border-t border-b border-slate-200/80 py-16 md:py-24">
      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Section Header with Perfect Spacing */}
        <div className="section-header text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="badge badge-cyan mb-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 border border-cyan-500/30">
            <Building2 className="w-3.5 h-3.5" /> Corporate Overview
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Pioneering Global Standards in <span className="gradient-text">Pharmaceutical Innovation</span>
          </h2>
          <p className="section-subtitle text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Strovanks Pharma is a leading manufacturer, exporter, and PCD pharma franchise partner dedicated to providing WHO-GMP certified life-saving medicine globally.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel p-6 text-center hover:scale-105 transition-all duration-300 bg-white border border-slate-200 shadow-sm rounded-2xl">
              <div className="text-3xl lg:text-4xl font-black gradient-text mb-1.5">{stat.value}</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Tabbed Interactive Section */}
        <div className="glass-panel p-6 md:p-8 lg:p-10 mb-12 md:mb-16 shadow-md border border-slate-200 rounded-3xl bg-white">
          <div className="flex justify-center mb-8 border-b border-slate-100 pb-6">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  activeTab === 'overview' ? 'tab-btn-active shadow-md scale-[1.02]' : 'tab-btn-inactive'
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span>About Strovanks Pharma</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('vision')}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  activeTab === 'vision' ? 'tab-btn-active shadow-md scale-[1.02]' : 'tab-btn-inactive'
                }`}
              >
                <Target className="w-4 h-4 shrink-0" />
                <span>Vision & Mission</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('facility')}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  activeTab === 'facility' ? 'tab-btn-active shadow-md scale-[1.02]' : 'tab-btn-inactive'
                }`}
              >
                <Factory className="w-4 h-4 shrink-0" />
                <span>Manufacturing Units</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Empowering Healthcare Through Quality & Trust
                </h3>
                <p className="leading-relaxed text-sm md:text-base text-slate-600">
                  Strovanks Pharma operates at the forefront of modern pharmaceutical formulation development and contract manufacturing. Modeled after world-class standards, our ultra-modern manufacturing hubs produce high-purity oral solids, parenteral injections, liquid syrups, topical gels, and specialized nutraceutical formulations.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">WHO-GMP & ISO 9001:2015 Approved Facilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">FSSAI & DCGI Formulation Approvals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">Global Exports across Asia, Africa & LatAm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">Dedicated PCD Pharma Franchise Division with Exclusive Monopoly Territory</span>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/50 p-6 md:p-8 flex flex-col justify-between min-h-[300px] shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
                <div>
                  <span className="badge badge-blue mb-4">Regulatory Compliance</span>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">Global Quality Policy</h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We follow strict GLP (Good Laboratory Practices) and CGMP guidelines to guarantee batch-to-batch consistency, zero cross-contamination, and maximum therapeutic efficacy.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                  <span>Standard Operating Procedures</span>
                  <span className="text-cyan-600 font-extrabold">DCGI & FSSAI Compliant</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Vision & Mission */}
          {activeTab === 'vision' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 border border-cyan-200">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Our Vision</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  To become a global pharmaceutical benchmark recognized for therapeutic innovation, uncompromised WHO-GMP quality, affordable healthcare solutions, and empowering business partners worldwide.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-200">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Our Mission</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  To deliver premium, safe, and cost-effective pharmaceutical formulations by maintaining rigorous quality controls, continuously expanding product divisions, and nurturing long-term PCD franchise relationships.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Manufacturing Facilities */}
          {activeTab === 'facility' && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Microchip className="w-8 h-8 text-cyan-600 mb-3" />
                <h4 className="font-bold text-lg mb-1.5 text-slate-900">Cleanroom Class 10,000</h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  Positive pressure AHUs, HEPA air filtration system, and strict gowning stations ensuring zero airborne contaminant exposure.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Sparkles className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-lg mb-1.5 text-slate-900">High-Speed Packaging</h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  Automatic ALU-ALU blister packing, bottle capping, leak test apparatus, and automated barcode batch printing.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-lg mb-1.5 text-slate-900">HPLC Analytical Labs</h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  Equipped with High-Performance Liquid Chromatography, UV Spectrophotometry, and accelerated stability test chambers.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <Icon className={`w-10 h-10 ${p.iconColor} mb-4`} />
                <h4 className="font-bold text-base mb-2 text-slate-900">{p.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
