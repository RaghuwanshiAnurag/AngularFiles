import { registerLocaleData } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})


export class NavbarComponent implements OnInit {
   myLogo:string="assets/images/logo-1.png";
  constructor(public dialog: MatDialog) {
   

   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialog.open(RegistrationComponent);
    
  }
  onSignin(){
    this.dialog.open(LoginComponent,{
    

    });
    

  }
  
}
