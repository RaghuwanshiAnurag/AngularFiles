import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 
  genderList = ["Male", "Female", "Other"];
  productForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      EmployeeName : ['', Validators.required],
      EnterDesignation : ['', Validators.required],
      EnterDepartment : ['', Validators.required],
      Joiningdate : ['', Validators.required],
      genderList : ['', Validators.required]
    })
  }
  addEmployee(){
    console.log(this.productForm.value);
    
  }

}
