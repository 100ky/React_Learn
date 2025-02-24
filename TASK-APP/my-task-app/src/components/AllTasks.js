import './AllTasks.css';  // Přidáme import CSS na začátek souboru

/**
 * Komponenta zobrazující seznam všech úkolů
 * @param {Object} props - Props předané komponentě
 * @param {Array} props.ukoly - Pole úkolů k zobrazení
 * @param {Function} props.smazatUkol - Funkce pro smazání úkolu
 * @param {Function} props.smazatVse - Funkce pro smazání všech úkolů
 */
const AllTasks = ({ ukoly, smazatUkol, smazatVse }) => {
  return (
    <div className="one-task">
      <ul>
        {/* Mapování přes pole úkolů a vytvoření položek seznamu */}
        {ukoly.map((ukol) => (
          <li key={ukol.id}>
            {/* Zobrazení názvu úkolu */}
            {ukol.name}
            {/* Tlačítko pro smazání úkolu */}
            <button onClick={() => smazatUkol(ukol.id)}>Smazat</button>
          </li>
        ))}
      </ul>
      {ukoly.length > 0 && (
        <button 
          onClick={smazatVse}
          style={{ 
            backgroundColor: '#ff0000',
            margin: '10px 0',
            padding: '8px 16px'
          }}
        >
          Smazat vše
        </button>
      )}
    </div>
  );
};

export default AllTasks;