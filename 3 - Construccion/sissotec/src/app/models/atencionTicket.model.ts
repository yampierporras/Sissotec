import Ticket from './ticket.model';
import MesaAyuda from './mesaAyuda.model';
import Especialista from './especialista.model';

class AtencionTicket {
    _id: string;
    atendido: number;
    horaGenerada: Date;
    horaAtendida: Date;
    observación: string;
    conformidad: boolean;
    estadoTicket: boolean;
    ticket: Ticket;
    mesaAyuda: MesaAyuda;
    especialista: Especialista;

    constructor () {
        this.atendido = -1;
        this.horaGenerada = new Date();
        this.horaAtendida = new Date();
        this.observación = '';
        this.conformidad = false;
        this.estadoTicket = false;
        this.ticket = new Ticket();
        this.mesaAyuda = new MesaAyuda();
        this.especialista = new Especialista();
    }
}

export default AtencionTicket;
