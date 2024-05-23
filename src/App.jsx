import Navigation from "./Components/Navigation";
import Home from "./views/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pokemones/" element={<Pokemones />} />
        <Route path="Pokemones/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
