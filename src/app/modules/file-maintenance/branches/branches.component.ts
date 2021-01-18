import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Branch } from '../../../model/Branch';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  dtOptions: any = {};
  
  branches :Branch[]=[];
  title = "";

  constructor() { }

  ngOnInit(): void {
    this.title = "Branch";
    
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
    this.branches = [
      {IDNo:1,BranchCode:"TestCode1",BranchName:"TestDesc1",IsActive:true},
      {IDNo:2,BranchCode:"TestCode2",BranchName:"TestDesc2",IsActive:true},
      {IDNo:3,BranchCode:"TestCode3",BranchName:"TestDesc3",IsActive:true}
    ];
  }
}
