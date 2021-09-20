import "./App.css";
import Meal from "./components/Meal/Meal";

// Main React Container
function App() {
  return (
    <div className="App">
      <h1 className="main-title">Hungry?</h1>
      <h3 className="sub-title">Click below and get yourself some meal</h3>
      <Meal></Meal>
    </div>
  );
}

export default App;
