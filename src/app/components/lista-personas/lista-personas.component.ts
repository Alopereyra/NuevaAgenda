import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonasComponent } from '../agregar-editar-personas/agregar-editar-personas.component';

const listPersonas: Persona [] = [
  {nombre: "Tomas", apellido: "Perez", correo: "tperez@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date},
  {nombre: "AAAAA", apellido: "AAAAA", correo: "AAAAA@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date},
  {nombre: "BBBBB", apellido: "BBBBB", correo: "BBBBB@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date},
  {nombre: "CCCCC", apellido: "CCCCC", correo: "CCCCC@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date},
  {nombre: "DDDDD", apellido: "DDDDD", correo: "DDDDD@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date},
  {nombre: "EEEEE", apellido: "EEEEE", correo: "EEEEE@mail.com", tipoDocumento: "DNI", documento: 23568923, fechaNacimiento: new Date}

]

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento', 'acciones'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor (public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(listPersonas)

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  agregarEditPersona() {
    const dialogRef = this.dialog.open(AgregarEditarPersonasComponent, {
      width: '550px',
      disableClose: true,
    // data: {name: this.name, animal: this.animal},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  

}

