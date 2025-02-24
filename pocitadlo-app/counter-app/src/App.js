import DecreaseButton from "./components/DecreaseButton"
import useState from "react"

const App = () => {

  const [value, setValue] = useState(0)

  return (
  <div>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton />
  </div>
  )
}


export default App