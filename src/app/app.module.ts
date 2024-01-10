import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { AgregarEditarPersonasComponent } from './components/agregar-editar-personas/agregar-editar-personas.component';

//Modulos
import { SharedModule } from './shared/shared.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    AgregarEditarPersonasComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule   

  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue:'es' //Para poner en español el calendario
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
