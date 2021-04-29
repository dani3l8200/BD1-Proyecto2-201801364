import { ObtenerPunteoEvaluacion } from './../../../modals-usuario/ObtenerPunteoEvaluacion';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {Preguntas} from 'src/app/modals-usuario/preguntas';
import {ObtenerPreguntas} from 'src/app/modals-usuario/ObtenerPreguntas';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  Intento1: ObtenerPunteoEvaluacion[] = [

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
    this.preguntasService.ObtenerRespuesta(localStorage.getItem("notas")).subscribe(
      (Intento1) => this.Intento1 = Intento1);
  }

}
