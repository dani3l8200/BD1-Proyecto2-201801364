import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-auxiliar',
  templateUrl: './gestion-auxiliar.page.html',
  styleUrls: ['./gestion-auxiliar.page.scss'],
})
export class GestionAuxiliarPage implements OnInit {
  public hora: Date;
  constructor() { }

  ngOnInit() {
    this.hora = new Date(Date.now());
  }

}
