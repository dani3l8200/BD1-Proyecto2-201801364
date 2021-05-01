import { Component, OnInit } from "@angular/core";
import { ConsultasService } from "../../../services/consultas.service";
import { consulta3 } from "../../../models/consultas";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-consulta3",
  templateUrl: "./consulta3.page.html",
  styleUrls: ["./consulta3.page.scss"],
})
export class Consulta3Page implements OnInit {
  consulta3: consulta3[] = [];
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
      .consulta3()
      .subscribe((consulta3) => (this.consulta3 = consulta3));
  }
}
