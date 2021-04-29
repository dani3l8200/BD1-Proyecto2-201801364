import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-reportes',
  templateUrl: './gestion-reportes.page.html',
  styleUrls: ['./gestion-reportes.page.scss'],
})
export class GestionReportesPage implements OnInit {

  public hora: Date;
  constructor() { }

  ngOnInit() {
    this.hora = new Date(Date.now());
  }



}
