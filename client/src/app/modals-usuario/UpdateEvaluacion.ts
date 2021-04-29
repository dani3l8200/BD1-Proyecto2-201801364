export class UpdateEvaluacion {
    codigo_evaluacion:number;
    nombre: string;
    habilitar: number;
    aleatorio: number;
    punteo: number;
    codigo_detallescurso: number
    constructor(codigo_evaluacion:number,nombre:string,habilitar:number,aleatorio:number,punteo:number,codigo:number){
        this.codigo_evaluacion = codigo_evaluacion;
        this.nombre = nombre;
        this.aleatorio = aleatorio;
        this.habilitar = habilitar;
        this.punteo = punteo;
        this.codigo_detallescurso = codigo;
    }
}
