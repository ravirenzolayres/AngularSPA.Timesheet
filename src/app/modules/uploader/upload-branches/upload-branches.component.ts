import { Component, OnInit } from '@angular/core';
import { InputUploadService } from 'src/app/services/input-upload.service';

@Component({
  selector: 'app-upload-branches',
  templateUrl: './upload-branches.component.html',
  styleUrls: ['./upload-branches.component.css']
})
export class UploadBranchesComponent implements OnInit {
  title = "";

  constructor(private InputUploadService : InputUploadService) { }

  ngOnInit(): void {
    this.title = "Branches";
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
