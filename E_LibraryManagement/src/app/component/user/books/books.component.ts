import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/service/book.service';
import { NotificationsService } from 'src/app/service/notifications.service';
import { RequestbookService } from 'src/app/service/requestbook.service';
import { UserService } from 'src/app/service/user.service';
import { Requestedbook } from 'src/app/material/requestedbook.model';
import { Books } from 'src/app/material/import-material/books.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  cartdata:any;
  data:any;
  searchText:any;
  bookQty:any;
  counter=0;
  count:any;

  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth()+1;
  year = this.currentDate.getFullYear();
  returnDate = (this.day + 3 + '/' + this.month + '/' + this.year);
  pickedupdate = (this.day + '/' + this.month + '/' + this.year);
  userId = localStorage.getItem('userid');
  useremail = localStorage.getItem('email');
  username = localStorage.getItem('firstName')+' '+localStorage.getItem('lastName');

  constructor(
    private bookService:BookService,
    private requestBook:RequestbookService, 
    private toastrService:NotificationsService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(response =>{
      this.data = response;
    },error=>{
      console.log()
    })
  }

  addDataCart(id:any){
    this.requestBook.getBooks().subscribe((res: any)=>{
        if(this.requestCount(this.useremail,res) < 3){
          this.bookService.getBookById(id).subscribe(resp=>{
            console.log(resp.id,'Hey');
            this.requestBook.addRequestedBook(this.requestedBookPost(resp.id,resp.title,resp.author,resp.category,resp.imageUrl,this.useremail,this.username,this.pickedupdate,this.returnDate))
            .subscribe((res: any)=>{
              this.toastrService.showSuccess('Book request added successfully',
               `${"Return Date is "+this.returnDate}`);
              this.count++
            });
          });
        }
      else {
        this.toastrService.showWarning("You exceed the limit of book request","failed")
      }
    })
  }

  requestCount(email:any,data:any){
    let count=0;
    for(let i=0;i<data.length;i++){
      if(data[i].userEmail==email){
        count++;
      }
    }
    return count;
  }

  requestedBookPost(id:number,title:string,author:string,
    category:string,imageUrl:string,
    userEmail:string,username:string,pickedupDate:string,returnDate:string){
    return {id:id,title:title,author:author,category:category,
            quantity:1,imageUrl:imageUrl,userEmail:userEmail,
          username:username,pickupDate:pickedupDate,returnDate:returnDate}
  }

}
