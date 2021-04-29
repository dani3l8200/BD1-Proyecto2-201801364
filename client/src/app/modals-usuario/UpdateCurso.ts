export class UpdateCurso {
    codigo_curso: number;
    nombre: string;
    descripcion: string; 
    estado: number
    constructor(codigo_curso:number,nombre:string,descripcion:string,estado:number){
    this.codigo_curso = codigo_curso
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.estado = estado; 
    }

}
