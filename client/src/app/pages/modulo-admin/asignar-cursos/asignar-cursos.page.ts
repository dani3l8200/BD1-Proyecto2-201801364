import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CursosService} from 'src/app/services-usuario/cursos.service';
import {VerAsignacion} from 'src/app/modals-usuario/verAsignacion';

@Component({
  selector: 'app-asignar-cursos',
  templateUrl: './asignar-cursos.page.html',
  styleUrls: ['./asignar-cursos.page.scss'],
})
export class AsignarCursosPage implements OnInit {
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
        constructor(private fb: FormBuilder,private cursesService: CursosService, private _router:Router) { }
allAsignaciones: VerAsignacion[] = [

];

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      semestre: ['',Validators.required],
      year_: ['',Validators.required],
      horaInicio: ['',Validators.required],
      horaFin: ['',Validators.required],
      fechalimit: ['',Validators.required],
      codigo_curso: ['',Validators.required],
      codigo_seccion: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      semestre: ['',Validators.required],
      year_: ['',Validators.required],
      horaInicio: ['',Validators.required],
      horaFin: ['',Validators.required],
      fechalimit: ['',Validators.required],
      codigo_curso: ['',Validators.required],
      codigo_seccion: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({ 
      codigo_detallescurso: ['',Validators.required]
    });
    this.cursesService.ObterAsignacionesCursos().subscribe((allAsignaciones)=>this.allAsignaciones = allAsignaciones)
  }
  crearAsignacion(): void{
    var semestre: string = this.CursosRegisterForm.get('semestre').value;
    var year_: number = this.CursosRegisterForm.get('year_').value;
    var horaInicio: string = this.CursosRegisterForm.get('horaInicio').value;
    var horaFin: string =  this.CursosRegisterForm.get('horaFin').value;
    var fechalimit: string =  this.CursosRegisterForm.get('fechalimit').value;
    var codigo_curso: number =  this.CursosRegisterForm.get('codigo_curso').value;
    var codigo_seccion: number = this.CursosRegisterForm.get('codigo_seccion').value;
   
    this.cursesService.CrearAsignacionCursos(semestre,year_,horaInicio,horaFin,fechalimit,codigo_curso,codigo_seccion).subscribe((result) =>{
     
     
     
      if(result[0]._existe == 0){
        alert("Se creo la asignacion con exito :D");
        console.log(result);
        this._router.navigate(['gestion-cursos']);
        }else{
          alert("Tiene esutidantes asignados");
        }
    });
  }
  ActualizarAsignacion(): void{
    var semestre: string = this.UpdateRegisterForm.get('semestre').value;
    var year_: number = this.UpdateRegisterForm.get('year_').value;
    var horaInicio: string = this.UpdateRegisterForm.get('horaInicio').value;
    var horaFin: string =  this.UpdateRegisterForm.get('horaFin').value;
    var fechalimit: string =  this.UpdateRegisterForm.get('fechalimit').value;
    var codigo_curso: number =  this.UpdateRegisterForm.get('codigo_curso').value;
    var codigo_seccion: number = this.UpdateRegisterForm.get('codigo_seccion').value;
    var codigo_detallescurso: number = this.UpdateRegisterForm.get('codigo_detallescurso').value;
    this.cursesService.ActualizarAsignacionCursos(codigo_detallescurso,semestre,year_,horaInicio,horaFin,fechalimit,codigo_curso,codigo_seccion).subscribe((result) =>{
     
      if(result[0]._existe == 0){
        alert("Se actualizo con exito la asignacion :D");
      console.log(result);
      this._router.navigate(['gestion-cursos']);
        }else{
          alert("Tiene esutidantes asignados");
        }
    });
  }
  EliminarAsigancion(): void{
    var codigo_detallescurso: number = this.DeleteRegisterForm.get('codigo_detallescurso').value;
    this.cursesService.EliminarAsignacionCursos(codigo_detallescurso).subscribe((result) =>{
     
      if(result[0]._existe == 0){
        alert("Se elimino con exito la asignacion :D");
      console.log(result);
      this._router.navigate(['gestion-cursos']);
        }else{
          alert("Tiene esutidantes asignados");
        }
    });
  }
}
