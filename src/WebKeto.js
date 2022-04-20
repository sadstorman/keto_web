import React, { Suspense, lazy, useMemo } from 'react'
import { food } from './data/food'
import { useForm } from './hooks/useForm'
import { getFoodByName } from './selectors/getFoodByName'
import 'bootstrap/dist/css/bootstrap.min.css';
import KetoCardLoading from './components/KetoCardLoading';
import ScrollToTop from './components/ScrollToTop';
const KetoCard = lazy(() => import('./components/KetoCard'))

export const WebKeto = () => {

    const style = {
        "margin": "auto",
        "maxWidth": "350px",
        "outline": "none"
    }

    const initialForm = {
        searchText: '',
        value: 'nombre'
    }

    const [formValues, handleInputChange] = useForm(initialForm)
    const { searchText, value } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const q = searchText
    const q2 = value
    const foodFilter = useMemo(() => getFoodByName(q, q2), [q, q2])

    return (
        <div className=''>
            <ScrollToTop />
            <h1 className='text-center'>Keto food search</h1>

            <div className='container-fluid width mt-4'>
                <div className=' '>
                    <h5 className='text-center descrip'>Desde esta web podra realizar facilmente una busqueda de diferentes alimentos puntuados del 1 al 5 <small> (estimado)</small>,
                        por lo que un alimento valuado en 5 es recomendable para la dieta keto, mientras que uno con 2 puntos es poco recomendable.</h5>
                    <p className='parrafo text-center'><a className='anchorTag' href='#info'><u>+info</u></a></p>

                </div>
            </div>

            <div>
                <h2 className='sub-title2 text-center '>Cuales son alimentos Keto?</h2>

                    <form onSubmit={handleSubmit} className='input-group' style={style}>

                        <select className=" form-select filterSelect text-white w-25" name="value" value={value} onChange={handleInputChange} aria-label="Default select example">
                            <option className='text-black' defaultValue="nombre">Nombre</option>
                            <option className='text-black' value="keto">Valor</option>
                            <option className='text-black' value="sinonimo">sinonimo</option>
                        </select>

                        <input className='form-control w-50' autoComplete='off' type="text" placeholder="Buscar..." name="searchText" value={searchText} onChange={handleInputChange}  />
                        <button type="submit"><i className="fa fa-search"></i></button>

                    </form>
            </div>

            <div className='row  mt-3 mx-2'>
                <div className=''>

                    <div className='row animate__animated animate__fadeIn '>
                        <Suspense fallback={<KetoCardLoading />}>
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
                        </Suspense>

                    </div>
                </div>
            </div>
        </div>
    )
}
