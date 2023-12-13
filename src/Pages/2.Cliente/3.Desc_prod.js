import BarraPerfil from '../../components/9.BarraPerfil'
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Titulo from '../../components/5.Titulo';
import Descripcion from '../../components/10.Desc_prod'
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function Descripcionp (){

    

    return (
        <>
        <BarraPerfil nombreUsuario={'Luis Diaz'}/>
        <Informacion link1={'/PaginaPrincipalCliente'}/>
        <HeaderDos link1={"/PaginaPrincipalCliente"} link2={'/OfertasUser'} link3={'/AyudaUser'}/>
        <Titulo/>
        <Descripcion link={'/Comprar'}/>
        <PieUno/>
        <PieDos/>
        </>
        
    )
}

export default Descripcionp;