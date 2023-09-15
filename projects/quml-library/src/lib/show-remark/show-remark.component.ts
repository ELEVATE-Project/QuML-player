import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quml-show-remark',
  templateUrl: './show-remark.component.html',
  styleUrls: ['./show-remark.component.scss']
})
export class ShowRemarkComponent {
  @Input() inputFieldValue: string;
  @Input() remarkSubmitted: boolean;
  @Output() valueEmitOfRemarks = new EventEmitter<any>();


  popUpBox(){
    this.valueEmitOfRemarks.emit(true);
  }
}
