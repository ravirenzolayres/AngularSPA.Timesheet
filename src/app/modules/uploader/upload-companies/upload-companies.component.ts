import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-companies',
  templateUrl: './upload-companies.component.html',
  styleUrls: ['./upload-companies.component.css']
})
export class UploadCompaniesComponent implements OnInit {
  title= "";
  
  constructor(private InputUploadService: InputUploadService) { }

  ngOnInit(): void {
    this.title = "Companies";
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
