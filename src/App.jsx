import { useState } from "react";

function App() {
  const [isTermAccepted , setIsTermAccepted] = useState(false);

  return <form>
      <CGUCheckbox checked={isTermAccepted} onChecked={setIsTermAccepted}  />
      <button disabled={!isTermAccepted} >Envoyer le formulaire</button>
  </form>;
}

function CGUCheckbox({ checked, onChecked }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={(e) => onChecked(e.target.checked)} />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
}

export default App;
