interface GameStatsProps {
  victorias: number;
  derrotas: number;
}

const GameStats = ({ victorias, derrotas }: GameStatsProps) => {

  const total = victorias + derrotas;
  const porcentajeEfectividad = total > 0 ? (victorias / total) * 100 : 0;

  const mensajito = porcentajeEfectividad==100 ? "Eres todo un maestro pokemon!!" : porcentajeEfectividad<=99 && porcentajeEfectividad>75 ? "Casi eres un maestro pokemon!!" : 
        porcentajeEfectividad<=75 && porcentajeEfectividad> 50 ? "Estas en un camino por el liderazgo pokemon!!" : porcentajeEfectividad<=50 && porcentajeEfectividad>20 ? "Los maestros no se forman en un dia, sigue intentandolo!!" : "La proxima vez demostraraas tu valentia en este reto!!"
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-around text-center mt-2">
        <div>
          <p className="text-2xl font-bold text-green-500">{victorias}</p>
          <p className="text-sm text-gray-400">Victorias</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-500">{derrotas}</p>
          <p className="text-sm text-gray-400">Derrotas</p>
        </div>
      </div>
      <div>
        {total>0 && (<p className="text-center">
          Porcentaje de efectividad: <span className=" text-2xl font-bold text-yellow-400">{porcentajeEfectividad.toFixed(0)}%</span> 
        </p>)}
        <p className="text-center text-gray-400 text-cursive">
          <small>{mensajito}</small></p>
      </div>
    </div>
  );
};

export default GameStats;
