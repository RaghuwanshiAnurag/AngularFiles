import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide : boolean = false;

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
  }
    
  loginForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]

  })

  onLogin(){
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
     
  }


}
