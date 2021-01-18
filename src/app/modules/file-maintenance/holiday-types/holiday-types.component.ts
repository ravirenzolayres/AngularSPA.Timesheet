import { Component, OnInit } from '@angular/core';
import { HolidayType } from 'src/app/model/HolidayType';

@Component({
  selector: 'app-holiday-types',
  templateUrl: './holiday-types.component.html',
  styleUrls: ['./holiday-types.component.css']
})
export class HolidayTypesComponent implements OnInit {
  dtOptions : any = {};
  holidayTypes : HolidayType[]=[];

  title = "";
  constructor() { }

  ngOnInit(): void {
    this.title ="Holiday Type";

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
    this.holidayTypes = [
      {IDNo:1,HolidayTypeCode:'TestCode1',HolidayTypeName:'TestName1',IsActive:true}
    ]
  }

}
