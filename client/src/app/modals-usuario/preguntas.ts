export class Preguntas {
    codigo_pregunta:number;
tipo:string;
pregunta: string;
respuesta1: string;
respuesta2: string;
respuesta3: string;
correcta: string;
punteo: number;
codigo_evaluacion:number;
constructor(codigo_pregunta:number,tipo:string,pregunta:string,respuesta1:string,respuesta2:string,respuesta3:string,correcta:string,punteo:number,codigo_evaluacion:number){
this.codigo_pregunta = codigo_pregunta;
this.tipo = tipo;
this.pregunta = pregunta;
this.respuesta1 = respuesta1;
this.respuesta2 = respuesta2;
this.respuesta3 = respuesta3;
this.correcta = correcta;
this.punteo = punteo;
this.codigo_evaluacion = codigo_evaluacion;
}
}
