import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PreguntasService } from "../../services/preguntas.service";
import { Pregunta } from "../../models/pregunta";
@Component({
  selector: "app-pregunta",
  templateUrl: "./pregunta.page.html",
  styleUrls: ["./pregunta.page.scss"],
})
export class PreguntaPage implements OnInit {
  preguntas: Pregunta[] = [];

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
  PreguntaRegisterForm: FormGroup;
  UpdateRegisterForm: FormGroup;
  DeleteRegisterForm: FormGroup;
  date:string
  constructor(
    private fb: FormBuilder,
    private PreguntasService: PreguntasService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.PreguntaRegisterForm = this.fb.group({
      pregunta: ["", Validators.required],
      id_encuesta: ["", Validators.required],
    });

    this.UpdateRegisterForm = this.fb.group({
      id: ["", Validators.required],
      pregunta: ["", Validators.required],
      id_encuesta: ["", Validators.required],
    });
    this.DeleteRegisterForm = this.fb.group({
      id_pregunta: ["", Validators.required],
    });
    this.PreguntasService.getPreguntas().subscribe(
      (preguntas) => (this.preguntas = preguntas)
    );

    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }
  crearPreguntas(): void {
    let pregunta: string = this.PreguntaRegisterForm.get("pregunta").value;
    let id_encuesta: number = this.PreguntaRegisterForm.get("id_encuesta")
      .value;

    this.PreguntasService.addPregunta(pregunta, id_encuesta).subscribe(
      (result) => {
        alert("Se creo la pregunta con exito :D");
        console.log(result);
        this.refresh()
      }
    );
  }
  refresh(): void {
    window.location.reload();
  }
  UpdatePreguntas(): void {
    let id: number = this.UpdateRegisterForm.get("id").value;
    let pregunta: string = this.UpdateRegisterForm.get("pregunta").value;
    let id_encuesta: number = this.UpdateRegisterForm.get("id_encuesta").value;

    this.PreguntasService.updatePregunta(id, pregunta, id_encuesta).subscribe(
      (result) => {
        alert("Se actualizo la pregunta con exito :D");
        console.log(result);
        this.refresh()
      }
    );
  }
  EliminarPreguntas(): void {
    let id_pregunta: number = this.DeleteRegisterForm.get("id_pregunta").value;

    this.PreguntasService.removePregunta(id_pregunta).subscribe((result) => {
      alert("Se elimino la pregunta con exito :D");
      console.log(result);
      this.refresh()
    });
  }
}
