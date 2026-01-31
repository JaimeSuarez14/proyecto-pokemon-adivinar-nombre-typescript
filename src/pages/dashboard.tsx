import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div
      className="w-full min-h-screen  text-white 
    bg-[url(/fondo-principal.png)]  bg-opacity-50 bg-amber-300"
    >
      <div className="bg-black bg-opacity-50 w-full h-screen flex justify-center items-center " >
        <div>
          <p className="text-6xl mx-auto font-bold p-3 bg-blue-950 text-center w-fit">
            Dashboard
          </p>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="h-32 w-64 border flex items-center justify-center bg-linear-to-r from-pink-500 to-violet-950  ">
              <Link
                className="text-2xl text-white font-bold text-decoration-none"
                to={"/game_pokemon"}
              >
                Jugar Tic Tac Toe
              </Link>
            </div>
            <div className="h-32 w-64 border flex items-center justify-center bg-linear-to-r from-pink-500 to-violet-950  ">
              <Link
                className="text-2xl text-center text-white font-bold text-decoration-none"
                to={"/game_pokemon"}
              >
                Jugar Adivina Pokemon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
