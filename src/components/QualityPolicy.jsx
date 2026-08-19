import React from 'react';
import { ShieldCheck, TestTube, CheckCircle, Award, Sparkles, FileText, Lock } from 'lucide-react';

export default function QualityPolicy() {
  const qcSteps = [
    {
      step: '01',
      title: 'Active Raw Material Verification',
      desc: '100% of incoming Active Pharmaceutical Ingredients (APIs) and excipients undergo wet chemistry assay analysis and supplier CoA cross-verification.',
    },
    {
      step: '02',
      title: 'In-Process Analytical Checks',
      desc: 'Granulation moisture testing, tablet hardness, friability, thickness uniformity, and solution clarity parameters measured at regular intervals.',
    },
    {
      step: '03',
      title: 'Finished Dosage Release Test',
      desc: 'HPLC dissolution profiling, disintegration time, microbial limit test (MLT), and heavy metal content verification prior to batch clearance.',
    },
    {
      step: '04',
      title: 'Stability & Shelf-Life Study',
      desc: 'Accelerated and real-time stability monitoring in climate chambers according to ICH guidelines (Zone IVb conditions).',
    },
  ];

  const labTools = [
    'High-Performance Liquid Chromatography (HPLC)',
    'UV-Vis Spectrophotometer & IR Spectroscopy',
    '8-Station Automatic Dissolution Tester',
    'Accelerated Stability Environmental Chambers',
    'Laminar Air Flow Cleanroom Workstations',
    'Total Organic Carbon (TOC) Water Analyzer',
  ];

  return (
    <section id="quality" className="section bg-white relative border-b border-slate-200/60">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-emerald mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Quality Policy & Compliance
          </span>
          <h2 className="section-title">
            Uncompromising Standards in <span className="gradient-text">Pharmaceutical Quality</span>
          </h2>
          <p className="section-subtitle">
            Our Quality Assurance (QA) and Quality Control (QC) frameworks ensure every pill, syrup, and injection meets international WHO-GMP pharmacopoeial standards (IP/BP/USP).
          </p>
        </div>

        {/* Banner Card */}
        <div className="glass-panel p-8 md:p-10 mb-12 border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-gradient-to-r dark:from-emerald-950/30 dark:via-slate-900/50 dark:to-cyan-950/30 shadow-sm rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Text & Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" /> GLP & cGMP Certified Laboratory Facilities
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--text-main)' }}>
                Zero Contamination & Precision Formulations Policy
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Strovanks Pharma believes that quality is designed and built directly into the product lifecycle. We follow a strict Quality-by-Design (QbD) approach, ensuring thorough analytical validation, validated cleaning SOPs, and computerized batch record tracking.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="badge badge-cyan">WHO-GMP Compliant</span>
                <span className="badge badge-blue">ISO 9001:2015 Accredited</span>
                <span className="badge badge-emerald">ICH Zone IVb Stability</span>
                <span className="badge badge-mint">DCGI Approved List</span>
              </div>
            </div>

            {/* Right Column: 2 Feature Cards Grid (Fills Right Side Completely) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-emerald-500/30 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black" style={{ color: 'var(--text-main)' }}>100%</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Batch Clearance</div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  No batch leaves our facility without full Certificate of Analysis (CoA) signoff by QC chemists.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-cyan-500/30 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black" style={{ color: 'var(--text-main)' }}>0.00%</div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">Contamination</div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  HEPA filtration & positive AHU pressures ensure 100% sterile batch formulation processing.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Step Quality Workflow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qcSteps.map((s, idx) => (
            <div key={idx} className="glass-panel p-6 relative group hover:border-emerald-400/40 transition-all shadow-sm">
              <div className="text-4xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors mb-2 font-mono">
                {s.step}
              </div>
              <h4 className="font-bold text-base mb-2" style={{ color: 'var(--text-main)' }}>{s.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Quality Lab Capabilities & Equipment */}
        <div className="glass-panel p-6 md:p-8 border-slate-200 dark:border-cyan-500/20 shadow-sm rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: Lab Instruments (2-Column Grid) */}
            <div>
              <h3 className="text-xl font-extrabold mb-3 flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                <TestTube className="w-5 h-5 text-cyan-500 shrink-0" /> Analytical QC Laboratory Instruments
              </h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Our in-house Testing Laboratory is outfitted with calibrated, state-of-the-art diagnostic instruments for comprehensive chemical, physical, and microbiological assays.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {labTools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 text-xs font-semibold shadow-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span style={{ color: 'var(--text-main)' }}>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Certificate of Analysis (CoA) Guarantee Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 space-y-4 shadow-sm">
              <h4 className="font-extrabold text-base flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                <FileText className="w-5 h-5 text-emerald-500 shrink-0" /> Certificate of Analysis (CoA) Guarantee
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                We issue a batch-specific Certificate of Analysis with every consignment shipped to our PCD franchise holders, third-party buyers, and export partners.
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-emerald-500/20 text-xs space-y-2.5 shadow-sm">
                <div className="flex justify-between items-center">
                  <span style={{ color: 'var(--text-muted)' }}>Purity Assay Requirement:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-extrabold">98.5% – 101.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: 'var(--text-muted)' }}>Microbial Total Aerobic Count:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-extrabold">&lt; 100 CFU/g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: 'var(--text-muted)' }}>Dissolution Rate (30 Min):</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-extrabold">&gt; 85% Q Value</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
