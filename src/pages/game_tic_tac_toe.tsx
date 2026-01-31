import { Link } from "react-router";
import Game from "../components/feature-tic-tac-toe/game";

const TicTacToe = () => {
  return (
    <div className="w-full  border h-screen bg-gray-600 text-black flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-4 border rounded-2xl bg-gray-300">
        <div className="text-center">
          <Link
            to={"/dashboard"}
            className="py-2 px-4 border text-sm text-left bg-orange-600 text-white hover:bg-orange-700 rounded-lg"
          >
            Ir al Dashboard
          </Link>
        </div>
        <h1 className="py-4">Bienvenido juego Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
};
export default TicTacToe;
