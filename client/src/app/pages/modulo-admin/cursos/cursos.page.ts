import { Cursos } from 'src/app/modals-usuario/cursos';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CursosService} from 'src/app/services-usuario/cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  allCursos: Cursos[] = [


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
        constructor(private fb: FormBuilder,private cursesService: CursosService, private _router:Router) { }

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      estado: ['',Validators.required],
      codigo_unico: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      estado: ['',Validators.required],
      codigo_curso: ['',Validators.required]
    });
    this.DeleteRegisterForm = this.fb.group({
      codigo_curso1: ['',Validators.required]
    });
    this.cursesService.ObtenerCursos().subscribe((allCursos)=>this.allCursos = allCursos);
  }
  crearCusos(): void{
    var nombre: string = this.CursosRegisterForm.get('nombre').value;
    var descripcion: string = this.CursosRegisterForm.get('descripcion').value;
    var estado: number = this.CursosRegisterForm.get('estado').value;
    var codigo_unico: number =  this.CursosRegisterForm.get('codigo_unico').value;
   
    this.cursesService.crearCursos(nombre,descripcion,estado,codigo_unico).subscribe((result) =>{
     
     
      alert("Se creo el curso con exito :D");
      console.log(result);
      this._router.navigate(['cursos']);
      
    });
  }
  UpdateCursos(): void{
    var codigo_curso: number = this.UpdateRegisterForm.get('codigo_curso').value;
    var nombre: string = this.UpdateRegisterForm.get('nombre').value;
    var descripcion: string = this.UpdateRegisterForm.get('descripcion').value;
    var estado: number = this.UpdateRegisterForm.get('estado').value;
   
    this.cursesService.ActualizarCursos(codigo_curso,nombre,descripcion,estado).subscribe((result) =>{
     
   
      alert("Se actualizo el curso con exito :D");
      console.log(result);
      this._router.navigate(['cursos']);
    });
  }
  EliminarCursos(): void{
    var codigo_curso: number = this.DeleteRegisterForm.get('codigo_curso1').value;
    
   
    this.cursesService.EliminarCursos(codigo_curso).subscribe((result) =>{
     
   
      alert("Se elimino el curso con exito :D");
      console.log(result);
      this._router.navigate(['cursos']);
    });
  }

}
