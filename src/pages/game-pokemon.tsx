import { useState, useEffect } from "react";
import PokemonDisplay from "../components/pokemon-display";
import PokemonForm from "../components/pokemon-form";
import PokemonResult from "../components/pokemon-result";
import GameStats from "../components/game-stats";
import useGeneralService from "../service/useGeneraServices";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";
import { Link } from "react-router";

const GamePokemon = () => {
  const [respuesta, setRespuesta] = useState<string>("");
  const [victorias, setVictorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const { data, loading, error, reloadPokemon } = useGeneralService();

  const name = data?.name ?? "vacio";

  const { width, height } = useWindowSize();

   const handleNext = () => {
    setRespuesta("");
    reloadPokemon();
  };

  useEffect(() => {
    if (respuesta.trim().length>0) {
      console.log(respuesta,"entro al useEffect");
      
      if (name === respuesta) {
        setVictorias(victorias + 1);
      } else {
        setDerrotas(derrotas + 1);
      }
    }
  }, [respuesta, name]);

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
      {name === respuesta && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
          colors={['#ff0', '#ff3', '#ff5', '#ff7', '#ff9', '#ffb', '#ffd', '#fff']}
          gravity={0.1}
        />
      )}
      <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-4 relative">
        <Link  to="/dashboard" className="absolute top-0 md:-left-22 left-0 py-2 px-4 border text-sm text-left bg-orange-600 text-white hover:bg-orange-700 duration-200 rounded-lg">Regresar</Link>
        <h1 className="text-4xl font-bold text-center text-yellow-400 animate-pulse">
          ¿Quién es ese Pokémon?
        </h1>
        <PokemonDisplay
          pokemon={data}
          respuesta={respuesta}
          loading={loading}
          error={error}
        />
        
        <div className="text-sm">Probar con otro Pokemon:  
          <button onClick={handleNext} className="hover:scale-105 hover:text-green-600 duration-200 px-2 py-1 rounded-lg border border-green-500 cursor-pointer ml-2">Volver a cargar</button>
        </div>
        
        <PokemonForm setResultado={setRespuesta} resultado={respuesta}/>
        <PokemonResult
          respuesta={respuesta}
          handleNext={handleNext}
          name={name}
        />
        <GameStats victorias={victorias} derrotas={derrotas} />
      </div>
      <footer className="text-center text-gray-500 mt-6">
        <p>Hecho con ❤️ por un fan de Pokémon</p>
      </footer>
    </main>
  );
}


export default GamePokemon;