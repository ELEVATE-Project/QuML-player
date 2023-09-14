import { Component, EventEmitter, OnInit,AfterViewInit, Input, OnChanges, Output } from '@angular/core';
import * as _ from 'lodash-es';

@Component({
  selector: 'quml-date-question',
  templateUrl: './date-question.component.html',
  styleUrls: ['./date-question.component.scss']
})
export class DateQuestionComponent implements OnInit {

  // Input properties received from parent component
  @Input() replayed?: boolean;
  @Input() questions?: any;
  @Input() baseUrl: string;

  // Output events emitted to parent component
  @Output() showAnswerClicked = new EventEmitter<any>();

  showAnswer: any;
  solutions: any;
  question: any;
  answer: any;
  showHintBox: boolean = false;
  questionName: any;
  showPopUpBox: boolean = false;

  // Variables related to evidence and remarks
  showEvidence: boolean = false;
  showRemarkValue: boolean = false;
  showRemarks: boolean = false;
  maxLength: number;
  remark: string;
  hints: any; 
  sizeLimit: any; 
  selectedFile: File; 

  // Toggles the hint box visibility
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
  }

  // Logic for auto-detecting and populating the date
  autoDetectDate(inputElement: HTMLInputElement) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    inputElement.value = formattedDate;
    this.sendDataToParent(formattedDate);
  }

  // Emits data from child to parent component
  sendDataToParent(data) {
    this.showAnswerClicked.emit({ data: this.answer, question: this.questions, isCorrectAnswer: true });
  }

  ngOnInit() {
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
    this.hints = this.questions?.hints;
    this.sizeLimit = this.questions?.evidence.sizeLimit;                                                                                     

  }

  // Toggles the visibility of the popup box
  popUpBox() {
    this.showPopUpBox = !this.showPopUpBox;
  }

  // Handles the value from the textarea for remarks
  handleTextareaValue(data: string) {
    this.remark = data;
  }

  // Handles the selected file from attachments component
  onSelectedFileSend(file: File) {
    this.selectedFile = file;
  }
}
