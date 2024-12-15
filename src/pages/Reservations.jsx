import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Reservations = () => {
  const [map, setMap] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [ 
    {
      message: "Bienvenue dans notre aventure visuelle !",
      image: "../../public/istockphoto-2150854814-1024x1024.jpg",
      description: "Vue majestueuse sur la vallée au coucher du soleil.",
      coordinates: [5.9631, 10.1591],
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/comb-5537265.png",
      description: "Forêt dense en automne, un lieu de tranquillité.",
      coordinates: [5.9641, 10.1601],
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/hair-1378218.jpg",
      description: "Forêt dense en automne, un lieu de tranquillité.",
      coordinates: [5.9641, 10.1601],
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/istockphoto-1952511070-1024x1024.jpg",
      description: "Forêt dense en automne, un lieu de tranquillité.",
      coordinates: [5.9641, 10.1601],
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/istockphoto-2066870218-1024x1024.jpg",
      description: "Forêt dense en automne, un lieu de tranquillité.",
      coordinates: [5.9641, 10.1601],
    },
    {
      message: "Explorez les beautés de la nature.",
      image: "../../public/istockphoto-487512681-1024x1024.jpg",
      description: "Forêt dense en automne, un lieu de tranquillité.",
      coordinates: [5.9641, 10.1601],
    },

  ];

  const mapRef = useRef(null);

  // Initialisation de la carte
  useEffect(() => {
    const mapInstance = L.map(mapRef.current).setView([5.9631, 10.1591], 13);
    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  
  const handleClick = (index) => {
    const card = cardsData[index];
    setSelectedCard(card); 
    setIsPopupVisible(true); 
  };

  // Fermer le modal
  const closePopup = () => {
    setIsPopupVisible(false); 
    setSelectedCard(null); 
  };

  return (
    <>
      <div className="reservations">
        <Header />
        <div className="container mx-auto bg-gray-100 md:flex flex-col lg:flex-row p-6 space-y-8 md:space-y-0">
  {/* Section principale */}
  <div className="first text-center space-y-8 p-6 sm:p-8 w-full max-w-4xl bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-gray-800">RESERVATIONS</h2>
    <h5 className="text-lg text-gray-500">Sécurisez votre rendez-vous.</h5>
    
    {/* Contact Section */}
    <div className="contact-section mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
      <h3 className="text-xl text-gray-700 mt-2">Nous joindre ici</h3>
      <ul className="list-none space-y-2 mt-4">
        <li>
          <a
            href="mailto:mfokamkemgne@icloud.com"
            className="text-blue-600 hover:underline"
          >
            mfokamkemgne@icloud.com
          </a>
        </li>
        <li className="text-gray-600">Seidenweg 5, 3012 Berne</li>
      </ul>
    </div>

    {/* Map Section */}
    <div className="map-container mt-8 w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Localisation</h1>
      <div id="map" ref={mapRef} className="-z-10 h-full w-full"></div>
    </div>
  </div>

  {/* Section des Cartes */}
  <div className="second -m-10 gap-8 p-6 w-full bg-slate-400 max-w-7xl mx-auto">
    {cardsData.map((card, index) => (
      <div key={index} className="relative  bg-gray-800 mt-1 text-gray-200 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold text-cyan-300">{card.message}</div>
          <button
            onClick={() => handleClick(index)}
            className="p-3 bg-cyan-600 text-white rounded-md shadow-md hover:bg-cyan-500 focus:outline-none transition-colors"
          >
            Voir
          </button>
        </div>
        <div className="text-sm text-gray-400">{card.description}</div>
      </div>
    ))}
  </div>
</div>


        
        {isPopupVisible && selectedCard && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out opacity-100">
            <div className="bg-gray-400 z-auto p-6 rounded-lg shadow-lg max-w-md w-full transform scale-95 transition-all duration-300 ease-out animate__animated animate__fadeIn animate__faster">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-semibold focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-125"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold text-gray-800">{selectedCard.message}</h3>
              <p className="text-sm text-gray-600 mt-2">{selectedCard.description}</p>
              <img
                src={selectedCard.image}
                alt={selectedCard.description}
                className="w-full max-w-xs mx-auto rounded-lg shadow-md mt-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Reservations;
