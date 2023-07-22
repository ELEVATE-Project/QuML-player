import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _ } from 'ajv';
import { UtilService } from '../util-service';

@Component({
  selector: 'quml-slider-question',
  templateUrl: './slider-question.component.html',
  styleUrls: ['./slider-question.component.scss']
})
export class SliderQuestionComponent implements OnInit {

  @Input() questions?: any;
  @Input() replayed?: boolean;
  @Input() baseUrl: string;
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();

  showAnswer = false;
  solutions: any;
  question: any;
  answer: any;
  min:number = 0;
  max:number = 0;

  sliderValue: number = 50;

  onSliderChange(value: string) {
    this.sliderValue = parseInt(value);
   
  }

  sendDataToParent(data) {
    
    this.showAnswerClicked.emit({data:this.answer,question:this.questions})
  }

  constructor( public domSanitizer: DomSanitizer, private utilService: UtilService ) { }

  ngOnInit() {
    this.question = this.questions?.body;
    this.min = parseInt(this.questions?.interactions.response1.validation.range.min);
    this.max = parseInt(this.questions?.interactions.response1.validation.range.max);
    this.answer = this.questions?.answer;
    this.solutions = this.questions?.solutions.length == 0 ? null : this.questions?.solutions;
  }
}
