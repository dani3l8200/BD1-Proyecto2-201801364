export class ObtenerAuxiliares {
    codigo_asignacionaux:number;
    codigo_estudiante:number; 
    nombre:string;
    semestre:string;
    year_:number;
    estado:number;
    horaInicio:string;
    codigo_detallescurso:number;
    motivo:string;
    horaFin:string;
    curso:string;
    codigo_unico:number;
    seccion:string;
    constructor(codigo_asignacionaux:number,codigo_estudiante:number,nombre:string,semestre:string,year_:number,estado:number,horaInicio:string,
        codigo_detallescurso:number,motivo:string,horaFin:string,curso:string,codigo_unico:number,seccion:string){
            this.codigo_asignacionaux = codigo_asignacionaux;
            this.codigo_estudiante = codigo_estudiante;
            this.nombre = nombre; 
            this.semestre = semestre; 
            this.year_ = year_; 
            this.estado = estado; 
            this.horaInicio = horaInicio;
            this.codigo_detallescurso = codigo_detallescurso;
            this.motivo = motivo; 
            this.horaFin = horaFin; 
            this.curso = curso; 
            this.codigo_unico = codigo_unico;
            this.seccion = seccion;
        }

}
