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
@Input() parentFileInput: ElementRef;

// Output event to emit the non-matched size information
@Output() nonMatchedSizeEmit = new EventEmitter<any>();
@Output() imageIconEmit = new EventEmitter<any>();
@Output() videoIconEmit = new EventEmitter<any>();
@Output() pdfIconEmit = new EventEmitter<any>();

// Variables to store information about the selected file
selectFile: File;
fileName: string;
imageDataUrl: File;
fileUpload: boolean;
file: any;
imagePopUp: boolean;
enableFilesSection: boolean;
nonMatchedSizeValue: string;

pdfIconDisplay: boolean; 
imageIconDisplay: boolean; 
videoIconDisplay: boolean; 
showUploadMessage: boolean; 
files:any = []; 
nonMatchedSize: boolean = false;


// Function to cancel the terms and conditions dialog box
cancelTermsDialog() {
  this.termsDialogOpen = false;
}

// Function to trigger the file input click event
triggerInputClick() {
  if(this.inputFileField){
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

handleFile(event) {
  this.imageIconDisplay = false;
  this.videoIconDisplay = false;
  this.pdfIconDisplay = false;
  this.termsDialogOpen = true;

  const uploadedFile = event.target.files[0];

  // Check if the file size is equal to or less than 20 KB (20 * 1024 bytes)
  const maxSizeInBytes = 1024* 1024 * 1024;
  if (uploadedFile.size <= maxSizeInBytes) {

  // if file type is image sets and emit the variable values
  if(uploadedFile.type.startsWith('image/')){
    this.imageIconDisplay = true;
    this.files.push(uploadedFile);
    this.imageIconEmit.emit(uploadedFile);
  }

  // if file type is video sets and emit the variable values
  if (uploadedFile.type.startsWith('video/')){
    this.videoIconDisplay = true;
    this.files.push(uploadedFile);
    this.videoIconEmit.emit(uploadedFile);
  }

  // if file type is document sets and emit the variable values
  if(uploadedFile.type === 'application/msword' ||
  uploadedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
  uploadedFile.type === 'application/pdf'){
    this.pdfIconDisplay = true;
    this.files.push(uploadedFile);
    this.pdfIconEmit.emit(uploadedFile);
  }

  setTimeout(()=>this.showUpload(), 500)
  this.termsDialogOpen = false;
}
 
 else {
  // File size exceeds the limit
  this.nonMatchedSize = true;
  this.nonMatchedSizeValue = "File size exceeds the maximum limit (20 KB)";
  }
}

//Function to set value of showUploadMeassage as true
showUpload(){
  this.showUploadMessage = true;
}

//Function to remove files in array 
removeItem(index) {
  this.files.splice(index,1)
}

//Function to open file in new tab
openFile(file) {
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL, '_blank');
}
}
