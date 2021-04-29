import { Report1 } from './../../../modals-usuario/report1';
import { ReportesService } from './../../../services-usuario/reportes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modals-usuario/usuario';
@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.page.html',
  styleUrls: ['./reporte1.page.scss'],
})
export class Reporte1Page implements OnInit {
  CursosRegisterForm: FormGroup
  constructor(private fb: FormBuilder,private reporteServer: ReportesService, private _router:Router) {}

Asignaciones: Report1[] = [

];
public ocultar1: boolean = false;
accion1(){
  this.ocultar1 = !this.ocultar1;
  }
  
    ngOnInit() {
      this.CursosRegisterForm = this.fb.group({
       
        curso: ['',Validators.required]

      });
      
    }
    crearEvaluaciones(): void{
      var curso: string = this.CursosRegisterForm.get('curso').value;
      
      localStorage.setItem("curso", this.CursosRegisterForm.get('curso').value);
     
      this.reporteServer.reporte1(curso).subscribe((result) =>{
       
       
        alert("Se encontro el reporte :D");
        console.log(result);
        this._router.navigate(['tabla-reporte1']);
        
      });
    }
}
