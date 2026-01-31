
import { useState } from "react";

interface PokemonFormProps {
  setResultado: (value: string) => void;
}

const PokemonForm = ({ setResultado }: PokemonFormProps) => {
  const [pokemon, setPokemon] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResultado(pokemon.toLowerCase());
    setPokemon("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        placeholder="Ingresa el nombre del pokémon"
        className="bg-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-gray-900 font-bold rounded-lg px-4 py-2 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
      >
        ¡Adivinar!
      </button>
    </form>
  );
};

export default PokemonForm;
