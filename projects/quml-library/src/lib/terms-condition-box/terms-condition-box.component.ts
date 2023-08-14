import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'quml-terms-condition-box',
  templateUrl: './terms-condition-box.component.html',
  styleUrls: ['./terms-condition-box.component.scss']
})
export class TermsConditionBoxComponent {
  enableFilesSection : boolean  = false;
  selectFile: File;
  nonMatchedSize: boolean;
  nonMatchSizeInBytes: string;
  @Input() termsDialogOpen: boolean;
  @Output() selectFileEmit = new EventEmitter<any>();
  @Output() nonMatchedSizeEmit = new EventEmitter<any>();



  cancelTermsDialog() {
    this.termsDialogOpen = false;
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
      const file = inputElement.files[0];
      const maxSizeInBytes =  (1024 * 1024 * 1024);//5KB 20480
      if(file.size <= maxSizeInBytes){
      this.readFile(file);
      }
      else{
        this.nonMatchedSizeEmit.emit(true);
      }
    }
}


  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectFile = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  isImageType(fileData: any): boolean {
    console.log(fileData);
    return fileData && /^data:image/.test(fileData);
  }

  isVideoType(fileData: any): boolean{
    return fileData && /^data:video/.test(fileData);
  }

  isDocumentType(fileData: any): boolean {
    return fileData && /^data:(application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|application\/pdf)/.test(fileData);
  }

  getFileName(fileData: any): string {
    const startIndex = fileData.indexOf(';name=') + 6;
    const endIndex = fileData.indexOf(';', startIndex);
    return fileData.substring(startIndex, endIndex);
  }

}

