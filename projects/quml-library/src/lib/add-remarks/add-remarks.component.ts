import { Component, Input, Output, EventEmitter} from '@angular/core';


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
  @Output() textAreaValue = new EventEmitter<any>();
  remarkSubmitted: boolean = false;
  inputFieldValue: string;
  remarkLength: number;

  popUpBox(){
    this.showPopUpBox = !this.showPopUpBox;
  }

  showRemark(data: string){
    this.remarkLength = data.length;

    if(this.remarkLength != 0){
      this.remarkSubmitted = true;
      this.showRemarkValue = true;
    }
    this.inputFieldValue = data;
    this.showPopUpBox = false;
  }

  textAreaKeyDown(_event: KeyboardEvent){
    if(_event.key === ' ') {
      _event.preventDefault();
  }
  }

  handlePopUpValue(){
    this.showPopUpBox = true;
  }
}
