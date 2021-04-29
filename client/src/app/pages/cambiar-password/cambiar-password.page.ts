import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services-usuario/login.service';
@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  RecoveryPassword: FormGroup
  constructor(private fb: FormBuilder,private studenServices: LoginService, private _router:Router) { }

  ngOnInit() {
    this.RecoveryPassword = this.fb.group({
      password_: ['',Validators.required],
      password1: ['',Validators.required]
    });
  }

  cambiarPassword(): void{
    var password_: string = this.RecoveryPassword.get('password_').value;
    this.studenServices.CambiarPassword(localStorage.getItem("correoTemporal"),password_).subscribe(
      res=>{
       
        if(res[0].rol == 1){
          alert("Bienvenido Administrador");
          this._router.navigate(['inicio-admin']);
        }else if(res[0].rol == 2){
         
          alert("Bienvenido Estudiante")
          this._router.navigate(['gestion-mensajes']);
        }else if(res[0].rol == 3){
      
          alert("Bienvenido Auxiliar")
        }
        else{
          alert("Usuario o contraseña no valido");
          this.RecoveryPassword.reset();
          

        }
      }, (error) =>{
        console.error(error);
      },
      
    );
  }

  

}
