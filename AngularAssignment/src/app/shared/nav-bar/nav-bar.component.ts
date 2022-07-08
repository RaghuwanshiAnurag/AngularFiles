import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( public dialog: MatDialog, 
               public router: Router) { }

  ngOnInit(): void {
  }
 
  // openDialog(){
  //   this.dialog.open(LoginComponent)
  // }
  openLogin(){
    this.router.navigateByUrl('login')
  }
}
