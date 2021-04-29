import { ReportesService } from './../../../services-usuario/reportes.service';
import { Report1 } from './../../../modals-usuario/report1';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {Preguntas} from 'src/app/modals-usuario/preguntas';
import {ObtenerPreguntas} from 'src/app/modals-usuario/ObtenerPreguntas';


@Component({
  selector: 'app-tabla-reporte1',
  templateUrl: './tabla-reporte1.page.html',
  styleUrls: ['./tabla-reporte1.page.scss'],
})
export class TablaReporte1Page implements OnInit {
ConsultaAsignaciones: Report1[] = [
  
];
constructor(private fb: FormBuilder,private consultaService: ReportesService, private _router:Router) { }

  ngOnInit() {
    this.consultaService.reporte1(localStorage.getItem("curso")).subscribe(
      (ConsultaAsignaciones) => this.ConsultaAsignaciones = ConsultaAsignaciones);
  }

}
