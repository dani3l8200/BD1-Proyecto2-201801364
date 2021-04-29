import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {
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
