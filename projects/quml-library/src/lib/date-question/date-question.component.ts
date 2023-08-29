/**
 * @name DateQuestionComponent
 * @description This component is used to display and handle date input question.
 * It allows users to enter Date or auto detect date and optionally shows the correct answer.
 **/

import { Component, EventEmitter, OnInit,AfterViewInit, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';


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
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();


  showAnswer: any;  // Flag to control visibility of answer section
  solutions: any; // Variable containing solution data for the question
  question: any; // Contains the question content
  answer: any; // The user's response to the question
  showHintBox: boolean = false; // Flag to control the visibility of the hint box
  questionName: any; // Rendering question name from question Data
  showPopUpBox: boolean = false; // Variable used for input validation logic

  // Variables related to evidence and remarks
  showEvidence: boolean = false;
  showRemarkValue: boolean = false;
  showRemarks: boolean = false;
  maxLength: number;
  remark: string;
  selectedFile: File; // Variable to store selected file


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

  // Initializes component and sets question-related data
  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
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
