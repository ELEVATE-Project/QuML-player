import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as _ from 'lodash-es';


@Component({
  selector: 'quml-text-number-question',
  templateUrl: './text-number-question.component.html',
  styleUrls: ['./text-number-question.component.scss']
})
export class TextNumberQuestionComponent implements OnInit, OnChanges, AfterViewInit {

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
  inputArray:any=[]; 
  charCode: any= '';
  arr: any ='';
  showHintBox: boolean = false; 
  utilService: any; 
  questionName: any; 
  showPopUpBox: boolean = false; 
  showRemarkValue: boolean = false; 
  showRemarks: string ; 
  showEvidence: string ; 
  remark: string; 
  maxLength: number; 
  hints: any;  
  sizeLimit: any; 

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

  //Datafrom Child to Parent
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
    this.sizeLimit = parseInt(this.questions?.evidence.sizeLimit);
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
