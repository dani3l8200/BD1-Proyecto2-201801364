export class AsignacionCurso {
    codigo_detallescurso: number;
    semestre: string;
    year_: number;
    horaInicio: string;
    horaFin: string;
    fechalimit: string;
    codigo_curso: number;
    codigo_seccion: number;
    constructor(codigo_detallescurso:number,semestre:string,year_:number,horaInicio:string,horaFin:string,fechalimit:string,codigo_curso:number,codigo_seccion:number){
        this.codigo_detallescurso = codigo_detallescurso;
        this.semestre = semestre;
        this.year_ = year_;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.fechalimit = fechalimit;
        this.codigo_curso = codigo_curso;
        this.codigo_seccion = codigo_seccion;
    }

}
