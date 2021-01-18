import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/model/Branch';
import { Company } from 'src/app/model/Company';
import { Department } from 'src/app/model/Department';
import { Employee } from 'src/app/model/Employee';
import { Position } from 'src/app/model/Position';
import { User } from 'src/app/model/User';

import { BranchesService } from 'src/app/services/branches.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { PositionsService } from 'src/app/services/positions.service';


@Component({
  selector: 'app-computed-dtr-view',
  templateUrl: './computed-dtr-view.component.html',
  styleUrls: ['./computed-dtr-view.component.css']
})
export class ComputedDtrViewComponent implements OnInit {
  dtOptions: any = {};

  branches :Branch[]=[];
  
  employeesDp : Employee[] =[];
  companiesDp : Company[] =[];
  branchesDp : Branch[] =[];
  departmentsDp : Department[] =[];
  positionsDp : Position[] =[];

  title = "";
  
  isBtnSearchDisabled : boolean = false;
  isBtnFinalizeDisabled : boolean = true;

  selectedCar: number = 0;
  users : User[] = [];

  selected: any;
  
  constructor(private branchesService : BranchesService,
              private companiesService : CompaniesService,
              private departmentService : DepartmentsService,
              private positionService : PositionsService,
              private employeesService : EmployeesService) { }

  ngOnInit(): void {
    this.title = "Computed DTR";
    this.isBtnSearchDisabled = false;
    this.isBtnFinalizeDisabled = true
    
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2,
      dom:'Bfrtip',
      responsive:true,
      buttons:[
        'excel'
      ]

    };

    this.getDtrs();
    this.getEmployees();
    this.getCompanies();
    this.getBranches();
    this.getDepartments();
    this.getPositions();
  }
  
  getDtrs(){
    this.branches = [
      {IDNo:1,BranchCode:"TestCode1",BranchName:"TestDesc1",IsActive:true},
      {IDNo:2,BranchCode:"TestCode2",BranchName:"TestDesc2",IsActive:true},
      {IDNo:3,BranchCode:"TestCode3",BranchName:"TestDesc3",IsActive:true}
    ];
  }

  getBranches(){
    this.branchesService.GetBranches().subscribe(data => {
      this.branchesDp = data;
    });
  }

  getCompanies(){
    this.companiesService.GetCompanies().subscribe(data => {
      this.companiesDp = data;
    });
  }

  getDepartments(){
    this.departmentService.GetDepartments().subscribe(data => {
      this.departmentsDp = data;
    });
  }

  
  getPositions(){
    this.positionService.GetPositions().subscribe(data => {
      this.positionsDp = data;
    });
  }

  getEmployees(){
    this.employeesService.GetEmployees().subscribe(data=> {
      this.employeesDp = data;
    })
  }

  isProcessingDtr(event:any){
    console.log(event.target.checked);
    if(event.target.checked == true){
      this.isBtnSearchDisabled = true;
      this.isBtnFinalizeDisabled = false;
    }else{
      this.isBtnSearchDisabled = false;
      this.isBtnFinalizeDisabled = true;
    }
  }
}
