import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

   datasource!: MatTableDataSource<any>;
   actionbtn: string = "Request Lists";

   action='done';
   color='success';

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

   displayedColumns : string[] = [ 'bookName', 'category', 'authore', 'action'];

  constructor(private books: BooksService) { }

  ngOnInit(): void {
    this.getAllRequests();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  getAllRequests() {
    this.actionbtn = "Request List"

    this.books.getRequest().subscribe({
      next: (res: any) => {
        this.datasource = new MatTableDataSource(res);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort
        console.log(res)
      },
      error: (err: any) => {
        alert("Error while fetching data")
      }
    })
  }
   
  accept(){
    this.action='check_box';
    this.color='warn'
    alert("book accepted")
  }

}
