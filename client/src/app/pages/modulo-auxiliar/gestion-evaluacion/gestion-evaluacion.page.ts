import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-evaluacion',
  templateUrl: './gestion-evaluacion.page.html',
  styleUrls: ['./gestion-evaluacion.page.scss'],
})
export class GestionEvaluacionPage implements OnInit {

  public hora: Date;
  constructor() { }

  ngOnInit() {
    this.hora = new Date(Date.now());
  }

  
}
