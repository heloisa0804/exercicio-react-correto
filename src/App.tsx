import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Menu from './components/Cabecalho/Menu/Menu';
import './global.css';
import Rodape from './components/Rodape/Rodape';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import TiposDeTreino from './pages/TiposDeTreino';
import Tecnologia from './pages/Tecnologia';
import Pagina404 from './pages/Pagina404';


export default function App() {
  return (
    <Router>
      <Cabecalho />
      <div className="main-layout-wrapper">
        <div className="menu-content-container">
          <Menu />
        </div>
        <div className="main-page-content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/tipos-de-treino" element={<TiposDeTreino />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </div>
      </div>
    
    <Rodape />
    </Router>
  );
}
