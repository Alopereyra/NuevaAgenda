import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-personas',
  templateUrl: './agregar-editar-personas.component.html',
  styleUrls: ['./agregar-editar-personas.component.css']
})

export class AgregarEditarPersonasComponent implements OnInit {
  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];
  form: FormGroup;

  constructor (public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        nombre: [''],
        apellido: [''],
        correo: [''],
        tipoDocumento: [null],
        documento: [null],
        fechaNacimiento: [null],

      })

  }

  ngOnInit(): void {
      
  }

  cancelar() {
    this.dialogRef.close();
  }

  addEditPersona() {
    console.log("agrega")
  }

}
