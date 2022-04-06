import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  buttonName: string = 'Add Employee';

  @Output() addEmployee : EventEmitter<Employee> = new EventEmitter();
  @Output() updateEmployee : EventEmitter<Employee> = new EventEmitter();
  @Input() updateEmployeeData!: Employee
  constructor() {
   

  }
  
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
    if (this.buttonName == 'Add Employee') {
    this.addEmployee.emit(this.employeeData);
    }
    else {
      this.updateEmployee.emit(this.employeeData);
      this.buttonName = 'Add Employee';
    }
    this.name = '';
    this.email = '';
    this.phone = NaN;
    this.address = '';
    this.salary = NaN;
    this.position = '';

  }
  updateEmployeeDataParent(updateEmployeData:Employee){
    console.log("starting");
      
      this.name = updateEmployeData.name;
      this.email = updateEmployeData.email;
      this.phone = updateEmployeData.phone;
      this.address = updateEmployeData.address;
      this.salary = updateEmployeData.salary;
      this.position = updateEmployeData.position;
      this.buttonName = 'Update Employee';

}
}
