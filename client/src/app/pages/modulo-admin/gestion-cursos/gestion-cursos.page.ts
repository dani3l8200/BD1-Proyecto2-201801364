import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-cursos',
  templateUrl: './gestion-cursos.page.html',
  styleUrls: ['./gestion-cursos.page.scss'],
})
export class GestionCursosPage implements OnInit {
  public hora: Date;
  constructor() { }

  ngOnInit() {
    this.hora = new Date(Date.now());
  }


}
