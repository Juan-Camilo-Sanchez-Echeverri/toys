import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PaginaNoEncontrada } from './pages/PaginaNoEncontrada';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/toys" element={<Home />} />
          <Route path="/toys/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
