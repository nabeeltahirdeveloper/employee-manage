import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './myComponents/add-employee/add-employee.component';
import { EmployeeManageComponent } from './myComponents/employee-manage/employee-manage.component';
import { EmployeeTableComponent } from './myComponents/employee-table/employee-table.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { SidebarComponent } from './myComponents/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeManageComponent,
    EmployeeTableComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
