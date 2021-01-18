import { Component, OnInit } from '@angular/core';
import { EmploymentType } from 'src/app/model/EmploymentType';

@Component({
  selector: 'app-employment-types',
  templateUrl: './employment-types.component.html',
  styleUrls: ['./employment-types.component.css']
})
export class EmploymentTypesComponent implements OnInit {
  dtOptions :any = {};
  employmentTypes : EmploymentType[]=[];

  title = "";

  constructor() { }

  ngOnInit(): void {
    this.title = "Employment Type";

    this.dtOptions = {
      pagingType : 'simple_numbers',
      pageLength : 2,
      responsive:true,
      dom:'Bfrtip',
      buttons:[
        'excel'
      ]
    }

    this.GetAll();
  }

  GetAll(){
    this.employmentTypes = [{IDNo:1,EmploymentTypeCode:'TestCode1',EmploymentTypeName:'TestName1',IsActive:true}];
  }

  

}
