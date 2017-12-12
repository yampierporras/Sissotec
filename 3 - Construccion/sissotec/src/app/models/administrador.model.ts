import Usuario from './usuario.model';

class Administrador {
    _id: string;
    nomAdministrador: string;
    apeAdministrador: string;
    estadoAdministrador: boolean;
    usuario: Usuario;

    constructor () {
        this.nomAdministrador = '';
        this.apeAdministrador = '';
        this.estadoAdministrador = false;
        this.usuario = new Usuario();
    }
}

export default Administrador;
