import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'quml-terms-condition-box',
  templateUrl: './terms-condition-box.component.html',
  styleUrls: ['./terms-condition-box.component.scss']
})
export class TermsConditionBoxComponent {

// ViewChild to get a reference to the file input element
@ViewChild('inputFileField') inputFileField!: ElementRef<HTMLInputElement>;

// Input property to control the visibility of the terms and conditions dialog box
@Input() termsDialogOpen: boolean;

// Output event to emit the non-matched size information
@Output() nonMatchedSizeEmit = new EventEmitter<any>();

// Variables to store information about the selected file
selectFile: File;
fileName: string;
imageDataUrl: File;
fileUpload: boolean;
file: any;
imagePopUp: boolean;
enableFilesSection: boolean;

// Function to cancel the terms and conditions dialog box
cancelTermsDialog() {
  this.termsDialogOpen = false;
}

// Function to trigger the file input click event
triggerInputClick() {
  if (this.inputFileField) {
    this.inputFileField.nativeElement.click();
  }
}

// Function to handle the terms and conditions form submission
logInForm(termsForm: NgForm) {
  this.enableFilesSection = true;
  if (termsForm.value.termsField == "true") {
    this.termsDialogOpen = false;
  }
}

// Function to handle the selection of a file
onFileSelected(event: Event) {
  this.termsDialogOpen = false;
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    this.file = inputElement.files[0];
    const maxSizeInBytes = 20480 ;
    // Condition for matched file size
    if (this.file.size <= maxSizeInBytes) {
      this.readFile(this.file);
      this.fileName = this.file.name;
    } else {
      // Emit event for non-matched file size
      this.nonMatchedSizeEmit.emit(true);
    }
  }
}

// Function to read and process the selected file
readFile(file: File) {
  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageDataUrl = event.target.result;
    this.selectFile = this.imageDataUrl;
  };
  reader.readAsDataURL(file);
}

// Function to check if the file type is an image
isImageType(fileData: any): boolean {
  this.imagePopUp = true;
  return fileData && fileData.startsWith('data:image');
}

// Function to check if the file type is a video
isVideoType(fileData: any): boolean {
  return fileData && fileData.startsWith('data:video');
}

// Function to check if the file type is a document
isDocumentType(fileData: any, fileName: string): boolean {
  return fileData && (
    fileData.startsWith('data:application/msword') ||
    fileData.startsWith('data:application/vnd.openxmlformats-officedocument.wordprocessingml.document') ||
    fileData.startsWith('data:application/pdf')
  );
}

// Function to handle the upload event
handleUploadEmit() {
  this.fileUpload = true;
}

// Function to handle the update event
handleUpdateEmit(event: Event) {
  this.onFileSelected(event);
}
}
