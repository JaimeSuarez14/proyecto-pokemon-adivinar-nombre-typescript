
type Icono =  "X" |  "O"

interface props {
  onHandlerClick: () => void,
  value: Icono | null,
  casillaGanadora?:boolean
}

const Square = ({value, onHandlerClick, casillaGanadora}:props) => {

  return (
      <button className={"h-14 w-14 flex text-black justify-center items-center border font-bold hover:scale-105 duration-200 "+ (casillaGanadora ? "border-amber-800 text-amber-800 bg-amber-300" : " border-green-950 ")}
        onClick={onHandlerClick}
      ><span className="text-2xl">{ !!value && value }</span></button>
  )
}
export default Square