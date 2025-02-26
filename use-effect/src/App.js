import { useState, useEffect } from 'react';


const App = () => {

  console.log('text uplně nahoře')
  const [value, setValue] = useState(0)


  useEffect(() => {
    const button = document.querySelector('.btn')
    if (value >= 1) {
      button.textContent = `Klik číslo ${value}`
    } else { 
      button.textContent = 'Klikni'
    }
  })

  return (  
    <div>
      <h1> Hoňič!! </h1>
      <p> {value} </p>
      {console.log('Já jsem return')}
      <button className='btn' onClick={() => setValue(value + 1)}>Zvýšit</button>
    </div>
  )
}

export default App;