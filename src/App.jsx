import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import ProductCatalog from './components/ProductCatalog';
import QualityPolicy from './components/QualityPolicy';
import ContractManufacturing from './components/ContractManufacturing';
import Certificates from './components/Certificates';
import ContactSection from './components/ContactSection';
import DoctorPortal from './components/DoctorPortal';
import MoleculeModal from './components/MoleculeModal';
import Footer from './components/Footer';
import Toast from './components/Toast';
import WhatsAppButton from './components/WhatsAppButton';
import { Search, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  // Modals
  const [sampleModalDrug, setSampleModalDrug] = useState(null);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [showMoleculeModal, setShowMoleculeModal] = useState(false);
  const [showGlobalSearchModal, setShowGlobalSearchModal] = useState(false);

  // Sync theme with HTML data attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenSampleRequest = (drugName = '') => {
    setSampleModalDrug(drugName);
    setShowSampleModal(true);
  };

  const handleHeroSearch = (query) => {
    setSearchQuery(query);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (query) {
      showToast(`Filtering formulations for "${query}"`, 'info');
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">

      {/* Navbar Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setShowGlobalSearchModal(true)}
        onOpenSampleRequest={() => handleOpenSampleRequest('')}
      />

      {/* Main Content */}
      <main className="flex-grow">

        {/* 1. Hero Section */}
        <Hero
          onSearchSubmit={handleHeroSearch}
          onOpenMoleculeModal={() => setShowMoleculeModal(true)}
        />

        {/* 2. Corporate Overview & Facilities */}
        <AboutCompany />

        {/* 3. Product Catalog Section */}
        <ProductCatalog
          searchQuery={searchQuery}
        />

        {/* 4. Quality Policy & Testing Standards */}
        <QualityPolicy />

        {/* 5. PCD Pharma Franchise & Contract Manufacturing */}
        <ContractManufacturing onShowToast={showToast} />

        {/* 6. Regulatory Accreditations & Badges */}
        <Certificates />

        {/* 7. Contact & Business Inquiry Section */}
        <ContactSection onShowToast={showToast} />

      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 3D Molecule Simulation Modal */}
      {showMoleculeModal && (
        <MoleculeModal onClose={() => setShowMoleculeModal(false)} />
      )}

      {/* Physician Sample & Monograph Order Modal */}
      {showSampleModal && (
        <div className="modal-overlay" onClick={() => setShowSampleModal(false)}>
          <div className="modal-content glass-panel p-6 max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">Product Inquiry & Visual Aid Request</h3>
              <button onClick={() => setShowSampleModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <DoctorPortal
              prefilledDrug={sampleModalDrug}
              onShowToast={showToast}
              onCloseModal={() => setShowSampleModal(false)}
            />
          </div>
        </div>
      )}

      {/* Global Quick Search Modal */}
      {showGlobalSearchModal && (
        <div className="modal-overlay" onClick={() => setShowGlobalSearchModal(false)}>
          <div className="modal-content glass-panel p-6 max-w-lg border-cyan-500/40" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-cyan-400" /> Search Formulations Portfolio
              </h3>
              <button onClick={() => setShowGlobalSearchModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                autoFocus
                placeholder="Search drug, composition (e.g. Cefixime, Pantoprazole, Amoxicillin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field text-base"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setSearchQuery('');
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    setShowGlobalSearchModal(false);
                    handleHeroSearch(searchQuery);
                  }}
                  className="btn btn-primary btn-sm"
                >
                  View Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
