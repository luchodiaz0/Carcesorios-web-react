import BarraPerfil from '../../components/9.BarraPerfil'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Perfil from '../../components/12.Perfil'
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import Imagen from '../../Assets/1.Logo/Logo.png';

function Perfili(){
    const user = {
        photo: Imagen,
        name: 'Nombre del usuario',
        email: 'correo@example.com',
        phone: '123-456-7890',
        address: 'Dirección del usuario',
      };
    return (
        <>
        <BarraPerfil nombreUsuario='Luis Díaz'/>
        <Informacion link1={'/PaginaPrincipal'}/>
        <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'} />
        <Perfil user={user}/>
        <PieUno/>
        <PieDos/>
        </>
    )
}

export default Perfili;