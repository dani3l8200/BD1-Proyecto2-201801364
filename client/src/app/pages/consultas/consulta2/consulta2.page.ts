import { Component, OnInit } from "@angular/core";
import { ConsultasService } from "../../../services-usuario/consultas.service";
import { consulta2 } from "../../../models-consultas/consultas";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-consulta2",
  templateUrl: "./consulta2.page.html",
  styleUrls: ["./consulta2.page.scss"],
})
export class Consulta2Page implements OnInit {
  consulta2: consulta2[] = [];
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
      .consulta2()
      .subscribe((consulta2) => (this.consulta2 = consulta2));
  }
}
