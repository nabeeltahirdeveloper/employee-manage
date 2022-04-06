import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {


  @Input() allEmployee!:Employee[]
  @Output() deleteEmployeeEvent: EventEmitter<number> = new EventEmitter();
  @Output() editEmployeeEvent: EventEmitter<number> = new EventEmitter();
  constructor() {
   }

  ngOnInit(): void {
  }
  deleteEmployee(index:number){
    this.deleteEmployeeEvent.emit(index);
  }

  updateEmployee(index:number){
    console.log(index);
    
    this.editEmployeeEvent.emit(index);
  }

}
