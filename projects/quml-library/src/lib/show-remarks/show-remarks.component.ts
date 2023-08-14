import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'quml-show-remarks',
  templateUrl: './show-remarks.component.html',
  styleUrls: ['./show-remarks.component.scss']
})
export class ShowRemarksComponent {
  showPopUpBox: boolean = false;

  @Input() remark: string;
  @Input() inputFieldValue: string;
  @Output() popUpValueEmit = new EventEmitter<any>();

  popUpBox(){
    console.log("this works");
    this.showPopUpBox = !this.showPopUpBox;
    this.popUpValueEmit.emit(this.showPopUpBox);
  }

}
