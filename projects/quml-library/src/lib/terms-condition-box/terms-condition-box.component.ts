import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'quml-terms-condition-box',
  templateUrl: './terms-condition-box.component.html',
  styleUrls: ['./terms-condition-box.component.scss']
})
export class TermsConditionBoxComponent {

  @ViewChild('inputFileField') inputFileField!: ElementRef<HTMLInputElement>;

  enableFilesSection : boolean  = false;
  selectFile: File;
  fileName: string;
  nonMatchedSize: boolean;
  nonMatchSizeInBytes: string;
  imageDataUrl: File;
  fileUpload: boolean;
  file: any;
  imagePopUp : boolean;

  @Input() termsDialogOpen: boolean;
  @Output() selectFileEmit = new EventEmitter<any>();
  @Output() nonMatchedSizeEmit = new EventEmitter<any>();


  cancelTermsDialog() {
    this.termsDialogOpen = false;
  }

  triggerInputClick() {
    if (this.inputFileField) {
      this.inputFileField.nativeElement.click();
    }
  }

  logInForm(termsForm : NgForm){
    this.enableFilesSection = true;
    if (termsForm.value.termsField=="true") {
      this.termsDialogOpen = false; 
    }

}

onFileSelected(event: Event){
  this.termsDialogOpen = false;
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
      const maxSizeInBytes = (1024*1024*1024) //20480 ;
      if(this.file.size <= maxSizeInBytes){
      this.readFile(this.file);
      this.fileName = this.file.name;
      }
      else{
        this.nonMatchedSizeEmit.emit(true);
      }
    }
}

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
    this.imageDataUrl = event.target.result;
    this.selectFile = this.imageDataUrl;
    };
    reader.readAsDataURL(file);
  }

  isImageType(fileData: any): boolean {
    this.imagePopUp = true;
    return fileData && /^data:image/.test(fileData);
  }

  isVideoType(fileData: any): boolean{
    return fileData && /^data:video/.test(fileData);
  }

  isDocumentType(fileData: any, fileName: string): boolean{
    return fileData && /^data:(application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|application\/pdf)/.test(fileData);
  }

  handleUploadEmit(){
    this.fileUpload = true;
  }
 
  handleUpdateEmit(event : Event){
   this.onFileSelected(event);
   console.log("it works");
  }


}

