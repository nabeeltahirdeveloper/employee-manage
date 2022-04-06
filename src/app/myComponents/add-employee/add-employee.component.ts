import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name!: string;
  email!: string;
  phone!: number;
  address!: string;
  salary!: number;
  position!: string;
  employeeData!: Employee

  @Output() addEmployee : EventEmitter<Employee> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.employeeData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      salary: this.salary,
      position: this.position
    }
    this.addEmployee.emit(this.employeeData);
  }
}
