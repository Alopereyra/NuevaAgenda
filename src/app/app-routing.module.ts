import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";



const routes: Routes = [
    {path:'',redirectTo:'inicio', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    
];
//RouterModule.forRoot(routes)

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})

export class AppRoutingModule {}


