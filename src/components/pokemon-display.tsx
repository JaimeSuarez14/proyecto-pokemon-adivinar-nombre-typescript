import { type PokemonPartial } from "../hooks/PokemonPartial ";

interface PokemonDisplayProps {
  pokemon: PokemonPartial | null;
  respuesta: string;
  loading: boolean;
  error: string | null ;
} 

const PokemonDisplay = ({ pokemon, respuesta, loading, error }: PokemonDisplayProps) => {
  if (!loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}; <br /> Inténtalo de nuevo en unos minutos.</p>;
  }

  return (
    <div className="relative flex justify-center items-center h-64">
      <img
        src={pokemon?.image}
        alt="pokemon"
        className={`transition-all duration-700 ease-in-out hover:-rotate-10 transform hover:scale-110   animate-wiggle ${respuesta ? 'brightness-100' : 'brightness-0'} w-64 h-64`}
      />
      {!respuesta && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-64 md:w-72 h-64 bg-yellow-950 rounded-xl animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default PokemonDisplay;