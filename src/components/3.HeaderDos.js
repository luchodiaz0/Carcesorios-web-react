import React from 'react'
import '../Styles/StylesComponents/3.HeaderDos.css'

function HeaderDos(props){
    return(
        <header id="Cabecera2">

            <div class="MenuCabecera2">
                <nav class="Menu2">
                    <ul>
                        <li class="m1"><a href={props.link1}><h4 class="C1">Inicio</h4></a></li>
                        <li class="m2"><a href={props.link2}><h4 class="C2">%Ofertas</h4></a></li>
                        <li class="m3"><a href={props.link3}><h4 class="C2">Ayuda/PQR</h4></a></li>
                    </ul>
                </nav>
            </div>

            <form class="Barra_navegacion">
                <input type="text" className="form-control" placeholder="Busca lo que necesites aquí" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button class="btn btn-warning" type="button">Buscar</button>
            </form>

        </header>
    )
}
export default HeaderDos;