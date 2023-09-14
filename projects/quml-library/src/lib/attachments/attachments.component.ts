import { Component , ElementRef, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'quml-attachments', 
  templateUrl: './attachments.component.html', 
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {
 
  nonMatchedSize: boolean = false;
  termsDialogOpen: boolean = false;
  nonMatchedSizeValue: string;
  pdfIconDisplay: boolean;
  imageIconDisplay: boolean; 
  videoIconDisplay: boolean; 
  showUploadMessage: boolean; 
  files:any = []; 
  enableFilesSection: boolean; 

  @ViewChild('fileinput') fileInput: ElementRef;

  // Input property received from the parent component
  @Input() showEvidence: string;
  @Input() sizeLimit: number;

  // Function to handle the terms and conditions form
  handletermsForm() {
    // Toggle the state of the terms and conditions dialog box
    this.termsDialogOpen = !this.termsDialogOpen;
  }

  // Function to handle non-matched file size
  handleNonMatchedSize() {
    this.nonMatchedSize = true;
    
    // Set the message for non-matched size alert
    this.nonMatchedSizeValue = "File limit exceeds its maximum size (20 KB)";
  }

  handleFile(event) {
    // Open a terms dialog or pop-up box
    this.imageIconDisplay = false;
    this.videoIconDisplay = false;
    this.pdfIconDisplay = false;
    this.termsDialogOpen = true;

    const uploadedFile = event.target.files[0];

    // Check if the file size is equal to or less than 20 KB (20 * 1024 bytes)
    const maxSizeInBytes = 20 * 1024;
    if (uploadedFile.size <= maxSizeInBytes) {
      this.files.push(uploadedFile);

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

  //function to handle the value of showUploadMessage
  crossFunction(){
    this.showUploadMessage = !this.showUploadMessage;
  }

  // Function to cancel the terms and conditions dialog box
  cancelTermsDialog() {
    this.termsDialogOpen = false;
  }

  // Function to handle the terms and conditions form submission
  logInForm(termsForm: NgForm) {
    this.enableFilesSection = true;
    if (termsForm.value.termsField == "true") {
    this.termsDialogOpen = false;
    }
  }

   //function to handle the value of termsDialogBox
  handleTermsConditionBox(){
    this.termsDialogOpen = true;
  }

}
