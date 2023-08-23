import { Component, EventEmitter, OnInit,AfterViewInit, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';


@Component({
  selector: 'quml-date-question',
  templateUrl: './date-question.component.html',
  styleUrls: ['./date-question.component.css']
})
export class DateQuestionComponent implements OnInit {

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
  showHintBox: boolean = false;
  utilService: any;
  questionName: any;


  //Hint Box
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
    console.log(1);
  }

  //AutoDetect Logic 
  autoDetectDate(inputElement: HTMLInputElement) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`
    inputElement.value = formattedDate;
    this.sendDataToParent(formattedDate)
  }

  //Data from Child to Parent
  sendDataToParent(data) {
    this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:true})
  }

  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
  }
}
