import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, Building, Mail, Phone, UserCheck, ShieldCheck, Send, FileText } from 'lucide-react';

export default function DoctorPortal({ prefilledDrug, onShowToast, onCloseModal }) {
  const [formData, setFormData] = useState({
    doctorName: '',
    npiLicense: '',
    specialty: 'Oncology',
    selectedDrug: prefilledDrug || 'Strovamab (SV-101)',
    clinicName: '',
    address: '',
    email: '',
    phone: '',
    requestType: 'Physician Evaluation Sample Box',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.doctorName || !formData.npiLicense || !formData.email) {
      onShowToast('Please fill in required medical credentials.', 'error');
      return;
    }
    setSubmitted(true);
    onShowToast(`Sample request confirmed for Dr. ${formData.doctorName}. Tracking sent to ${formData.email}.`, 'success');
  };

  return (
    <section id="portal" className="section bg-white border-t border-b border-slate-200/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan mb-3">Healthcare Professional Portal</div>
          <h2 className="section-title">
            Physician Sample & <span className="gradient-text">MSL Consultation Hub</span>
          </h2>
          <p className="section-subtitle">
            Licensed healthcare providers can request complimentary product evaluation samples, clinical trial monographs, or MSL scientific consultations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-panel p-8 border-cyan-500/30">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sample Request Authorized</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-cyan-400">Dr. {formData.doctorName}</strong>. Your sample request for <span className="text-white font-semibold">{formData.selectedDrug}</span> (Order #ORD-2026-9908) is undergoing NPI license verification and cold-chain dispatch.
              </p>
              
              <div className="bg-slate-900/60 p-4 rounded-xl text-xs font-mono text-left max-w-md mx-auto space-y-1.5 border border-white/5">
                <div><span className="text-slate-400">NPI / License:</span> {formData.npiLicense}</div>
                <div><span className="text-slate-400">Delivery Clinic:</span> {formData.clinicName}</div>
                <div><span className="text-slate-400">Dispatch Status:</span> Cold-Chain Express Shipping (+2°C to +8°C)</div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  if (onCloseModal) onCloseModal();
                }}
                className="btn btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <Stethoscope className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Licensed Practitioner Request Form</h3>
                  <div className="text-xs text-slate-400">Prescribing verification required per FDA / EMA guidelines</div>
                </div>
              </div>

              {/* Doctor Name & NPI License */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Doctor Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah Jenkins, MD"
                    value={formData.doctorName}
                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">NPI / Medical License # *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1928374650"
                    value={formData.npiLicense}
                    onChange={(e) => setFormData({ ...formData, npiLicense: e.target.value })}
                    className="input-field font-mono"
                  />
                </div>
              </div>

              {/* Specialty & Requested Drug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Clinical Specialty</label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="input-field bg-slate-900"
                  >
                    <option value="Oncology">Medical Oncology</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology & Neuro-oncology</option>
                    <option value="Immunology">Immunology & Rheumatology</option>
                    <option value="Pulmonology">Pulmonology</option>
                    <option value="Rare Diseases">Genetics / Rare Diseases</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Requested Sample / Drug</label>
                  <select
                    value={formData.selectedDrug}
                    onChange={(e) => setFormData({ ...formData, selectedDrug: e.target.value })}
                    className="input-field bg-slate-900 font-semibold text-cyan-300"
                  >
                    <option value="Strovamab (SV-101)">Strovamab (SV-101) 100mg/10mL</option>
                    <option value="CardioVanks ER (CV-304)">CardioVanks ER (CV-304) 50mg</option>
                    <option value="NeuroStrova (NS-802)">NeuroStrova (NS-802) 150mg SC</option>
                    <option value="Immunovanks (IV-520)">Immunovanks (IV-520) 200mg SC</option>
                    <option value="PulmoVanks Aerosol (PV-112)">PulmoVanks Aerosol (PV-112)</option>
                  </select>
                </div>
              </div>

              {/* Clinic / Hospital & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Hospital / Clinic Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Johns Hopkins Medical Center"
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Official Professional Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sjenkins@jhmi.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Request Type */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Request Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Physician Evaluation Sample Box', 'Schedule MSL Video Briefing', 'Full Prescribing Monograph'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, requestType: type })}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                        formData.requestType === type
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button type="submit" className="btn btn-primary w-full py-3">
                  <Send className="w-4 h-4" /> Submit Sample Request
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
