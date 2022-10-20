import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';
import { CustomValidators } from '../custom-validators';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    // username: new FormControl(null, [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required])
  },
     {validators: CustomValidators.passwordsMatching }
  )
  alert: boolean;

  constructor( private dialog : MatDialog, private user : RegistrationService) { }

  ngOnInit(): void {
  }

  // register(){
  //   if (!this.registerForm.valid){
      
  //     return;
  //     this.dialog.closeAll();
      
  //   }
  // }
   
  collection()
  {
    this.user.registerUser(this.registerForm.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
}
