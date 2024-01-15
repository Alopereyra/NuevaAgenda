import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ListaPersonasComponent } from "./components/lista-personas/lista-personas.component";



const routes: Routes = [
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'listaPacientes',component:ListaPersonasComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)}, //Carga perezosa, no carga todos los componentes de entrada, solo los de este modulo. Hace mas rapida la carga del usuario a nuestro sistema.
    {path:'**',redirectTo:'login', pathMatch:'full'} // Si la ruta no existe me manda al login (esta linea siempre al final)
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})

export class AppRoutingModule {}


