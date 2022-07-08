import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from '../admin/service/books.service';
import { UsersService } from '../admin/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  requestForm!: FormGroup;

  displayedColums: string[] = ['id', 'bookName', 'category', 'authore', 'quantity', 'action'];
  dataSource!: MatTableDataSource<any>;
  no:any;
  count: number = 0;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private formbuilder:FormBuilder,
              private book:BooksService, private request:UsersService) { }

  ngOnInit(): void {
    this.requestForm=this.formbuilder.group({

      id:['',Validators.required],
      bookName:['',Validators.required],
      category:['',Validators.required],
      authore:['',Validators.required],
      quantity:['',Validators.required]
    })
     this.getAllBooks();
  }
  getAllBooks() {
    this.book.getBook().subscribe({
      next:(res: any[] | undefined)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err: any)=>{
        alert("Error")
      }
    })
  }
   
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sendRequest(no:any){
    if(no>3){
     alert("Already Requested 3 books");
    }
    else{
     if(this.requestForm.valid){
       this.request.requestBook(this.requestForm.value)
       .subscribe({
         next:(res: any)=>{
           alert("send request successfully")
           
         }
       })
     }
    }
  }

    requestBook(data : any) {
      this.requestForm.controls['id'].setValue(data.id);
      this.requestForm.controls['bookName'].setValue(data.bookName);
      this.requestForm.controls['category'].setValue(data.category);
      this.requestForm.controls['authore'].setValue(data.authore);
      this.requestForm.controls['quantity'].setValue(data.quantity);
      this.sendRequest(this.count);
      this.count++;
      console.log(this.count);
    }

    getAllRequests(){
      this.book.getRequest().subscribe({
        next:(res: any)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
          this.no = res.length;
        },
        error:(err: any)=>{
          alert("Error")
        }
      })
    }

}
 

