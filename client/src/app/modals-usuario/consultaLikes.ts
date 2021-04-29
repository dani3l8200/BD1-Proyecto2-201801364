export class ConsultaLikes {
    cantidad:number 
    publicacion:string;
    titulo:string;
    descripcion:string;
    imagen:string;
    video:string;
    codigo_publicacion:number;
    nombre:string;
    apellido:string;
    constructor(codigo_publicacion:number,titulo:string,cantidad:number,publicacion:string,descripcion:string,imagen:string,video:string,nombre:string,apellido:string){
        this.codigo_publicacion = codigo_publicacion;
        this.publicacion = publicacion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.video = video;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.titulo
        this.cantidad = cantidad;
    }
}
