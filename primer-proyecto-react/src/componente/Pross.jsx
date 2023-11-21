import { useState } from "react"
import '../componentecss/seccionprincipal.css'
import { Agregartarea } from "./agregartarea"
const Items =({nombre, visto}) =>{
  return(
    <>
      <il className='Items'> {nombre} {visto ? '✅':'❌'}
      </il>
    </>
  )
}

export const Pross = () => {

  let lista= [
    {nombre:"john", visto: true,},
    {nombre:"julio", visto: false,},
    {nombre:"luis", visto: true,} ,
  ]

  const[arreglo, setarreglo] = useState(lista)

  return (
    <>
      <h1>lista</h1>
      <Agregartarea agregartarea={setarreglo}></Agregartarea>
      <ol>
        {arreglo.map(item => <Items nombre={item.nombre} visto={item.visto} key={item.nombre}/>)}
      </ol>
    </>
     )
}
