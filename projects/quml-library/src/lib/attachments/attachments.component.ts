import { Component , Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

 const MAX_IMAGE_SIZE_MB = 5;


@Component({
  selector: 'quml-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})

export class AttachmentsComponent {
  selectFile: File;
  nonMatchSizeInBytes: string ;
  nonMatchedSize: boolean = false;
  termsDialogOpen: boolean = false ;
  enableFilesSection: boolean = false; 
  isChangeEnabled : boolean = false;
  @Input() showEvidence: string;
  @Output() selectFileEmit: EventEmitter<File>= new EventEmitter<File>();
  termsForm: NgForm;

  onFileSelected(event: Event) {
    if(this.isChangeEnabled){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const maxSizeInBytes =  (1024 * 1024 * 1024);// 5KB
      if(file.size <= maxSizeInBytes){
      this.readFile(file);
      this.selectFileEmit.emit(file);
      }
      else{
        this.nonMatchedSize = true;
        this.nonMatchSizeInBytes = "File size exceeds in maximum limit(1 GB)"
        console.log(this.nonMatchSizeInBytes);
      }
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

  handletermsForm(){
    this.termsDialogOpen = !this.termsDialogOpen;
  }

  cancelTermsDialog() {
    this.termsDialogOpen = false;
  }

  logInForm(termsForm : NgForm){
    console.log(termsForm);
    console.log(termsForm.value.termsField);
    this.enableFilesSection = true;
    if (termsForm.value.termsField=="true") {
      this.termsDialogOpen = false; 
    }
  }
} 


