import { Component, OnInit } from '@angular/core';
import { CivilStatus } from 'src/app/model/CivilStatus';

@Component({
  selector: 'app-civil-statuses',
  templateUrl: './civil-statuses.component.html',
  styleUrls: ['./civil-statuses.component.css']
})
export class CivilStatusesComponent implements OnInit {
  dtOptions :any = {};
  civilStatuses : CivilStatus[] = [];
  title = "";
  
  constructor() { }

  ngOnInit(): void {
    this.title = "Civil Status";

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
    this.civilStatuses = [
      {IDNo:1,CivilStatusCode:"TestCode1",CivilStatusName:"TestDesc1",IsActive:true},
      {IDNo:2,CivilStatusCode:"TestCode2",CivilStatusName:"TestDesc2",IsActive:true},
      {IDNo:3,CivilStatusCode:"TestCode3",CivilStatusName:"TestDesc3",IsActive:true}
    ];
  }
}
