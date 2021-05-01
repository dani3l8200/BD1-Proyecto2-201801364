import { Component, OnInit } from "@angular/core";
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta1 } from "../../../models-consultas/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-consulta1",
  templateUrl: "./consulta1.page.html",
  styleUrls: ["./consulta1.page.scss"],
})
export class Consulta1Page implements OnInit {
  consulta1: consulta1[] = [];
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
      .consulta1()
      .subscribe((consulta1) => (this.consulta1 = consulta1));
  }
}
