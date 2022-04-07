import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {


  @Input() allEmployee!:Employee[]
  constructor() {
   }

  ngOnInit(): void {
  }

}
