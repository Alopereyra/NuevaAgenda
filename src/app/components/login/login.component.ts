import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
form: FormGroup;
loading = false;

  constructor (private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
      
  }

  ingresar () {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(usuario == 'Ale' && password == 'asd123') {
      //nos lleva a la pagina principal
      this.fakeLoading();
    } else {
      // Mostramos error
      this.error();
      this.form.reset();
    }
  }

  error () {
    this._snackBar.open("Usuario o Contraseña ingresado son INVALIDOS", '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {

      //falta redireccionar al Inicio
      this.loading = false;
    }, 1500);
  }

}







