import { useCallback, useEffect, useState } from "react";

const useApiFetch = <T extends { name: string; image: string }>(
  url: string,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const consumirApi = useCallback(async (): Promise<void> => {
    setLoading(false);
    setError(null);
    setData(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error en la peticion");
      }
      const fulldata = await res.json();
      console.log(fulldata?.name);
      const extraData: T = {
        name: fulldata.name,
        image: fulldata.sprites.other["official-artwork"].front_default,
      } as T;
      setData({ data, ...extraData });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      console.log(error);
      setError("Error desconocido");
    } finally {
      setLoading(true);
    }
  }, [url]);

  useEffect(() => {
    consumirApi();
  }, [consumirApi]);

  return { data, error, loading };
};

export default useApiFetch;
