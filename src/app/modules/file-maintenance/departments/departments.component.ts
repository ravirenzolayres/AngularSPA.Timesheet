import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/Department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  dtOptions : any = {};
  departments :Department[] = [];
  title ="";

  constructor() { }

  ngOnInit(): void {
    this.title = "Department";

    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2,
      responsive:true,
      dom:'Bfrtip',
      buttons:[
        'excel'
      ]
    };

    this.GetAll();
  }

  GetAll(){
    this.departments = [{IDNo:1,DepartmentCode:"TestCode1",DepartmentName:"TestDesc1",IsActive:true}];
  }

}
