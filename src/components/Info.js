import React from 'react'

export const Info = () => {
  return (
    <div>
      <h1 className='text-center   bold'>Que alimento es keto?</h1>

      <div className='container width'>

        <div className=' '>
          <h5 className='sub-texto text-center descrip'> Primero que nada, en que se basa la alimentación keto? la dieta se basa en el consumo de alimentos ricos en grasas y proteinas,
            esto significa que hay que evitar los alimentos que contienen carbohidratos (o comer lo menor posible de estos)</h5>
          <p className='parrafo text-center'>entonces...</p>
          <h5 className='text-center descrip'>Desde esta web podra realizar facilmente una busqueda de diferentes alimentos puntuados del 1 al 5 <small> (estimado)</small>,
            por lo que un alimento valuado en 5 es recomendable para la dieta keto, mientras que uno con 2 puntos es poco recomendable.</h5>
        </div>

        <h1 className='text-center infoText'> De donde obtener todavia mas info?  </h1><small className='text-white'>*basado en mis recomendaciones</small>


      </div>


      <div className='container'>

        <div className='row g-4'>

          <div className="col-12 col-md-12 col-lg-6">
            <section className="box style1">
              <img src="../assets/img/phil.jpg"
                className="imgInfo rounded" alt="perfil" />
              <h3 className='text-black'>PHIL HUGO</h3>
              <p>Farmaceutico y coach</p>
              <ul className='social'>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/PhilHugoFarmac%C3%A9uticoPersonalTrainer"
                  className="icon brands bi bi-youtube"><span className="label">Youtube</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thephilhugo/" className="icon brands bi bi-instagram"><span
                  className="label">Instagram</span> </a></li>

              </ul>
            </section>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <section className="box style1">
              <img src="../assets/img/juanbola.jpg"
                className="imgInfo rounded" alt="perfil" />
              <h3 className='text-black'>JUAN BOLA</h3>
              <p>Nutrición Humana y Dietética</p>
              <ul className='social'>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCUcKXgedDT0fa1SEtLxuPgg"
                  className="icon brands bi bi-youtube"><span className="label">Youtube</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juanbolanutritrainer/" className="icon brands bi bi-instagram"><span
                  className="label">Instagram</span> </a></li>

              </ul>
            </section>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <section className="box style1">
              <img src="../assets/img/nutrillermo.jpg"
                className="imgInfo rounded" alt="perfil" />
              <h3 className='text-black'>Nutrillermo</h3>
              <p>Doctor in Human Nutrition, PhD, FACN, CNS, LDN</p>
              <ul className='social'>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/Nutrillermo"
                  className="icon brands bi bi-youtube"><span className="label">Youtube</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nutrillermo/" className="icon brands bi bi-instagram"><span
                  className="label">Instagram</span> </a></li>

              </ul>
            </section>
          </div>

          <div className="col-12 col-md-12 col-lg-6 mb-4">
            <section className="box style1">
              <img src="../assets/img/diego.jpg"
                className="imgInfo rounded" alt="perfil" />
              <h3 className='text-black'>Diego Caceres</h3>
              <p>Lic. Nutrición | MSc en tecnologia de alimentos</p>
              <ul className='social'>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC-_qBg4h0MQQ4r7ckn0gGig"
                  className="icon brands bi bi-youtube"><span className="label">Youtube</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lic_diego_caceres/" className="icon brands bi bi-instagram"><span
                  className="label">Instagram</span> </a></li>

              </ul>
            </section>
          </div>

        </div>

      </div>

    </div>
  )
}
