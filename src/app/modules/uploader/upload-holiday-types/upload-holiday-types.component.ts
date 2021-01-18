import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-holiday-types',
  templateUrl: './upload-holiday-types.component.html',
  styleUrls: ['./upload-holiday-types.component.css']
})
export class UploadHolidayTypesComponent implements OnInit {
  title = "";
  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "Holiday Types";
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
