import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CursosService} from 'src/app/services-usuario/cursos.service';
import {Seccion} from 'src/app/modals-usuario/seccion';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.page.html',
  styleUrls: ['./seccion.page.scss'],
})
export class SeccionPage implements OnInit {
  public ocultar1: boolean = false;
  public ocultar2: boolean = false;
  public ocultar3: boolean = false;
  SeccionRegisterForm: FormGroup
  UpdateRegisterForm: FormGroup
  
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }
  accion2(){
    this.ocultar2 = !this.ocultar2;
    }
    accion3(){
      this.ocultar3 = !this.ocultar3;
      }
  allSeccion: Seccion[] = [


  ];

  constructor(private fb: FormBuilder,private cursesService: CursosService, private _router:Router) { }

  ngOnInit() {
    this.SeccionRegisterForm = this.fb.group({
      lseccion: ['',Validators.required]
    });
    this.UpdateRegisterForm = this.fb.group({
      lseccion: ['',Validators.required],
      codigo_seccion: ['',Validators.required]
    });
    this.cursesService.ObtenerSecciones().subscribe((allSeccion)=>this.allSeccion = allSeccion);
  }
  crearSeccion(): void{
    var lseccion: string = this.SeccionRegisterForm.get('lseccion').value;
    
   
    this.cursesService.crearSecciones(lseccion).subscribe((result) =>{
     
     
      alert("Se creo el curso con exito :D");
      console.log(result);
      this._router.navigate(['gestion-cursos']);
      
    });
  }
  UpdateSeccion(): void{
    var codigo_seccion: number = this.UpdateRegisterForm.get('codigo_seccion').value;
    var lseccion: string = this.UpdateRegisterForm.get('lseccion').value;
    
   
    this.cursesService.ActualizarSecciones(codigo_seccion,lseccion).subscribe((result) =>{
     
   
      alert("Se actualizo el curso con exito :D");
      console.log(result);
      this._router.navigate(['gestion-cursos']);
    });
  }

}
