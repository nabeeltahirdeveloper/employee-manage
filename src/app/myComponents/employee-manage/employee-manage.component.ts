import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {
  
  allEmployee:Employee[]
  localItem:any
  updateEmployeeData!:Employee
  employeeIndex!:number
  @ViewChild(AddEmployeeComponent, {static: false}) addEmployeeComponent!: AddEmployeeComponent;
  constructor() {
    this.localItem=localStorage.getItem('employee')
    if (this.localItem==null) {
      this.allEmployee=[]
    }
    else{
      this.allEmployee=JSON.parse(this.localItem)
    }}
    

  ngOnInit(): void {
  }

  EmployeeAdd(employee:Employee){
    this.allEmployee.push(employee);
    localStorage.setItem('employee',JSON.stringify(this.allEmployee))
  }
  
  deleteEmployee(index:number){
    this.allEmployee.splice(index,1)
    localStorage.setItem('employee',JSON.stringify(this.allEmployee))
  }
  
  editEmployee(index:number){
    this.updateEmployeeData=this.allEmployee[index]
    console.log(this.updateEmployeeData);
    
    this.employeeIndex=index
    console.log("start adding");
    
    this.addEmployeeComponent.updateEmployeeDataParent(this.updateEmployeeData)

  }
  updateEmployee(employee:Employee){
    this.allEmployee[this.employeeIndex]=employee
    localStorage.setItem('employee',JSON.stringify(this.allEmployee))
  }

  
}
