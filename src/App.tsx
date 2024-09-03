import Header from "./components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Slotgame from "./pages/Slotgame";
import Roulette from "./Roulette/Roulette";
import MagneticBeads from "./MagenticBeads/MagneticBeads";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/solt-game" element={<Slotgame />} />
          <Route path="/magnetic-chess" element={<MagneticBeads />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
