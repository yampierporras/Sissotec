import Area from './area.model';

class Categoria {
    _id: string;
    nomCategoria: string;
    prioridadCategoria: number;
    area: Area;

    constructor () {
        this.nomCategoria = '';
        this.prioridadCategoria = -1;
        this.area = new Area();
    }
}

export default Categoria;
