/**
 * @name SliderQuestionComponent
 * @description This component is used to display value of slider and 
 *  It allows users to slide along a range of values and select a numeric value using a slider input.
 **/


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

  @Input() questions?: any;//@description Contains the question data.
  @Input() replayed?: boolean;//@description Boolean flag to indicate if the question is replayed.
  @Input() baseUrl: string;//@description The base URL for the component.
  @Output() componentLoaded = new EventEmitter<any>();  //@description EventEmitter to emit the component loaded event.
  @Output() showAnswerClicked = new EventEmitter<any>(); //@description EventEmitter to emit the show answer clicked event.
  @Output() sendData = new EventEmitter<any>(); //@description EventEmitter to emit the user's response data to the parent component.

  showAnswer: false; //@description Boolean flag to control the visibility of the answer section.
  solutions: any; //@description Object containing solution data for the question.
  question: any; //@description Contains the question content.
  answer: any; //@description The user's response to the question. 
  min:number = 0; //@description about min value of slider 
  max:number = 0;//@description about max value of slider
  step:number = 0; //@description about number of steps slider
  questionName: any; //variable which will render question name 
  sliderValue: number = 50; // variable for setting value of slider
  showPopUpBox: boolean = false; //@description A variable used for input validation logic.
  showRemarks: string ;
  showEvidence: string ;
  showRemarkValue: boolean = false;
  inputField: HTMLInputElement | undefined;
  remark: string;
  showHintBox: boolean = false; 
  maxLength: number;
  selectedFile: File;

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

  
  /**
   * @description Lifecycle hook. Initializes the component with question data.
   */
  ngOnInit() {
    console.log(this.questions);
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

  popUpBox(){
    this.showPopUpBox = !this.showPopUpBox;
  }

  showRemark(){
    this.showRemarkValue = true;
    this.showPopUpBox = false;
  }

  handleTextareaValue(data: string){
    this.remark = data;
  }

  /* for showing files selected */
  onChildFileSelected(file: File){
  this.readFile(file);
 }
 
readFile(file) {
  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.selectedFile = event.target.result;
  };
  reader.readAsDataURL(file);
}

  isImageType(fileData: any): boolean {
    return fileData && /^data:image/.test(fileData);
  }

  isVideoType(fileData: any): boolean{
    return fileData && /^data:video/.test(fileData);
  }

  isDocumentType(fileData: any): boolean {
    return fileData && /^data:(application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|application\/pdf)/.test(fileData);
  }

  getFileName(fileData: any): string {
    const startIndex = fileData.indexOf(';name=') + 6;
    const endIndex = fileData.indexOf(';', startIndex);
    return fileData.substring(startIndex, endIndex);
  }

}
