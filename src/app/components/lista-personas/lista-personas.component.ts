import { Component, OnInit } from '@angular/core';


import {MatTableModule} from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';

const listPersonas: Persona [] = [
  {nombre: "Tomas", apellido: "Perez", correo: "tperez@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date}

]

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = listPersonas;
}



