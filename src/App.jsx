import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Reservations from "./pages/Reservations";


const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/reservations" element={<Reservations/>}/>
 </Routes>
 </BrowserRouter>
    
  );
};

export default App;
