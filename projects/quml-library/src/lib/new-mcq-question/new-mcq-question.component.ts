
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';

@Component({
  selector: 'quml-new-mcq-question',
  templateUrl: './new-mcq-question.component.html',
  styleUrls: ['./new-mcq-question.component.scss']
})
export class NewMcqQuestionComponent implements OnInit {

  @Input() replayed?: boolean;
  @Input() questions?: any;
  @Input() baseUrl: string;
  @Output() componentLoaded = new EventEmitter<any>();
  @Output() showAnswerClicked = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();

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
  cardinality: any ;


  ngOnInit() {
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
    this.questionName = this.questionName = this.questions?.editorState.question;
    console.log(this.question);
    console.log(this.questions);
    this.primaryCategory = this.questions?.primaryCategory;
    if(this.primaryCategory == 'Multiselect Multiple Choice Question'){
      this.showRemarks = this.questions?.responseDeclaration.showRemarks;
      this.showEvidence = this.questions?.responseDeclaration.showEvidence;
      this.maxLength = this.questions?.remarks.maxLength;
      this.cardinality = this.questions?.responseDeclaration.response1.cardinality;

    }
  }

  onclick(_value: string){
    console.log(_value);
  }
}
