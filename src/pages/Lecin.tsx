import { useEffect } from 'react';

const Lecin = () => {
  useEffect(() => {
    const message = encodeURIComponent(
      "Hola Casa Lecin!\n\nVi la publicación en Facebook y me interesa saber más."
    );
    window.location.href = `https://wa.me/5492235959372?text=${message}`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="text-lg text-muted-foreground">Redirigiendo a WhatsApp...</p>
      </div>
    </div>
  );
};

export default Lecin;
