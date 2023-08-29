import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'quml-add-remarks',
  templateUrl: './add-remarks.component.html',
  styleUrls: ['./add-remarks.component.scss']
})

export class AddRemarksComponent {
  // Input properties received from parent component
  @Input() showPopUpBox: boolean; // Controls the visibility of the popup box
  @Input() showRemarkValue: boolean; // Indicates if a remark is shown
  @Input() showRemarks: string; // Specifies the visibility of remarks
  @Input() maxLength: number; // Maximum character length for a remark

  // State variable to track if a remark has been submitted
  remarkSubmitted: boolean = false;

  // Variable to hold the value of the input field for remarks
  inputFieldValue: string;

  // Variable to hold the length of the entered remark
  remarkLength: number;

  // Function to toggle the visibility of the popup box
  popUpBox() {
    this.showPopUpBox = !this.showPopUpBox;
  }

  // Function to handle the submission of a remark
  showRemark(data: string) {
    this.remarkLength = data.length;
    
    // If a remark is not empty, mark it as submitted and set the showRemarkValue flag
    if (this.remarkLength != 0) {
      this.remarkSubmitted = true;
      this.showRemarkValue = true;
    }
    
    // Store the entered remark value and hide the popup box
    this.inputFieldValue = data;
    this.showPopUpBox = false;
  }

  // Function to handle keyboard events in the textarea
  textAreaKeyDown(_event: KeyboardEvent) {
    // Prevent the default behavior of the space key
    if (_event.key === ' ') {
      _event.preventDefault();
    }
  }

  // Function to handle the popup value from a child component
  handlePopUpValue() {
    this.showPopUpBox = true;
  }
}
