export class Login {
password_: string; 
codigo_estudiante: number;
constructor(codigo: number,password_:string){
    this.codigo_estudiante = codigo;
    this.password_ = password_;
}
}

