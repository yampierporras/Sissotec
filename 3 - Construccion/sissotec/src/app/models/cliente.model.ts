import Usuario from './usuario.model';

class Cliente {
    _id: string;
    nomCliente: string;
    apeCliente: string;
    estadoCliente: boolean;
    usuario: Usuario;

    constructor () {
        this.nomCliente = '';
        this.apeCliente = '';
        this.estadoCliente = false;
        this.usuario = new Usuario();
    }
}

export default Cliente;
