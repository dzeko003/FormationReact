import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const [checked, setCheked] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setCheked(!checked);
  };

  return (
    <>
      <form action="">
        <textarea value={value} onChange={handleChange} />
        <input type="checkbox" checked={checked} onClick={handleClick} />
        <button disabled={!checked} type="submit">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default App;
