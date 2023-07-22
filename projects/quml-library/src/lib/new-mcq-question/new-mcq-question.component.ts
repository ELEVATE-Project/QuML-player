
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash-es';
import { UtilService } from '../util-service';

@Component({
  selector: 'quml-new-mcq-question',
  templateUrl: './new-mcq-question.component.html',
  styleUrls: ['./new-mcq-question.component.css']
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
  inputArray:any=[];
  charCode: any= '';
  arr: any ='';
  utilService: any;
  showHintBox: boolean = false;

  ngOnInit() {
    console.log(this.questions);
    this.question = this.questions?.body;
    this.answer = this.questions?.answer;
    this.solutions = _.isEmpty(this.questions?.solutions) ? null : this.questions?.solutions;
  }

  onclick(_value: string){
    console.log(_value);
  }
}
