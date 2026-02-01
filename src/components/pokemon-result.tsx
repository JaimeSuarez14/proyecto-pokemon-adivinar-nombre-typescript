interface PokemonResultProps {
  respuesta: string;
  name: string;
  handleNext: () => void;
}

const PokemonResult = ({ respuesta, handleNext, name }: PokemonResultProps) => {
  if (!respuesta) {
    return null;
  }

  const esCorrecto = name === respuesta;

  return (
    <div className={`text-center p-4 rounded-lg ${esCorrecto ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}>
      <h2 className="text-2xl font-bold">
        {esCorrecto ? '¡Correcto!' : '¡Incorrecto!'}
      </h2>
      {!esCorrecto && <p className="text-lg">El pokémon era: {name}</p>}
      <button
        onClick={handleNext}
        className="mt-4 bg-gray-900 text-white font-bold rounded-3 px-4 py-2 hover:bg-gray-700 transition-all duration-300  transform hover:scale-105"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PokemonResult;