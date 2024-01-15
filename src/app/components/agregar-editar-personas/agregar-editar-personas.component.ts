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
  form: FormGroup;
  minDate: Date; // Nueva propiedad para la fecha mínima
  horasDisponibles: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00']; // Puedo personalizar los horas disponibles
  loading: boolean = false;
  operacion: string = 'Agragar ';
  id: number | undefined;

  constructor (public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>,
    private fb: FormBuilder, private _personaService: PersonaService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.minDate = new Date(); // Calcular la fecha mínima (hoy)
      this.form = this.fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', [Validators.required, Validators.maxLength(20)]],
        correo: ['', [Validators.required, Validators.email]],
        detalle: ['', [Validators.required, Validators.maxLength(30)]],
        documento: [null,[ Validators.required, Validators.pattern("^[0-9]+$")]],
        fechaTurno: [new Date(), Validators.required], // establecer la fecha actual como valor por defecto
        horaTurno: [null, Validators.required],

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
        detalle: data.detalle,
        documento: data.documento,
        fechaTurno: new Date(data.fechaTurno), // Arreglo fecha al editar
        horaTurno: data.horaTurno
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
      detalle: this.form.value.detalle,
      documento: this.form.value.documento,
      fechaTurno: this.form.value.fechaTurno.toISOString().slice(0, 10),
      horaTurno: this.form.value.horaTurno
    };

    this.loading = true;

    if(this.id == undefined) {
      // Es agregar Persona
       this._personaService.addPersona(persona).subscribe(() => {
          this.mensajeAgregado('agregada');
        });
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
