import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './shared/login/login.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


const routes: Routes = [
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
