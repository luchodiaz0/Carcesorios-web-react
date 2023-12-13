import React, { useState, useEffect } from "react";
import Producto from "../../Assets/5.Productos/1.Volante.png";
import ProductoDos from "../../Assets/5.Productos/1.Body_kit.png";
import ProductoTres from "../../Assets/5.Productos/1.llantas.png";
import ProductoCuatro from "../../Assets/5.Productos/1.Palanca.png";
import ProductoCinco from "../../Assets/5.Productos/1.pedales.png";
import ProductoSeis from "../../Assets/5.Productos/1.Amortiguadores.png";
import ProductoSiete from "../../Assets/5.Productos/1.sonido.png";
import ProductoOcho from "../../Assets/5.Productos/1.filtro.png";

import "../../Styles/StylesComponents/6.ListaProductos.css";
import "../../Styles/StylesComponents/5.Titulo.css";

import BarraPerfil from '../../components/9.BarraPerfil'
import Informacion from "../../components/2.Informacion";
import HeaderDos from "../../components/3.HeaderDos";
import Carrusel from "../../components/4.Carrusel";
import PieUno from "../../components/7.PieUno";
import PieDos from "../../components/8.PieDos";

const Ofertas = () => {
  const [Titulo, setTitulo] = useState([]);

  useEffect(() => {
    const getTitulo = () => {
      fetch("http://localhost:4000/carcesorios")
        .then((res) => res.json())
        .then((res) => setTitulo(res));
    };
    getTitulo();
  }, []);

  return (
    <div>
    <BarraPerfil nombreUsuario={"Luis Diaz"}/>
      <Informacion link1={'/PaginaPrincipalCliente'}/>
      <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'}/>
      <Carrusel />
      <section id="Titulo_categoria">
        {Titulo.map((Titulo) => (
          <h1 className="Contenido_Titulo">Ofertas</h1>
        ))}
      </section>

      <section id="ListaProductos">
        <div className="caja">
          <a href="/Descripcion">
            <img src={Producto} alt="1" />
            <h2>Volante cafe tipo madera</h2>
            <h4>$ 700.546 - 15%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoDos} alt="1" />
            <h2>Body kit BMW</h2>
            <h4>$ 400.421 - 5%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoTres} alt="1" />
            <h2>Neumaticos negros 185/65 R15</h2>
            <h4>$ 500.999 - 8%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoCuatro} alt="1" />
            <h2>Palanca de cambios metalica</h2>
            <h4>$ 309.999 - 3%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoCinco} alt="1" />
            <h2>Pedales deportivos</h2>
            <h4>$ 400.123 - 10%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoSeis} alt="1" />
            <h2>Suspensión y Amortiguadores</h2>
            <h4>$ 299.999 - 4%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoSiete} alt="1" />
            <h2>Super sonido Twingo</h2>
            <h4>$ 376.543 - 6%desc</h4>
          </a>
        </div>

        <div className="caja">
          <a href="#!">
            <img src={ProductoOcho} alt="1" />
            <h2>Filtro de aire</h2>
            <h4>$ 100.000 - 20%desc</h4>
          </a>
        </div>
      </section>

      <PieUno />
      <PieDos />
    </div>
  );
};
export default Ofertas;
