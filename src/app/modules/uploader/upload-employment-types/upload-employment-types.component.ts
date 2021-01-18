import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-employment-types',
  templateUrl: './upload-employment-types.component.html',
  styleUrls: ['./upload-employment-types.component.css']
})
export class UploadEmploymentTypesComponent implements OnInit {
  title = "";
  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "Employment Types";
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
