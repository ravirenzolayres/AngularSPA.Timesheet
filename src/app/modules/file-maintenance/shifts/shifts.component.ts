import { Component, OnInit } from '@angular/core';
import { Shift } from 'src/app/model/Shift';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  dtOptions : any = {};
  shifts : Shift[]=[];

  title = "";
  constructor() { }

  ngOnInit(): void {
    this.title ="Shift";

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
    this.shifts = [
      {
        IDNo:1,
        ShiftCode:'TestCode1',
        ShiftName:'TestName1',
        ShiftIn:'08:30',
        ShiftOut:'17:30',
        ND1ShiftIn:'18:00',
        ND1ShiftOut:'22:00',
        ND2ShiftIn:'22:00',
        ND2ShiftOut:'02:00',
        ND3ShiftIn:'02:00',
        ND3ShiftOut:'06:00',
        Brk: 60,
        HoursWork:8,
        GracePeriod:15,
        IsRestday : false,
        IsActive:true
      }
    ]
  }

}
