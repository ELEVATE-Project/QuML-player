import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _ } from 'ajv';
import { UtilService } from '../util-service';

@Component({
  selector: 'quml-slider-question',
  templateUrl: './slider-question.component.html',
  styleUrls: ['./slider-question.component.scss']
})
export class SliderQuestionComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() questions?: any;
  @Input() replayed?: boolean;
  @Input() baseUrl: string;
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();

  showAnswer = false;
  solutions: any;
  question: any;
  answer: any;
  constructor( public domSanitizer: DomSanitizer, private utilService: UtilService ) { }

  ngOnInit() {
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = this.questions?.solutions.length == 0 ? null : this.questions?.solutions;
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
}
