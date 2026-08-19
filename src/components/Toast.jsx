import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/40 bg-slate-900/90 text-emerald-200',
    error: 'border-rose-500/40 bg-slate-900/90 text-rose-200',
    info: 'border-cyan-500/40 bg-slate-900/90 text-cyan-200',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl ${borders[toast.type || 'info']}`}>
        {icons[toast.type || 'info']}
        <span className="text-sm font-medium pr-2">{toast.message}</span>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <X className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
