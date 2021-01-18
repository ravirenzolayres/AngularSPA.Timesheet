import { Component, OnInit } from '@angular/core';
import { Holiday } from 'src/app/model/Holiday';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  dtOptions : any = {};
  holidays : Holiday[]=[];

  title = "";
  constructor() { }

  ngOnInit(): void {
    this.title ="Holidays";

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
    this.holidays = [
      {IDNo:1,HolidayCode:'TestCode1',HolidayName:'TestName1',Date:'12/25/2020',IsFixed:true,IsActive:true}
    ]
  }
}
