import { useEffect, useState } from "react";

interface props {
  reloadPokemon: () => void;
  respuesta: string;
  setRespuesta: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const PokemonResult = ({ name, respuesta,setRespuesta, reloadPokemon }: props) => {
  const [validador, setValidador] = useState(false);

  const handleReset = () => {
    setRespuesta("");
    reloadPokemon();
  };

  useEffect(() => {
    setValidador(respuesta.toLowerCase() === name.toLowerCase());
  }, [respuesta, name]);

  return (
    <>
      {respuesta.length > 0 && (
        <div
          className={`alert alert-${
            validador ? "success" : "danger"
          } text-center`}
          role="alert"
        >
          <div className="col fw-bold">
            {validador ? (
              <span>Respuesta Correcta! 😁</span>
            ) : (
              <span>Respuesta Incorrecta! 😢</span>
            )}
          </div>
          <div className="col">
            <button
              onClick={handleReset}
              className={`btn btn-outline-${
                validador ? "success" : "danger"
              } mt-3`}
            >
              Volver a Jugar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonResult;
