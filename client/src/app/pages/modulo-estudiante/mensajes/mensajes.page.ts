import { Mensajes } from './../../../modals-usuario/mensajes';
import { MensajesService } from './../../../services-usuario/mensajes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
MisMensajes: Mensajes[] = [
  
];
MisMensjes2: Mensajes[] = [

]

  public ocultar1: boolean = false;
  public ocultar2: boolean = false;
  public ocultar3: boolean = false;
  public ocultar4: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }
  accion2(){
    this.ocultar2 = !this.ocultar2;
    }
    accion3(){
      this.ocultar3 = !this.ocultar3;
      }
      accion4(){
        this.ocultar4 = !this.ocultar4;
        }

        CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup
        constructor(private fb: FormBuilder,private cursesService: MensajesService, private _router:Router) { }


  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      codigo_alumno: ['',Validators.required],
      codigo_auxiliar: ['',Validators.required],
      asunto: ['',Validators.required],
      richtext: ['',Validators.required],
      archivo: ['',Validators.required]
      
    });
    this.UpdateRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      estado: ['',Validators.required],
      codigo_curso: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_mensajes: ['',Validators.required]
    });

    this.cursesService.ObtenerMensajes().subscribe(MisMensajes=>this.MisMensajes = MisMensajes)
    this.cursesService.ObtenerMensajesCuerpo().subscribe(MisMensjes2=>this.MisMensjes2 = MisMensjes2)
  }
  EnviarMensaje(): void{
    var codigo_alumno: number = this.CursosRegisterForm.get('codigo_alumno').value;
    var codigo_auxiliar: number = this.CursosRegisterForm.get('codigo_auxiliar').value;
    var asunto: string = this.CursosRegisterForm.get('asunto').value;
    var richtext: string = this.CursosRegisterForm.get('richtext').value;
    var archivo: Blob = this.CursosRegisterForm.get('archivo').value;
    
  
   
    this.cursesService.crearMensajes(codigo_alumno,codigo_auxiliar,asunto,richtext,archivo).subscribe((result) =>{
     
        alert("Mensaje creado con exito :D");
        console.log(result);
        this._router.navigate(['inicio-estudiante']);
    
       
     
      
    });
  }
  EliminarMensaje(): void{
    var codigo_mensajes: number = this.DeleteRegisterForm.get('codigo_mensajes').value;
    
    
  
   
    this.cursesService.EliminarMensje(codigo_mensajes).subscribe((result) =>{
     
        alert("Mensaje eliminado con exito :D");
        console.log(result);
        this._router.navigate(['inicio-estudiante']);
    
       
     
      
    });
  }
}
