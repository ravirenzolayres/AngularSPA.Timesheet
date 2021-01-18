import { Component, OnInit } from '@angular/core';
import { Company } from '../../../model/Company';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  dtOptions :any = {};
  companies : Company[] = [];
  title = "";
  
  constructor() { }

  ngOnInit(): void {
    this.title = "Company";

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
    this.companies = [
      {IDNo:1,CompanyCode:"TestCode1",CompanyName:"TestDesc1",IsActive:true},
      {IDNo:2,CompanyCode:"TestCode2",CompanyName:"TestDesc2",IsActive:true},
      {IDNo:3,CompanyCode:"TestCode3",CompanyName:"TestDesc3",IsActive:true}
    ];
  }
}
