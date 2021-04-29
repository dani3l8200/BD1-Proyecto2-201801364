import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {Preguntas} from 'src/app/modals-usuario/preguntas';
import {UpdatePreguntas} from 'src/app/modals-usuario/UpdatePreguntas';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
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
        constructor(private fb: FormBuilder,private cursesService: EvaluacionesService, private _router:Router) { }
        CursosRegisterForm: FormGroup
              UpdateRegisterForm: FormGroup
              DeleteRegisterForm: FormGroup
allPreguntas: Preguntas[] = [

];
  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      pregunta: ['',Validators.required],
      tipo: ['',Validators.required],
      respuesta1: ['',Validators.required],
      respuesta2: ['',Validators.required],
      respuesta3: ['',Validators.required],
      correcta: ['',Validators.required],
      punteo: ['',Validators.required],
      codigo_evaluacion: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      pregunta: ['',Validators.required],
      tipo: ['',Validators.required],
      respuesta1: ['',Validators.required],
      respuesta2: ['',Validators.required],
      respuesta3: ['',Validators.required],
      correcta: ['',Validators.required],
      punteo: ['',Validators.required],
      codigo_pregunta: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_pregunta: ['',Validators.required]
    });
    this.cursesService.ObtenerPreguntas().subscribe(allPreguntas=>this.allPreguntas = allPreguntas);
  }
crearPreguntas(): void{
  var pregunta: string = this.CursosRegisterForm.get('pregunta').value;
  var tipo: string = this.CursosRegisterForm.get('tipo').value;
  var respuesta1: string = this.CursosRegisterForm.get('respuesta1').value;
  var respuesta2: string = this.CursosRegisterForm.get('respuesta2').value;
  var respuesta3: string = this.CursosRegisterForm.get('respuesta3').value;
  var correcta: string = this.CursosRegisterForm.get('correcta').value;
  var punteo: number = this.CursosRegisterForm.get('punteo').value;
  var codigo_evaluacion: number = this.CursosRegisterForm.get('codigo_evaluacion').value;

  
 
  this.cursesService.CrearPreguntas(tipo,pregunta,respuesta1,respuesta2,respuesta3,correcta,punteo,codigo_evaluacion).subscribe((result) =>{
   
   
    alert("Se crearon las preguntas con exito :D");
    console.log(result);
    this._router.navigate(['gestion-evaluacion']);
    
  });
}
EditarPreguntas(): void{
  var pregunta: string = this.UpdateRegisterForm.get('pregunta').value;
  var tipo: string = this.UpdateRegisterForm.get('tipo').value;
  var respuesta1: string = this.UpdateRegisterForm.get('respuesta1').value;
  var respuesta2: string = this.UpdateRegisterForm.get('respuesta2').value;
  var respuesta3: string = this.UpdateRegisterForm.get('respuesta3').value;
  var correcta: string = this.UpdateRegisterForm.get('correcta').value;
  var punteo: number = this.UpdateRegisterForm.get('punteo').value;
  var codigo_pregunta: number = this.UpdateRegisterForm.get('codigo_pregunta').value;
  
 
  this.cursesService.ActualizarPreguntas(codigo_pregunta,tipo,pregunta,respuesta1,respuesta2,respuesta3,correcta,punteo).subscribe((result) =>{
   
   
    alert("Se actualizo con exito las preguntas :D");
    console.log(result);
    this._router.navigate(['gestion-evaluacion']);
    
  });
}
EliminarPreguntas(): void{
  var codigo_pregunta: number = this.DeleteRegisterForm.get('codigo_pregunta').value;
    
   
  this.cursesService.EliminarPreguntas(codigo_pregunta).subscribe((result) =>{
   
   
    alert("Se Elimino con exito las preguntas :D");
    console.log(result);
    this._router.navigate(['gestion-evaluacion']);
    
  });
}

}
