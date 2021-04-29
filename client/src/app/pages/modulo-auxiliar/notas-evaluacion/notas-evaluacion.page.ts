import { Respuesta } from './../../../modals-usuario/Respuesta';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {UpdateEvaluacion} from 'src/app/modals-usuario/UpdateEvaluacion';
import {Evaluacion} from 'src/app/modals-usuario/evaluacion';

@Component({
  selector: 'app-notas-evaluacion',
  templateUrl: './notas-evaluacion.page.html',
  styleUrls: ['./notas-evaluacion.page.scss'],
})
export class NotasEvaluacionPage implements OnInit {
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

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      
      codigo_evaluacion: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      codigo_evaluacion: ['',Validators.required],
     
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_evaluacion: ['',Validators.required]
    });
  }
  EliminarEvaluacion(): void{
    var codigo_evaluacion: number = this.DeleteRegisterForm.get('codigo_evaluacion').value;
    localStorage.setItem("notas", this.DeleteRegisterForm.get('codigo_evaluacion').value);
   
    this.cursesService.ObtenerRespuesta1(codigo_evaluacion).subscribe((result) =>{
     
     
      alert("Se Encontro la nota con exito  :D");
      console.log(result);
      this._router.navigate(['notas']);
      
    });
  }
}
