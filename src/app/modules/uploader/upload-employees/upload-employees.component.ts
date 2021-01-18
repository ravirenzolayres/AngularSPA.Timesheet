import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-employees',
  templateUrl: './upload-employees.component.html',
  styleUrls: ['./upload-employees.component.css']
})
export class UploadEmployeesComponent implements OnInit {

  title = "";
  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "Employees";
  }

  getUploadText(){
    this.InputUploadService.fileUploadText();
  }

  getFileName(file:any){
    this.InputUploadService.CheckFile(file);
  }

  getUploadButton(){
    this.InputUploadService.fileUploadButton();
  }
}
