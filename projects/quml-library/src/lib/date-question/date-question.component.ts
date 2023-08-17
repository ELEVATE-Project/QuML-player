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

  @Input() replayed?: boolean;
  @Input() questions?: any;
  @Input() baseUrl: string;
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();

  showAnswer: any; //@description Boolean flag to control the visibility of the answer section.
  solutions: any; //@description Object containing solution data for the question.
  question: any; //@description Contains the question content.
  answer: any; //@description The user's response to the question.
  showHintBox: boolean = false; // @description Hint Box when user click on hint button 
  utilService: any;
  questionName: any; //@description Rendering question name from question Data.
  showPopUpBox: boolean = false; //@description A variable used for input validation logic.
  showEvidence: boolean = false;
  showRemarkValue: boolean = false;
  showRemarks: boolean = false;
  maxLength: number;
  remark: string; 
  selectedFile: File;


  //Hint Box toggle
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
  }

  //AutoDetect Date Logic  
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

   /**
   * @description Lifecycle hook. Reacts to changes in input properties.
   */
  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
  }
  popUpBox(){
    this.showPopUpBox = !this.showPopUpBox;
  }
  
  handleTextareaValue(data: string){
  this.remark= data;
  }
  
  onSelectedFileSend(file: File){
    this.selectedFile = file;
  }


}
