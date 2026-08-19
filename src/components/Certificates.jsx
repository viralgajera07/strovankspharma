import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileCheck, Globe2, Building } from 'lucide-react';

export default function Certificates() {
  const certifications = [
    {
      badge: 'WHO-GMP Certified',
      title: 'World Health Organization GMP',
      authority: 'CDSCO / State Licensing Authority',
      desc: 'Compliant with WHO standards for sterile and non-sterile pharmaceutical formulation, cleanroom environmental monitoring, and equipment qualification.',
      icon: ShieldCheck,
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      badge: 'ISO 9001:2015',
      title: 'Quality Management Systems',
      authority: 'International Organization for Standardization',
      desc: 'Certified system for pharmaceutical research, procurement, formulation manufacturing, supply chain tracking, and customer feedback resolution.',
      icon: Award,
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      badge: 'FSSAI Approved',
      title: 'Food Safety & Standards License',
      authority: 'FSSAI Govt. of India',
      desc: 'Certified facility for manufacturing health supplements, protein powders, multivitamins, and nutritional sachets in compliance with food safety regulations.',
      icon: FileCheck,
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      badge: 'DCGI Approval',
      title: 'Drug Controller General of India',
      desc: 'All fixed-dose combinations (FDCs) and new drug molecules approved by DCGI with validated bio-equivalence (BE) studies.',
      icon: CheckCircle2,
      color: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
    },
    {
      badge: 'GLP Accredited',
      title: 'Good Laboratory Practices',
      desc: 'In-house quality control testing laboratories equipped with validated analytical method guidelines and electronic data audit trails.',
      icon: Building,
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      badge: 'Export COPP / CTD',
      title: 'Global Export Accreditations',
      desc: 'Certificate of Pharmaceutical Product (COPP), Free Sale Certificates (FSC), and eCTD module dossiers ready for international drug registration.',
      icon: Globe2,
      color: 'border-teal-500/30 text-teal-400 bg-teal-500/10'
    }
  ];

  return (
    <section id="certificates" className="section bg-white relative border-b border-slate-200/60">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue mb-3">
            <Award className="w-3.5 h-3.5" /> Accreditations & Badges
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Regulatory Approvals</span>
          </h2>
          <p className="section-subtitle">
            Strovanks Pharma operates under stringent international certifications and regulatory compliance standards ensuring safety, efficacy, and global acceptability.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="glass-panel p-6 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 shadow-sm rounded-3xl hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${c.color} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="badge badge-cyan text-[10px]">{c.badge}</span>
                  </div>
                  <h3 className="font-extrabold text-lg mb-1" style={{ color: 'var(--text-main)' }}>{c.title}</h3>
                  {c.authority && <div className="text-xs font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>{c.authority}</div>}
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Verified & Active Credentials</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
