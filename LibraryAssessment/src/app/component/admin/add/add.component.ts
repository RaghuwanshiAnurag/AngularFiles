import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from '../service/books.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  bookForm!: FormGroup;
  actionbtn: string ="save";
  editData: any;

  constructor(private formBuilder: FormBuilder,
              private books: BooksService,
    @Inject(MAT_DIALOG_DATA) public editBook: any,
    private dialogref: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['',Validators.required],
      category: ['',Validators.required],
      authore: ['',Validators.required],
      quantity: ['',Validators.required]
    })

    if(this.editBook) {
      this.actionbtn = "update";
      this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
      this.bookForm.controls['category'].setValue(this.editBook.bookName);
      this.bookForm.controls['authore'].setValue(this.editBook.bookName);
      this.bookForm.controls['quantity'].setValue(this.editBook.bookName);
    }
  }

  addBook(){
    if (!this.editBook){
      if (this.bookForm.valid) {
        this.books.postBook(this.bookForm.value).subscribe({
          next:(res: any) => {
            alert("Added Successfully");
            this.dialogref.close('save');
          },
          error: () => {
            alert("Error")
          },
        });
      }
    } else {
      this.updateBookData();
    }
  }

  updateBookData(){
    this.books.putBookData(this.bookForm.value, this.editBook.id).
    subscribe({
      next:(res: any) => {
        alert("Update Successfully")
        this.bookForm.reset();
        this.dialogref.close('update');
      },
      error:() => {
        alert("Error")
      } 
    })
  }

}
