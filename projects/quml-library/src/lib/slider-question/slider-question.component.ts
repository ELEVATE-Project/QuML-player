// This component is used to display value of slider 
//  It allows users to slide along a range of values and select a numeric value using a slider input.

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

  @Input() questions?: any;// Contains the question data.
  @Input() replayed?: boolean;// Boolean flag to indicate if the question is replayed.
  @Input() baseUrl: string;// The base URL for the component.
  @Output() componentLoaded = new EventEmitter<any>();  // EventEmitter to emit the component loaded event.
  @Output() showAnswerClicked = new EventEmitter<any>(); // EventEmitter to emit the show answer clicked event.
  @Output() sendData = new EventEmitter<any>(); // EventEmitter to emit the user's response data to the parent component.

  showAnswer: false; // Boolean flag to control the visibility of the answer section.
  solutions: any; // Object containing solution data for the question.
  question: any; // Contains the question content.
  answer: any; // The user's response to the question. 
  min: number = 0; // variable for setting min value of slider 
  max: number = 0;// variable for setting max value of slider
  step: number = 0; // variable for setting number of steps slider
  questionName: any; //variable which will render question name 
  sliderValue: number = 50; // variable for setting value of slider
  showPopUpBox: boolean = false; // variable used for input validation logic.
  showRemarks: string ; // variable for showing remarks
  showEvidence: string ; // variable for showing evidence
  showRemarkValue: boolean = false; // variable for showing remark value
  inputField: HTMLInputElement | undefined; // 
  remark: string; // variable declared for storing data of remarks section
  showHintBox: boolean = false; // variable for showing hint-box
  maxLength: number; // variable for setting maxLength

  //Slider value update on change 
  onSliderChange(value: string) {
    this.sliderValue = parseInt(value);
  }

  //Data from Child to Parent
  sendDataToParent(data) {
    this.sliderValue = parseInt(data);
    this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:true})
  }

  constructor( public domSanitizer: DomSanitizer, private utilService: UtilService ) { }

  
  // Initializes the component with question data.
  ngOnInit() {
    this.question = this.questions?.body;
    this.min = parseInt(this.questions?.interactions.response1.validation.range.min);
    this.max = parseInt(this.questions?.interactions.response1.validation.range.max);
    this.step = parseInt(this.questions?.interactions.response1.step);
    this.answer = this.questions?.answer;
    this.solutions = this.questions?.solutions.length == 0 ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
    this.showRemarks = this.questions?.responseDeclaration.showRemarks;
    this.showEvidence = this.questions?.responseDeclaration.showEvidence;
    this.maxLength = this.questions?.remarks.maxLength;
  }

  // Function to handle the popUp box
  popUpBox(){
    this.showPopUpBox = !this.showPopUpBox;
  }
  
  // Function for setting the values of variables 
  showRemark(){
    this.showRemarkValue = true;
    this.showPopUpBox = false;
  }

  // Function for storing the value of remark with data
  handleTextareaValue(data: string){
    this.remark = data;
  }

}
