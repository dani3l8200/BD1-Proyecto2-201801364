import { ConsultaLikes } from './../../../modals-usuario/consultaLikes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EvaluacionesService} from 'src/app/services-usuario/evaluaciones.service';
import {Preguntas} from 'src/app/modals-usuario/preguntas';
import {ObtenerPreguntas} from 'src/app/modals-usuario/ObtenerPreguntas';
import { ReportesService } from './../../../services-usuario/reportes.service';

@Component({
  selector: 'app-tabla-reporte2',
  templateUrl: './tabla-reporte2.page.html',
  styleUrls: ['./tabla-reporte2.page.scss'],
})
export class TablaReporte2Page implements OnInit {

reporteLikes: ConsultaLikes[] = [

];

  constructor(private fb: FormBuilder,private consultaService: ReportesService, private _router:Router) { }

  ngOnInit() {
    this.consultaService.reporte41(localStorage.getItem("creador"),localStorage.getItem("Admin")).subscribe(
      (reporteLikes) => this.reporteLikes = reporteLikes);
  }

}
