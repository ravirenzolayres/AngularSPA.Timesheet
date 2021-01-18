import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  dtOptions : any = {};
  employees : Employee[]=[];
  title ="";

  constructor() { }

  ngOnInit(): void {
    this.title = "Employee";

    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2,
      responsive: true,
      dom: 'Bfrtip',
      buttons:[
        'excel'
      ]
    };

    this.GetAll();

  }

  GetAll(){
    this.employees = [
      {
        IDNo:1,
        EmployeeId:1,
        BioId:101,
        CompanyId:1,
        BranchId:1,
        DepartmentId:1,
        PositionId:1,
        EmployeeTypeId:1, 
        PersonalInfoId:1, 
        EducationInfoId :1,
        ProfileImg:'assets/test.png', 
        DefaultShiftCodeId:1, 
        UserId:1, 
        DateHired:'12/03/2018', 
        DateRegularized:'06/03/2019',
        IsActive:true
      },
      {
        IDNo:2,
        EmployeeId:2,
        BioId:102,
        CompanyId:1,
        BranchId:1,
        DepartmentId:1,
        PositionId:1,
        EmployeeTypeId:1, 
        PersonalInfoId:2, 
        EducationInfoId :2,
        ProfileImg:'assets/test.png', 
        DefaultShiftCodeId:1, 
        UserId:2, 
        DateHired:'12/04/2018', 
        DateRegularized:'06/05/2019',
        IsActive:true
      }
    ]
  }
}
