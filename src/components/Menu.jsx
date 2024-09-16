import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <h1 className="title">Plataforma de Vídeos</h1>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <a href="#video">Vídeo</a>
        <a href="#relacionados">Relacionados</a>
        <a href="#comentarios">Comentários</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Menu;
