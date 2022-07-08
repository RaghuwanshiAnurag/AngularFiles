import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router, private matdialog:MatDialog, private toast : NgToastService) { }
 
  username!: string;
  password!: string;
  ngOnInit(){
    
  }
  
  login() : void{
    console.log (this.username, this.password)
    if(this.username == 'user@gmail.com' && this.password == 'user'){
      this.router.navigate(["users"]);
      this.toast.success({detail:"User login successfully", duration:5000})
    } 
    else if (this.username == 'admin@gmail.com' && this.password == 'admin'){
      this.router.navigate(["admin"]);
      this.toast.success({detail:"Admin login successfully", duration:5000})
    }
    else {
      alert("Invalid Credentials")
    }
     this.matdialog.closeAll();
  }
}
