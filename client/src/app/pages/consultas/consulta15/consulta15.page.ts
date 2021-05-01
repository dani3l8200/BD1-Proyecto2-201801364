import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services/consultas.service";
import { consulta15 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta15',
  templateUrl: './consulta15.page.html',
  styleUrls: ['./consulta15.page.scss'],
})
export class Consulta15Page implements OnInit {
  consulta15: consulta15[] = [];
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
      .consulta15()
      .subscribe((consulta15) => (this.consulta15 = consulta15));
  }
}
