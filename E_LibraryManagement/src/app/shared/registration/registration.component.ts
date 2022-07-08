import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';
 import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    // username: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
     {validators: CustomValidators.passwordsMatching }
  )

  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  register(){
    if (!this.registerForm.valid){
      
      return;
      this.dialog.closeAll();
      
    }
  }
}
