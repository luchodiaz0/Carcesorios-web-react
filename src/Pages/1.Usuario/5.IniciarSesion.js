import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import '../../Styles/StylesPages/2.IniciarSesion.css'
import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function IniciarSesion() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const [attempts, setAttempts] = useState(0);
    
        useEffect(() => {
            const storedAttempts = localStorage.getItem('loginAttempts');
            setAttempts(storedAttempts ? parseInt(storedAttempts) : 0);
        }, []);
    
        const iniciarLogin = (e) => {
            e.preventDefault();
            //Los datos con los que ingresa
            if (username === '101010' && password === 'clave123') {
                setAttempts(0);
                localStorage.removeItem('loginAttempts');
                //Formulario exitodo envio a...
                window.location.href = '/PaginaPrincipalCliente';
            } else {
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                localStorage.setItem('loginAttempts', newAttempts.toString());
                console.log("Mal mal mal");
    
                if (newAttempts >= 3) {
                    setError('Has superado el límite de intentos. Inténtalo más tarde.');
                } else {
                    setError('Nombre de usuario o contraseña incorrectos. Intento ' + newAttempts);
                }
            }
        };

    const [modalVisible, setModalVisible] = useState(false);




    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/IniciarSesion')
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
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 className="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <div id='ContePrincipalIniciarSesion'>
                <div id='ConteIniciarSesion'>
                    <form className='FormularioInicio'>
                        <h1 className='TituloSesion'>carcesorios</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='Nombre'>Documento:</label>
                            <input value={username} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" onChange={(e)=> setUsername(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="exampleInputPassword1" className='Nombre'>Contraseña:</label>
                            <input value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className='Nombre' for="exampleCheck1">¿Soy humano?</label>
                        </div>
                        <button 
                         type="submit" className="btn btn-warning botones"
                         onClick={iniciarLogin}
                         >Iniciar Sesión</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <br/>
                        <button 
                         type="submit" className="btn btn-warning botones"
                         ><a href='/PaginaprincipalAdmin'>Administrador</a></button>
                    </form>
                </div>
            </div>

            <PieUno />
            <PieDos />
        </div>
    )
}

export default IniciarSesion;