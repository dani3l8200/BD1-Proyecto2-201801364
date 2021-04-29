export class Report1 {
    carne:number;
    nombre:string;
    apellido:string;
    semestre:string;
    year_:number;
    horaInicio:string;
    horaFin:string;
    curso:string;
    seccion:string;
    constructor(carne:number,nombre:string,apellido:string,semestre:string,
        year_:number,horaInicio:string,horaFin:string,curso:string,seccion:string){
            this.carne =carne;
            this.nombre = nombre;
            this.apellido = apellido;
            this.semestre = semestre;
            this.year_ = year_;
            this.horaInicio = horaInicio;
            this.horaFin = horaFin;
            this.curso = curso;
            this.seccion = seccion;
            

        }
}
