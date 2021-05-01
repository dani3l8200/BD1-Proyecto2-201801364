import { Component, OnInit } from "@angular/core";
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta11 } from "../../../models-consultas/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-consulta11",
  templateUrl: "./consulta11.page.html",
  styleUrls: ["./consulta11.page.scss"],
})
export class Consulta11Page implements OnInit {
  consulta11: consulta11[] = [];
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
      .consulta11()
      .subscribe((consulta11) => (this.consulta11 = consulta11));
  }
}
