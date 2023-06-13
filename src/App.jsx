import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Navegacion from './components/navegacion/Navegacion';
import Footer from './components/footer/Footer';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/toys" element={<Home />} />
          <Route path="/toys/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PaginaNoEncontrada/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
