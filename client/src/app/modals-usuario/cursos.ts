export class Cursos {
     codigo_curso: number;
     nombre: string;
     descripcion: string; 
     estado: number;
     codigo_unico: number; 
     constructor(codigo:number,nombre:string,descripcion:string,estado:number,codigo_unico:number){
     this.codigo_curso = codigo;
     this.nombre= nombre; 
     this.descripcion = descripcion;
     this.estado = estado;
     this.codigo_unico = codigo_unico;
     }

}
