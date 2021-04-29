import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EstudiantesService} from 'src/app/services-usuario/estudiantes.service';
import {Usuario} from 'src/app/modals-usuario/usuario';

@Component({
  selector: 'app-gestion-asignacionaux',
  templateUrl: './gestion-asignacionaux.page.html',
  styleUrls: ['./gestion-asignacionaux.page.scss'],
})
export class GestionAsignacionauxPage implements OnInit {

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

        constructor(private fb: FormBuilder,private auxService: EstudiantesService, private _router:Router) { }
        CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      codigo_estudiante: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      codigo_estudiante: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required],
      codigo_asignacionaux: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      estado: ['',Validators.required],
      motivo: ['',Validators.required],
      codigo_asignacionaux: ['',Validators.required]
    });
  }
  CrearAsignacion(): void{
    var codigo_estudiante: number = this.CursosRegisterForm.get('codigo_estudiante').value;
    var codigo_detallescurso: number =  this.CursosRegisterForm.get('codigo_detallescurso').value;
     
    this.auxService.AsigancionAuxiliares(codigo_estudiante,codigo_detallescurso).subscribe((result) =>{
     
      if(result[0]._existe == 0){
        alert("Se Asigno el auxiliar con exito :D");
      console.log(result);
      this._router.navigate(['gestion-auxiliar']);
        }else{
          alert("No se puede asignar el auxiliar");
        }
    });
  }
  EditarAsignacion(): void{
    var codigo_estudiante: number = this.UpdateRegisterForm.get('codigo_estudiante').value;
    var codigo_detallescurso: number =  this.UpdateRegisterForm.get('codigo_detallescurso').value;
    var codigo_asignacionaux: number =  this.UpdateRegisterForm.get('codigo_asignacionaux').value;
     
    this.auxService.ActualizarAuxiliar(codigo_asignacionaux,codigo_estudiante,codigo_detallescurso).subscribe((result) =>{
     
      if(result[0]._existe == 0){
        alert("Se Actualio el auxiliar con exito :D");
      console.log(result);
      this._router.navigate(['gestion-auxiliar']);
        }else{
          alert("No se puede actualizar el auxiliar");
        }
    });
  }
  EliminarAsignacion(): void{
    var estado: number = this.DeleteRegisterForm.get('estado').value;
    var motivo: string =  this.DeleteRegisterForm.get('motivo').value;
    var codigo_asignacionaux: number =  this.DeleteRegisterForm.get('codigo_asignacionaux').value;
    this.auxService.DesasignacionAuxiliares(codigo_asignacionaux,estado,motivo).subscribe((result) =>{
     
 
        alert("Se Desasigno el auxiliar con exito :D");
      console.log(result);
      this._router.navigate(['gestion-auxiliar']);
       
    });
  }

}
