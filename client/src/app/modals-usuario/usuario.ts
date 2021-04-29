export class Usuario {
    codigo_estudiante: number; 
    nombre: string; 
    apellido: string;
    carne: number; 
    correo_electronico: string;
    password_: string; 
    rol: number; 
    constructor(codigo_estudiante:number,nombre:string,apellido:string,carne:number,correo:string,password:string,rol:number){
    this.codigo_estudiante = codigo_estudiante;
    this.nombre = nombre; 
    this.apellido = apellido;
    this.carne = carne;
    this.correo_electronico = correo;
    this.password_ = password;
    this.rol = rol;
    }
}
