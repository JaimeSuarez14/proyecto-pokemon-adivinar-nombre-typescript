import { useState } from "react";
import Board from "./board";

type Icono = "X" | "O";

const Game = () => {
  const [history, setHistory] = useState<(Icono | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (copiaSquares: (Icono | null)[]) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      [...copiaSquares],
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const resetearJuego = () => {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  };

  const saltaA = (position: number) => {
    setCurrentMove(position);
  };

  return (
    <div className="m-6 flex justify-center gap-3 ">
      <div>
        <Board
          squares={currentSquares}
          xIsNext={xIsNext}
          resetearJuego={resetearJuego}
          onPlay={handlePlay}
        />
      </div>
      <div className="flex flex-col">
        <p>Historial de juego</p>
        {history.map((p, index) => (
          <button
            key={index}
            className="py-0.5 px-2 border  text-sm text-left bg-blue-800 text-white hover:bg-blue-900 rounded-lg"
            onClick={() => saltaA(index)}
          >
            {index >= 1 ? p : "Inicio del Juego"}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Game;
