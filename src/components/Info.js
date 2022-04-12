import React from 'react'

export const Info = () => {
  return (
    <div>
      <h1 className='text-center   bold'>Que alimento es keto?</h1>


      <div className='container-fluid width'>
        <div className=' '>
          <h5 className='sub-texto text-center descrip'> Primero que nada, en que se basa la alimentación keto? la dieta se basa en el consumo de alimentos ricos en grasas y proteinas,
            esto significa que hay que evitar los alimentos que contienen carbohidratos (o comer lo menor posible de estos)</h5>
          <p className='parrafo text-center'>entonces...</p>
          <h5 className='text-center descrip'>Desde esta web podra realizar facilmente una busqueda de diferentes alimentos puntuados del 1 al 5 <small> (estimado)</small>,
            por lo que un alimento valuado en 5 es recomendable para la dieta keto, mientras que uno con 2 puntos es poco recomendable.</h5>
        </div>
      </div>
    </div>
  )
}
