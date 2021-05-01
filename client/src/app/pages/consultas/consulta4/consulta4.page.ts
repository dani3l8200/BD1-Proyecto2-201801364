import { Component, OnInit } from "@angular/core";
import { ConsultasService } from "../../../services/consultas.service";
import { consulta4 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-consulta4",
  templateUrl: "./consulta4.page.html",
  styleUrls: ["./consulta4.page.scss"],
})
export class Consulta4Page implements OnInit {
  consulta4: consulta4[] = [];
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
      .consulta4()
      .subscribe((consulta4) => (this.consulta4 = consulta4));
  }
}
