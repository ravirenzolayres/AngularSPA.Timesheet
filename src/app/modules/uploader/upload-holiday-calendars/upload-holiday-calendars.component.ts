import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-holiday-calendars',
  templateUrl: './upload-holiday-calendars.component.html',
  styleUrls: ['./upload-holiday-calendars.component.css']
})
export class UploadHolidayCalendarsComponent implements OnInit {
  title = "";
  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "Holidays";
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
