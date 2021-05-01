import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta10 } from "../../../models-consultas/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta10',
  templateUrl: './consulta10.page.html',
  styleUrls: ['./consulta10.page.scss'],
})
export class Consulta10Page implements OnInit {
  consulta10: consulta10[] = [];
  date: string;
  constructor(
    private fb: FormBuilder,
    private consultaService: ConsultasService,
    private _router: Router
  ) {
    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }

  ngOnInit() {
    this.consultaService
      .consulta10()
      .subscribe((consulta10) => (this.consulta10 = consulta10));
  }

}
