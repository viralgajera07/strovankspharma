import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, Building, 
  CheckCircle2, Copy, Check, ExternalLink, ShieldCheck, Zap, 
  User, Tag, ArrowRight, Sparkles, Award, HelpCircle, Pill, 
  FileText, Factory, Globe
} from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Information',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const presets = [
    { 
      id: 'General Information', 
      label: 'General Query', 
      icon: HelpCircle,
      template: 'Hello Strovanks Pharma team, I have an inquiry regarding your pharmaceutical products and services.' 
    },
    { 
      id: 'PCD Franchise Monopoly', 
      label: 'PCD Franchise', 
      icon: Pill,
      template: 'Hello Strovanks Team, I am interested in PCD Pharma Franchise monopoly rights for [My District/State]. Please share product visual aids and pricing terms.' 
    },
    { 
      id: 'Product Price List Request', 
      label: 'Price List Request', 
      icon: FileText,
      template: 'Please send your complete WHO-GMP certified product catalog, stock availability, and latest wholesale price list.' 
    },
    { 
      id: 'Contract Manufacturing Quote', 
      label: 'Contract Manufacturing', 
      icon: Factory,
      template: 'We require third-party manufacturing quotes for custom formulations. Formulations required: [Tablet/Syrup/Injectable details].' 
    },
    { 
      id: 'Export / Regulatory Dossier', 
      label: 'Export Inquiry', 
      icon: Globe,
      template: 'Requesting commercial export quotations and regulatory dossiers (COPP/GMP certifications) for overseas distribution.' 
    }
  ];

  const handleSelectPreset = (preset) => {
    setFormData(prev => ({
      ...prev,
      subject: preset.id,
      message: prev.message.trim() === '' || presets.some(p => p.template === prev.message) 
        ? preset.template 
        : prev.message
    }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`${fieldName} copied to clipboard!`, 'info');
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you ${formData.name}! Your message has been sent successfully. Our team will contact you at ${formData.email} within 2-4 hours.`, 'success');
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Information',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-white relative border-t border-slate-200/70 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Inquiry Hotline</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">
            Contact <span className="gradient-text">Strovanks Pharma</span>
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Connect with our sales and technical team for product pricing, PCD franchise monopoly rights, or custom contract manufacturing quotes.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Corporate Info & Map (Span 5 on LG) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Corporate Details Card */}
            <div className="contact-glass-card p-6 md:p-7 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              
              {/* Card Title & Live Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Corporate Headquarters</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Desk Active
                </span>
              </div>

              {/* Contact Items List */}
              <div className="space-y-4 pt-4">
                
                {/* Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="contact-icon-box">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Office Address</div>
                    <div className="text-sm font-semibold text-slate-900 mb-0.5">
                      Strovanks Pharma LLP
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed mb-1.5">
                      Corporate Heights, Ring Road, Surat, Gujarat – 395002, India
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Surat+Gujarat+India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      <span>Get HQ Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Call & WhatsApp Support */}
                <div className="flex items-start gap-3.5">
                  <div className="contact-icon-box">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Phone & WhatsApp</div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900">+91 93162 95004</span>
                      <button
                        onClick={() => handleCopy('+919316295004', 'Phone number')}
                        className="p-1 text-slate-400 hover:text-blue-600 rounded transition-colors"
                        title="Copy Phone Number"
                      >
                        {copiedField === 'Phone number' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a 
                        href="tel:+919316295004" 
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        <Phone className="w-3 h-3 text-blue-600" /> Call Direct
                      </a>
                      <a 
                        href="https://wa.me/919316295004?text=Hello%20Strovanks%20Pharma%2C%20I%20want%20to%20inquire%20about%20your%20products." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold border border-emerald-200/60 flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Communications */}
                <div className="flex items-start gap-3.5">
                  <div className="contact-icon-box">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email Communications</div>
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <a href="mailto:strovankspharma@gmail.com" className="text-sm font-semibold text-blue-600 hover:underline truncate">
                        strovankspharma@gmail.com
                      </a>
                      <button
                        onClick={() => handleCopy('strovankspharma@gmail.com', 'Email address')}
                        className="p-1 text-slate-400 hover:text-blue-600 rounded transition-colors shrink-0"
                        title="Copy Email Address"
                      >
                        {copiedField === 'Email address' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="text-xs text-slate-500">Fast Official Quotes & Documentation</div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="contact-icon-box">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Working Hours</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Mon – Sat: 9:00 AM – 7:00 PM IST
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Sunday: Closed (WhatsApp inquiries active)</div>
                  </div>
                </div>

              </div>

              {/* GST Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
                <span className="text-slate-600 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" /> 
                  <span>GSTIN:</span>
                </span>
                <span className="font-mono font-bold text-slate-800 bg-white px-2.5 py-0.5 rounded border border-slate-200 text-xs">
                  24AAACS1234F1Z9
                </span>
              </div>

            </div>

            {/* Embedded Map Card */}
            <div className="contact-glass-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3 px-0.5">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Surat Corporate HQ Location</span>
                </span>
                <a 
                  href="https://maps.google.com/?q=Surat+Gujarat+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Strovanks Pharma Corporate Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709503463!2d72.7712399!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[180px] rounded-xl border-0"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Send Direct Inquiry Form Card (Span 7 on LG) */}
          <div className="lg:col-span-7">
            <div className="contact-glass-card p-6 md:p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              
              {/* Form Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600 shrink-0" /> 
                    <span>Send Direct Inquiry</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Select an inquiry type to quick-fill requirements, or enter your detailed query below.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  <span>2-4h Response</span>
                </div>
              </div>

              {/* Inquiry Type Presets Chips */}
              <div className="mb-5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Inquiry Type:
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => {
                    const IconComponent = preset.icon;
                    const isActive = formData.subject === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className={`preset-chip ${isActive ? 'preset-chip-active' : ''}`}
                      >
                        <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Grid */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <User className="input-icon w-4 h-4" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Anand Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field input-field-iconic h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone / Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <Phone className="input-icon w-4 h-4" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field input-field-iconic h-11 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Subject Category */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <Mail className="input-icon w-4 h-4" />
                      <input
                        type="email"
                        required
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field input-field-iconic h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Inquiry Category
                    </label>
                    <div className="contact-input-wrapper">
                      <Tag className="input-icon w-4 h-4" />
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input-field input-field-iconic h-11 text-xs bg-white text-slate-900 cursor-pointer"
                      >
                        <option value="General Information">General Information</option>
                        <option value="Product Price List Request">Product Price List Request</option>
                        <option value="PCD Franchise Monopoly">PCD Franchise Monopoly District</option>
                        <option value="Contract Manufacturing Quote">Contract Manufacturing Quote</option>
                        <option value="Export / Regulatory Dossier">Export / Regulatory Dossier</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message / Requirements */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Message / Requirements <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {formData.message.length}/500
                    </span>
                  </div>
                  <div className="contact-input-wrapper items-start">
                    <MessageSquare className="input-icon w-4 h-4" />
                    <textarea
                      rows={4}
                      required
                      maxLength={500}
                      placeholder="Write your product query, required quantities, target district for PCD franchise, or formulation details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field input-field-iconic py-2.5 text-xs"
                    ></textarea>
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full py-3.5 text-sm rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /> 
                        <span>Send Direct Inquiry Now</span>
                        <ArrowRight className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {/* Trust Footprint Row */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>WHO-GMP Certified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Pan-India Logistics</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>100% Quality Guaranteed</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
