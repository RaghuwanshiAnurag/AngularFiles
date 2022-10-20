import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Requestedbook } from 'src/app/material/requestedbook.model';
import { RequestbookService } from 'src/app/service/requestbook.service';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.css']
})
export class BookRequestComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'userName', 'userEmail','quantity','pickupDate','returnDate'];
  data:Requestedbook[]=[];
  searchText:any;

  constructor(private requestBookService : RequestbookService) { }

  ngOnInit(): void {
    this.requestBookService.getBooks().subscribe(response=>{
      this.data = response;
    },(error: any)=>{
      console.log(error)
    })
  }


}
