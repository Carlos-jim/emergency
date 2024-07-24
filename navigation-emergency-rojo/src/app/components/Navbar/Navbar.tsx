import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('clicked');
  };

  return (
    <div className="navbar">
      <h5>Control y Rastreo de Embarcaciones</h5>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registrar">Registrar</Link></li>
        <li>Rastrear</li>
        <li>Acerca De</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === 'light' ? search_icon_light : search_icon_dark}
          alt="search"
        />
      </div>

      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="toggle theme"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
