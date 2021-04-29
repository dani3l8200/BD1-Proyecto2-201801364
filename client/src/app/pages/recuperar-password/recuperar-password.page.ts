import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services-usuario/login.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  RecoveryPassword: FormGroup
  constructor(private fb: FormBuilder,private studenServices: LoginService, private _router:Router) { }


  ngOnInit() {
    this.RecoveryPassword = this.fb.group({
      correo_electronico: ['',Validators.required]
    });
  }

  recoveryPassword(): void{
    var correo_electronico: string = this.RecoveryPassword.get('correo_electronico').value;
    localStorage.setItem("correoTemporal", this.RecoveryPassword.get('correo_electronico').value);
    this.studenServices.GenerarPassword(correo_electronico).subscribe((result)=>{
      alert("Se Genero la contraseña con exito :D");
      this._router.navigate(['login-temporal']);
      console.log(result);
    })
  }



}
