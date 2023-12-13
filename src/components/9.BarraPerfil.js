import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "../Styles/StylesComponents/9.BarraPerfil.css"

const SimpleMenuDesplegable = ({ nombreUsuario }) => {
  const [menuDesplegado, setMenuDesplegado] = useState(false);

  const toggleMenu = () => {
    setMenuDesplegado(!menuDesplegado);
  };

    return (
      <div className='contenedor'>
        <DropdownButton
          variant="secondary"
          id="dropdown-menu"
          onClick={toggleMenu}
        >
          <Dropdown.Menu show={menuDesplegado}>
            <Dropdown.Item href="/Perfil">Perfil</Dropdown.Item>
            <Dropdown.Item href="/MisCompras">Mis compras</Dropdown.Item>
            <Dropdown.Item href="/ListaDeseos">Lista de deseos</Dropdown.Item>
            <Dropdown.Item href="/ayuda">PQR</Dropdown.Item>
            <Dropdown.Item href="/">Cerra sesion</Dropdown.Item>
          </Dropdown.Menu>
        </DropdownButton>
        <div className="nombreUsuario" >{nombreUsuario}</div>

      </div>
    );
}



export default SimpleMenuDesplegable;