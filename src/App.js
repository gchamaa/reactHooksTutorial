import './App.css';
import { useState } from 'react';

function App() {
  // Example 1
  const [name, setName] = useState("nothing");
  const handleChangeExample1 = (e) => {
    setName(e.target.value || "nothing");
  }

  // Example 2
  const [values, setValues] = useState({firstName: "", lastName: ""});
  const handleChangeExample2 = (e) => {
    setValues({firstName: e.target.value});
  }

  return (
    <div className="App" style={{paddingTop: "100px"}}>
      <h2>Example - Basic useState with primitive value</h2>
      <input type="text" onChange={handleChangeExample1} />
      <p>You typed {name}</p>

      <h2>Example - Complex useState with Object</h2>
      <input type="text" onChange={handleChangeExample2} />
      <p>First Name is {values.firstName}</p>
      <p>Last Name is {values.lastName}</p>
    </div>
  );
}

export default App;
