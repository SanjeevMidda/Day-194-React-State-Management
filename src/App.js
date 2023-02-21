import "./styles.css";
import React, {useState} from "react";
import Child from "./components/Child";
import Sibling from "./components/Sibling";

function App() {

  const [sweets, setSweets] = useState(0);

  function addSweet(){
    setSweets(sweets + 1);
  }

  return (
    <div className="App">
      <Child currentValue = {sweets} addNew = {addSweet} habit = "gym" />
      {/* <button onClick={addSweet}>add sweet</button> */}
      <Sibling />
    </div>
  );
}

export default App;
