export class AsignacionEstudiante {
    codigo_detallescurso: number; 
    codigo_asignacionstudent: number; 
    codigo_estudiante:number; 
    constructor(codigo_detallescurso:number,codigo_asignacionstudent:number,codigo_estudiante:number){
        this.codigo_detallescurso = codigo_detallescurso;
        this.codigo_estudiante = codigo_estudiante;
        this.codigo_asignacionstudent = codigo_asignacionstudent;
    }
}

