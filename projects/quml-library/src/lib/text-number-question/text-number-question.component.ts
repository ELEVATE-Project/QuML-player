// This component is used to display and handle text or number input question.
// It allows users to enter their response and optionally shows the correct answer.

import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as _ from 'lodash-es';


@Component({
  selector: 'quml-text-number-question',
  templateUrl: './text-number-question.component.html',
  styleUrls: ['./text-number-question.component.scss']
})
export class TextNumberQuestionComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() replayed?: boolean; // Boolean flag to indicate if the question is replayed.
  @Input() questions?: any; // Contains the question data.
  @Input() baseUrl: string; // The base URL for the component.
  @Output() componentLoaded = new EventEmitter<any>(); // EventEmitter to emit the component loaded event.
  @Output() showAnswerClicked = new EventEmitter<any>(); // EventEmitter to emit the show answer clicked event.
  @Output() sendDat= new EventEmitter<any>(); // EventEmitter to emit the user's response datto the parent component.
  
  showAnswer: any; // Boolean flag to control the visibility of the answer section.
  solutions: any; // Object containing solution datfor the question.
  question: any; // Contains the question content.
  answer: any; // The user's response to the question.
  inputArray:any=[]; // Array to store character codes for input validation.
  charCode: any= '';// The character code for the current input.
  arr: any ='';//   The character code for the current input.
  showHintBox: boolean = false; //  Variable used for input validation logic.
  utilService: any; 
  questionName: any; // Variable for showing of question name.
  showPopUpBox: boolean = false; // Variable used for showing PopUp Box.
  showRemarkValue: boolean = false; // Variable used for showing Remark value.
  showRemarks: string ; // Variable used for showremarks.
  showEvidence: string ; // Variable used for showing Evidence.
  remark: string; // Variable used for setting value of datin remark.
  maxLength: number; // Variable used for setting max length value.
  hints: any; // Variable used for seeting value of hint. 

  //Hint box
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
  }
  
  //Input Box logic for accepting number and text 
  checkForNumb(_event:KeyboardEvent,value){
    if(this.questions.interactions.response1.type.number == 'Yes') {
      console.log("event called")
      const charCode = _event.key.charCodeAt(0);
        if((charCode== 66 || ( charCode >= 48 && charCode <=57) || charCode==32)){
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

  //Datfrom Child to Parent
  sendDataToParent(data) {
    this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:false})
  }

  //Initializes the component with question data.
  ngOnInit() {
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
    this.showRemarks = this.questions?.responseDeclaration.showRemarks;
    this.showEvidence = this.questions?.responseDeclaration.showEvidence;
    this.maxLength = this.questions?.interactions.response1.validation.limit.maxLength;
    this.hints = this.questions?.hints;
  }
  
  // Handles keyboard accessibility for the component. 
  ngAfterViewInit() {
    this.handleKeyboardAccessibility();
  }

  // Reacts to changes in input properties.
  ngOnChanges() {
    if (this.replayed) {
      this.showAnswer = false;
    } else if (this.questions?.isAnswerShown) {
      this.showAnswer = true;
    }
  }

  // Shows the correct answer to the user.
  showAnswerToUser() {
    this.showAnswer = true;
    this.showAnswerClicked.emit({
      showAnswer: this.showAnswer
    });
  }

  
  // Handles the 'Enter' key press event.  
  onEnter(event) {
    /* istanbul ignore else */
    if (event.keyCode === 13) {
      event.stopPropagation();
      this.showAnswerToUser();
    }
  }

  // Sets tabindex to -1 for certain elements to handle keyboard accessibility.
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
