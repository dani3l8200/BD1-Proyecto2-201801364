import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EstudiantesService} from 'src/app/services-usuario/estudiantes.service';
import {Usuario} from 'src/app/modals-usuario/usuario';

@Component({
  selector: 'app-gestion-addaux',
  templateUrl: './gestion-addaux.page.html',
  styleUrls: ['./gestion-addaux.page.scss'],
})
export class GestionAddauxPage implements OnInit {
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
        allStudents: Usuario[] = [

        ];
        allAuxiliar: Usuario[] = [

        ];
        constructor(private fb: FormBuilder,private auxService: EstudiantesService, private _router:Router) { }
        CursosRegisterForm: FormGroup
        UpdateRegisterForm: FormGroup
        DeleteRegisterForm: FormGroup
  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
      codigo_estudiante: ['',Validators.required],
      carne: ['',Validators.required],
      password_: ['',Validators.required]
    });
    this.auxService.BuscarEstudiantes(2).subscribe((allStudents)=>this.allStudents = allStudents);
    this.auxService.MostarAuxiliares(3).subscribe((allAuxiliar)=>this.allAuxiliar = allAuxiliar);
  }
  crearAuxiliar(): void{
    var password_: string = this.CursosRegisterForm.get('password_').value;
    var carne: number = this.CursosRegisterForm.get('carne').value;
    var codigo_estudiante: number =  this.CursosRegisterForm.get('codigo_estudiante').value;
   
    this.auxService.CrearAuxiliares(codigo_estudiante,carne,3,password_).subscribe((result) =>{
     
     
      alert("Se actualizo el auxiliar con exito :D");
      console.log(result);
    
      
    });
  }

}
