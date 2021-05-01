import { Component, OnInit } from '@angular/core';
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta7 } from "../../../models-consultas/consultas";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-consulta7',
  templateUrl: './consulta7.page.html',
  styleUrls: ['./consulta7.page.scss'],
})
export class Consulta7Page implements OnInit {
  consulta7: consulta7[] = [];
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
      .consulta7()
      .subscribe((consulta7) => (this.consulta7 = consulta7));
  }

}
