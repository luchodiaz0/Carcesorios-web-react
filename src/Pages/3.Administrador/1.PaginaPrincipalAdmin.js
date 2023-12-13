import React from 'react';
import "../../Styles/StylesPages/4.PaginaPrincipalAdmin.css"
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
                <Informacion link1={'/PaginaPrincipalAdmin'}/>
                <HeaderDos link1={"/PaginaPrincipalAdmin"} link2={'OfertasAdmin'} link3={'/AyudaUser'}/>
                <Carrusel />
                <Titulo />
                <ListaProductos link1={'/VolantesAdmin'}/>
                <div className='w-33'>
                    <div className='center'>
                        <button className='boton'>Agregar categoria</button>
                    </div>
                </div>
                <PieUno />
                <PieDos />
        </div>
    )
}
export default PaginaPrinUser;