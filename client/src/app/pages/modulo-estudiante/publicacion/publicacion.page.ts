import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  public ocultar1: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }
  constructor() { }

  ngOnInit() {
  }

}
