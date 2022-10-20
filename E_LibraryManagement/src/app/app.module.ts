import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './component/user/home/home.component';
import { ContactComponent } from './component/user/contact/contact.component';
import { AboutComponent } from './component/user/about/about.component';
import { BooksComponent } from './component/user/books/books.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './component/admin/profile/profile.component';
import { RegisterUsersComponent } from './component/admin/register-users/register-users.component';
import { BookListComponent } from './component/admin/book-list/book-list.component';
import { IssuedBooksComponent } from './component/admin/issued-books/issued-books.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { BookRequestComponent } from './component/admin/book-request/book-request.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { ImportMaterialModule } from './material/import-material/import-material.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BooksComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    AdminDashboardComponent,
    ProfileComponent,
    RegisterUsersComponent,
    BookListComponent,
    IssuedBooksComponent,
    CategoryComponent,
    BookRequestComponent,
    LoginComponent,
    RegistrationComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportMaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
