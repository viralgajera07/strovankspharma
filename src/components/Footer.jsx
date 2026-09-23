import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  MapPin,
  Award,
  ChevronRight,
  Send,
  MessageCircle,
  ArrowUp,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      if (onShowToast) {
        onShowToast(`Subscribed ${newsletterEmail} to Strovanks Pharma product launch alerts.`, 'success');
      }
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { label: 'Pharmaceutical Tablets', href: '#products' },
    { label: 'Sterile Injections (IV/IM)', href: '#products' },
    { label: 'Paediatric Syrups & Drops', href: '#products' },
    { label: 'Capsules & Softgels', href: '#products' },
    { label: 'Ointments & Topical Gels', href: '#products' },
    { label: 'Eye, Ear & Nasal Drops', href: '#products' },
  ];

  const b2bLinks = [
    { label: 'PCD Pharma Franchise', href: '#franchise' },
    { label: 'Third-Party Manufacturing', href: '#franchise' },
    { label: 'Monopoly Rights Territory', href: '#franchise' },
    { label: 'Promotional Support Kits', href: '#franchise' },
    { label: 'Export COPP & CTD Dossiers', href: '#certificates' },
    { label: 'Quality Assurance Policy', href: '#quality' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Col 1: Corporate Brand & Contact Info (Span 4 on LG) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block transition-transform hover:scale-[1.02]">
              <img
                src="/logo.png"
                alt="Strovanks Pharma"
                className="w-auto object-contain"
                style={{
                  height: '56px',
                  maxHeight: '60px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </a>

            <p className="leading-relaxed text-slate-600 text-xs max-w-sm">
              Strovanks Pharma is a leading WHO-GMP & ISO 9001:2015 certified pharmaceutical company specializing in PCD Pharma Franchise, Third-Party Contract Manufacturing, and international drug exports.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-700">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-tight">Corporate Heights, Ring Road, Surat, Gujarat – 395002</span>
              </div>

              <a
                href="tel:+919316295004"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">+91 93162 95004</span>
              </a>

              <a
                href="mailto:strovankspharma@gmail.com"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>strovankspharma@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-xs font-bold text-slate-700">Follow Us:</span>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all shadow-sm"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all shadow-sm"
                title="Twitter/X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all shadow-sm"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Product Divisions (Span 2 or 3 on LG) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Product Portfolio
            </h4>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Opportunities (Span 3 on LG) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              B2B Opportunities
            </h4>
            <ul className="space-y-2">
              {b2bLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Quick Inquiry (Span 3 on LG) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Catalog & Price List
            </h4>
            <p className="leading-relaxed text-slate-600 text-xs">
              Subscribe for new product launch notifications and updated franchise price lists.
            </p>

            {/* <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="distributor@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow"
              >
                <span>Get Product Catalog Updates</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form> */}

            {/* Quick WhatsApp Connect */}
            {/* <div className="pt-2">
              <a
                href="https://wa.me/919316295004?text=Hello%20Strovanks%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20PCD%20Franchise%20and%20Product%20Catalog."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Inquiry via WhatsApp</span>
              </a>
            </div> */}
          </div>

        </div>

        {/* Regulatory Badges Strip */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">WHO-GMP & ISO 9001:2015</div>
              <div className="text-[11px] text-slate-500 font-medium">Approved Facilities</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">DCGI & FSSAI</div>
              <div className="text-[11px] text-slate-500 font-medium">4,400+ Quality Molecules</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Global Exports</div>
              <div className="text-[11px] text-slate-500 font-medium">Asia, Africa & LatAm</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">100% Monopoly Rights</div>
              <div className="text-[11px] text-slate-500 font-medium">District Territory Exclusivity</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Strovanks Pharma LLP. All rights reserved. Registered Pharmaceutical Manufacturer & Exporter.
          </div>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#about" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#quality" className="hover:text-blue-600 transition-colors">Quality Policy</a>
            <a href="#certificates" className="hover:text-blue-600 transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Support</a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors pl-2 sm:border-l sm:border-slate-300"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
