import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputUploadService {
  fileName : string = "";
  finalName : string = "";
  tabName : string = "";
  tabMenu : string = "";

  constructor() { }

  fileUploadText(){
    var data = $('.inputFileHidden').trigger('click');
  }

  getFileName(file:any){
    this.CheckFile(file);
  }

  CheckFile(file:any){
    if(file.target.files.length > 0){
      for(var i=0; i<file.target.files.length;i++){
        this.fileName = file.target.files[i].name;
        console.log(this.finalName);

        if(this.finalName == ""){
          this.finalName = this.fileName;  
          console.log(1);
        }
        else{
          this.finalName = file.target.files.length + " files selected";
          console.log(this.finalName);
        }
      }
      $('.inputFileVisible').val(this.finalName);
    }
    else{
      this.fileName = file.target.files[0].name;
      console.log(this.fileName);
      $('.inputFileVisible').val(this.fileName);
    }
  }

  fileUploadButton(){
    $('.inputFileHidden').trigger('click');
    $('.form-file-multiple .inputFileVisible,.form-file-multiple .input-group-btn').addClass('is-focused');
  }

  ///
  newgetFileName(file:any){
    this.CheckFile(file);
  }

  newCheckFile(file:any){
    if(file.target.files.length > 0){
      for(var i=0; i<file.target.files.length;i++){
        this.fileName = file.target.files[i].name;
        console.log(this.finalName);

        if(this.finalName == ""){
          this.finalName = this.fileName;  
          console.log(1);
        }
        else{
          this.finalName = file.target.files.length + " files selected";
          console.log(this.finalName);
        }
      }
      $('#'+this.tabName+'.inputFileVisible').val(this.finalName);
    }
    else{
      this.fileName = file.target.files[0].name;
      console.log(this.fileName);
      $('#'+this.tabName+'.inputFileVisible').val(this.fileName);
    }
  }

  newfileUploadButton(tabName : string){
    this.tabName = tabName;
    this.tabMenu = tabName + "TabMenu";

    console.log(this.tabName);
    console.log(this.tabMenu);
    $('#'+this.tabMenu+'').trigger('click');
    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').addClass('is-focused');
  }

  newfileUploadText(tabName : string){
    this.tabName = tabName;
    this.tabMenu = tabName + "TabMenu";

    console.log(this.tabName);
    console.log(this.tabMenu);
    $('#'+this.tabMenu+'').trigger('click');
  }
}
