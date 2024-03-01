import "./App.css";
import {useState} from "react"
import data from "./data"
import Tours from "./components/Tours"

function App() {
  const [tours, setTours] = useState(data)
  console.log("data ", data)
  function removeTour(id){
    console.log("tour id", tours.length)
    const newTours = tours.filter(tour=>tour.id != id)
    
    console.log("tour length ", newTours.length)
    setTours(newTours)
  }

  function resetTour(id){    
    setTours(data)
  }

  return (
    <div className="App">
      <div>
        <h2> Plan N Places </h2>
      </div>
      <Tours tours = {tours} removeTour = {removeTour} resetTour = {resetTour}></Tours>
    </div>
  );
}

export default App;
