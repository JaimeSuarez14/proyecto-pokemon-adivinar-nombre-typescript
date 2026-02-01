import Square from "./square";

type Icono = "X" | "O";

interface props {
  squares: (Icono | null)[],
  xIsNext: boolean,
  onPlay: ( e:(Icono | null)[] ) => void,
  resetearJuego: () => void
}

const Board = ({onPlay, squares, xIsNext, resetearJuego}:props) => {

  const handlerClick = (i: number) => {
    if (squares[i] || getWinner()) return;
    const copiaSquares = squares.slice();
    if (xIsNext) copiaSquares[i] = "X";
    else copiaSquares[i] = "O";
    onPlay(copiaSquares)

  };

  const getWinner = () => {
    const lista = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let ganador;

    for (let i = 0; i < lista.length; i++) {
      const [a, b, c] = lista[i];      
      if (!!squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
       ganador = lista[i];
    }

    return ganador || null;
  };

  const status = getWinner();
  const completo = squares.every(p=> p!==null)

  return (
    <div className="grid grid-cols-3 place-items-center border rounded-lg w-fit gap-3 border-black bg-gray-400 mx-auto h-fit my-auto p-4 ">
      <div className="col-span-3 py-3 space-y-2 text-black">
        <p className="font-bold">
          {status
            ? "El ganador es " + squares[status[0]]
            : completo ? "Juego Terminado: Empate": "El turno es de " + (xIsNext ? "X" : "O")}
        </p>
        { 
          (status || completo) && 
          (<button 
            onClick={resetearJuego}
            className="px-3 py-2 border bg-amber-800 text-white hover:bg-amber-700 rounded-lg">Reiniciar el juego</button>)
        }
      </div>

      {squares.map((square, index) => (
        
        (
        (status && status.some(s => s ===index)) ?
        <Square
          key={index}
          value={square}
          casillaGanadora = {true}
          onHandlerClick={() => handlerClick(index)}
        /> : 
          <Square
          key={index}
          value={square}
          onHandlerClick={() => handlerClick(index)}
        />
      )
      ))}
    </div>
  );
};
export default Board;
