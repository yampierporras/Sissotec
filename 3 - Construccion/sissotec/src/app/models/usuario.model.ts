import NivelUsuario from './nivelUsuario.model';

class Usuario {
    _id: string;
    nomUsuario: string;
    emailUsuario: string;
    urlImgUsuario: string;
    estadoUsuario: boolean;
    nivelUsuario: NivelUsuario;

    constructor () {
        this.nomUsuario = '';
        this.emailUsuario = '';
        this.urlImgUsuario = '';
        this.estadoUsuario = false;
        this.nivelUsuario = new NivelUsuario();
    }
}

export default Usuario;
