import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gestion-reportes",
  templateUrl: "./gestion-reportes.page.html",
  styleUrls: ["./gestion-reportes.page.scss"],
})
export class GestionReportesPage implements OnInit {
  date: string;
  constructor() {
    let refreshTime = () => {
      this.date = new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      });
      this.date = this.date.replace(", ", " - ");
    };
    setInterval(refreshTime, 1000);
  }

  ngOnInit() {}
}
