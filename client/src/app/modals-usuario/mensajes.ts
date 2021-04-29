export class Mensajes {
    codigo_mensajes: number; 
    codigo_alumno: number;
    codigo_auxiliar: number;
    asunto: string;
    richtext: string;
    archivo: Blob;
    constructor(codigo_mensajes:number,codigo_alumno:number,codigo_auxiliar:number,asunto:string,richtext:string,archivo:Blob){
        this.codigo_mensajes = codigo_mensajes;
        this.codigo_alumno = codigo_alumno;
        this.codigo_auxiliar = codigo_auxiliar;
        this.asunto = asunto;
        this.richtext = richtext;
        this.archivo = archivo;
    }
}
