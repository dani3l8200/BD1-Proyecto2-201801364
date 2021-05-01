import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta5 } from "../../../models-consultas/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta5',
  templateUrl: './consulta5.page.html',
  styleUrls: ['./consulta5.page.scss'],
})
export class Consulta5Page implements OnInit {

  consulta5: consulta5[] = [];
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
      .consulta5()
      .subscribe((consulta5) => (this.consulta5 = consulta5));
  }

}
