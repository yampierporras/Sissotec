import Usuario from './usuario.model';
import Area from './area.model';

class Especialista {
    _id: string;
    nomEspecialista: string;
    apeEspecialista: string;
    estadoEspecialista: boolean;
    usuario: Usuario;
    areas: Area[];

    constructor () {
        this.nomEspecialista = '';
        this.apeEspecialista = '';
        this.estadoEspecialista = false;
        this.usuario = new Usuario();
    }
}

export default Especialista;
