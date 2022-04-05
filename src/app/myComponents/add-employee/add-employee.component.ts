import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name: string | undefined;
  email!: string;
  phone!: number;
  address! : string;
  salary!: number;
  position!: string;

  employee!: Employee
  employeeData=[]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
