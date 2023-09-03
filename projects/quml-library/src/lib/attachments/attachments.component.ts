import { Component , Input} from '@angular/core';

@Component({
  selector: 'quml-attachments', 
  templateUrl: './attachments.component.html', 
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {
  // State variable to track if the attached file exceeds the maximum size
  nonMatchedSize: boolean = false;

  // State variable to control the opening of the terms and conditions dialog box
  termsDialogOpen: boolean = false;

  // Variable to hold the message for non-matched size alert
  nonMatchedSizeValue: string;

  pdfIconDisplay: boolean;
  imageIconDisplay: boolean;
  videoIconDisplay: boolean;

  // Input property received from the parent component
  @Input() showEvidence: string;

  // Function to handle the terms and conditions form
  handletermsForm() {
    // Toggle the state of the terms and conditions dialog box
    this.termsDialogOpen = !this.termsDialogOpen;
  }

  // Function to handle non-matched file size
  handleNonMatchedSize() {
    // Set the nonMatchedSize flag to true
    this.nonMatchedSize = true;
    
    // Set the message for non-matched size alert
    this.nonMatchedSizeValue = "File limit exceeds its maximum size (20 KB)";
  }

  pdfIconEmit(_data : Event){
     this.pdfIconDisplay = true;
  }

  videoIconEmit(_data : Event){
    this.videoIconDisplay = true;
  }

  imageIconHandle(_data : Event){
    this.imageIconDisplay = true;
  }

  closeVidIconHandle(){
    this.videoIconDisplay = !this.videoIconDisplay;
    console.log("closed");
  }

  closeImgIconHandle(){
    this.imageIconDisplay = !this.imageIconDisplay;
    console.log("closed");
  }

  closePdfIconHandle(){
    this.pdfIconDisplay = !this.pdfIconDisplay;
    console.log("closed");
  }

}


