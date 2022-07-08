import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Adminimg:string = "assets/images/admin-1.png";
  mainimg:string = "assets/images/Admin_bg.webp";
  dialog: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  // bookList(){
  //   this.router.navigate(['/booklist']);
  // }

}
