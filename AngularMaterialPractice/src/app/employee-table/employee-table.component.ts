import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  EmployeeName: string;
  EnterDesignation: any;
  EnterDepartment: string;
  Joiningdate: any;
  genderList : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { EmployeeName: 'Anurag', EnterDesignation:'SD-1' , EnterDepartment:'DT', Joiningdate:'5/11/2022', genderList: 'M'},
  { EmployeeName: 'Aditya', EnterDesignation:'SD-1' , EnterDepartment:'Research', Joiningdate:'5/21/2022', genderList: 'M'},
  { EmployeeName: 'Aditi', EnterDesignation:'SD' , EnterDepartment:'Catalyst', Joiningdate:'4/20/2022', genderList: 'F'},
  { EmployeeName: 'Rambhu', EnterDesignation:'SD-2' , EnterDepartment:'Passport', Joiningdate:'6/12/2022', genderList: 'M'},
  { EmployeeName: 'Shivam', EnterDesignation:'SD-3' , EnterDepartment:'Passport', Joiningdate:'3/2/2022', genderList: 'M'},
  { EmployeeName: 'Shivani', EnterDesignation:'SD' , EnterDepartment:'Catalyst', Joiningdate:'4/16/2022', genderList: 'F'},
  { EmployeeName: 'Bablu', EnterDesignation:'SD-3' , EnterDepartment:'DT', Joiningdate:'1/4/2022', genderList: 'M'},
  { EmployeeName: 'Aniket', EnterDesignation:'SD-2' , EnterDepartment:'Passport', Joiningdate:'4/28/2022', genderList: 'M'},
  { EmployeeName: 'Rushi', EnterDesignation:'SD' , EnterDepartment:'Catalyst', Joiningdate:'5/9/2022', genderList: 'M'},
  { EmployeeName: 'juhi', EnterDesignation:'SD-1' , EnterDepartment:'DT', Joiningdate:'2/19/2022', genderList: 'F'},
];

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  
  @ViewChild(MatPaginator)
   paginator!:MatPaginator;
  displayedColumns: string[] = [ 'EmployeeName', 'EnterDesignation', 'EnterDepartment', 'Joiningdate', 'genderList'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(public dialog:MatDialog) {}
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}





