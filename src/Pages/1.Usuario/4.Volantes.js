import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import Producto from '../../Assets/5.Productos/1.Volante.png'
import ProductoDos from '../../Assets/5.Productos/2.Volante.png'
import ProductoTres from '../../Assets/5.Productos/3.Volante.png'
import ProductoCuatro from '../../Assets/5.Productos/4.Volante.png'
import ProductoCinco from '../../Assets/5.Productos/5.Volante.png'
import ProductoSeis from '../../Assets/5.Productos/6.Volante.png'
import ProductoSiete from '../../Assets/5.Productos/7.Volante.png'
import ProductoOcho from '../../Assets/5.Productos/8.Volante.png'

import '../../Styles/StylesComponents/6.ListaProductos.css'
import '../../Styles/StylesComponents/5.Titulo.css'

import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Carrusel from '../../components/4.Carrusel';
import Titulo from '../../components/5.Titulo';
import ListaProductos from '../../components/6.ListaProductos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const Volantes = () => {

        const [Titulo, setTitulo] = useState([])

        useEffect(() => {
                const getTitulo = () => {
                        fetch('http://localhost:4000/carcesorios/volantes')
                                .then(res => res.json())
                                .then(res => setTitulo(res))
                }
                getTitulo()
        }, [])

        return (
                <div>
                        <HeaderUno />
                        <Informacion link1={"/"}/>
                        <HeaderDos link1={"/"} link2={'/ofertas'} link3={'/ayuda'}/>
                        <Carrusel />
                        <section id="Titulo_categoria">
                                {Titulo.map(Titulo => (
                                        <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                                ))}
                        </section>

                        <section id="ListaProductos">

                                <div class="caja">
                                        <a href="/Iniciarsesion"><img src={Producto} alt="1" /><h2>Volante cafe tipo madera</h2><h4>$ 700.546</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoDos} alt="1" /><h2>Volante ergonómico negro</h2><h4>$ 400.321</h4></a>
                                </div >

                                <div class="caja">
                                        <a href="#"><img src={ProductoTres} alt="1" /><h2>Volante negro básico</h2><h4>$ 305.547</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoCuatro} alt="1" /><h2>Volante blanco BMW</h2><h4>$ 983.599</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoCinco} alt="1" /><h2>Volante camuflaje militar</h2><h4>$ 509.999</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoSeis} alt="1" /><h2>Volante negro con lineas amarillas</h2><h4>$ 400.509</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoSiete} alt="1" /><h2>Volante negro deportivo</h2><h4>$ 600.999</h4></a>
                                </div>

                                <div class="caja">
                                        <a href="#"><img src={ProductoOcho} alt="1" /><h2>Volante deportivo azul</h2><h4>$ 333.616</h4></a>
                                </div>

                        </section>

                        <PieUno />
                        <PieDos />
                </div>
        )
}
export default Volantes;

