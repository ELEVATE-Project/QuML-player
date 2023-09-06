
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as _ from 'lodash-es';

@Component({
  selector: 'quml-new-mcq-question',
  templateUrl: './new-mcq-question.component.html',
  styleUrls: ['./new-mcq-question.component.scss']
})

export class NewMcqQuestionComponent implements OnInit {

  
// Input properties
@Input() replayed?: boolean; // Indicates if the question is being replayed
@Input() questions?: any; // Contains the question data
@Input() baseUrl: string; // Base URL for some functionality
@Output() componentLoaded = new EventEmitter<any>(); // Event emitted when the component is loaded
@Output() showAnswerClicked = new EventEmitter<any>(); // Event emitted when the "Show Answer" button is clicked
@Output() sendData = new EventEmitter<any>(); // Event emitted to send data

// Variables for storing various properties
showAnswer: any; // Stores the answer display status
solutions: any; // Stores the question's solutions
question: any; // Stores the question data
answer: any; // Stores the answer data
utilService: any; // Service for utility functions (not initialized here)
showHintBox: boolean = false; // Indicates if the hint box should be displayed
questionName: any; // Stores the question name
primaryCategory: any; // Stores the primary category of the question
showRemarks: any; // Indicates if remarks should be displayed
showEvidence: any; // Indicates if evidence should be displayed
maxLength: any; // Stores the maximum length for remarks
showPopUpBox: boolean = false; // Indicates if a popup box should be displayed
showRemarkValue: boolean = false; // Indicates if remark values should be displayed
cardinality: any; // Stores the cardinality of the response
options: any; // Stores response options
value: any; // Stores the value of response options
label: any; // Stores the label of response options
hints: any; // Stores hints for the question
sizeLimit: any; // Stores the size limit for uploading files

// This method is called when the component is initialized
ngOnInit() {
  // Initialize component properties based on the provided question data
  this.question = this.questions?.body;
  this.answer = this.questions?.answer;
  this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
  this.questionName = this.questionName = this.questions?.editorState.question;
  this.primaryCategory = this.questions?.primaryCategory;

  // Check the primary category to determine which properties to initialize
  if (this.primaryCategory == 'Multiselect Multiple Choice Question') {
    this.showRemarks = this.questions?.responseDeclaration.showRemarks;
    this.showEvidence = this.questions?.responseDeclaration.showEvidence;
    this.maxLength = this.questions?.remarks.maxLength;
    this.cardinality = this.questions?.responseDeclaration.response1.cardinality;
    this.options = this.questions?.interactions.response1.options;
    this.value = this.questions?.interactions.response1.options.value;
    this.hints = this.questions?.hint;
    this.label = this.questions?.interactions.response1.options.label;
    this.sizeLimit = this.questions?.evidence.sizeLimit;
  }
}

// Event handler for a click event
onclick(_value: string) {
  // Log the clicked value to the console
  console.log(_value);
}
}
