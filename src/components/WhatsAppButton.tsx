import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5492235959372';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! Estoy consultando por Casa LeCin. ¿Podrían darme información sobre disponibilidad y precios?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </button>
  );
};

export default WhatsAppButton;