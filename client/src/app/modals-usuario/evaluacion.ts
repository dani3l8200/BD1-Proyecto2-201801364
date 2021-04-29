export class Evaluacion {
    codigo_evaluacion:number;
    nombre: string;
    punteo: number;
    codigo_detallescurso: number
    constructor(codigo_evaluacion:number,nombre:string,punteo:number,codigo_detallescurso:number){
        this.codigo_evaluacion = codigo_evaluacion;
        this.nombre = nombre;
        this.punteo = punteo;
        this.codigo_detallescurso = codigo_detallescurso;
    }
}
