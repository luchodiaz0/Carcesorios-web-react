import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react'
import '../../Styles/StylesPages/1.Ayuda.css'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import BarraPerfil from '../../components/9.BarraPerfil'

function Ayuda() {

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
            <BarraPerfil nombreUsuario={'Luis Diaz'}/>
            <Informacion link1={'/PaginaPrincipalCliente'}/>
            <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'}/>

            <section>
                {Titulo.map(Titulo => (
                    <h1 class="ContenidoTituloAyuda" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <div id="ConteAyuda">
                <article class="ConteInformacion">
                    <h4>Compras</h4>
                    <p><a href="#!">Administrar y cancelar compras</a></p>
                    <p><a href="#!">Mis compras</a></p>
                    <p><a href="#!">Articulos deseados</a></p>

                </article>
                <article class="ConteInformacion">
                    <h4>Preguntas frecuentes sobre pagos</h4>
                    <p><a href="#!">¿Es seguro usar mi tarjeta de credito en el sitio web?</a></p>
                    <p><a href="#!">¿Es seguro comprar en la pagina web?</a></p>

                </article>
                <article class="ConteInformacion">
                    <h4>Envió</h4>
                    <p><a href="#!">¿Cómo puedo saber el estado de mi pedido?</a></p>
                    <p><a href="#!">¿Puedo cancelar un pedido?</a></p>
                    <p><a href="#!">¿Que hacer si el artículo recibido no es lo que pedí?</a></p>
                    <p><a href="#!">¿Qué hacer si el articulo que recibí tiene defectos</a></p>
                    <p><a href="#!">¿Cúanto tiempo tarda en llegar mi pedido?</a></p>
                    <p><a href="#!">.</a></p>

                </article>
                <article class="ConteInformacion">
                    <h4>Remplazos y devoluciones</h4>
                    <p><a href="#!">¿Es posible cambiar mis atículos?</a></p>
                    <p><a href="#!">¿Qué plazo tengo disponible para hacer una devolución?</a></p>
                    <p><a href="#!">¿Cómo debo proceder para devolver un producto a la tienda online?</a></p>
                    <p><a href="#!">¿Tengo que pagar algo por la devolución?</a></p>

                </article>
                <article class="ConteInformacion">
                    <h4>Formulario PQR</h4>
                    <p><a href="#!">Da clic aquí para llenar el formulario PQR</a></p>

                </article>
            </div>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default Ayuda;