import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/model/Position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  dtOptions : any = {};
  positions : Position[]=[];

  title = "";
  constructor() { }

  ngOnInit(): void {
    this.title ="Position";

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
    this.positions = [
      {IDNo:1,PositionCode:'TestCode1',PositionName:'TestName1',IsActive:true}
    ]
  }
}
