
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';

@Component({
  selector: 'quml-new-mcq-question',
  templateUrl: './new-mcq-question.component.html',
  styleUrls: ['./new-mcq-question.component.css']
})
export class NewMcqQuestionComponent {

  @Input() replayed?: boolean;
  @Input() questions?: any;
  @Input() baseUrl: string;
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();

  showAnswer: any;
  solutions: any;
  question: any;
  answer: any;
  inputArray:any=[];
  charCode: any= '';
  arr: any ='';
  utilService: any;
  showHintBox: boolean = false;

  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
  }

  ngAfterViewInit() {
    this.handleKeyboardAccessibility();
    this.utilService.updateSourceOfVideoElement(this.baseUrl, this.questions?.media, this.questions.identifier);
  }

  ngOnChanges() {
    if (this.replayed) {
      this.showAnswer = false;
    } else if (this.questions?.isAnswerShown) {
      this.showAnswer = true;
    }
  }

  showAnswerToUser() {
    this.showAnswer = true;
    this.showAnswerClicked.emit({
      showAnswer: this.showAnswer
    });
  }

  onEnter(event) {
    /* istanbul ignore else */
    if (event.keyCode === 13) {
      event.stopPropagation();
      this.showAnswerToUser();
    }
  }

  handleKeyboardAccessibility() {
    const elements = Array.from(document.getElementsByClassName('option-body') as HTMLCollectionOf<Element>);
    elements.forEach((element: HTMLElement) => {
      /* istanbul ignore else */
      if (element.offsetHeight) {
        const children = Array.from(element.querySelectorAll("a"));
        children.forEach((child: HTMLElement) => {
            child.setAttribute('tabindex', '-1');
        });
      }
    });
  }






 onclick(_value: string){
  console.log(_value);
 }
}
