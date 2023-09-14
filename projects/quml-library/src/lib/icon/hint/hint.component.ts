import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'quml-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  @Input() showHintBox: boolean;
  @Input() hints: any;

  constructor() { }

  ngOnInit() {
  }

  // function for handling the toggleHintBox
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
  }
}
