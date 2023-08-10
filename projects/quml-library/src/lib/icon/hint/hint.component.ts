import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'quml-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  @Input() showHintBox: boolean;

  constructor() { }

  ngOnInit() {
  }
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
  }
}
