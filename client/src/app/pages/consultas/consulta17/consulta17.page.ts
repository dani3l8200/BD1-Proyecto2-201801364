import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta17 } from "../../../models-consultas/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta17',
  templateUrl: './consulta17.page.html',
  styleUrls: ['./consulta17.page.scss'],
})
export class Consulta17Page implements OnInit {
  consulta17: consulta17[] = [];
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
      .consulta17()
      .subscribe((consulta17) => (this.consulta17 = consulta17));
  }

}
