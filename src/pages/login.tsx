import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario !== "jaime" || pass!=="admin") {
      setMensaje("Credencial Incorrecto");
      return;
    }

    navigate("/dashboard");
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center  text-white 
    bg-[url(/fondo-principal.png)] bg-white/90"
    >
      <div className=" p-2 rounded bg-white bg-opacity-75 space-y-3">
        <div className="w-lg h-64 bg-[url(/fondo-principal.png)] bg-cover bg-center  text-center">
          <div className="bg-white bg-opacity-75 h-full flex items-center justify-center">
            <p className="block text-shadow m-auto h-fit shadow-amber-500 bg-linear-to-r from-pink-500 to-violet-950 bg-clip-text text-5xl font-extrabold text-transparent">
              Bienvenido a tu pagina de diversiones!
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-fit mx-auto text-2xl px-5 py-3 rounded-3xl font-extrabold bg-green-700 text-white">
            User Login
          </div>
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            <div className="w-fit mx-auto relative">
              <input
                type="text"
                className="bg-gray-700 font-bold text-3xl w-sm text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-8 focus:ring-yellow-500 transition-all duration-300"
                placeholder="Ingrese el Usuario"
                onChange={(e) => setUsuario(e.target.value)}
              />
              <i className="bi bi-person absolute left-1 top-1.5 text-3xl"></i>
            </div>
            <div className="w-fit mx-auto relative">
              <input
                type="password"
                className="bg-gray-700 font-bold text-4 w-sm text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-8 focus:ring-yellow-500 transition-all duration-300"
                placeholder="Ingrese el Password"
                 onChange={(e) => setPass(e.target.value)}
              />

              <i className="bi bi-lock absolute left-1 top-1.5 text-3xl"></i>
            </div>

            <button className="hover:scale-105 duration-150 w-fit mx-auto block text-2xl px-5 py-3 rounded-2 font-extrabold bg-gray-950 text-white">
              {" "}
              Login
            </button>
          </form>
          {mensaje && <p className="text-red-200 p-3 bg-red-700">{mensaje}<button className="pl-5 hover:font-bold text-5xl  rounded-3" onClick={() => setMensaje("")}>x</button></p>}
          <p className="text-gray-300 py-3 font-serif text-center italic  bg-blue-800 ">
            Demo User: jaime Password:admin
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
