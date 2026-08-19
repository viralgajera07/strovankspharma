import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Thermometer, CheckCircle2, QrCode, Search, Building2, Calendar, FileCheck, RefreshCw } from 'lucide-react';

export const SAMPLE_BATCHES = {
  'STX-9082-A': {
    serial: 'STX-9082-A',
    drugName: 'Strovamab (SV-101) 100mg/10mL',
    lotNumber: 'LOT-2026-0811-A',
    status: 'Verified Authentic',
    statusType: 'success',
    facility: 'Strovanks Bio-Facility Alpha • Basel, Switzerland',
    mfgDate: '12-Jan-2026',
    expDate: '12-Jan-2028',
    tempStatus: 'Optimal Cold-Chain (+3.8°C Avg)',
    tempLog: [3.6, 3.8, 3.7, 3.9, 3.8, 3.7, 3.8],
    qaInspector: 'Dr. Helene Vance, VP Quality Compliance',
    gtin: '07612345980112',
    certificateId: 'COA-2026-88491-SV',
  },
  'STX-4410-B': {
    serial: 'STX-4410-B',
    drugName: 'CardioVanks ER 50mg Tablets',
    lotNumber: 'LOT-2026-0419-B',
    status: 'Verified Authentic',
    statusType: 'success',
    facility: 'Strovanks Pharma Tech Center • Cambridge, MA, USA',
    mfgDate: '04-Feb-2026',
    expDate: '04-Feb-2029',
    tempStatus: 'Ambient Storage (+21.2°C Avg)',
    tempLog: [21.0, 21.2, 21.3, 21.1, 21.2, 21.2],
    qaInspector: 'Marcus Thorne, Lead Auditor',
    gtin: '07612345980419',
    certificateId: 'COA-2026-55102-CV',
  },
  'STX-7721-C': {
    serial: 'STX-7721-C',
    drugName: 'NeuroStrova 150mg/1mL Autoinjector',
    lotNumber: 'LOT-2025-1102-C',
    status: 'Expired Batch - Do Not Administer',
    statusType: 'warning',
    facility: 'Strovanks Bio-Facility Beta • Munich, Germany',
    mfgDate: '10-Aug-2024',
    expDate: '10-Feb-2026',
    tempStatus: 'Storage Temperature Exceeded Expiry',
    tempLog: [4.1, 4.2, 4.5, 4.8, 5.2],
    qaInspector: 'Elena Rostova, Compliance Lead',
    gtin: '07612345980772',
    certificateId: 'COA-2024-99102-NS',
  }
};

export default function BatchVerifier({ onShowToast }) {
  const [serialInput, setSerialInput] = useState('STX-9082-A');
  const [batchResult, setBatchResult] = useState(SAMPLE_BATCHES['STX-9082-A']);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const cleanCode = serialInput.trim().toUpperCase();
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      if (SAMPLE_BATCHES[cleanCode]) {
        setBatchResult(SAMPLE_BATCHES[cleanCode]);
        onShowToast(`Batch ${cleanCode} verified successfully.`, 'success');
      } else {
        setBatchResult({
          serial: cleanCode,
          status: 'Serial Number Not Found in Global Registry',
          statusType: 'error',
        });
        onShowToast(`Serial ${cleanCode} invalid or unverified.`, 'error');
      }
    }, 600);
  };

  const selectQuickCode = (code) => {
    setSerialInput(code);
    setBatchResult(SAMPLE_BATCHES[code]);
  };

  return (
    <section id="verifier" className="section bg-white border-t border-b border-slate-200/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-emerald mb-3">Supply Chain Integrity</div>
          <h2 className="section-title">
            Batch Serialization & <span className="gradient-text">Cold-Chain Tracker</span>
          </h2>
          <p className="section-subtitle">
            Instantly verify product authenticity, IoT temperature log history, and Certificate of Analysis (CoA) compliance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Input Panel */}
          <div className="glass-panel p-6 md:p-8 border-slate-200 dark:border-cyan-500/30 bg-slate-50 dark:bg-slate-900/60 shadow-sm rounded-3xl">
            
            <form onSubmit={handleVerify} className="space-y-4">
              <label className="block text-xs font-bold font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-main)' }}>
                Enter Serialized 2D DataMatrix / Batch Serial #
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-white/15 shadow-sm focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-[#0066FF]/20 flex-1 w-full transition-all">
                  <QrCode className="w-5 h-5 text-[#0066FF] dark:text-cyan-400 shrink-0" />
                  <input
                    type="text"
                    value={serialInput}
                    onChange={(e) => setSerialInput(e.target.value)}
                    placeholder="e.g. STX-9082-A"
                    className="w-full bg-transparent border-none outline-none font-mono text-base uppercase font-extrabold text-slate-900 dark:text-white placeholder-slate-400 p-0 m-0"
                    style={{ background: 'transparent', border: 'none', outline: 'none', boxShadow: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider shrink-0 shadow-md" disabled={isSearching}>
                  {isSearching ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Verifying...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" /> Verify Serial
                    </>
                  )}
                </button>
              </div>

              {/* Sample Quick Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="font-mono font-bold text-slate-500 dark:text-slate-400">Demo Serials:</span>
                {Object.keys(SAMPLE_BATCHES).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => selectQuickCode(code)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all border ${
                      serialInput === code
                        ? 'tab-btn-active shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 border-slate-300 dark:border-white/10 hover:border-[#0066FF]'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Verification Result Card */}
          {batchResult && (
            <div className="glass-panel p-6 md:p-8 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 shadow-sm rounded-3xl space-y-6 animate-fadeIn">
              
              {/* Status Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  {batchResult.statusType === 'success' && (
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  )}
                  {batchResult.statusType === 'warning' && (
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}
                  {batchResult.statusType === 'error' && (
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-mono font-bold mb-0.5" style={{ color: 'var(--text-muted)' }}>SERIAL ID: {batchResult.serial}</div>
                    <h3 className="text-lg font-extrabold" style={{ color: 'var(--text-main)' }}>{batchResult.status}</h3>
                  </div>
                </div>

                {batchResult.statusType === 'success' && (
                  <span className="badge badge-emerald self-start sm:self-auto font-bold px-3 py-1 text-xs">Authentic & Verified</span>
                )}
              </div>

              {/* Data Details */}
              {batchResult.drugName && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  {/* Left Card: Drug & Lot */}
                  <div className="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 space-y-3 shadow-sm">
                    <div>
                      <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Pharmaceutical Product:</span>
                      <div className="text-base font-extrabold text-[#0066FF] dark:text-cyan-400 font-sans mt-0.5">{batchResult.drugName}</div>
                    </div>
                    <div>
                      <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Batch / Lot Number:</span>
                      <div className="font-extrabold font-mono text-xs mt-0.5" style={{ color: 'var(--text-main)' }}>{batchResult.lotNumber}</div>
                    </div>
                    <div>
                      <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>GTIN Barcode:</span>
                      <div className="font-mono text-xs font-semibold mt-0.5" style={{ color: 'var(--text-main)' }}>{batchResult.gtin}</div>
                    </div>
                  </div>

                  {/* Right Card: Facility & Dates */}
                  <div className="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 space-y-3 shadow-sm">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Manufacturing Facility:</span>
                        <div className="font-semibold text-xs mt-0.5" style={{ color: 'var(--text-main)' }}>{batchResult.facility}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/10">
                      <div>
                        <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Mfg Date:</span>
                        <div className="font-extrabold font-mono text-xs mt-0.5" style={{ color: 'var(--text-main)' }}>{batchResult.mfgDate}</div>
                      </div>
                      <div>
                        <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Expiry Date:</span>
                        <div className="font-extrabold font-mono text-xs text-amber-600 dark:text-amber-400 mt-0.5">{batchResult.expDate}</div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Cold Chain IoT Log */}
              {batchResult.tempStatus && (
                <div className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 space-y-3 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] dark:text-cyan-400">
                      <Thermometer className="w-4 h-4 shrink-0" /> IoT Cold-Chain Temperature Sensor Telemetry
                    </div>
                    <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400">{batchResult.tempStatus}</span>
                  </div>

                  {/* Simulated Sparkline / Temp readings */}
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 pt-1">
                    {batchResult.tempLog?.map((temp, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl text-center border border-slate-200/80 dark:border-white/5">
                        <div className="text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>T-{i+1}</div>
                        <div className="text-xs font-mono font-extrabold text-[#0066FF] dark:text-cyan-300 mt-0.5">{temp}°C</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CoA Download Button */}
              {batchResult.certificateId && (
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Audit Certificate: <span className="font-mono font-bold ml-1" style={{ color: 'var(--text-main)' }}>{batchResult.certificateId}</span>
                  </div>
                  
                  <button
                    onClick={() => onShowToast(`Downloading Certificate ${batchResult.certificateId}...`, 'info')}
                    className="btn btn-primary rounded-xl px-5 py-2.5 text-xs uppercase font-bold tracking-wider shadow-md"
                  >
                    <FileCheck className="w-4 h-4" /> Download Signed CoA PDF
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
