
type Icono =  "X" |  "O"

interface props {
  onHandlerClick: () => void,
  value: Icono | null,
  casillaGanadora?:boolean
}

const Square = ({value, onHandlerClick, casillaGanadora}:props) => {

  return (
      <button className={"h-14 w-14 flex  justify-center items-center border font-bold  hover:scale-105 duration-200 "+ (casillaGanadora ? "border-amber-800 text-amber-800 bg-amber-300" : " border-blue-400 bg-blue-800 text-white")}
        onClick={onHandlerClick}
      ><span className="text-2xl">{ !!value && value }</span></button>
  )
}
export default Square