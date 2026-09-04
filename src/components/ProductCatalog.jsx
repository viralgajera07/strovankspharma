import React, { useState, useEffect } from 'react';
import {
  Pill,
  Search,
  ShieldCheck,
  Syringe,
  FlaskConical,
  Droplets,
  Eye,
  Wind,
  Leaf,
  ShoppingBag,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export { PRODUCTS_DATA };

const CATEGORY_META = [
  { key: 'All',            label: 'All',              Icon: ShoppingBag,   color: '#0284c7', bg: '#f0f9ff', border: '#bae6fd', lightIconBg: '#e0f2fe' },
  { key: 'Tablets',        label: 'Tablets',          Icon: Pill,          color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe', lightIconBg: '#e0e7ff' },
  { key: 'Capsules',       label: 'Capsules',         Icon: Pill,          color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', lightIconBg: '#ede9fe' },
  { key: 'Injections',     label: 'Injections',       Icon: Syringe,       color: '#e11d48', bg: '#fff1f2', border: '#fecdd3', lightIconBg: '#ffe4e6' },
  { key: 'Syrups',         label: 'Syrups',           Icon: FlaskConical,  color: '#059669', bg: '#ecfdf5', border: '#a7f3d0', lightIconBg: '#d1fae5' },
  { key: 'Cream & Lotion', label: 'Cream &\nLotion',  Icon: Droplets,      color: '#d97706', bg: '#fffbeb', border: '#fde68a', lightIconBg: '#fef3c7' },
  { key: 'ENT Products',   label: 'ENT\nProducts',    Icon: Eye,           color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc', lightIconBg: '#cffafe' },
  { key: 'Nutraceuticals', label: 'Nutra-\nceuticals', Icon: Leaf,         color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', lightIconBg: '#dcfce7' },
  { key: 'Inhalers',       label: 'Inhalers',         Icon: Wind,          color: '#ea580c', bg: '#fff7ed', border: '#fed7aa', lightIconBg: '#ffedd5' },
];

export default function ProductCatalog({ searchQuery, onRequestSample }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [localSearch, setLocalSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 60;

  const queryToUse = searchQuery || localSearch;

  // Reset pagination when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, queryToUse]);

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = !queryToUse ||
      p.name.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.formulation.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.indication.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.type.toLowerCase().includes(queryToUse.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeMeta = CATEGORY_META.find(m => m.key === activeCategory) || CATEGORY_META[0];

  // Helper for pagination numbers with smart ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <section id="products" className="section bg-white border-b border-slate-200/60 py-16 md:py-20">
      <div className="container">

        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="badge badge-cyan mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 border border-cyan-500/30">
            <ShoppingBag className="w-3.5 h-3.5" /> Product Portfolio
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">
            WHO-GMP Certified <span className="gradient-text">Formulations Range</span>
          </h2>
          <p className="section-subtitle text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            Explore Strovanks Pharma's extensive catalog of DCGI-approved tablets, injections, syrups, capsules,
            softgels, topicals, and nutraceuticals available for PCD Franchise and Contract Manufacturing.
          </p>
        </div>

        {/* Category Icon Tiles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))',
          gap: '12px',
          marginBottom: '28px',
        }}>
          {CATEGORY_META.map(({ key, label, Icon, color, bg, border, lightIconBg }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 8px',
                  borderRadius: '14px',
                  border: `1.5px solid ${isActive ? color : '#e2e8f0'}`,
                  background: isActive ? bg : '#ffffff',
                  cursor: 'pointer',
                  boxShadow: isActive 
                    ? `0 4px 14px -1px ${color}33, 0 0 0 2px ${color}20` 
                    : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 6px 16px -2px rgba(0,0,0,0.08), 0 0 0 1px ${color}30`;
                    const iconEl = e.currentTarget.querySelector('.cat-icon-wrap');
                    if (iconEl) iconEl.style.background = lightIconBg;
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)';
                    const iconEl = e.currentTarget.querySelector('.cat-icon-wrap');
                    if (iconEl) iconEl.style.background = '#f8fafc';
                  }
                }}
              >
                <div 
                  className="cat-icon-wrap"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: isActive ? lightIconBg : '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${isActive ? border : '#f1f5f9'}`,
                    transition: 'background 0.2s',
                  }}
                >
                  <Icon size={20} color={isActive ? color : '#64748b'} strokeWidth={2} />
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textAlign: 'center',
                  lineHeight: 1.25,
                  color: isActive ? color : '#475569',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'pre-line',
                }}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '11px 16px',
          borderRadius: '10px',
          border: '1.5px solid #cbd5e1',
          background: '#ffffff',
          marginBottom: '18px',
          maxWidth: '440px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'all 0.2s',
        }}>
          <Search size={16} color="#0284c7" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search Product Here..."
            value={localSearch}
            onChange={e => setLocalSearch(e.target.value)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '13.5px',
              fontWeight: 500,
              color: '#0f172a',
            }}
          />
        </div>

        {/* Result count */}
        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          color: activeMeta.color,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span>{activeCategory === 'All' ? 'All Categories' : activeCategory}</span>
          <span style={{ color: '#94a3b8' }}>&bull;</span>
          <span style={{ color: '#64748b', fontWeight: 600 }}>
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </span>
          {totalPages > 1 && (
            <span style={{ color: '#94a3b8', fontWeight: 500, marginLeft: 'auto', textTransform: 'none', fontSize: '11.5px' }}>
              Showing {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length}
            </span>
          )}
        </div>

        {/* Product Name Grid */}
        {paginatedProducts.length > 0 ? (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              border: '1.5px solid #e2e8f0',
              borderRadius: '14px',
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 4px 20px -4px rgba(6, 30, 56, 0.05), 0 1px 3px rgba(0,0,0,0.03)',
            }}>
              {paginatedProducts.map((p, idx) => {
                const cols = 3;
                const total = paginatedProducts.length;
                const remainder = total % cols;
                const lastRowStart = remainder === 0 ? total - cols : total - remainder;
                const isLastRow = idx >= lastRowStart;
                const isRightEdge = (idx + 1) % cols === 0;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProduct(p)}
                    title={p.formulation}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '74px',
                      padding: '16px 14px',
                      textAlign: 'center',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      lineHeight: 1.45,
                      color: '#1e293b',
                      background: '#ffffff',
                      border: 'none',
                      borderRight: isRightEdge ? 'none' : '1px solid #e2e8f0',
                      borderBottom: isLastRow ? 'none' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'background 0.15s, color 0.15s',
                      wordBreak: 'break-word',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#f0f9ff';
                      e.currentTarget.style.color = '#0066ff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#1e293b';
                    }}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage(prev => Math.max(prev - 1, 1));
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>

                {getPageNumbers().map((pageNum, i) => {
                  if (pageNum === '...') {
                    return (
                      <span key={`dots-${i}`} className="px-2 py-1 text-slate-400 font-bold text-xs select-none">
                        &hellip;
                      </span>
                    );
                  }
                  const isCurrent = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => {
                        setCurrentPage(pageNum);
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`min-w-[36px] h-9 px-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isCurrent
                          ? 'bg-[#0066ff] text-white shadow-blue-500/20'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto my-8 shadow-sm">
            <AlertCircle className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800 mb-1">No Formulations Found</h4>
            <p className="text-xs text-slate-500 mb-4">Try searching with a different drug name or category.</p>
            <button
              onClick={() => { setActiveCategory('All'); setLocalSearch(''); }}
              className="btn btn-outline btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 md:p-8" onClick={e => e.stopPropagation()}>

            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className={`badge ${selectedProduct.statusBadge} mb-2`}>{selectedProduct.status}</span>
                <h3 className="text-2xl font-extrabold text-slate-900">{selectedProduct.name}</h3>
                <div className="text-xs font-mono font-semibold text-cyan-700">
                  {selectedProduct.type} &bull; {selectedProduct.category}
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                &#x2715;
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 py-4 text-sm">
              <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                <h4 className="text-xs uppercase tracking-wider text-sky-800 font-bold mb-1">
                  Composition &amp; Active Ingredients
                </h4>
                <p className="text-slate-800 font-mono text-xs font-medium">{selectedProduct.formulation}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-700 font-bold mb-1">
                  Therapeutic Indications
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">{selectedProduct.indication}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <div className="text-slate-500">Packaging Type:</div>
                  <div className="font-semibold text-slate-800 mt-0.5">{selectedProduct.packaging}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <div className="text-slate-500">Recommended Dosage:</div>
                  <div className="font-semibold text-slate-800 mt-0.5">{selectedProduct.dosage}</div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-800">Storage &amp; Quality Specification:</span>
                  <div className="text-emerald-950 mt-0.5">{selectedProduct.storage}</div>
                </div>
              </div>

              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Formulation Overview:</span> {selectedProduct.description}
              </div>

              {selectedProduct.sourceUrl && (
                <div className="pt-1">
                  <a
                    href={selectedProduct.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066ff] hover:text-[#0052cc] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View Official Product Specification
                  </a>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button onClick={() => setSelectedProduct(null)} className="btn btn-secondary btn-sm">
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedProduct.name;
                  setSelectedProduct(null);
                  onRequestSample(name);
                }}
                className="btn btn-primary btn-sm"
              >
                Inquire Rates &amp; Monopoly Sample
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
