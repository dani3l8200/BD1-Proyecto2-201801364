import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services/consultas.service";
import { consulta19 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta19',
  templateUrl: './consulta19.page.html',
  styleUrls: ['./consulta19.page.scss'],
})
export class Consulta19Page implements OnInit {
  consulta19: consulta19[] = [];
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
      .consulta19()
      .subscribe((consulta19) => (this.consulta19 = consulta19));
  }

}
