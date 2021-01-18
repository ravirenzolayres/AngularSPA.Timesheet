import { Component, OnInit } from '@angular/core';
import { Access } from 'src/app/model/Access';

@Component({
  selector: 'app-accesses',
  templateUrl: './accesses.component.html',
  styleUrls: ['./accesses.component.css']
})
export class AccessesComponent implements OnInit {
  dtOptions: any = {};
  
  accesses :Access[]=[];
  title = "";

  constructor() { }

  ngOnInit(): void {
    this.title = "Access";
    
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2,
      dom:'Bfrtip',
      responsive:true,
      buttons:[
        'excel'
      ]
    };
    
    this.GetAll();
  }

  GetAll(){
    this.accesses = [
      {IDNo:1,AccessCode:"TestCode1",AccessName:"TestDesc1",IsActive:true},
      {IDNo:2,AccessCode:"TestCode2",AccessName:"TestDesc2",IsActive:true},
      {IDNo:3,AccessCode:"TestCode3",AccessName:"TestDesc3",IsActive:true}
    ];
  }

}
