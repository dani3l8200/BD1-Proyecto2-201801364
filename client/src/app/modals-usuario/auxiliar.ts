export class Auxiliar {
    codigo_estudiante: number; 
    rol: number; 
    carne: number; 
    password_: string; 
    constructor(codigo_estudiante:number,carne:number,rol:number,password_:string){
    this.codigo_estudiante = codigo_estudiante;
    this.rol = rol;
    this.carne = carne;
    this.password_ = password_;

    }
}
