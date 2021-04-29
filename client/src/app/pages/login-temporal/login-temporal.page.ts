import {Login} from 'src/app/modals-usuario/login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services-usuario/login.service';
import { Usuario } from 'src/app/modals-usuario/usuario';

@Component({
  selector: 'app-login-temporal',
  templateUrl: './login-temporal.page.html',
  styleUrls: ['./login-temporal.page.scss'],
})


export class LoginTemporalPage implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder,private loginsq: LoginService, private _router:Router) {}

  password: Usuario[] = [

  ];
 
  public ocultar1: boolean = false;
accion1(){
this.ocultar1 = !this.ocultar1;
}

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo_electronico: ['',[Validators.required,Validators.maxLength(80)]],
     password_: ['',[Validators.required,Validators.maxLength(80)]]
    });
    this.loginsq.ObtenerPassword(localStorage.getItem("correoTemporal")).subscribe(password => this.password = password)
  }





  iniciarSesion(): void{
    var correo_electronico: string = this.loginForm.get('correo_electronico').value;
    var password: string = this.loginForm.get('password_').value;
    this.loginsq.login(correo_electronico,password).subscribe(
      res=>{

        if(res[0].rol == 1){
          alert("Bienvenido Administrador");
          localStorage.setItem("nombre", res[0].nombre);
          localStorage.setItem("Apellido",res[0].apellido);
          localStorage.setItem("correo_electronico",res[0].correo_electronico);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          localStorage.setItem("rol",res[0].rol);
          this._router.navigate(['cambiar-password']);
        }else if(res[0].rol == 2){
        
          alert("Bienvenido Estudiante")
          localStorage.setItem("nombre", res[0].nombre);
          localStorage.setItem("Apellido",res[0].apellido);
          localStorage.setItem("correo_electronico",res[0].correo_electronico);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          localStorage.setItem("rol",res[0].rol);
          this._router.navigate(['cambiar-password']);
          
        }else if(res[0].rol == 3){
          
          alert("Bienvenido Auxiliar")
          localStorage.setItem("nombre", res[0].nombre);
          localStorage.setItem("Apellido",res[0].apellido);
          localStorage.setItem("correo_electronico",res[0].correo_electronico);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          localStorage.setItem("rol",res[0].rol);
          this._router.navigate(['cambiar-password']);
        }
        else{
          alert("Usuario o contraseña no valido");
          this.loginForm.reset();
          

        }
      }, (error) =>{
        console.error(error);
      },
      
    );
  }
  
  
  
}
