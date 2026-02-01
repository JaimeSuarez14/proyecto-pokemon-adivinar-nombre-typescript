
import { useState } from "react";

interface PokemonFormProps {
  setResultado: (value: string) => void;
  resultado: string;
}

const PokemonForm = ({ setResultado, resultado }: PokemonFormProps) => {
  const [pokemon, setPokemon] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResultado(pokemon.toLowerCase());
    setPokemon("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
      <input
        type="text"
        value={pokemon}
        disabled={resultado.length>0}
        onChange={(e) => setPokemon(e.target.value)}
        placeholder="Ingresa el nombre del pokémon"
        className="bg-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
      />
      <button
        disabled={pokemon.trim().length< 3}
        type="submit"
        className="block bg-yellow-400 text-2xl disabled:bg-gray-300 text-gray-900 font-bold rounded-3 px-4 py-2 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:scale-100"
      >
        ¡Adivinar!
      </button>
    </form>
  );
};

export default PokemonForm;
