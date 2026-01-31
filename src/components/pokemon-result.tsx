interface PokemonResultProps {
  respuesta: string;
  setRespuesta: (value: string) => void;
  name: string;
  reloadPokemon: () => void;
}

const PokemonResult = ({ respuesta, setRespuesta, name, reloadPokemon }: PokemonResultProps) => {
  if (!respuesta) {
    return null;
  }

  const esCorrecto = name === respuesta;

  const handleNext = () => {
    setRespuesta("");
    reloadPokemon();
  };

  return (
    <div className={`text-center p-4 rounded-lg ${esCorrecto ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}>
      <h2 className="text-2xl font-bold">
        {esCorrecto ? '¡Correcto!' : '¡Incorrecto!'}
      </h2>
      {!esCorrecto && <p className="text-lg">El pokémon era: {name}</p>}
      <button
        onClick={handleNext}
        className="mt-4 bg-gray-900 text-white font-bold rounded-lg px-4 py-2 hover:bg-gray-700 transition-all duration-300"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PokemonResult;