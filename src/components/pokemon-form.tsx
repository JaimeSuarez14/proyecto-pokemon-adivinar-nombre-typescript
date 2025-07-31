import { useState } from "react";

interface props {
  setResultado: React.Dispatch<React.SetStateAction<string>>;
}

const PokemonForm = ({setResultado}: props) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!inputValue.trim()){
      return;
    }
    setResultado(inputValue);
    setInputValue("");
  }

  return (
    <form action="" className="row my-1" onSubmit={handleSubmit}>
      <div className="mb-3 col-12 col-md-9 col-lg-8 pe-lg-1"> {/**pe = pading rigth o end */}
        <input
          type="text"
          className="form-control"
          value={inputValue}
          autoFocus
          onChange={(e) => {
            setInputValue(e.target.value);
          }}

          placeholder="Ingrese su respuesta"
        />
      </div>
      <div className="col-12 col-md-3 col-lg-4 ps-lg-1"> {/**ps = pading letf o start */}
        <button 
        type="submit" 
        className="btn btn-outline-primary d-block w-100 px-md-0 px-lg-1"
        disabled={!inputValue.trim()} //no puedo hacer click sino hay nada en el input
        >
          Adivinar
        </button>
      </div>
    </form>
  );
}

export default PokemonForm