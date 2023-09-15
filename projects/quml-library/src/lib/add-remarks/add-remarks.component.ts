import { Component, Input } from '@angular/core';

@Component({
  selector: 'quml-add-remarks',
  templateUrl: './add-remarks.component.html',
  styleUrls: ['./add-remarks.component.scss']
})

export class AddRemarksComponent {

  @Input() showPopUpBox: boolean; 
  @Input() showRemarkValue: boolean; 
  @Input() showRemarks: string; 
  @Input() maxLength: number; 


  // Variable to hold the value of the input field for remarks
  inputFieldValue: string;
  showAddRemarkBtn: boolean = true;

  // Function to toggle the visibility of the popup box
  popUpBox() {
    this.showPopUpBox = !this.showPopUpBox;
  }

  //Function for handling value of showAddRemarkBtn
  onTextareaInput(inputField: HTMLTextAreaElement) {
    this.showAddRemarkBtn = false;
  }

  //Function for clearing the remark field data and closing textarea
  clearTextarea(){
    this.inputFieldValue = '';
    this.showPopUpBox = !this.showPopUpBox;
    this.showAddRemarkBtn = !this.showAddRemarkBtn;
  }
}
