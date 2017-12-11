import Usuario from './usuario.model';

class Cliente {
    _id: string;
    nomCliente: string;
    apeCliente: string;
    usuario: Usuario;

    constructor () {
        this.nomCliente = '';
        this.apeCliente = '';
        this.usuario = new Usuario();
    }
}

export default Cliente;
