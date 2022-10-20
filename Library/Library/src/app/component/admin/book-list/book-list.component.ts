import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/service/notifications.service';
import { Books } from 'src/app/material/import-material/books.model';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
   

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'title', 'author','category','quantity','action'];
  data:Books[]=[];
  searchText:any;
  constructor(private booksService:BookService,
    private toastr:NotificationsService,
    private route:Router){}

  ngOnInit():void{
    
    this.booksService.getBooks().subscribe(response=>{
      this.data=response;
    },(error: any)=>{
      console.log(error);
    })
  }
  public deleteBook(id:any){
    this.booksService.deleteBook(id).subscribe((res: any)=>{
     {
      alert('Are you sure delete this data')
      this.toastr.showSuccess("Message","Successfully deleted");
      window.location.reload();
      }
    });
  }
  public viewBook(id:any){
    this.booksService.getBookById(id).subscribe((res: any)=>{
      this.route.navigate(['/viewbook/',id])
    })
  }
}