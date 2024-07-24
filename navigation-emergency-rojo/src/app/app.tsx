import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import backgroundImage from './assets/transporte-maritimo.jpg';
import Embarcacion from './components/Embarcacion/Embarcacion';

const App: React.FC = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState<string>(
    current_theme ? current_theme : 'light'
  );

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <div
        className={`app-container ${theme}`}
        style={{ minHeight: '100vh', margin: 0, padding: 0 }}
      >
        <div
          className="background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        >
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="home"
                  style={{ minHeight: 'calc(100vh - 70px)' }}
                />
              }
            />
            <Route path="/registrar" element={<Embarcacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
