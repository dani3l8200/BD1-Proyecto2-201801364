import { Report1 } from './../../../modals-usuario/report1';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modals-usuario/usuario';

import { ReportesService } from './../../../services-usuario/reportes.service';


@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.page.html',
  styleUrls: ['./reporte2.page.scss'],
})
export class Reporte2Page implements OnInit {

  CursosRegisterForm: FormGroup
  constructor(private fb: FormBuilder,private reporteServer: ReportesService, private _router:Router) {}
  public ocultar1: boolean = false;
  accion1(){
    this.ocultar1 = !this.ocultar1;
    }

  ngOnInit() {
    this.CursosRegisterForm = this.fb.group({
       
      creador: ['',Validators.required],
      Admin: ['',Validators.required]

    });   
  }
  crearEvaluaciones(): void{
    var creador: number = this.CursosRegisterForm.get('creador').value;
    var Admin: number = this.CursosRegisterForm.get('Admin').value;
    
    localStorage.setItem("creador", this.CursosRegisterForm.get('creador').value);
    localStorage.setItem("Admin", this.CursosRegisterForm.get('Admin').value);
    this.reporteServer.reporte4(creador,Admin).subscribe((result) =>{
     
     
      alert("Se encontro el reporte :D");
      console.log(result);
      this._router.navigate(['tabla-reporte2']);
      
    });
  }
}
