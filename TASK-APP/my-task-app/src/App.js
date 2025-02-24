import React, { useState } from 'react';
import data from './data';
import AllTasks from './components/AllTasks';

/**
 * Hlavní komponenta aplikace pro správu úkolů
 * Obsahuje state pro úkoly a funkci pro jejich mazání
 */
const App = () => {
  // State pro ukládání úkolů - používáme useState hook
  const [ukoly, setUkoly] = useState(data);

  /**
   * Funkce pro smazání úkolu podle ID
   * @param {number} id - ID úkolu, který má být smazán
   */
  const smazatUkol = (id) => {
    // Vytvoříme nové pole bez úkolu s daným ID
    const novyUkoly = ukoly.filter((ukol) => ukol.id !== id);
    // Aktualizujeme state s novým polem úkolů
    setUkoly(novyUkoly);
  };

  /**
   * Funkce pro smazání všech úkolů
   */
  const smazatVse = () => {
    setUkoly([]);
  };

  return (
    <div className="all-tasks">
      <h1>Moje úkoly</h1>
      {/* Předáváme úkoly a funkci pro mazání jako props */}
      <AllTasks 
        ukoly={ukoly} 
        smazatUkol={smazatUkol} 
        smazatVse={smazatVse}
      />
    </div>
  );
}

export default App;