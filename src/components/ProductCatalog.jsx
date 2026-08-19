import React, { useState } from 'react';
import { Pill, Search, ShieldCheck, Download, ChevronRight, Info, Sparkles, AlertCircle, FileText, CheckCircle2, ShoppingBag } from 'lucide-react';

export const PRODUCTS_DATA = [
  // 1. Pharmaceutical Tablets
  {
    id: 'tbl-101',
    name: 'Strovaclav-625 Tablets',
    category: 'Tablets',
    type: 'Antibiotic / Anti-Infective',
    formulation: 'Amoxicillin Trihydrate 500 mg + Potassium Clavulanate 125 mg',
    packaging: '10 x 1 x 10 ALU-ALU Pack',
    indication: 'Respiratory tract infections, UTI, skin and soft tissue bacterial infections.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 tablet twice daily after meals',
    storage: 'Store below 25°C in a dry place. Protect from moisture.',
    description: 'Broad-spectrum beta-lactamase inhibitor combination tablet engineered for maximum bioavailability.',
  },
  {
    id: 'tbl-102',
    name: 'Strovafenac-P Tablets',
    category: 'Tablets',
    type: 'Analgesic / Anti-inflammatory',
    formulation: 'Aceclofenac 100 mg + Paracetamol 325 mg',
    packaging: '10 x 10 Blister Pack',
    indication: 'Acute pain, rheumatoid arthritis, osteoarthritis, dental pain, and fever.',
    status: 'Commercial Distribution',
    statusBadge: 'badge-emerald',
    dosage: '1 tablet twice daily',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    description: 'Rapid onset anti-inflammatory combination offering dual targeted pain relief.',
  },
  {
    id: 'tbl-103',
    name: 'Strovafix-200 Tablets',
    category: 'Tablets',
    type: '3rd Gen Cephalosporin',
    formulation: 'Cefixime Trihydrate IP 200 mg',
    packaging: '10 x 10 ALU-ALU Pack',
    indication: 'Typhoid fever, acute bronchitis, otitis media, and uncomplicated gonorrhea.',
    status: 'DCGI Approved',
    statusBadge: 'badge-blue',
    dosage: '200 mg every 12 hours',
    storage: 'Controlled room temperature (15°C to 30°C).',
    description: 'Potent oral cephalosporin targeting Gram-negative and Gram-positive bacterial strains.',
  },
  {
    id: 'tbl-104',
    name: 'Strovaglim-M2 Tablets',
    category: 'Tablets',
    type: 'Anti-Diabetic Care',
    formulation: 'Glimepiride 2 mg + Metformin Hydrochloride 500 mg SR',
    packaging: '10 x 15 Blister Pack',
    indication: 'Type 2 Diabetes Mellitus glycemic control in adults.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 tablet once daily with main meal',
    storage: 'Store below 30°C.',
    description: 'Sustained-release dual oral hypoglycemic agent for stable 24-hour glucose regulation.',
  },

  // 2. Pharmaceutical Injections
  {
    id: 'inj-201',
    name: 'Strovazone 1g Injection',
    category: 'Injections',
    type: 'Sterile Parenteral Antibiotic',
    formulation: 'Ceftriaxone Sodium IP 1000 mg IV/IM Vial with WFI',
    packaging: 'Single Vial with 10 mL Sterile Water for Injection',
    indication: 'Severe sepsis, meningitis, intra-abdominal infections, post-operative prophylaxis.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 g to 2 g IV once daily',
    storage: 'Store protected from light at temperature not exceeding 25°C.',
    description: 'Lyophilized sterile powder formulation ensuring high stability and rapid systemic bactericidal action.',
  },
  {
    id: 'inj-202',
    name: 'Strovaphen-40 IV Injection',
    category: 'Injections',
    type: 'Proton Pump Inhibitor',
    formulation: 'Pantoprazole Sodium for Injection 40 mg',
    packaging: 'Vial with 10 mL Sodium Chloride Solvent',
    indication: 'GERD, Zollinger-Ellison syndrome, acute peptic ulcer bleeding.',
    status: 'Commercial Distribution',
    statusBadge: 'badge-emerald',
    dosage: '40 mg IV slow infusion over 15 minutes',
    storage: 'Store reconstituted solution refrigerated between 2°C and 8°C.',
    description: 'Targeted gastric acid inhibitor for hospital and critical care administration.',
  },
  {
    id: 'inj-203',
    name: 'Strovapenem 1g Injection',
    category: 'Injections',
    type: 'Critical Care Carbapenem',
    formulation: 'Meropenem Trihydrate 1000 mg Sterile Powder',
    packaging: 'Single Glass Vial with Tray Pack',
    indication: 'Complicated intra-abdominal, nosocomial pneumonia, and febrile neutropenia.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 g IV every 8 hours',
    storage: 'Store below 25°C. Do not freeze reconstituted solution.',
    description: 'Ultra broad-spectrum carbapenem for multi-drug resistant hospital pathogens.',
  },

  // 3. Syrups & Oral Liquids
  {
    id: 'syr-301',
    name: 'Strovacoff Cough Syrup',
    category: 'Syrups',
    type: 'Bronchodilator & Expectorant',
    formulation: 'Terbutaline 1.25 mg + Ambroxol 15 mg + Guaiphenesin 50 mg / 5 mL',
    packaging: '100 mL PET Bottle with Measuring Cap',
    indication: 'Productive wet cough, acute bronchitis, asthma airway congestion.',
    status: 'FSSAI & DCGI Approved',
    statusBadge: 'badge-mint',
    dosage: '10 mL thrice daily',
    storage: 'Keep container tightly closed. Protect from light.',
    description: 'Triple-action mucolytic syrup that thins bronchial mucus and expands airways.',
  },
  {
    id: 'syr-302',
    name: 'Strovacid Suspension',
    category: 'Syrups',
    type: 'Antacid & Anti-Ulcer Gel',
    formulation: 'Sucralfate 1000 mg + Oxetacaine 20 mg / 10 mL Sugar Free',
    packaging: '200 mL Mint Flavored Bottle',
    indication: 'Gastric ulcers, severe heartburn, reflux esophagitis.',
    status: 'Commercial Distribution',
    statusBadge: 'badge-emerald',
    dosage: '10 mL 4 times daily 1 hour before meals',
    storage: 'Shake well before use. Store below 25°C.',
    description: 'Mucosal coating suspension with topical anesthetic action for instant heartburn relief.',
  },

  // 4. Capsules & Softgels
  {
    id: 'cap-401',
    name: 'Stroval-DSR Capsules',
    category: 'Capsules',
    type: 'Gastro-Prokinetic & PPI',
    formulation: 'Rabeprazole Sodium 20 mg + Domperidone 30 mg SR',
    packaging: '10 x 10 ALU-ALU Strip',
    indication: 'Gastroesophageal Reflux Disease (GERD), erosive esophagitis, nausea associated gastroparesis.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 capsule daily in the morning on empty stomach',
    storage: 'Protect from heat and moisture.',
    description: 'Dual-release capsule formulation suppressing gastric acid and enhancing upper GI motility.',
  },
  {
    id: 'cap-402',
    name: 'Strovavit-Gold Softgel',
    category: 'Capsules',
    type: 'Nutraceutical / Multivitamin',
    formulation: 'Omega-3 Fatty Acids + Ginseng + Green Tea Extract + Multivitamins & Minerals',
    packaging: '10 x 1 x 10 Blister Pack',
    indication: 'General debility, chronic fatigue, oxidative stress, immune system support.',
    status: 'FSSAI Approved',
    statusBadge: 'badge-amber',
    dosage: '1 softgel daily after food',
    storage: 'Store in a cool dry place below 25°C.',
    description: 'Premium softgel antioxidant matrix promoting vitality, cardiovascular wellness, and stamina.',
  },

  // 5. Ointments & Topicals
  {
    id: 'oint-501',
    name: 'Strovaderm Luliconazole Cream',
    category: 'Ointments',
    type: 'Topical Antifungal',
    formulation: 'Luliconazole 1.0% w/w Cream Base',
    packaging: '30 g Laminated Aluminum Tube',
    indication: 'Tinea pedis, Tinea cruris, Tinea corporis, ringworm fungal skin infections.',
    status: 'Commercial Distribution',
    statusBadge: 'badge-emerald',
    dosage: 'Apply thin layer once daily to affected area for 2 weeks',
    storage: 'Do not freeze. Keep tube tightly closed after use.',
    description: 'Imidazole antifungal providing high tissue retention and fungicidal activity.',
  },
  {
    id: 'oint-502',
    name: 'Strovagel Pain Relief Gel',
    category: 'Ointments',
    type: 'Topical Analgesic Rub',
    formulation: 'Diclofenac Diethylamine 1.16% + Linseed Oil + Methyl Salicylate + Menthol',
    packaging: '30 g Tube with Flip-Top Cap',
    indication: 'Joint pain, sprains, backache, neck pain, sports injuries.',
    status: 'Commercial Distribution',
    statusBadge: 'badge-emerald',
    dosage: 'Gently massage onto affected joint 3-4 times daily',
    storage: 'Store below 30°C.',
    description: 'Fast penetrating gel formula reducing deep-tissue joint inflammation.',
  },

  // 6. Eye / Ear / Nasal Drops
  {
    id: 'drop-601',
    name: 'Strovaflox Ophthalmic Drops',
    category: 'Drops',
    type: 'Ophthalmic Antibiotic',
    formulation: 'Moxifloxacin Hydrochloride 0.5% w/v Eye Drops',
    packaging: '5 mL Sterile Dropper Bottle',
    indication: 'Bacterial conjunctivitis, corneal ulcers, post-cataract surgery infection prevention.',
    status: 'WHO-GMP Certified',
    statusBadge: 'badge-cyan',
    dosage: '1 drop in affected eye(s) 3 times daily',
    storage: 'Discard 1 month after opening container.',
    description: 'Preservative-free 4th generation fluoroquinolone drop with high ocular penetration.',
  },

  // 7. Nutraceuticals & Sachets
  {
    id: 'nut-701',
    name: 'Strovapro Protein Powder',
    category: 'Nutraceuticals',
    type: 'Dietary Supplement',
    formulation: 'High Protein Whey Concentrate + DHA + B-Complex + Calcium & Zinc',
    packaging: '200 g Chocolate / Vanilla Flavored Jar',
    indication: 'Nutritional deficiency, pregnancy & lactation, post-surgery recovery, athletic conditioning.',
    status: 'FSSAI Approved',
    statusBadge: 'badge-amber',
    dosage: '2 scoops (30 g) mixed in warm milk or water twice daily',
    storage: 'Store in airtight container in a dry place.',
    description: 'Fortified protein supplement with bioavailable micronutrients for muscle synthesis.',
  },
  {
    id: 'nut-702',
    name: 'Strovacal-D3 Sachet',
    category: 'Nutraceuticals',
    type: 'Vitamin Supplement',
    formulation: 'Cholecalciferol (Vitamin D3) 60,000 IU Granules',
    packaging: '1 g Sachet (Box of 20 Sachets)',
    indication: 'Vitamin D deficiency, osteoporosis, bone mineralization support.',
    status: 'FSSAI Approved',
    statusBadge: 'badge-amber',
    dosage: '1 sachet weekly with milk for 8 consecutive weeks',
    storage: 'Store in a dry place protected from light.',
    description: 'High-potency vitamin D3 sachet for rapid restoration of systemic serum 25-OH-D levels.',
  }
];

export default function ProductCatalog({ searchQuery, onRequestSample }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [localSearch, setLocalSearch] = useState('');

  const categories = ['All', 'Tablets', 'Injections', 'Syrups', 'Capsules', 'Ointments', 'Drops', 'Nutraceuticals'];

  const queryToUse = searchQuery || localSearch;

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = !queryToUse || 
      p.name.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.formulation.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.indication.toLowerCase().includes(queryToUse.toLowerCase()) ||
      p.type.toLowerCase().includes(queryToUse.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="products" className="section bg-white border-b border-slate-200/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan mb-3">
            <ShoppingBag className="w-3.5 h-3.5" /> Product Portfolio
          </div>
          <h2 className="section-title">
            WHO-GMP Certified <span className="gradient-text">Formulations Range</span>
          </h2>
          <p className="section-subtitle">
            Explore Strovanks Pharma’s extensive catalog of DCGI-approved tablets, injections, syrups, capsules, softgels, topicals, and nutraceuticals available for PCD Franchise and Contract Manufacturing.
          </p>
        </div>

        {/* Category Tabs & Local Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeCategory === cat ? 'tab-btn-active shadow-md' : 'tab-btn-inactive'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Local Search Input */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-white/15 shadow-sm focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-[#0066FF]/20 w-full md:w-80 transition-all">
            <Search className="w-4 h-4 text-[#0066FF] dark:text-cyan-400 shrink-0" />
            <input
              type="text"
              placeholder="Search composition or drug name..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xs text-slate-900 dark:text-white placeholder-slate-400 p-0 m-0"
              style={{ background: 'transparent', border: 'none', outline: 'none', boxShadow: 'none' }}
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="glass-panel p-6 flex flex-col justify-between group hover:border-cyan-400/50 transition-all">
              <div>
                {/* Header badges */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`badge ${p.statusBadge}`}>{p.status}</span>
                  <span className="text-xs text-cyan-400 font-mono font-semibold">{p.category}</span>
                </div>

                {/* Name & Type */}
                <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors mb-1" style={{ color: 'var(--text-main)' }}>
                  {p.name}
                </h3>
                <div className="text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>{p.type}</div>

                {/* Formulation Composition */}
                <div className="text-xs bg-slate-100 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 mb-3 font-mono text-cyan-600 dark:text-cyan-300">
                  {p.formulation}
                </div>

                {/* Indication */}
                <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                  {p.indication}
                </p>
              </div>

              {/* Card Footer Info */}
              <div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 pb-3 mb-3 border-b border-white/5 font-mono">
                  <span>Pack: {p.packaging}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="btn btn-secondary btn-sm flex-1"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" /> Monograph & Specs
                  </button>
                  
                  <button
                    onClick={() => onRequestSample(p.name)}
                    className="btn btn-primary btn-sm"
                    title="Inquire Product / Order Sample"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="glass-panel p-12 text-center max-w-md mx-auto my-8">
            <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No Formulations Found</h4>
            <p className="text-xs text-slate-400 mb-4">Try searching with a different chemical name or category filter.</p>
            <button onClick={() => { setActiveCategory('All'); setLocalSearch(''); }} className="btn btn-outline btn-sm">
              Reset Product Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content glass-panel p-6 border-cyan-500/30" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className={`badge ${selectedProduct.statusBadge} mb-2`}>{selectedProduct.status}</span>
                <h3 className="text-2xl font-extrabold text-white">{selectedProduct.name}</h3>
                <div className="text-xs font-mono text-cyan-400">{selectedProduct.type} • {selectedProduct.category} Division</div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-white/10"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 py-4 text-sm">
              
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-cyan-500/20">
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">Composition & Active Ingredients</h4>
                <p className="text-white font-mono text-xs">{selectedProduct.formulation}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">Therapeutic Indications</h4>
                <p className="text-slate-200 text-xs leading-relaxed">{selectedProduct.indication}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <div className="text-slate-400">Packaging Type:</div>
                  <div className="font-semibold text-white mt-0.5">{selectedProduct.packaging}</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <div className="text-slate-400">Recommended Dosage:</div>
                  <div className="font-semibold text-white mt-0.5">{selectedProduct.dosage}</div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-300">Storage & Quality Specification:</span>
                  <div className="text-slate-300 mt-0.5">{selectedProduct.storage}</div>
                </div>
              </div>

              <div className="text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Formulation Overview:</span> {selectedProduct.description}
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProduct(null)}
                className="btn btn-secondary btn-sm"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const prodName = selectedProduct.name;
                  setSelectedProduct(null);
                  onRequestSample(prodName);
                }}
                className="btn btn-primary btn-sm"
              >
                Inquire Rates & Monopoly Sample
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
