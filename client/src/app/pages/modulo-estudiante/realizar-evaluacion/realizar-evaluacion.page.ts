import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {Preguntas} from 'src/app/modals-usuario/preguntas';
import {ObtenerPreguntas} from 'src/app/modals-usuario/ObtenerPreguntas';

@Component({
  selector: 'app-realizar-evaluacion',
  templateUrl: './realizar-evaluacion.page.html',
  styleUrls: ['./realizar-evaluacion.page.scss'],
})
export class RealizarEvaluacionPage implements OnInit {
  Intento1: ObtenerPreguntas[] = [

  ];
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
  constructor(private fb: FormBuilder,private preguntasService: EvaluacionesService, private _router:Router) { }
  CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup
  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      respuesta: ['',Validators.required],
      punteo: ['',Validators.required],
      codigo_pregunta: ['',Validators.required],
      codigo_evaluacion: ['',Validators.required],
      codigo_estudiante: ['',Validators.required]
    });
   this.preguntasService.ObtenerPreguntasRandom1(localStorage.getItem("evaluacion1")).subscribe(
     (Intento1) => this.Intento1 = Intento1);
  }
 
  crearEvaluaciones(): void{
    var respuesta: string = this.CursosRegisterForm.get('respuesta').value;
    var punteo: number = this.CursosRegisterForm.get('punteo').value;
    var codigo_pregunta: number = this.CursosRegisterForm.get('codigo_pregunta').value;
    var codigo_evaluacion: number = this.CursosRegisterForm.get('codigo_evaluacion').value;
    var codigo_estudiante: number = this.CursosRegisterForm.get('codigo_estudiante').value;
    this.preguntasService.RealizarEvaluacion(respuesta,punteo,codigo_pregunta,codigo_evaluacion,codigo_estudiante).subscribe((result) =>{
     
     
      alert("Se creo la respuesta con exito :D");
      console.log(result);
      this._router.navigate(['inicio-estudiante']);
      
    });
  }
}
