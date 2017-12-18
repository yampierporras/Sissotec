import Categoria from './categoria.model';
import Cliente from './cliente.model';

class Ticket {
    _id: string;
    detalleTicket: string;
    categoria: Categoria;
    cliente: Cliente;

    constructor () {
        this.detalleTicket = '';
        this.categoria = new Categoria();
        this.cliente = new Cliente();
    }
}

export default Ticket;
