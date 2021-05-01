import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MantenimientoService } from "../../services/mantenimiento.service";
import { Answer, Inventos } from "../../models/mantenimiento";
@Component({
  selector: "app-mantenimiento",
  templateUrl: "./mantenimiento.page.html",
  styleUrls: ["./mantenimiento.page.scss"],
})
export class MantenimientoPage implements OnInit {
  respuestas: Answer[] = [];
  inventos: Inventos[] = [];

  public ocultar1: boolean = false;
  public ocultar2: boolean = false;
  public ocultar3: boolean = false;
  public ocultar4: boolean = false;
  accion1() {
    this.ocultar1 = !this.ocultar1;
  }
  accion2() {
    this.ocultar2 = !this.ocultar2;
  }
  accion3() {
    this.ocultar3 = !this.ocultar3;
  }
  accion4() {
    this.ocultar4 = !this.ocultar4;
  }
  AnswerUpdateRegisterForm: FormGroup;
  InventoresUpdateRegisterForm: FormGroup;
  date: string;
  constructor(
    private fb: FormBuilder,
    private MantenimientoService: MantenimientoService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.AnswerUpdateRegisterForm = this.fb.group({
      id_pregunta: ["", Validators.required],
      id_respuesta: ["", Validators.required],
    });

    this.InventoresUpdateRegisterForm = this.fb.group({
      id_invento: ["", Validators.required],
      inventor: ["", Validators.required],
      invento: ["", Validators.required],
      anio_invento: ["", Validators.required],
      id_inventor: ["", Validators.required],
    });

    this.MantenimientoService.getAnswers().subscribe(
      (respuestas) => (this.respuestas = respuestas)
    );

    this.MantenimientoService.getInventores().subscribe(
      (inventos) => (this.inventos = inventos)
    );

    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }
  refresh(): void {
    window.location.reload();
  }
  updateAnswers(): void {
    let id_pregunta: number = this.AnswerUpdateRegisterForm.get("id_pregunta")
      .value;
    let id_respuesta: number = this.AnswerUpdateRegisterForm.get("id_respuesta")
      .value;

    this.MantenimientoService.updateAwers(id_pregunta, id_respuesta).subscribe(
      (result) => {
        alert("Se actualizo la respuesta con exito :D");
        console.log(result);
        this.refresh();
      }
    );
  }

  UpdateInventores(): void {
    let id_invento: number = this.InventoresUpdateRegisterForm.get("id_invento")
      .value;
    let inventor: string = this.InventoresUpdateRegisterForm.get("inventor")
      .value;
    let invento: string = this.InventoresUpdateRegisterForm.get("invento")
      .value;
    let anio_invento: number = this.InventoresUpdateRegisterForm.get(
      "anio_invento"
    ).value;
    let id_inventor: number = this.InventoresUpdateRegisterForm.get(
      "id_inventor"
    ).value;

    this.MantenimientoService.updateInventores(
      id_invento,
      inventor,
      invento,
      anio_invento,
      id_inventor
    ).subscribe((result) => {
      alert("Se actualizo el invento con exito :D");
      console.log(result);
      this.refresh();
    });
  }
}
