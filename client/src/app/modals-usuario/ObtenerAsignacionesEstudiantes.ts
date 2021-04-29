export class ObtenerAsignacionesEstudiantes {
    codigo_asignacionstudent: number;
    descripcion: string; 
    nombre: string;
    semestre: string; 
    codigo_detallescurso:number;
    year_:number;
    horaInicio:string;
    horaFin:string;
    curso:string;
    codigo_unico:number;
    seccion:string;
    constructor(codigo_asignacionstudent:number,descripcion:string,nombre:string,semestre:string,codigo_detallescurso:number,
        year_:number,horaInicio:string,horaFin:string,curso:string,codigo_unico:number,seccion:string){
     this.codigo_asignacionstudent = codigo_asignacionstudent;
     this.descripcion = descripcion;
     this.nombre = nombre; 
     this.semestre =semestre;
     this.codigo_detallescurso = codigo_detallescurso;
     this.year_ = year_;
     this.horaInicio = horaInicio;
     this.horaFin = horaFin;
     this.curso = curso;
     this.codigo_unico = codigo_unico;
     this.seccion = seccion;
    }
}
