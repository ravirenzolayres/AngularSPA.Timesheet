import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-departments',
  templateUrl: './upload-departments.component.html',
  styleUrls: ['./upload-departments.component.css']
})
export class UploadDepartmentsComponent implements OnInit {
  title = "";
  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title ="Departments";
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
