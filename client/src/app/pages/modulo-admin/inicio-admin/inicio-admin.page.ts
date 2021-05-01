import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inicio-admin",
  templateUrl: "./inicio-admin.page.html",
  styleUrls: ["./inicio-admin.page.scss"],
})
export class InicioAdminPage implements OnInit {
  public hora: Date;
  date: string;
  data = {
    Nombre: "Juan Daniel" + " " + "Roman Barrientos",
  };
  constructor(private _router: Router) {
    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }

  ngOnInit() {}
  logOut() {
    localStorage.clear();
    this._router.navigate([""]);
  }
}
