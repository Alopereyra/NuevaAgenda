import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-personas',
  templateUrl: './agregar-editar-personas.component.html',
  styleUrls: ['./agregar-editar-personas.component.css']
})
export class AgregarEditarPersonasComponent implements OnInit {

  constructor (public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>) {

  }

  ngOnInit(): void {
      
  }

  cancelar() {
    this.dialogRef.close();
  }


}
