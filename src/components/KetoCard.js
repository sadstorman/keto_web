export const KetoCard = ({
    nombre,
    keto,
    tipo,
    emoji,
    sinonimo
}) => {

    // const imagePath = `../assets/food/${nombre}.jpg`;
    const imagePath = `../assets/food/brocoli.jpg`;
    return (

        <div className='col-12  col-md-6 col-lg-4 col-xl-3 my-4'>

            <div className="card  bg-dark">
                <img src={imagePath} className="card-img-top animate__animated animate__fadeIn " alt={nombre} />

                <div className="card-body text-center animate__animated animate__fadeIn">

                    <h3 className="card-title text-uppercase text-titulo">{nombre}</h3>
                    <h4 className="card-text mt-3 texto">Valor keto: {keto} <p>&#128516;</p></h4>

                    <div className="">

                        <p className="card-header letraycolor">Tipo de alimento:</p>
                        <div className="card-body">
                            <p className="card-text ">{tipo}</p>
                        </div>

                        <p className="card-header letraycolor">Otros nombres:</p>
                        <div className="card-body">
                            <p className="card-text font-weight-light">{sinonimo}</p>
                        </div>
                    </div>


                    {/* <Link to={`/hero/${id}`}>
                        Más...
                    </Link> */}

                </div>
            </div>
        </div>

    )
}