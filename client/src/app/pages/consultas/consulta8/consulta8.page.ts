import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta8 } from "../../../models-consultas/consultas";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta8',
  templateUrl: './consulta8.page.html',
  styleUrls: ['./consulta8.page.scss'],
})
export class Consulta8Page implements OnInit {
  consulta8: consulta8[] = [];
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
      .consulta8()
      .subscribe((consulta8) => (this.consulta8 = consulta8));
  }

}
