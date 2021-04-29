import { ObtenerAsignacionesEstudiantes } from './../../../modals-usuario/ObtenerAsignacionesEstudiantes';
import { EstudiantesService } from 'src/app/services-usuario/estudiantes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignacion-cursos',
  templateUrl: './asignacion-cursos.page.html',
  styleUrls: ['./asignacion-cursos.page.scss'],
})
export class AsignacionCursosPage implements OnInit {

allAsignaciones: ObtenerAsignacionesEstudiantes[] = [

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
        CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup
        constructor(private fb: FormBuilder,private cursesService: EstudiantesService, private _router:Router) { }

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      codigo_estudiante: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      estado: ['',Validators.required],
      codigo_curso: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_estudiante: ['',Validators.required],
      codigo_detallescurso: ['',Validators.required],
      codigo_asignacionstudent: ['',Validators.required]
    });
    this.cursesService.ObtenerEstudiantesAsignados(localStorage.getItem("ID")).subscribe((allAsignaciones)=>this.allAsignaciones = allAsignaciones);
  }

  crearCusos(): void{
    var codigo_estudiante: number = this.CursosRegisterForm.get('codigo_estudiante').value;
    var codigo_detallescurso: number = this.CursosRegisterForm.get('codigo_detallescurso').value;
  
   
    this.cursesService.AsigancionEstudiante(codigo_detallescurso,codigo_estudiante).subscribe((result) =>{
     
      if(result[0]._existe == 0){
        alert("Se creo asigno con exito :D");
        console.log(result);
        this._router.navigate(['inicio-estudiante']);
    
        }else{
          alert("No se puede asignar al curso mas de una vez");
        }
     
      
    });
  }
  EliminarCursos(): void{
    var codigo_asignacionstudent: number = this.DeleteRegisterForm.get('codigo_asignacionstudent').value;
    var codigo_estudiante: number = this.DeleteRegisterForm.get('codigo_estudiante').value;
    var codigo_detallescurso: number = this.DeleteRegisterForm.get('codigo_detallescurso').value;
   
    this.cursesService.EliminarAsignacionEstudiante(codigo_detallescurso,codigo_asignacionstudent,codigo_estudiante).subscribe((result) =>{
     
      if(result[0]._existe == 1){
        alert("Se elimino asignacion con exito :D");
        console.log(result);
        this._router.navigate(['inicio-estudiante']);
    
        }else{
          alert("No se puede eliminar asignacion del curso");
        }
    });
  }

}
