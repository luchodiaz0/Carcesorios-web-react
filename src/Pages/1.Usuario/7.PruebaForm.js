import React, { useState } from 'react'
import Axios from 'axios'

function PostForm() {
    const url = "http://localhost:4000/carcesorios/CrearCuenta"
    const [data, setData] = useState({
        documento: "",
        tipo_documento: "",
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        correo: "",
        telefono: "",
        direccion: "",
        contraseña: "",
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            documento: parseInt(data.documento),
            tipo_documento: data.tipo_documento,
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            primer_apellido: data.primer_apellido,
            segundo_apellido: data.segundo_apellido,
            correo: data.correo,
            telefono: parseInt(data.telefono),
            direccion: data.direccion,
            contraseña: data.contraseña,
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id='documento' value={data.documento} placeholder='documento' type='number'></input>
                <input onChange={(e) => handle(e)} id='tipo_documento' value={data.tipo_documento} placeholder='tipo_documento' type='text'></input>
                <input onChange={(e) => handle(e)} id='primer_nombre' value={data.primer_nombre} placeholder='primer_nombre' type='text'></input>
                <input onChange={(e) => handle(e)} id='segundo_nombre' value={data.segundo_nombre} placeholder='segundo_nombre' type='text'></input>
                <input onChange={(e) => handle(e)} id='primer_apellido' value={data.primer_apellido} placeholder='primer_apellido' type='text'></input>
                <input onChange={(e) => handle(e)} id='segundo_apellido' value={data.segundo_apellido} placeholder='segundo_apellido' type='text'></input>
                <input onChange={(e) => handle(e)} id='correo' value={data.correo} placeholder='correo' type='email'></input>
                <input onChange={(e) => handle(e)} id='telefono' value={data.telefono} placeholder='telefono' type='number'></input>
                <input onChange={(e) => handle(e)} id='direccion' value={data.direccion} placeholder='direccion' type='text'></input>
                <input onChange={(e) => handle(e)} id='contraseña' value={data.contraseña} placeholder='contraseña' type='password'></input>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default PostForm;