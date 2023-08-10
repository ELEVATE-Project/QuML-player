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
  @Output() maxLengthEmit: number;
  @Output() remarkSubmittedEmit = new EventEmitter<boolean>();
  charCount: number = 0;
  isCharLimitExceeded: boolean ;
  remarkSubmitted: boolean = false;

  popUpBox(){
    this.showPopUpBox = !this.showPopUpBox;
  }

  showRemark(data: string){
    this.showRemarkValue = true;
    this.showPopUpBox = false;
    this.textAreaValue.emit(data);
    this.remarkSubmitted = true;
    this.remarkSubmittedEmit.emit(true);
  }

  textAreaKeyDown(_event: KeyboardEvent){
    if(_event.key === ' ') {
      _event.preventDefault();
  }
  }
}
