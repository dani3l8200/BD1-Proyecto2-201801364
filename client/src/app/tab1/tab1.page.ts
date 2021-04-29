import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services-usuario/login.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder,private loginsq: LoginService, private _router:Router) {}

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      correo_electronico: ['',[Validators.required,Validators.maxLength(80)]],
     password_: ['',[Validators.required,Validators.maxLength(80)]]
    });
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
          localStorage.setItem("Conexion",res[0].rol);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          this._router.navigate(['inicio-admin']);
         
         
        }else if(res[0].rol == 2){
          localStorage.setItem("nombre", res[0].nombre);
          localStorage.setItem("Apellido",res[0].apellido);
          localStorage.setItem("Conexion",res[0].rol);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          this._router.navigate(['inicio-estudiante']);
          alert("Bienvenido Estudiante")
         
        }else if(res[0].rol == 3){
          localStorage.setItem("nombre", res[0].nombre);
          localStorage.setItem("Apellido",res[0].apellido);
          localStorage.setItem("Conexion",res[0].rol);
          localStorage.setItem("ID",res[0].codigo_estudiante);
          alert("Bienvenido Auxiliar")
          this._router.navigate(['inicio-auxiliar']);
          
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
