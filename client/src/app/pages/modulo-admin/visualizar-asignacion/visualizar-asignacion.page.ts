import { ObtenerAuxiliares } from './../../../modals-usuario/ObtenerAuxiliares';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EstudiantesService} from 'src/app/services-usuario/estudiantes.service';

@Component({
  selector: 'app-visualizar-asignacion',
  templateUrl: './visualizar-asignacion.page.html',
  styleUrls: ['./visualizar-asignacion.page.scss'],
})
export class VisualizarAsignacionPage implements OnInit {
allAsignaciones: ObtenerAuxiliares[] = [
  
];
  constructor(private fb: FormBuilder,private auxService: EstudiantesService, private _router:Router) { }

  ngOnInit() {
    this.auxService.ObtenerAsignacionAuxiliar().subscribe((allAsignaciones)=>this.allAsignaciones = allAsignaciones);
  }

}
