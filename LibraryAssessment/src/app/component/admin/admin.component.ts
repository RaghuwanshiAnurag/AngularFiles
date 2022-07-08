import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authore', 'quantity', 'action'];
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "Admin Portal";
  no : any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,
               private router : Router, private books : BooksService) { }

 

  openDialog(){
    this.dialog.open(AddComponent, {
      width :'30%'
    }).afterClosed().subscribe(val=>{
      this.getAllBooks();
    });
  }
   
  ngOnInit(): void {
    this.getAllRequests();
    this.getAllBooks();
  }

  getAllBooks(){

   this.books.getBook().subscribe({
     next:(res: any)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
      console.log(res.length);
     },
     error:(err : any)=>{
      alert("Error while fetching the data")
     }
   })
  }

  getRequestLists(){
    this.router.navigateByUrl('books')
  }

  editBook(row:any){
       this.dialog.open (AddComponent,{
        width:'30%',
        data:row
       }).afterClosed().subscribe(val=>{
        if(val==='update'){
          this.getAllBooks();
        }
      })
    }

  deleteBook(id:number){
    this.books.deleteBook(id).subscribe({
      next:(res: any)=>{
        alert("Book is deleted")
        this.getAllBooks();
      },
      error:()=>{
        alert("Error while deleting")
      }
    })
  }    
   
  
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllRequests(){
    this.books.getRequest().subscribe({
      next:(res : any)=>{
        this.no = res.length;
      },
      error:(err: any)=>{
        alert("Error while fetching data")
      }  
    })
  }
}
