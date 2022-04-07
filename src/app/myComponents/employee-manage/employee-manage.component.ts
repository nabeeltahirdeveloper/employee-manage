import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  allEmployee:Employee[]
  localItem:any
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

}
