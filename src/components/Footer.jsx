import React, { useState } from 'react';
import { Pill, ShieldCheck, Globe, Mail, Phone, ExternalLink, Award, MapPin } from 'lucide-react';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      onShowToast(`Subscribed ${newsletterEmail} to Strovanks Pharma product launch alerts.`, 'success');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-16">
      <div className="container space-y-12">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Col 1 & 2: Corporate Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 text-decoration-none">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm inline-block">
                <img
                  src="/logo.png"
                  alt="Strovanks Pharma"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </a>

            <p className="leading-relaxed pr-6 text-xs" style={{ color: 'var(--text-muted)' }}>
              Strovanks Pharma is a leading WHO-GMP & ISO 9001:2015 certified pharmaceutical company specializing in PCD Pharma Franchise, Third-Party Contract Manufacturing, and international drug exports.
            </p>

            <div className="space-y-2 pt-1 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Corporate Heights, Ring Road, Surat, Gujarat – 395002</div>
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Call/WhatsApp: +91 93162 95004</div>
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> strovankspharma@gmail.com</div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>Follow Us:</span>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#0066FF] hover:text-white transition-all shadow-sm" title="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#0066FF] hover:text-white transition-all shadow-sm" title="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#0066FF] hover:text-white transition-all shadow-sm" title="Twitter/X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#0066FF] hover:text-white transition-all shadow-sm" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 3: Product Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-main)' }}>Product Portfolio</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Pharmaceutical Tablets</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Sterile Injections (IV/IM)</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Paediatric Syrups & Drops</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Capsules & Softgels</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Ointments & Topical Gels</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Eye, Ear & Nasal Drops</a></li>
              <li><a href="#products" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Nutraceutical Supplements</a></li>
            </ul>
          </div>

          {/* Col 4: Business Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-main)' }}>B2B Opportunities</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#franchise" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>PCD Pharma Franchise</a></li>
              <li><a href="#franchise" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Third-Party Manufacturing</a></li>
              <li><a href="#franchise" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Monopoly Rights Territory</a></li>
              <li><a href="#franchise" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Promotional Support Kits</a></li>
              <li><a href="#certificates" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Export COPP & CTD Dossiers</a></li>
              <li><a href="#quality" className="hover:text-[#0066FF] dark:hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>Quality Assurance Policy</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-main)' }}>Catalog & Price List</h4>
            <p className="leading-relaxed text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Subscribe for new product launch notifications and updated franchise price lists.</p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                placeholder="distributor@company.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="input-field text-xs py-2.5"
              />
              <button type="submit" className="btn btn-primary btn-sm w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm">
                Get Product Catalog Updates
              </button>
            </form>
          </div>

        </div>

        {/* Regulatory Badges Strip */}
        <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/90 border border-slate-200/80 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 shadow-sm">
          
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                WHO-GMP & ISO 9001:2015
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Approved Facilities</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                FSSAI & DCGI
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Formulation Approvals</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-amber-500/40 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Global Exports
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Across Asia, Africa & LatAm</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-white/10 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Strovanks Pharma LLP. All rights reserved. Registered Pharmaceutical Manufacturer & Exporter.
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-[#0066FF] dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#quality" className="hover:text-[#0066FF] dark:hover:text-white transition-colors">Quality Policy</a>
            <a href="#certificates" className="hover:text-[#0066FF] dark:hover:text-white transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-[#0066FF] dark:hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
