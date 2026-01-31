import { Link } from "react-router"
import Game from "../components/feature-tic-tac-toe/game"

const TicTacToe = () => {
  return (
    <div className="w-full  border h-screen text-black ">
      <Game />
      <div className="text-center">
        <Link to={"/dashboard"} className="py-2 px-4 border text-sm text-left bg-orange-600 text-white hover:bg-orange-700 rounded-lg" >Ir al Dashboard</Link>
      </div>
    </div>
  )
}
export default TicTacToe