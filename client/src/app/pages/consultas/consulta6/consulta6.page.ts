import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services/consultas.service";
import { consulta6 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-consulta6',
  templateUrl: './consulta6.page.html',
  styleUrls: ['./consulta6.page.scss'],
})
export class Consulta6Page implements OnInit {
  consulta6: consulta6[] = [];
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
      .consulta6()
      .subscribe((consulta6) => (this.consulta6 = consulta6));
  }

}
