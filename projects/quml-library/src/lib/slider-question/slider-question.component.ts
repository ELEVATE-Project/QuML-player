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

  // Input properties received from parent component
  @Input() questions?: any;
  @Input() replayed?: boolean;
  @Input() baseUrl: string;

  // Output events emitted to parent component
  @Output() showAnswerClicked = new EventEmitter<any>(); 

  showAnswer: false; 
  solutions: any; 
  question: any; 
  answer: any; 
  min: number = 0; 
  max: number = 0;
  step: number = 0; 
  questionName: any;  
  sliderValue: number = 50; 
  showPopUpBox: boolean = false; 
  showRemarks: string ; 
  showEvidence: string ; 
  showRemarkValue: boolean = false; 
  inputField: HTMLInputElement | undefined;  
  remark: string; 
  showHintBox: boolean = false; 
  maxLength: number; 
  hints: any;
  sizeLimit : any; 

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
    this.hints = this.questions?.hint;
    this.sizeLimit = this.questions?.evidence.sizeLimit;
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
