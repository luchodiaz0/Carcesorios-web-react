import React from 'react'
import '../Styles/StylesComponents/10.Desc_prod.css'
import Imagen1 from "../Assets/5.Productos/1.Volante.png"
import Carrito from '../Assets/2.Iconos/1.Carrito.png'


function descProducto(props) {
  return (
    <div>
        <article id="Producto">
            <section className="im1">
                <img src={Imagen1} alt="1" className="Im_principal"/>
            </section>
            <section className="im2">
                <img src={Imagen1} alt="1" className="Im_secundario_1"/>
                <img src={Imagen1} alt="1" className="Im_secundario_2"/>
                <img src={Imagen1} alt="1" className="Im_secundario_3"/>
            </section>
            <section className="Titulo_Producto">
                <h1 className="titulop">Volante café tipo madera</h1>
                <h2 className="descp">Envió gratis a nivel nacional <br/><br/> Devolución gratis <br/><br/>(30 días desde que se recibe el producto) <br/><br/> Disponible</h2>
                <h3 className="preciop">$700.546-15%desc</h3>
            </section>
            <section className="Descripcion_Producto">
                <h4>Descripcion: <br/><br/> Color café<br/>medidas: 54cm de radio<br/>Marca: Ferrari</h4>

                <article className="Botones">
                    <nav className="Imgcarrito2">
                        <ul>
                            <li><a href={props.link2}><div className="Conte_carrito2"><img src={Carrito} alt="Logo" className="Carrito2"/></div></a></li>
                        </ul>
                    </nav>
                    <nav className="Comprar">
                        <ul>
                            <li><a href={props.link}><div className="Comprar_2"><h3 className="Com_letra">Comprar</h3></div></a></li>
                        </ul>
                    </nav>
                </article>
            </section>
        </article>
    </div>
  )
}

export default descProducto