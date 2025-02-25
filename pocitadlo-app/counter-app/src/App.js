import React, { useState } from "react"
import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"

const App = () => {

  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const reser = () => {
    const newValue = 0
    setValue(newValue)
  }

  return (
  <div>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
      <DecreaseButton xxx={decreaseOne} />
      <IncreaseButton increase={increaseOne} />
      <ResetButton reset={reser} />
  </div>
  )
}


export default App