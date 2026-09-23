import React, { useState } from 'react';
import {
  Mail, Phone, Search, Menu, X,
  Building2, Pill, ShieldCheck, Briefcase, Award, PhoneCall
} from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Navbar({ theme, toggleTheme, activeTab, setActiveTab, onOpenSearch, onOpenSampleRequest }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      id: 'about',
      label: 'COMPANY PROFILE',
      hasPlus: true,
      subItems: [
        { label: 'Corporate Overview', targetId: 'about' },
        { label: 'Vision & Mission', targetId: 'about' },
        { label: 'Manufacturing Hubs', targetId: 'about' },
      ]
    },
    {
      id: 'products',
      label: 'PRODUCT RANGE',
      hasPlus: true,
      subItems: [
        { label: 'Pharmaceutical Tablets', targetId: 'products' },
        { label: 'Parenteral Injections', targetId: 'products' },
        { label: 'Oral Syrups & Liquids', targetId: 'products' },
        { label: 'Capsules & Softgels', targetId: 'products' },
      ]
    },
    {
      id: 'quality',
      label: 'INFRASTRUCTURE',
      hasPlus: true,
      subItems: [
        { label: 'Class 10,000 Cleanrooms', targetId: 'quality' },
        { label: 'HPLC Analytical Labs', targetId: 'quality' },
        { label: 'QA / QC SOP Compliance', targetId: 'quality' },
      ]
    },
    {
      id: 'franchise',
      label: 'SERVICES',
      hasPlus: true,
      subItems: [
        { label: 'PCD Pharma Franchise', targetId: 'franchise' },
        { label: 'Third-Party Manufacturing', targetId: 'franchise' },
        { label: 'CTD Regulatory Dossiers', targetId: 'franchise' },
      ]
    },
    { id: 'certificates', label: 'CERTIFICATES', hasPlus: false },
    { id: 'contact', label: 'CONTACT', hasPlus: false },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg font-brand">
      {/* 1. TOP UTILITY BAR (Deep Strovanks Navy Banner) */}
      <div className="top-bar-navy bg-[#08152e] border-b border-white/10 text-white py-2 text-xs transition-colors duration-300">
        <div className="container flex flex-wrap justify-between items-center gap-2">
          {/* Left Contact Info & Announcement Text */}
          <div className="flex items-center gap-5 text-white text-xs tracking-wide">
            <a href="mailto:strovankspharma@gmail.com" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors no-underline">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="no-underline text-white font-medium">strovankspharma@gmail.com</span>
            </a>
            <a href="tel:+919316295004" className="flex items-center gap-2 text-white hover:text-emerald-300 transition-colors font-mono no-underline">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="no-underline text-white font-medium">+91 93162 95004</span>
            </a>
          </div>

          {/* Right Utilities & Social Links */}
          <div className="flex items-center gap-4">
            {/* Social Icons (White) */}
            <div className="hidden sm:flex items-center gap-3 text-white">
              <a href="#" className="text-white hover:opacity-75 transition-opacity no-underline social-icon-white" title="Facebook"><FacebookIcon /></a>
              <a href="#" className="text-white hover:opacity-75 transition-opacity no-underline social-icon-white" title="Instagram"><InstagramIcon /></a>
              <a href="#" className="text-white hover:opacity-75 transition-opacity no-underline social-icon-white" title="Twitter/X"><TwitterIcon /></a>
              <a href="#" className="text-white hover:opacity-75 transition-opacity no-underline social-icon-white" title="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div
        className="w-full transition-colors duration-300 border-b border-white/10 backdrop-blur-md"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(6, 30, 56, 0.96)' : 'rgba(255, 255, 255, 0.96)' }}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group text-decoration-none py-1"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/logo.png"
              alt="Strovanks Pharma"
              className="transition-transform group-hover:scale-[1.02]"
              style={{
                height: '56px',
                maxHeight: '58px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </a>

          {/* Main Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  className="relative group py-6"
                  onMouseEnter={() => item.hasPlus && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item-btn flex items-center gap-1 ${isActive
                        ? 'text-brand-blue font-extrabold'
                        : theme === 'dark' ? 'text-slate-200' : 'text-slate-900'
                      }`}
                  >
                    <span>{item.label}</span>
                  </button>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <div className="absolute bottom-4 left-2 right-2 h-0.5 bg-gradient-to-r from-[#0066FF] via-[#00A887] to-[#00E5A3] rounded-full" />
                  )}

                  {/* Dropdown Menu */}
                  {item.hasPlus && item.subItems && (
                    <div
                      className="absolute top-full left-0 w-60 p-2 rounded-2xl shadow-2xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 border"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(6, 30, 56, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 102, 255, 0.14)'
                      }}
                    >
                      {item.subItems.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleNavClick(sub.targetId)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between"
                          style={{
                            color: theme === 'dark' ? '#E2E8F0' : '#061E38'
                          }}
                        >
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSampleRequest}
              className="btn btn-primary btn-sm uppercase tracking-wider text-xs font-bold shadow-lg"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Inquire Now
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl border transition-colors flex items-center justify-center"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 102, 255, 0.06)',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 102, 255, 0.15)',
                color: theme === 'dark' ? '#F8FAFC' : '#061E38'
              }}
              title="Search"
            >
              <Search className="w-5 h-5 text-brand-blue" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border transition-colors flex items-center justify-center"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 102, 255, 0.06)',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 102, 255, 0.15)',
                color: theme === 'dark' ? '#F8FAFC' : '#061E38'
              }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b p-5 flex flex-col gap-2 shadow-2xl transition-colors duration-300"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(6, 30, 56, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 102, 255, 0.12)'
          }}
        >
          <div className="pb-3 mb-1 border-b border-slate-200/40">
            <img
              src="/logo.png"
              alt="Strovanks Pharma"
              style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div key={item.id} className="flex flex-col">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-btn ${isActive ? 'bg-[#0066FF]/10 text-brand-blue font-extrabold border-l-4 border-[#0066FF]' : ''
                    }`}
                >
                  <span>{item.label}</span>
                </button>
              </div>
            );
          })}
          <div className="pt-3 mt-2 border-t border-slate-200/20 flex flex-col gap-2">
            <button
              onClick={() => { onOpenSampleRequest(); setMobileMenuOpen(false); }}
              className="btn btn-primary w-full justify-center text-xs uppercase font-bold tracking-wider py-3"
            >
              <PhoneCall className="w-4 h-4" /> Direct Business Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

