import React, { useState, useEffect } from 'react'
import '../../Styles/StylesComponents/12.Comprar.css'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import BarraPerfil from '../../components/9.BarraPerfil'
import Nequi from '../../Assets/2.Iconos/nequi.png'
import Daviplata from '../../Assets/2.Iconos/daviplata.png'

function Comprar() {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/Ayuda')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    return (
        <div>
            <BarraPerfil nombreUsuario={'Luis Diaz'} />
            <Informacion link1={'/PaginaPrincipalCliente'}/>
            <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'} />
            <div className="container mt-5 todo">
      <h2 className='titulo'>Continuar con la compra</h2>
        <div className='cuadros rounded'>
        <div className="row mt-4">
        <div className="col-md-6 cuadro1">
          <h4>Pago con Daviplata</h4>
          <div>
            <p>Número de teléfono: 3144194334</p>
            <img
              src={Daviplata}
              alt="Daviplata"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="col-md-6 cuadro1">
          <h4>Pago con Nequi</h4>
          <div>
            <p>Número de teléfono: 3144194334</p>
            <img
              src={Nequi}
              alt="Nequi"
              width="80"
              height="80"
            />
          </div>
        </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <button className="btn btn-primary boton">Ya hice el pago</button>
        </div>
      </div>
    </div>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default Comprar;