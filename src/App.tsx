import { useState } from "react";
import "./App.css";
import PokemonDisplay from "./components/pokemon-display";
import PokemonForm from "./components/pokemon-form";
import PokemonResult from "./components/pokemon-result";
import useGeneralService from "./service/useGeneraServices";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

function App() {
  const [respuesta, setRespuesta] = useState<string>("");

  const { data, loading, error, reloadPokemon } = useGeneralService();

  const name  = data?.name ?? "" ;

  const {width, height } = useWindowSize();

  return (
    <div className="container mx-auto my-5">
      {
        name===respuesta && 
        (
          <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
          />
        )
      }
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay
            pokemon={data}
            respuesta={respuesta}
            loading={loading}
            error={error}
          />
          <PokemonForm setResultado={setRespuesta} />

          <PokemonResult
            respuesta={respuesta}
            setRespuesta={setRespuesta}
            name={name}
            reloadPokemon={reloadPokemon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
