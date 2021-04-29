
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {UpdateEvaluacion} from 'src/app/modals-usuario/UpdateEvaluacion';
import {Evaluacion} from 'src/app/modals-usuario/evaluacion';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.page.html',
  styleUrls: ['./evaluacion.page.scss'],
})
export class EvaluacionPage implements OnInit {
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
  
        allCursos: UpdateEvaluacion[] = [


        ];

  constructor(private fb: FormBuilder,private cursesService: EvaluacionesService, private _router:Router) { }
  CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup
  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      punteo: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      codigo_evaluacion: ['',Validators.required],
      nombre: ['',Validators.required],
      habilitar: ['',Validators.required],
      aleatorio: ['',Validators.required],
      punteo: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_evaluacion: ['',Validators.required]
    });

this.cursesService.ObtenerEvaluacion().subscribe(allCursos=>this.allCursos = allCursos);
  
  }
  
  crearEvaluaciones(): void{
    var nombre: string = this.CursosRegisterForm.get('nombre').value;
    var punteo: number = this.CursosRegisterForm.get('punteo').value;
    var codigo_detallescurso: number = this.CursosRegisterForm.get('codigo_detallescurso').value;
    
   
    this.cursesService.crearEvaluacion(nombre,punteo,codigo_detallescurso).subscribe((result) =>{
     
     
      alert("Se creo la evaluacion con exito :D");
      console.log(result);
      this._router.navigate(['gestion-evaluacion']);
      
    });
  }

  actualizarEvaluaciones(): void{
    var codigo_evaluacion: number = this.UpdateRegisterForm.get('codigo_evaluacion').value;
    var habilitar: number = this.UpdateRegisterForm.get('habilitar').value;
    var aleatorio: number = this.UpdateRegisterForm.get('aleatorio').value;
    var nombre: string = this.UpdateRegisterForm.get('nombre').value;
    var punteo: number = this.UpdateRegisterForm.get('punteo').value;
    var codigo_detallescurso: number = this.UpdateRegisterForm.get('codigo_detallescurso').value;
    
   
    this.cursesService.ActualizarEvaluacion(codigo_evaluacion,nombre,habilitar,aleatorio,punteo,codigo_detallescurso).subscribe((result) =>{
     
     
      alert("Se actualizo con exito la evaluacion :D");
      console.log(result);
      this._router.navigate(['gestion-evaluacion']);
      
    });
  }
  EliminarEvaluacion(): void{
    var codigo_evaluacion: number = this.DeleteRegisterForm.get('codigo_evaluacion').value;
    
   
    this.cursesService.EliminarEvaluacion(codigo_evaluacion).subscribe((result) =>{
     
     
      alert("Se Elimino con exito la evaluacion :D");
      console.log(result);
      this._router.navigate(['gestion-evaluacion']);
      
    });
  }
  
}
