import React from 'react'
import '../Styles/StylesComponents/6.ListaProductos.css'
import Producto from '../Assets/4.Categorias/1.Volante.png'
import ProductoDos from '../Assets/4.Categorias/2.Palanca.png'
import ProductoTres from '../Assets/4.Categorias/3.Aleron.png'
import ProductoCuatro from '../Assets/4.Categorias/4.T_aire.png'
import ProductoCinco from '../Assets/4.Categorias/5.T_escape.png'
import ProductoSeis from '../Assets/4.Categorias/6.Rines.png'
import ProductoSiete from '../Assets/4.Categorias/7.Llantas.png'
import ProductoOcho from '../Assets/4.Categorias/8.Body_kit.png'

function ListaProductos(props){
    return(
        <section id="ListaProductos">

            <div class="caja">
                    <a href={props.link1}><img src={Producto} alt="1"/><h2>Volantes <br/> Deportivos</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoDos} alt="1"/><h2>Palancas de <br/> Cambio</h2></a>
            </div >

            <div class="caja">
                    <a href="#!"><img src={ProductoTres} alt="1"/><h2>Alerones</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoCuatro} alt="1"/><h2>Tomas de aire</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoCinco} alt="1"/><h2>Tubos de <br/> escape</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoSeis} alt="1"/><h2>Rines de lujo</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoSiete} alt="1"/><h2>Llantas <br/> deportivas</h2></a>
            </div>

            <div class="caja">
                    <a href="#!"><img src={ProductoOcho} alt="1"/><h2>Body kit</h2></a>
            </div>

        </section>
    )
}
export default ListaProductos;