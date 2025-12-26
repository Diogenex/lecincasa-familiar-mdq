import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Accommodation from '@/components/Accommodation';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Availability from '@/components/Availability';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LeCin - Alquiler Temporario en Mar del Plata</title>
        <meta
          name="description"
          content="Alojamiento familiar en Mar del Plata. LeCin ofrece un espacio cómodo y bien equipado para disfrutar tus vacaciones. Reservá por WhatsApp."
        />
        <meta
          name="keywords"
          content="alquiler temporario, Mar del Plata, alojamiento, vacaciones, departamento, familiar"
        />
        <link rel="canonical" href="https://lecin.com.ar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LeCin - Alquiler Temporario en Mar del Plata" />
        <meta
          property="og:description"
          content="Alojamiento familiar en Mar del Plata. Espacio cómodo y bien equipado para tus vacaciones."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Accommodation />
          <Gallery />
          <Location />
          <Availability />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
