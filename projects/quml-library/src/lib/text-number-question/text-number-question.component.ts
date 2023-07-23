
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';


@Component({
  selector: 'quml-text-number-question',
  templateUrl: './text-number-question.component.html',
  styleUrls: ['./text-number-question.component.scss']
})
export class TextNumberQuestionComponent implements OnInit, OnChanges, AfterViewInit {

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
  showHintBox: boolean = false;
  utilService: any;
  questionName: any;

  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
    console.log(1);
  }

  checkForNumb(_event:KeyboardEvent,value){
    if(this.questions.interactions.response1.type.number == 'Yes') {
      console.log("event called")
      const charCode = _event.key.charCodeAt(0);
        if((charCode== 66 || ( charCode >= 48 && charCode <=57) )){
          this.arr = charCode;
          return true;
        }
        else  {
          _event.preventDefault();
        }
    }
    else {
      this.answer = value;
    }
  }

  sendDataToParent(data) {
    this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:false})
  }

  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
  }
  
  ngAfterViewInit() {
    this.handleKeyboardAccessibility();
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
