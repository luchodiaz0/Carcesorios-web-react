import React from 'react';
import BarraPerfil from '../../components/9.BarraPerfil'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Carrusel from '../../components/4.Carrusel';
import Titulo from '../../components/5.Titulo';
import ListaProductos from '../../components/6.ListaProductos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function PaginaPrinUser() {

    return (
        <div>
                <BarraPerfil nombreUsuario='Luis Díaz'/>
                <Informacion link1={'/PaginaPrincipalCliente'}/>
                <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'}/>
                <Carrusel />
                <Titulo />
                <ListaProductos link1={'/volantesUser'}/>
                <PieUno />
                <PieDos />
        </div>
    )
}
export default PaginaPrinUser;