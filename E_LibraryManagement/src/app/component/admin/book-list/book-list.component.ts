import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../component/admin/book-list/rest.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // bookModel=new BookList();
  booklist:any;
  
  constructor(private services:RestService ) { 
    
    this.services.getUsers().subscribe(response=>{
      console.log(response);
      this.booklist=response;
    })
  }
  ngOnInit(): void {
   
  }
}
