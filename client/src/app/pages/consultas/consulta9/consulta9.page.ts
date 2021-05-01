import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services/consultas.service";
import { consulta9 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta9',
  templateUrl: './consulta9.page.html',
  styleUrls: ['./consulta9.page.scss'],
})
export class Consulta9Page implements OnInit {
  consulta9: consulta9[] = [];
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
      .consulta9()
      .subscribe((consulta9) => (this.consulta9 = consulta9));
  }

}
