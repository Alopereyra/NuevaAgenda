import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-agregar-editar-personas',
  templateUrl: './agregar-editar-personas.component.html',
  styleUrls: ['./agregar-editar-personas.component.css']
})

export class AgregarEditarPersonasComponent implements OnInit {
  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];
  form: FormGroup;
  maxDate: Date;
  loading: boolean = false;
  operacion: string = 'Agragar ';
  id: number | undefined;

  constructor (public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>,
    private fb: FormBuilder, private _personaService: PersonaService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.maxDate = new Date ();
      this.form = this.fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', [Validators.required, Validators.maxLength(20)]],
        correo: ['', [Validators.required, Validators.email]],
        tipoDocumento: [null, Validators.required],
        documento: [null,[ Validators.required, Validators.pattern("^[0-9]+$")]],
        fechaNacimiento: [null, Validators.required],

      })
      this.id = data.id;
  }

  ngOnInit(): void {
    this.esEditar(this.id)
  }

  esEditar(id: number | undefined ) {
    if(id !== undefined) {
      this.operacion = 'Editar ';
      this.getPersona(id);
    }
  }

  getPersona(id: number) {
    this._personaService.getPersona(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        tipoDocumento: data.tipoDocumento,
        documento: data.documento,
        fechaNacimiento: new Date(data.fechaNacimiento), // Arreglo fecha al editar
      })
    })

  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditPersona() {
    
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento.toISOString().slice(0,10)
    };

    this.loading = true;

    if(this.id == undefined) {
      // Es agregar Persona
      setTimeout(() => {
        this._personaService.addPersona(persona).subscribe(() => {
          this.mensajeAgregado('agregada');
        })
      }, 1000);
    } else {
      // Es Editar Persona
      this._personaService.updataPersona(this.id, persona).subscribe(data => {
        this.mensajeAgregado('actualizada');
      })
    }
    this.loading = false;
    this.dialogRef.close(true);
  }

  mensajeAgregado(operacion: string) {
    this._snackBar.open(`La persona fue ${operacion} con Exito`, " ", {
      duration: 2000
    });
  }

}
