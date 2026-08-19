import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919316295004';
  const defaultMessage = encodeURIComponent('Hello Strovanks Pharma team, I would like to inquire about your pharmaceutical product range and PCD franchise opportunities.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      {/* Circular Floating WhatsApp Icon Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="WhatsApp Contact"
        title="WhatsApp Contact"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.5)',
          textDecoration: 'none'
        }}
      >
        {/* Pulsing Ripple Ring */}
        <span 
          className="absolute inset-0 rounded-full animate-ping pointer-events-none opacity-30"
          style={{ backgroundColor: '#25D366' }}
        />

        {/* Real Official WhatsApp SVG Icon */}
        <svg 
          className="w-8 h-8 md:w-9 md:h-9 fill-white relative z-10 transition-transform group-hover:scale-110" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414zM12.004 0C5.38 0 0 5.378 0 12.001c0 2.118.552 4.187 1.6 6.008L0 24l6.155-1.614A11.968 11.968 0 0012.004 24C18.627 24 24 18.623 24 12.001 24 5.378 18.627 0 12.004 0zm0 22.022c-1.81 0-3.583-.487-5.132-1.408l-.368-.219-3.81.999 1.017-3.712-.241-.383A9.972 9.972 0 012.004 12c0-5.513 4.485-9.998 10-9.998 5.514 0 9.999 4.485 9.999 9.998 0 5.514-4.485 9.998-9.999 9.998z"/>
        </svg>
      </a>
    </div>
  );
}
