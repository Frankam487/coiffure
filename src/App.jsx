import { BrowserRouter, Routes, Route } from "react-router-dom";
import Important from "./pages/important";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Entrainement from "./pages/Entrainement";
const App = () => {
  return (
    <div className='app'>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Important/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/entrainement" element={<Entrainement/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;