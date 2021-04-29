export class VerAsignacion {
    codigo_detallescurso: number;
    nombre:string;
    descripcion:string;
    estado:number;
    lseccion:string;
    semestre:string;
    year_:number;
    horaInicio:string;
    horaFin:string;
    fechalimit:string;
    constructor(codigo_detallescurso:number,nombre:string,descripcion:string,estado:number,lseccion:string,semestre:string,year_:number,horaInicio:string,horaFin:string,fechalimit:string){
        this.codigo_detallescurso = codigo_detallescurso;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.lseccion = lseccion;
        this.semestre = semestre;
        this.year_ = year_;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.fechalimit = fechalimit;
    }
}
