import { useState, useEffect } from 'react';


const url = "http://api.open-notify.org/iss-now.json";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data["iss_position"])
      .then((position) => {
        console.log(position["latitude"])
        console.log(position["longitude"])
      })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  } else {
    return <h2>Finished Loading</h2>
  }


}
export default App;