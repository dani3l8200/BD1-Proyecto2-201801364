export class Respuesta {
    codigo_respuesta: number;
    respuesta: string; 
    punteo: number;
    codigo_pregunta:number;
    codigo_evaluacion:number;
    codigo_estudiante:number;
    
    constructor(codigo_respuesta:number,respuesta:string,punteo:number,codigo_pregunta:number,codigo_evaluacion:number,codigo_estudiante:number){
    this.codigo_respuesta = codigo_respuesta;
    this.respuesta = respuesta;
    this.punteo = punteo;
    this.codigo_pregunta = codigo_pregunta;
    this.codigo_evaluacion = codigo_evaluacion;
    this.codigo_estudiante = codigo_estudiante;
    }
}
