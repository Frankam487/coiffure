import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Reservations = () => {
   useEffect(() => {
    // Initialisation de la carte
    const map = L.map('map').setView([5.9631, 10.1591], 13); // Coordonnées de Bafoussam

    // Ajout du fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ajout d'un marqueur pour Bafoussam
    L.marker([5.9631, 10.1591]).addTo(map)
      .bindPopup('Berne, Suisse')
      .openPopup();

    // Cleanup lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);
  const cardsData = [
    {
      message: "Bienvenue dans notre aventure visuelle !",
      image: "../../public/i.jpg",
      description: "Vue majestueuse sur la vallée au coucher du soleil."
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/istockphoto-1540436676-1024x1024.jpg",
      description: "Forêt dense en automne, un lieu de tranquillité."
    },
    {
      message: "Le charme des voyages.",
      image: "../../public/istockphoto-1540436676-1024x1024.jpg",
      description: "Les rues vibrantes de Tokyo la nuit."
    },
    {
      message: "L'art de la simplicité.",
      image: "../../public/istockphoto-2150854814-1024x1024.jpg",
      description: "Une œuvre abstraite qui raconte une histoire."
    },
    {
      message: "Les merveilles de l'architecture.",
      image: "../../public/comb-5537265.png",
      description: "L'architecture moderne au cœur de Paris."
    },
    {
      message: "Les horizons infinis.",
      image: "../../public/istockphoto-2150854818-1024x1024.jpg",
      description: "Vue panoramique sur l'océan au lever du soleil."
    },
    {
      message: "La magie des petites choses.",
      image: "../../public/beautiful-2405131.jpg",
      description: "Un détail capturé dans la lumière douce de l'après-midi."
    },
    {
      message: "Les moments partagés.",
      image: "https://example.com/photo8.jpg",
      description: "Des sourires sincères sous un ciel étoilé."
    },
    {
      message: "La beauté de l'instant.",
      image: "https://example.com/photo9.jpg",
      description: "Une scène paisible capturée au bon moment."
    }
  ];

  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="reservations ">
      <Header />
      
      <div className="first text-center space-y-8 p-6 sm:p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800">RESERVATIONS</h2>
        <h5 className="text-lg text-gray-500">Sécurisez votre rendez-vous.</h5>

        <div className="contact-section mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <h3 className="text-xl text-gray-700 mt-2">Nous joindre ici</h3>

          <ul className="list-none space-y-2 mt-4">
            <li>
              <a
                href="mailto:mfokamkemgne@icloud.com"
                className="text-blue-500 hover:underline"
              >
                mfokamkemgne@icloud.com
              </a>
            </li>
            <li>Seidenweg 5, 3012 Berne</li>
          </ul>
        </div>

        <div className="map-container mt-8 w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden">
          {/* <MapContainer center={[46.8182, 8.2275]} zoom={8} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[46.8182, 8.2275]}>
              <Popup>La Suisse</Popup>
            </Marker> */}
          {/* </MapContainer> */}
           <div>
      <h1>Carte de Bafoussam, Cameroun</h1>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
        </div>
      </div>

      <div className="second grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 w-full max-w-6xl">
        {cardsData.map((card, index) => (
          <div key={index} className="relative bg-white border border-gray-200 rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold text-gray-800">{card.message}</div>
              <button
                onClick={() => handleClick(index)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none transition-colors"
              >
                Voir la photo
              </button>
            </div>

            {activeImage === index && (
              <div className="mt-4 space-y-2">
                <div className="text-sm text-gray-600">{card.description}</div>
                <img
                  src={card.image}
                  alt={card.description}
                  className="w-full max-w-xs mx-auto rounded-lg shadow-md transition-opacity duration-500 opacity-0 animate-fade-in"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
