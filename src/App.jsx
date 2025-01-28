import { useState } from "react";


function App() {
  
  const [person , setPerson] = useState({
    name : "Berenis",
    age : 0
  })

  const handleClick = () => {
    setPerson({...person , age: person.age +1})
  }

  return (
    <>
      <p>Age : {person.age}</p>
      <button onClick={handleClick}>Augmenter l'âge</button>
    </>
  );
}

export default App;
