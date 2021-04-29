import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {
  public hora: Date;
  
  data = {
    Nombre: localStorage.getItem("nombre") + " " +localStorage.getItem("Apellido")
  }
  constructor(private _router : Router) { }

  ngOnInit() {
    this.hora = new Date(Date.now());
  }
  logOut(){
  
    localStorage.clear();
    this._router.navigate(['']);
  
}

}
