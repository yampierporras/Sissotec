import Usuario from './usuario.model';

class MesaAyuda {
    _id: string;
    nomMesaAyuda: string;
    apeMesaAyuda: string;
    estadoMesaAyuda: boolean;
    usuario: Usuario;

    constructor () {
        this.nomMesaAyuda = '';
        this.apeMesaAyuda = '';
        this.estadoMesaAyuda = false;
        this.usuario = new Usuario();
    }
}

export default MesaAyuda;
