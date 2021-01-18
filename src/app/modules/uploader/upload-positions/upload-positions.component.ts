import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-positions',
  templateUrl: './upload-positions.component.html',
  styleUrls: ['./upload-positions.component.css']
})
export class UploadPositionsComponent implements OnInit {
  title = "";
  constructor(private InputUploadService: InputUploadService) { }

  ngOnInit(): void {
    this.title = "Positions";
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
