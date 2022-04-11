import React, { useMemo } from 'react'
import { KetoCard } from './components/KetoCard'
import { food } from './data/food'
import { useForm } from './hooks/useForm'
import { getFoodByName } from './selectors/getFoodByName'

export const WebKeto = () => {

    const style = {
        "margin": "auto",
        "maxWidth": "350px"
    }

    const initialForm = {
        searchText: ''
    }

    const [formValues, handleInputChange] = useForm(initialForm)
    const { searchText } = formValues

    const handleSubmit = (e) => {
        console.log(searchText);
        e.preventDefault()
    }
    const q = searchText
    const foodFilter = useMemo(() => getFoodByName(q), [q])

    return (
        <div className=''>
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

            <div>
                <h2 className='sub-title2 text-center mt-3'>Cuales son alimentos Keto?</h2>

                <div>
                    <form className="example" onSubmit={handleSubmit} style={style}>
                        <input type="text" placeholder="Buscar.." name="searchText" value={searchText} onChange={handleInputChange} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>

            <div className='row  mt-3'>

                <div className='col-2'>

                </div>

                <div className='col-8'>

                    <div className='row animate__animated animate__fadeIn mt-6 '>
                        {
                            (searchText === '') &&
                            food.map(alimento => (
                                <KetoCard key={alimento.nombre} {...alimento} />
                            ))
                        }
                        {
                            (searchText !== '') &&
                            foodFilter.map(alimento => (
                                <KetoCard key={alimento.nombre} {...alimento} />
                            ))
                        }
                    </div>

                </div>

                <div className='col-2 colDerecha'>
                </div>



            </div>

        </div>
    )
}
