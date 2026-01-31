
type Icono =  "X" |  "O"

interface props {
  onHandlerClick: () => void,
  value: Icono | null,
  casillaGanadora?:boolean
}

const Square = ({value, onHandlerClick, casillaGanadora}:props) => {

  return (
      <button className={"h-14 w-14 flex  text-black justify-center items-center border font-bold text-2xl "+ (casillaGanadora ? "border-amber-800 text-amber-800 bg-amber-300" : "border-black dark:border-white ")}
        onClick={onHandlerClick}
      >{ !!value && value }</button>
  )
}
export default Square