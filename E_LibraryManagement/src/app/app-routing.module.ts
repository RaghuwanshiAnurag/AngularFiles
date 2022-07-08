import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { BookListComponent } from './component/admin/book-list/book-list.component';
import { AboutComponent } from './component/about/about.component';
import { BooksComponent } from './component/books/books.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterUsersComponent } from './component/admin/register-users/register-users.component';
import { ProfileComponent } from './component/admin/profile/profile.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { IssuedBooksComponent } from './component/admin/issued-books/issued-books.component';
import { BookRequestComponent } from './component/admin/book-request/book-request.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  {path:'' ,component:NavbarComponent},
  {path:'books',component:BooksComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path: 'signup', component:RegistrationComponent},
  {path:'signin', component:LoginComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path: 'booklist', component:BookListComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'registerUser', component:RegisterUsersComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'issuedbooks', component:IssuedBooksComponent},
  {path: 'requestbooks', component:BookRequestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
