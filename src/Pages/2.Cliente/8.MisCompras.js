import React, { useState, useEffect } from 'react'
import '../../Styles/StylesComponents/12.Comprar.css'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import BarraPerfil from '../../components/9.BarraPerfil'
import MisCompras from '../../components/13.MisCompras'

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
            <MisCompras/>
            <PieUno />
            <PieDos />
        </div>
    )
}
export default Comprar;