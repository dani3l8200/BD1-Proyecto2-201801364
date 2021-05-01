import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  loginForm: FormGroup;
  date: string;
  constructor(private fb: FormBuilder, private _router: Router) {
    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo_electronico: ["", [Validators.required, Validators.maxLength(80)]],
      password_: ["", [Validators.required, Validators.maxLength(80)]],
    });
  }

  iniciarSesion(): void {
    var correo_electronico: string = this.loginForm.get("correo_electronico")
      .value;
    var password: string = this.loginForm.get("password_").value;

    if (correo_electronico === "admin" && password === "admin") {
      alert("Bienvenido Administrador");
      this._router.navigate(["inicio-admin"]);
    } else {
      alert("Usuario o contraseña no valido");
      this.loginForm.reset();
    }
  }
}
