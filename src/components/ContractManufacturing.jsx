import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, Gift, ShieldCheck, Factory, Truck, Globe, Award, Sparkles } from 'lucide-react';

export default function ContractManufacturing({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    cityState: '',
    businessType: 'PCD Pharma Franchise',
    productCategory: 'Tablets & Capsules',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you ${formData.name}! Your ${formData.businessType} inquiry has been received. Our team will contact you within 24 hours.`, 'success');
      }
      setFormData({
        name: '',
        mobile: '',
        email: '',
        cityState: '',
        businessType: 'PCD Pharma Franchise',
        productCategory: 'Tablets & Capsules',
        message: ''
      });
    }, 1000);
  };

  const franchisePerks = [
    { title: 'Exclusive Monopoly Rights', desc: 'Single-distributor exclusivity for your selected city or district territory.' },
    { title: 'Free Promotional Material', desc: 'Visual aids, MR bag, laminated product glossy cards, sample catch covers, order books, and pens.' },
    { title: 'Wide Product Basket', desc: 'Access 500+ formulations across Antibiotics, Cardiac-Diabetic, Gynaecological, and Paediatric ranges.' },
    { title: 'Fast Order Dispatch', desc: 'Same-day order processing with reliable courier & transport tracking.' }
  ];

  const manufacturingHighlights = [
    { title: 'Custom ALU-ALU & Blister Packing', desc: 'Modern high-speed packaging options tailored to your brand artwork.' },
    { title: 'Flexible Low MOQs', desc: 'Economical minimum batch quantities for new pharma brands and startups.' },
    { title: 'CTD Dossier & Regulatory Dossiers', desc: 'COPP, FSC, and CTD documentation ready for international pharma export.' },
    { title: 'Guaranteed 100% On-Time Delivery', desc: 'Strict production scheduling with real-time manufacturing stage tracking.' }
  ];

  return (
    <section id="franchise" className="section bg-white relative border-t border-b border-slate-200/60">
      <div className="container relative z-10">

        {/* Header */}
        <div className="section-header">
          <span className="badge badge-mint mb-3">
            <Briefcase className="w-3.5 h-3.5" /> B2B Opportunities
          </span>
          <h2 className="section-title">
            PCD Pharma Franchise & <span className="gradient-text">Contract Manufacturing</span>
          </h2>
          <p className="section-subtitle">
            Expand your pharmaceutical business with Strovanks Pharma. Partner with us for exclusive district monopoly rights or reliable third-party drug formulation manufacturing.
          </p>
        </div>

        {/* Top 2 B2B Column Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* PCD Franchise Box */}
          <div className="glass-panel p-6 md:p-8 border-slate-200 dark:border-cyan-500/30 bg-slate-50 dark:bg-gradient-to-b dark:from-cyan-950/20 dark:to-slate-900/60 relative overflow-hidden shadow-sm rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center shrink-0 shadow-sm">
                  <Gift className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="badge badge-cyan text-[10px] inline-block">Monopoly Business</span>
                  <h3 className="text-xl md:text-2xl font-extrabold leading-tight" style={{ color: 'var(--text-main)' }}>
                    PCD Pharma Franchise Partner
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Launch your own pharmaceutical venture with zero manufacturing headache. We provide complete promotional support, monopoly marketing rights, and high-profit margin products.
              </p>

              <div className="space-y-3">
                {franchisePerks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-cyan-500/40 transition-all">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-sm" style={{ color: 'var(--text-main)' }}>{perk.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third Party Mfg Box */}
          <div className="glass-panel p-6 md:p-8 border-slate-200 dark:border-indigo-500/30 bg-slate-50 dark:bg-gradient-to-b dark:from-indigo-950/20 dark:to-slate-900/60 relative overflow-hidden shadow-sm rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex items-center justify-center shrink-0 shadow-sm">
                  <Factory className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="badge badge-mint text-[10px] inline-block">Contract Manufacturing</span>
                  <h3 className="text-xl md:text-2xl font-extrabold leading-tight" style={{ color: 'var(--text-main)' }}>
                    Third-Party Drug Manufacturing
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Outsource your drug formulation to our WHO-GMP certified facilities. We handle everything from API sourcing, formulation testing, customized packaging to final dispatch.
              </p>

              <div className="space-y-3">
                {manufacturingHighlights.map((mfg, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 transition-all">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-sm" style={{ color: 'var(--text-main)' }}>{mfg.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{mfg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Business Inquiry Form */}
        <div className="glass-panel p-8 max-w-4xl mx-auto border-slate-200 dark:border-cyan-500/40 shadow-sm rounded-3xl">
          <div className="text-center mb-8">
            <span className="badge badge-amber mb-2">Instant Response</span>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Submit Franchise or Manufacturing Inquiry</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Fill out the form below to receive product price lists, visual aid samples, and franchise availability details for your district.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>City & State / Territory *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Surat, Gujarat"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>Requirement Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="input-field bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10"
                >
                  <option value="PCD Pharma Franchise">PCD Pharma Franchise (Monopoly)</option>
                  <option value="Third Party Manufacturing">Third Party / Contract Manufacturing</option>
                  <option value="Global Export Inquiry">Global Export & Institutional Supplies</option>
                  <option value="Bulk API Sourcing">Bulk API & Formulation Sourcing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Product Division Interest</label>
                <select
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="input-field bg-slate-900 text-white"
                >
                  <option value="Tablets & Capsules">Tablets & Hard Gelatin Capsules</option>
                  <option value="Injectables & Critical Care">Liquid & Lyophilized Injectables</option>
                  <option value="Syrups & Suspensions">Paediatric Syrups & Dry Suspensions</option>
                  <option value="Softgel Capsules">Softgels & Oral Sachets</option>
                  <option value="Ointments & Dermatologicals">Topical Creams, Gels & Ointments</option>
                  <option value="Eye Ear Nasal Drops">Ophthalmic & ENT Drops</option>
                  <option value="Ayurvedic Range">Herbal & Ayurvedic Formulations</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Additional Requirement / City Exclusivity Request</label>
              <textarea
                rows={4}
                placeholder="Mention your preferred district name, estimated order quantity, or specific molecule requirement..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-8 py-3.5 text-base rounded-xl font-bold shadow-lg min-w-[240px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent"></span>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" /> Submit Business Inquiry
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
