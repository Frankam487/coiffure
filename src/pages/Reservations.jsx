import { useEffect, useRef } from 'react';
import Header from '../components/Header';

const Reservations = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 46.9481, lng: 7.4474 }, // Coordonnées de Berne
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: 46.9481, lng: 7.4474 }, // Position du marqueur
      map: map,
      title: 'Berne, Suisse',
    });
  }, []);

  return (
    <div className="reservation">
      <Header />
      <div className="reservation-container max-w-7xl mx-auto px-4 py-8">
        <div className="first space-y-6">
          <h2 className="text-3xl font-semibold">RESERVATIONS</h2>
          <h5 className="text-lg text-gray-500">Sécurisez votre rendez-vous.</h5>
          
          <h2 className="text-2xl font-semibold mt-8">Contact</h2>
          <h3 className="text-xl text-gray-700">Nous joindre ici</h3>

          <ul className="list-none space-y-2 mt-4">
            <li>
              <a
                href="mailto:mfokamkemgne@icloud.com"
                className="text-blue-500 hover:underline"
              >
                mfokamkemgne@icloud.com
              </a>
            </li>
            {/* Ajoutez d'autres informations de contact si nécessaire */}
          </ul>

          <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] mt-8">
            <div
              ref={mapContainerRef}
              className="w-full h-full rounded-lg shadow-lg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
