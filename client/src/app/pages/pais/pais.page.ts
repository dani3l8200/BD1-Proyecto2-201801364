import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PaisService } from "../../services/pais.service";
import { Pais, Frontera } from "../../models/pais";
@Component({
  selector: "app-pais",
  templateUrl: "./pais.page.html",
  styleUrls: ["./pais.page.scss"],
})
export class PaisPage implements OnInit {
  paises: Pais[] = [];
  fronteras: Frontera[] = [];

  public ocultar1: boolean = false;
  public ocultar2: boolean = false;
  public ocultar3: boolean = false;
  public ocultar4: boolean = false;
  public ocultar5: boolean = false;
  public ocultar6: boolean = false;
  public ocultar7: boolean = false;
  public ocultar8: boolean = false;
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
  accion5() {
    this.ocultar5 = !this.ocultar5;
  }
  accion6() {
    this.ocultar6 = !this.ocultar6;
  }
  accion7() {
    this.ocultar7 = !this.ocultar7;
  }
  accion8() {
    this.ocultar8 = !this.ocultar8;
  }
  PaisRegisterForm: FormGroup;
  PaisUpdateRegisterForm: FormGroup;
  PaisDeleteRegisterForm: FormGroup;
  FronteraRegisterForm: FormGroup;
  FronteraUpdateRegisterForm: FormGroup;
  FronteraDeleteRegisterForm: FormGroup;
  date: string;
  constructor(
    private fb: FormBuilder,
    private PaisService: PaisService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.PaisRegisterForm = this.fb.group({
      pais: ["", Validators.required],
      capital: ["", Validators.required],
      poblacion: ["", Validators.required],
      area_km2: ["", Validators.required],
      id_region: ["", Validators.required],
    });

    this.PaisUpdateRegisterForm = this.fb.group({
      id_pais: ["", Validators.required],
      pais: ["", Validators.required],
      capital: ["", Validators.required],
      poblacion: ["", Validators.required],
      area_km2: ["", Validators.required],
      id_region: ["", Validators.required],
    });

    this.PaisDeleteRegisterForm = this.fb.group({
      id_pais: ["", Validators.required],
    });

    this.PaisService.getPaises().subscribe((paises) => (this.paises = paises));

    this.FronteraRegisterForm = this.fb.group({
      id_pais: ["", Validators.required],
      check_frontera: ["", Validators.required],
      norte: ["",!Validators.required],
      sur: ["",!Validators.required],
      este: ["",!Validators.required],
      oeste: ["",!Validators.required],
    });

    this.FronteraUpdateRegisterForm = this.fb.group({
      id_frontera: ["", Validators.required],
      id_pais: ["", Validators.required],
      check_frontera: ["",Validators.required],
      norte: ["",!Validators.required],
      sur: ["",!Validators.required],
      este: ["",!Validators.required],
      oeste: ["",!Validators.required],
    });

    this.FronteraDeleteRegisterForm = this.fb.group({
      id_frontera: ["", Validators.required],
    });

    this.PaisService.getFronteras().subscribe((fronteras) => {
      this.fronteras = fronteras;
    });

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

  crearPaises(): void {
    let pais: string = this.PaisRegisterForm.get("pais").value;
    let capital: string = this.PaisRegisterForm.get("capital").value;
    let poblacion: number = this.PaisRegisterForm.get("poblacion").value;
    let area_km2: number = this.PaisRegisterForm.get("area_km2").value;
    let id_region: number = this.PaisRegisterForm.get("id_region").value;

    this.PaisService.addPaises(
      pais,
      capital,
      poblacion,
      area_km2,
      id_region
    ).subscribe((result) => {
      alert("Se creo el pais con exito :D");
      console.log(result);
      this.refresh();
    });
  }

  UpdatePaises(): void {
    let id_pais: number = this.PaisUpdateRegisterForm.get("id_pais").value;
    let pais: string = this.PaisUpdateRegisterForm.get("pais").value;
    let capital: string = this.PaisUpdateRegisterForm.get("capital").value;
    let poblacion: number = this.PaisUpdateRegisterForm.get("poblacion").value;
    let area_km2: number = this.PaisUpdateRegisterForm.get("area_km2").value;
    let id_region: number = this.PaisUpdateRegisterForm.get("id_region").value;
    console.log(id_pais);
    this.PaisService.updatePaises(
      id_pais,
      pais,
      capital,
      poblacion,
      area_km2,
      id_region
    ).subscribe((result) => {
      alert("Se actualizo el pais con exito :D");
      console.log(result);
      this.refresh();
    });
  }

  EliminarPaises(): void {
    let id_pais: number = this.PaisDeleteRegisterForm.get("id_pais").value;

    this.PaisService.removePaises(id_pais).subscribe((result) => {
      alert("Se elimino el pais con exito :D");
      console.log(result);
      this.refresh();
    });
  }

  crearFronteras(): void {
    let id_pais: number = this.FronteraRegisterForm.get("id_pais").value;
    let check_frontera: number = this.FronteraRegisterForm.get("check_frontera")
      .value;
    let norte: string = this.FronteraRegisterForm.get("norte").value;
    let sur: string = this.FronteraRegisterForm.get("sur").value;
    let este: string = this.FronteraRegisterForm.get("este").value;
    let oeste: string = this.FronteraRegisterForm.get("oeste").value;
    this.PaisService.addFrontera(
      id_pais,
      check_frontera,
      norte,
      sur,
      este,
      oeste
    ).subscribe((result) => {
      alert("Se creo la frontera con exito :D");
      console.log(result);
      this.refresh();
    });
  }

  UpdateFronteras(): void {
    let id_frontera: number = this.FronteraUpdateRegisterForm.get("id_frontera")
      .value;
    let id_pais: number = this.FronteraUpdateRegisterForm.get("id_pais").value;
    let check_frontera: number = this.FronteraUpdateRegisterForm.get(
      "check_frontera"
    ).value;
    let norte: string = this.FronteraUpdateRegisterForm.get("norte").value;
    let sur: string = this.FronteraUpdateRegisterForm.get("sur").value;
    let este: string = this.FronteraUpdateRegisterForm.get("este").value;
    let oeste: string = this.FronteraUpdateRegisterForm.get("oeste").value;

    this.PaisService.updateFronteras(
      id_frontera,
      id_pais,
      check_frontera,
      norte,
      sur,
      este,
      oeste
    ).subscribe((result) => {
      alert("Se actualizo la frontera con exito :D");
      console.log(result);
      this.refresh();
    });
  }

  EliminarFronteras(): void {
    let id_frontera: number = this.FronteraDeleteRegisterForm.get("id_frontera")
      .value;

    this.PaisService.removeFronteras(id_frontera).subscribe((result) => {
      alert("Se elimino la frontera con exito :D");
      console.log(result);
      this.refresh();
    });
  }
}
