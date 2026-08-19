import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle2, Info, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

export default function DosageCalculator({ onShowToast }) {
  const [selectedDrug, setSelectedDrug] = useState('strovamab');
  const [weightKg, setWeightKg] = useState(70);
  const [ageYears, setAgeYears] = useState(55);
  const [egfr, setEgfr] = useState(85);

  // Dosage computation logic
  const calculateDose = () => {
    let baseDose = 0;
    let unit = 'mg';
    let diluentVolume = 250; // mL
    let infusionRate = 125; // mL/hr
    let warningMessage = null;

    if (selectedDrug === 'strovamab') {
      // 10 mg/kg
      baseDose = weightKg * 10;
      diluentVolume = 250;
      infusionRate = 125; // 2 hour infusion
      if (egfr < 30) {
        warningMessage = 'eGFR < 30 mL/min: Monitor renal biomarkers closely; no initial dose reduction required.';
      }
    } else if (selectedDrug === 'cardiovanks') {
      baseDose = 50;
      if (egfr < 40) {
        baseDose = 25; // 50% dose reduction
        warningMessage = 'eGFR < 40 mL/min: Recommended 50% initial dose reduction (25 mg PO QD).';
      }
      diluentVolume = 0;
      infusionRate = 0;
    } else if (selectedDrug === 'immunovanks') {
      baseDose = 200;
      diluentVolume = 0;
      infusionRate = 0;
      if (egfr < 15) {
        warningMessage = 'eGFR < 15 mL/min (End Stage Renal Disease): Contraindicated or requires nephrology consult.';
      }
    } else if (selectedDrug === 'neurostrova') {
      baseDose = 150;
      diluentVolume = 1; // 1 mL prefilled syringe
      infusionRate = 0;
    }

    if (weightKg > 120) {
      warningMessage = (warningMessage ? warningMessage + ' ' : '') + 'Body weight > 120 kg: Cap dose calculation at maximum 1200 mg bodyweight equivalent.';
      if (selectedDrug === 'strovamab' && baseDose > 1200) {
        baseDose = 1200;
      }
    }

    return {
      totalDose: Math.round(baseDose),
      unit,
      diluentVolume,
      infusionRate,
      warningMessage,
    };
  };

  const doseResult = calculateDose();

  return (
    <section id="calculator" className="section border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-mint mb-3">HCP Medical Suite</div>
          <h2 className="section-title">
            Clinical <span className="gradient-text">Dosage & Renal Calculator</span>
          </h2>
          <p className="section-subtitle">
            Interactive medical decision support tool for computing weight-based dosing, renal adjustment guidance, and IV infusion rates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 border-cyan-500/30 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" /> Patient Clinical Parameters
            </h3>

            {/* Select Drug */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Select Drug Monograph</label>
              <select
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                className="input-field bg-slate-900 font-semibold text-cyan-300"
              >
                <option value="strovamab">Strovamab (SV-101) - 10 mg/kg IV Infusion</option>
                <option value="cardiovanks">CardioVanks ER (CV-304) - 50 mg Oral Tablet</option>
                <option value="immunovanks">Immunovanks (IV-520) - 200 mg SC Syringe</option>
                <option value="neurostrova">NeuroStrova (NS-802) - 150 mg SC Pen</option>
              </select>
            </div>

            {/* Patient Weight Slider / Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Patient Body Weight:</span>
                <span className="text-cyan-400 font-bold">{weightKg} kg ({(weightKg * 2.20462).toFixed(1)} lbs)</span>
              </div>
              <input
                type="range"
                min="30"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Patient Age Slider / Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Patient Age:</span>
                <span className="text-cyan-400 font-bold">{ageYears} years</span>
              </div>
              <input
                type="range"
                min="18"
                max="95"
                value={ageYears}
                onChange={(e) => setAgeYears(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* eGFR Renal Clearance */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Renal Clearance (eGFR):</span>
                <span className={`font-bold ${egfr < 30 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {egfr} mL/min/1.73m²
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                value={egfr}
                onChange={(e) => setEgfr(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-white/5 flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              Calculations adhere to Strovanks Clinical Prescribing Guidelines v4.2.
            </div>

          </div>

          {/* Right Results (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 flex flex-col justify-between border-cyan-500/30">
            <div>
              <div className="badge badge-cyan mb-4">Calculated Recommendation</div>
              
              <div className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 text-center mb-6">
                <div className="text-xs uppercase font-mono text-slate-400">Target Single Dose</div>
                <div className="text-4xl font-extrabold gradient-text my-2 font-mono">
                  {doseResult.totalDose} {doseResult.unit}
                </div>
                <div className="text-xs text-slate-300">
                  {selectedDrug === 'strovamab' && `10 mg/kg × ${weightKg} kg`}
                  {selectedDrug === 'cardiovanks' && (egfr < 40 ? '25 mg (Adjusted for Renal eGFR)' : '50 mg Standard QD')}
                  {selectedDrug === 'immunovanks' && '200 mg SC Maintenance'}
                  {selectedDrug === 'neurostrova' && '150 mg SC Monthly'}
                </div>
              </div>

              {/* Infusion details */}
              {doseResult.diluentVolume > 0 && (
                <div className="space-y-2 text-xs font-mono bg-slate-900/50 p-4 rounded-xl border border-white/5 mb-4">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Diluent Volume:</span>
                    <span className="text-white font-bold">{doseResult.diluentVolume} mL 0.9% NaCl</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Infusion Speed:</span>
                    <span className="text-cyan-300 font-bold">{doseResult.infusionRate} mL/hr</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Infusion Duration:</span>
                    <span className="text-white font-bold">120 Minutes</span>
                  </div>
                </div>
              )}

              {/* Warning Alert */}
              {doseResult.warningMessage && (
                <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-xs text-amber-300 flex items-start gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{doseResult.warningMessage}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => onShowToast(`Dosage calculation exported (${doseResult.totalDose} ${doseResult.unit}).`, 'success')}
              className="btn btn-primary w-full"
            >
              Export Clinical Summary PDF
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
