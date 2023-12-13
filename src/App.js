import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Principal from './Pages/1.Usuario/1.PaginaPrincipal';
import Ofertas from './Pages/1.Usuario/2.Ofertas'
import Ayuda from './Pages/1.Usuario/3.Ayuda';
import Volantes from './Pages/1.Usuario/4.Volantes';
import IniciarSesion from './Pages/1.Usuario/5.IniciarSesion';
import CrearCuenta from './Pages/1.Usuario/6.CrearCuenta';
//Rutas del cliente
import PaginaPrincipalCliente from './Pages/2.Cliente/1.PaginaPrincipalCliente'
import OfertasUser from './Pages/2.Cliente/2.OfertasUser'
import Descripcion from './Pages/2.Cliente/3.Desc_prod'
import VolantesUser from './Pages/2.Cliente/5.Volantes'
import AyudaUser from './Pages/2.Cliente/6.AyudaUser'
import Perfil from './Pages/2.Cliente/7.Perfil'
import MisCompras from './Pages/2.Cliente/8.MisCompras'
import Comprar from './Pages/2.Cliente/4.Comprar'
//Rutas del administrador
import PaginaPrincipalAdmin from './Pages/3.Administrador/1.PaginaPrincipalAdmin'
import VolantesAdmin from './Pages/3.Administrador/2.VolantesAdmin'

function App() {
    return (
        <div>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Principal/>} />    
                    <Route path="/ofertas" element={<Ofertas/>} />
                    <Route path="/volantes" element={<Volantes/>} />
                    <Route path="/ayuda" element={<Ayuda/>} />
                    <Route path="/iniciarsesion" element={<IniciarSesion/>} />
                    <Route path="/CrearCuenta" element={<CrearCuenta/>} />
                    {/*Rutas con sesión*/}
                    <Route path='/PaginaPrincipalCliente' element={<PaginaPrincipalCliente/>}/>
                    <Route path='/OfertasUser' element={<OfertasUser/>}/>
                    <Route path='/Descripcion' element={<Descripcion/>}/>
                    <Route path='/volantesUser' element={<VolantesUser/>}/>
                    <Route path='/AyudaUser' element={<AyudaUser/>}/>
                    <Route path='/Perfil' element={<Perfil/>}/>
                    <Route path='/MisCompras' element={<MisCompras/>}/>
                    <Route path='/comprar' element={<Comprar/>}/>
                    {/*Rutas administrador */}
                    <Route path="/PaginaPrincipalAdmin" element={<PaginaPrincipalAdmin/>}/>
                    <Route path="/VolantesAdmin" element={<VolantesAdmin/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default App;