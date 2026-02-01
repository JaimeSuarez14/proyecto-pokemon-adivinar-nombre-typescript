import { useState } from "react";
import useApiFetch from "../hooks/ApiFetch"
import type { PokemonPartial } from "../hooks/PokemonPartial ";
import pokemoAletorio from "../hooks/ValorAleatorio";

const useGeneralService = () => {

  const [url, setUrl] = useState<string>(() => {
    const aleatorio = pokemoAletorio();
    return `https://pokeapi.co/api/v2/pokemon/${aleatorio}`;
  });

  const values = useApiFetch<PokemonPartial>(url);
  
  const reloadPokemon = () => {
    const newAleatorio = pokemoAletorio();
    setUrl(`https://pokeapi.co/api/v2/pokemon/${newAleatorio}`);
  };


  return { ...values, reloadPokemon };

}

export default useGeneralService;