import React, { useState } from 'react';
import { FlaskConical, Dna, Activity, CheckCircle, Clock, ChevronDown, ChevronUp, FileSpreadsheet, ExternalLink } from 'lucide-react';

export const PIPELINE_DATA = [
  {
    id: 'sv-204',
    code: 'SV-204 (Strovamab Extended-Half-Life)',
    therapeuticArea: 'Oncology',
    target: 'TIGIT / PD-L1 Bispecific mAb',
    indication: 'Non-Small Cell Lung Cancer (1L Combination with Chemotherapy)',
    phase: 'Phase III',
    phaseProgress: 80,
    expectedTarget: 'Q4 2026 PDUFA Submission',
    trialCode: 'NCT05912048 (EVOLVE-Lung)',
    patientCount: '1,240 Patients',
    details: 'Engineered Fc domain extending serum half-life from 14 to 32 days, reducing infusion frequency to once every 6 weeks.',
  },
  {
    id: 'ns-910',
    code: 'NS-910 (NeuroStrova II)',
    therapeuticArea: 'Neurology',
    target: 'Alpha-Synuclein Receptor Antagonist',
    indication: 'Parkinson’s Disease Motor Symptom Disease Modification',
    phase: 'Phase IIb',
    phaseProgress: 55,
    expectedTarget: 'Q2 2027 Phase II Readout',
    trialCode: 'NCT06019283 (SYN-PARK)',
    patientCount: '480 Patients',
    details: 'First-in-class oral BBB-permeable small molecule targeting pathological alpha-synuclein oligomerization.',
  },
  {
    id: 'cv-501',
    code: 'CV-501 (Vanks-Cardio ADC)',
    therapeuticArea: 'Cardiology',
    target: 'Ankrd1 Targeted RNAi Therapeutics',
    indication: 'Hypertrophic Cardiomyopathy (HCM) & Gene Silencing',
    phase: 'Phase IIa',
    phaseProgress: 45,
    expectedTarget: 'Q1 2027 Phase II Interim Analysis',
    trialCode: 'NCT05771120 (CARDIOSILENCE)',
    patientCount: '180 Patients',
    details: 'Targeted lipid nanoparticle (LNP) RNA silencing payload reducing cardiac hypertrophic stress markers.',
  },
  {
    id: 'iv-880',
    code: 'IV-880 (Immuno-Tyk2 Oral)',
    therapeuticArea: 'Immunology',
    target: 'Allosteric TYK2 Inhibitor',
    indication: 'Ulcerative Colitis & Moderate-to-Severe Crohn’s Disease',
    phase: 'Phase III',
    phaseProgress: 75,
    expectedTarget: 'Q3 2026 Phase III Complete',
    trialCode: 'NCT05643190 (IBD-CLEAR)',
    patientCount: '950 Patients',
    details: 'Once-daily oral pill achieving clinical mucosal healing without immunosuppressive blood dyscrasias.',
  },
  {
    id: 'met-109',
    code: 'MET-109 (Dual GLP-1 / GIP / Glucagon Tri-Agonist)',
    therapeuticArea: 'Metabolic',
    target: 'Tri-Incretin Peptide Agonist',
    indication: 'NASH / MASH Liver Fibrosis & Severe Metabolic Syndrome',
    phase: 'Phase IIb',
    phaseProgress: 60,
    expectedTarget: 'Q4 2026 Phase II Readout',
    trialCode: 'NCT06103321 (MASH-REVERSE)',
    patientCount: '620 Patients',
    details: 'Demonstrates 38% relative reduction in hepatic fat content at 24 weeks with significant fibrosis regression.',
  },
  {
    id: 'rd-302',
    code: 'RD-302 (Stro-Vector ALS)',
    therapeuticArea: 'Rare Diseases',
    target: 'AAV-rh10 Anti-SOD1 MicroRNA',
    indication: 'Familial Amyotrophic Lateral Sclerosis (ALS)',
    phase: 'Phase I/II',
    phaseProgress: 30,
    expectedTarget: 'Q3 2027 Safety Cohort Expansion',
    trialCode: 'NCT06224109 (ALS-GENE)',
    patientCount: '45 Patients',
    details: 'Intrathecal gene therapy lowering toxic mutant SOD1 protein levels in motor spinal neurons.',
  }
];

export default function PipelineTracker() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['All', 'Oncology', 'Neurology', 'Cardiology', 'Immunology', 'Metabolic', 'Rare Diseases'];

  const filteredPipeline = PIPELINE_DATA.filter(item => 
    selectedCategory === 'All' || item.therapeuticArea === selectedCategory
  );

  const phases = ['Discovery', 'Phase I', 'Phase II', 'Phase III', 'Regulatory Review'];

  return (
    <section id="pipeline" className="section relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue mb-3">Research & Development</div>
          <h2 className="section-title">
            Clinical <span className="gradient-text">R&D Pipeline</span>
          </h2>
          <p className="section-subtitle">
            Pioneering breakthrough therapeutic candidates across biopharma, gene silencing, and molecular oncology.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedCategory === cat ? 'tab-btn-active shadow-md' : 'tab-btn-inactive'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pipeline Phase Headers (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mb-4 px-6 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider text-center">
          {phases.map((phase, idx) => (
            <div key={idx} className="bg-slate-900/40 py-2.5 rounded-lg border border-white/5">
              {phase}
            </div>
          ))}
        </div>

        {/* Pipeline List */}
        <div className="space-y-4">
          {filteredPipeline.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="glass-panel p-5 transition-all">
                
                {/* Main Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Code & Title */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-blue text-[10px]">{item.therapeuticArea}</span>
                      <span className="text-xs text-cyan-400 font-mono font-semibold">{item.target}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.code}</h3>
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{item.indication}</p>
                  </div>

                  {/* Center: Phase Progress Bar */}
                  <div className="lg:w-1/3 space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Phase Status: <strong className="text-cyan-300">{item.phase}</strong></span>
                      <span className="text-slate-400">{item.expectedTarget}</span>
                    </div>
                    
                    {/* Visual Bar */}
                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 shadow-md"
                        style={{ width: `${item.phaseProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Right: Expand Toggle Button */}
                  <div className="flex items-center justify-between lg:justify-end gap-3 lg:w-1/4 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
                    <span className="text-xs font-mono text-slate-400">{item.patientCount}</span>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="btn btn-secondary btn-sm"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
                      <span className="text-xs">{isExpanded ? 'Less' : 'Details'}</span>
                    </button>
                  </div>

                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-fadeIn">
                    
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 md:col-span-2">
                      <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1.5">
                        <FlaskConical className="w-3.5 h-3.5" /> Mechanism & Trial Rationale
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">{item.details}</p>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 space-y-2 font-mono">
                      <div>
                        <span className="text-slate-400">Clinical Identifier:</span>
                        <div className="text-white font-semibold flex items-center gap-1">
                          {item.trialCode} <ExternalLink className="w-3 h-3 text-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400">Milestone Target:</span>
                        <div className="text-emerald-400 font-semibold">{item.expectedTarget}</div>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
