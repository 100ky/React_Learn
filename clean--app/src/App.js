import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);

  const sizeControl = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('Já jsem useEffect');
    window.addEventListener('resize', sizeControl);
    return () => {
      console.log('Já jsem cleanup');
      window.removeEventListener('resize', sizeControl);
    }
  });
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  return (  
    <div className="app-container">
      <button 
        className="theme-toggle-btn" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '💡 Světlý režim' : '🌙 Tmavý režim'}
      </button>
      
      <h1> ŠÍŘKA OKNA </h1>
      <h2> {windowSize} </h2>
    </div>
  )
}

export default App;