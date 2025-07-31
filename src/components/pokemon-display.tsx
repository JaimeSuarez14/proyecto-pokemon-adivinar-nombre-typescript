import { useEffect, useState } from "react";
import type { PokemonPartial } from "../hooks/PokemonPartial ";

interface props {
  pokemon: PokemonPartial | null;
  respuesta: string;
  loading: boolean;
  error: string | null;
}

const PokemonDisplay = ({ pokemon, respuesta, loading, error }: props) => {
  const { name, image } = pokemon || { name: "", image: "" };

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    respuesta.trim().length > 0 ? setShowAnswer(true): setShowAnswer(false);
  }, [respuesta]);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {showAnswer ? name.toUpperCase(): "¿Quien es este pokemon?"}
        </h1>
      </div>

      <div className="card-body">
        {!loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : !error ? (
          <img
            src={image ?? undefined}
            alt={name ?? undefined}
            className="img-fluid mx-auto d-block"
            style={{
              maxHeight: "300px",
              filter: showAnswer ? "none" : "brightness(0)",
              transition: "filter 0.5s ease-in-out",
            }}
          />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
