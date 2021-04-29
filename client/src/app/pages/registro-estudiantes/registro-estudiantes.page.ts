import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {EstudiantesService} from 'src/app/services-usuario/estudiantes.service'
@Component({
  selector: 'app-registro-estudiantes',
  templateUrl: './registro-estudiantes.page.html',
  styleUrls: ['./registro-estudiantes.page.scss'],
})
export class RegistroEstudiantesPage implements OnInit {
  StudentsRegisterForm: FormGroup
  constructor(private fb: FormBuilder,private studenServices: EstudiantesService, private _router:Router) { }

  ngOnInit() {
    this.StudentsRegisterForm = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      carne: ['',Validators.required],
      correo_electronico: ['',Validators.required],
      password_: ['',Validators.required]
    });
  }

  crearEstudiantes(): void{
    var nombre: string = this.StudentsRegisterForm.get('nombre').value;
    var apellido: string = this.StudentsRegisterForm.get('apellido').value;
    var carne: number = this.StudentsRegisterForm.get('carne').value;
    var correo_electronico: string = this.StudentsRegisterForm.get('correo_electronico').value;
    var password_: string = this.StudentsRegisterForm.get('password_').value;
    this.studenServices.crearStudents(nombre,apellido,carne,correo_electronico,password_,2).subscribe((result)=>{
      alert("Se creo el Estudiante con exito :D");
      this._router.navigate(['']);
      console.log(result);
    })
  }

}
