import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dtOptions : any = {};
  users : User[]=[];

  title = "";
  constructor() { }

  ngOnInit(): void {
    this.title ="User";

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
    this.users = [
      {IDNo:1,Username:'admin',Password:'masterpassword',IsActive:true}
    ]
  }

}
