import React, { Suspense, lazy, useMemo } from 'react'

import { food } from './data/food'
import { useForm } from './hooks/useForm'
import { getFoodByName } from './selectors/getFoodByName'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, InputGroup, Stack } from 'react-bootstrap'
import { getFoodByKeto } from './selectors/getFoodByketo'
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
        searchText: ''
    }

    const [formValues, handleInputChange] = useForm(initialForm)
    const { searchText } = formValues

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault()
    }
    const q = searchText
    const foodFilter = useMemo(() => getFoodByName(q), [q]);

    const handleSelect = (e) => {
        console.log(e);
    }


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

                <Stack gap={0} direction="horizontal" className='justify-content-center'>

                    <InputGroup onSubmit={handleSubmit} style={style} size="lg">

                        <DropdownButton
                            alignRight
                            title="Filtro"
                            id="dropdown-menu-align-responsive-1"
                            onSelect={handleSelect}
                            size="lg"
                            autoClose="true"
                        >
                            <Dropdown.Item eventKey="nombre">Nombre</Dropdown.Item>
                            <Dropdown.Item eventKey="valor-keto">Valor Keto</Dropdown.Item>
                            <Dropdown.Item eventKey="tipo-de-alimento">Tipo de alimento</Dropdown.Item>
                            <Dropdown.Item eventKey="otros-nombres">Otros nombres</Dropdown.Item>
                        </DropdownButton>

                        <input autoComplete='off' type="text" placeholder="Buscar..." name="searchText" value={searchText} onChange={handleInputChange} />
                        <Button type="submit"><i className="search fa fa-search"></i></Button>

                    </InputGroup>

                </Stack>
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
