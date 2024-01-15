import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { ListaPersonasComponent } from '../lista-personas/lista-personas.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'listaPacientes', component: ListaPersonasComponent },
    // { path: '', component: HomeComponent },


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
