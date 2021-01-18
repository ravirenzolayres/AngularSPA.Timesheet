import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/model/Gender';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})
export class GendersComponent implements OnInit {
  dtOptions :any = {};
  genders : Gender[]=[];

  title = "";

  constructor() { }

  ngOnInit(): void {
    this.title = "Gender";

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
    this.genders = [{IDNo:1,GenderCode:'TestCode1',GenderName:'TestName1',IsActive:true}];
  }
}
