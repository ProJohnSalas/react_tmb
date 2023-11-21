import React, { useState } from 'react'

export const Agregartarea = ({agregartarea}) => {
    const [inputvalue, setInputvalue]= useState('')
    const oninputchange = (event) =>{
        setInputvalue(event.target.value)
    }
    const onSubmit = (event) => {
      const envio = {
        nombre: inputvalue,
        visto:false,
        key: 7
      }
      event.preventDefault()
      console.log(inputvalue)
      agregartarea(tareas=>[...tareas, envio])
    }
    
  return (
   <form onSubmit={onSubmit}>
          <input type="text" placeholder='ingresar tarea nueva' 
              value={inputvalue}
              onChange={oninputchange}/>
    </form>

    
  )
}
