/**
 * @name TextNumberQuestionComponent
 * @description This component is used to display and handle a text or number input question.
 * It allows users to enter their response and optionally shows the correct answer.
 **/


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

  @Input() replayed?: boolean; //@description Boolean flag to indicate if the question is replayed.
  @Input() questions?: any; //@description Contains the question data.
  @Input() baseUrl: string; //@description The base URL for the component.
  @Output() componentLoaded = new EventEmitter<any>(); //@description EventEmitter to emit the component loaded event.
  @Output() showAnswerClicked = new EventEmitter<any>(); //@description EventEmitter to emit the show answer clicked event.
  @Output() sendData = new EventEmitter<any>(); //@description EventEmitter to emit the user's response data to the parent component.
  
  showAnswer: any; //@description Boolean flag to control the visibility of the answer section.
  solutions: any; //@description Object containing solution data for the question.
  question: any; //@description Contains the question content.
  answer: any; //@description The user's response to the question.
  inputArray:any=[]; //@description Array to store character codes for input validation.
  charCode: any= '';//@description The character code for the current input.
  arr: any ='';//  @description The character code for the current input.
  showHintBox: boolean = false; // @description A variable used for input validation logic.
  utilService: any; 
  questionName: any; // @description of question name.

  //Hint box
  toggleHintBox() {
    this.showHintBox = !this.showHintBox;
    console.log(1);
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

  //Data from Child to Parent
  sendDataToParent(data) {
    this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:false})
  }

  //Lifecycle hook. Initializes the component with question data.
  
  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questions?.editorState.question;
  }
  
  
   // Lifecycle hook. Handles keyboard accessibility for the component.
  
  ngAfterViewInit() {
    this.handleKeyboardAccessibility();
  }

  
   // Lifecycle hook. Reacts to changes in input properties.
   
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
