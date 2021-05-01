import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services/consultas.service";
import { consulta13 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta13',
  templateUrl: './consulta13.page.html',
  styleUrls: ['./consulta13.page.scss'],
})
export class Consulta13Page implements OnInit {
  consulta13: consulta13[] = [];
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
      .consulta13()
      .subscribe((consulta13) => (this.consulta13 = consulta13));
  }

}
