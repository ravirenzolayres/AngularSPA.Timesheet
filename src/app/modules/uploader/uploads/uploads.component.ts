import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  title : string = "";
  isBtnCancelDisabled : boolean = true;
  isBtnUploadDisabled : boolean = false;

  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "companies";
  }

  changeName(tabName : string){
    this.title = tabName;
  }

  Upload(){
    this.isBtnCancelDisabled = false;
    this.isBtnUploadDisabled = true;
  }

  Cancel(){
    this.isBtnCancelDisabled = true;
    this.isBtnUploadDisabled = false;
  }

  getUploadText(){
    this.InputUploadService.newfileUploadText(this.title);
  }

  getFileName(file:any){
    this.InputUploadService.newCheckFile(file);
  }

  getUploadButton(){
    this.InputUploadService.newfileUploadButton(this.title);
  }
}
