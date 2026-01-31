import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./pages/login";
import GamePokemon from "./pages/game-pokemon";
import Dashboard from "./pages/dashboard";
import TicTacToe from "./pages/game_tic_tac_toe";

export const router  = createBrowserRouter([
  { 
    path: "/", 
    Component: App, 
    children: [
      {
        index: true,
        Component: Login
      },
      {
        path:"dashboard",
        Component: Dashboard
      },
      {
        path:"game_pokemon",
        Component: GamePokemon
      },
      {
        path:"tictactoe",
        Component: TicTacToe
      }
  ]
  },
])