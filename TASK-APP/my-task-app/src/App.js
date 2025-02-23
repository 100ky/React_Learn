import React, { useState } from 'react';
import data from './data';

// Hlavní komponenta aplikace
const App = () => {
  // State pro ukládání úkolů
  const [ukoly, setUkoly] = useState(data);

  // Funkce pro smazání úkolu podle ID
  const smazatUkol = (id) => {
    const novyUkoly = ukoly.filter((ukol) => ukol.id !== id);
    setUkoly(novyUkoly);
  };

  return (
    <div>
      <h1>Moje úkoly</h1>
      <ul>
        {ukoly.map((ukol) => (
          <li key={ukol.id}>
            {ukol.name}
            <button onClick={() => smazatUkol(ukol.id)}>Smazat</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;