import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as _ from 'lodash-es';
import { McqComponent } from '../mcq/mcq.component';

@Component({
  selector: 'quml-new-mcq-question',
  templateUrl: './new-mcq-question.component.html',
  styleUrls: ['./new-mcq-question.component.scss']
})

export class NewMcqQuestionComponent implements OnInit {

  
// Input properties
@Input() replayed?: boolean; 
@Input() questions?: any; 
@Input() baseUrl: string; 
@Input() shuffleOptions?: boolean;

//Output properties
@Output() showAnswerClicked = new EventEmitter<any>(); 

// Variables for storing various properties
showAnswer: any; 
solutions: any; 
question: any; 
answer: any; 
utilService: any; 
showHintBox: boolean = false; 
questionName: any; 
primaryCategory: any;
showRemarks: any; 
showEvidence: any; 
maxLength: any; 
showPopUpBox: boolean = false; 
showRemarkValue: boolean = false; 
cardinality: any; 
options: any; 
value: any; 
label: any; 
hints: any; 
sizeLimit: any; 
identifier: any;
layout: string;
tryAgain: boolean;

ngOnInit() {
  console.log(this.questions);
  this.question = this.questions?.body;
  this.answer = this.questions?.answer;
  this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
  this.questionName = this.questionName = this.questions?.editorState.question;
  this.primaryCategory = this.questions?.primaryCategory;
  this.identifier = this.questions?.identifier;
  this.layout = this.questions?.templateId;
  

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

// Function for handling click event when any option is selected
// onOptionSelect(_value: string) {
//   this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:true})
// }
// }

 handleOptionSelected($event){
  this.showAnswerClicked.emit({data:this.answer,question:this.questions,isCorrectAnswer:true})
}
}
