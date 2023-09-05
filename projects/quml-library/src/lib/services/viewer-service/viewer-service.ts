import { EventEmitter, Injectable } from '@angular/core';
import { IParentConfig, QumlPlayerConfig } from '../../quml-library-interface';
import { QumlLibraryService } from '../../quml-library.service';
import { UtilService } from '../../util-service';
import { eventName, TelemetryType } from '../../telemetry-constants';
import { QuestionCursor } from '../../quml-question-cursor.service';
import * as _ from 'lodash-es';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  public qumlPlayerEvent = new EventEmitter<any>();
  public qumlQuestionEvent = new EventEmitter<any>();
  zoom: string;
  rotation: number;
  qumlPlayerStartTime: number;
  qumlPlayerLastPageTime: number;
  totalNumberOfQuestions: number;
  currentQuestionIndex: number;
  contentName: string;
  src: string;
  userName: string;
  version = '1.0';
  timeSpent = '0:0';
  metaData: any;
  loadingProgress: number;
  endPageSeen: boolean;
  identifiers: any;
  threshold: number;
  isAvailableLocally = false;
  isSectionsAvailable = false;
  questionSetId: string;
  parentIdentifier: string;
  sectionQuestions = [];
  tempData = {
    questions: [
        {
            "instructions": "",
            "code": "e368c596-323c-4c08-becd-05feb94ec5b5",
            "subject": [
                "English"
            ],
            "showRemarks": "No",
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "responseDeclaration": {
                "response1": {
                    "type": "string"
                }
            },
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.question",
            "showHints": false,
            "media": [],
            "body": "<p>Text Question&nbsp;</p>",
            "editorState": {
                "question": "<p>Text Question&nbsp;</p>",
                "solutions": [
                    {
                        "id": "2f57d601-f3a2-449c-977f-09a6a48efae3",
                        "type": "html",
                        "value": "<p>Answer</p>"
                    }
                ]
            },
            "createdOn": "2023-08-03T13:41:29.982+0000",
            "objectType": "Question",
            "interactions": {
                "response1": {
                    "validation": {
                        "limit": {
                            "maxLength": "200"
                        }
                    },
                    "type": {
                        "number": "No"
                    }
                }
            },
            "primaryCategory": "Text",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:41:29.996+0000",
            "contentEncoding": "gzip",
            "showSolutions": false,
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324617713254413412",
            "lastStatusChangedOn": "2023-08-03T13:41:29.982+0000",
            "schemaVersion": "1.1",
            "visibility": "Parent",
            "showTimer": false,
            "solutions": {
                "2f57d601-f3a2-449c-977f-09a6a48efae3": "<p>Answer</p>"
            },
            "hints": {
                "f8a9a164-acc1-44b4-8fa0-a24276a93b61": {
                    "en": ""
                }
            },
            "outcomeDeclaration": "{\"maxScore\":{\"cardinality\":\"single\",\"type\":\"integer\",\"defaultValue\":1},\"hint\":{\"cardinality\":\"single\",\"type\":\"string\",\"defaultValue\":\"f8a9a164-acc1-44b4-8fa0-a24276a93b61\"}}",
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070089996",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "interactionTypes": [
                "text"
            ],
            "framework": "inquiry_k-12",
            "answer": "",
            "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
            "compatibilityLevel": 5,
            "name": "Text Question Title",
            "status": "Draft",
            "showEvidence": "No"
        },
        {
            "instructions": "",
            "code": "5dcacf4c-be10-4ec3-8d91-20759ca21a1f",
            "subject": [
                "English"
            ],
            "showRemarks": "No",
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "responseDeclaration": {
                "response1": {
                    "type": "string"
                }
            },
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.question",
            "showHints": false,
            "media": [],
            "body": "<p>Number Question</p>",
            "editorState": {
                "question": "<p>Number Question</p>",
                "solutions": [
                    {
                        "id": "5fd4cb64-bed5-495e-add1-2aed34a54121",
                        "type": "html",
                        "value": "<p>10</p>"
                    }
                ]
            },
            "createdOn": "2023-08-03T13:42:05.649+0000",
            "objectType": "Question",
            "interactions": {
                "response1": {
                    "validation": {
                        "limit": {
                            "maxLength": "100"
                        }
                    },
                    "type": {
                        "number": "Yes"
                    }
                }
            },
            "primaryCategory": "Text",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:42:05.655+0000",
            "contentEncoding": "gzip",
            "showSolutions": false,
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324646931660813414",
            "lastStatusChangedOn": "2023-08-03T13:42:05.649+0000",
            "schemaVersion": "1.1",
            "visibility": "Parent",
            "showTimer": false,
            "solutions": {
                "5fd4cb64-bed5-495e-add1-2aed34a54121": "<p>10</p>"
            },
            "hints": {
                "ac84f959-e8f5-44c4-969d-2a19695a8070": {
                    "en": ""
                }
            },
            "outcomeDeclaration": "{\"maxScore\":{\"cardinality\":\"single\",\"type\":\"integer\",\"defaultValue\":1},\"hint\":{\"cardinality\":\"single\",\"type\":\"string\",\"defaultValue\":\"ac84f959-e8f5-44c4-969d-2a19695a8070\"}}",
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070125655",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "interactionTypes": [
                "text"
            ],
            "framework": "inquiry_k-12",
            "answer": "",
            "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
            "compatibilityLevel": 5,
            "name": "This is Number Question",
            "status": "Draft",
            "showEvidence": "No"
        },
        {
            "instructions": "",
            "code": "4ab9d2c6-30f4-4e14-b436-e414b3a5da2a",
            "subject": [
                "English"
            ],
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "responseDeclaration": {
                "response1": {
                    "type": "string"
                }
            },
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.question",
            "showHints": false,
            "media": [],
            "body": "<p>Date Question&nbsp;</p>",
            "editorState": {
                "question": "<p>Date Question&nbsp;</p>",
                "solutions": [
                    {
                        "id": "a83f876a-afb6-40f9-b481-01bffe4e8f5a",
                        "type": "html",
                        "value": "<p>10/03/2023</p>"
                    }
                ]
            },
            "createdOn": "2023-08-03T13:42:43.260+0000",
            "objectType": "Question",
            "interactions": {
                "response1": {
                    "validation": {
                        "pattern": "DD MMM, YYYY"
                    },
                    "autoCapture": "Yes"
                }
            },
            "primaryCategory": "Date",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:42:43.265+0000",
            "contentEncoding": "gzip",
            "showSolutions": false,
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324677742592013416",
            "lastStatusChangedOn": "2023-08-03T13:42:43.260+0000",
            "schemaVersion": "1.1",
            "visibility": "Parent",
            "showTimer": false,
            "solutions": {
                "a83f876a-afb6-40f9-b481-01bffe4e8f5a": "<p>10/03/2023</p>"
            },
            "hints": {
                "1e03e1b4-2a14-40b2-b931-f75ddc0dfcd7": {
                    "en": ""
                }
            },
            "outcomeDeclaration": {
                "maxScore": {
                    "cardinality": "single",
                    "type": "integer",
                    "defaultValue": 1
                },
                "hint": {
                    "cardinality": "single",
                    "type": "string",
                    "defaultValue": "1e03e1b4-2a14-40b2-b931-f75ddc0dfcd7"
                }
            },
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070163265",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "interactionTypes": [
                "date"
            ],
            "framework": "inquiry_k-12",
            "answer": "",
            "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
            "compatibilityLevel": 5,
            "name": "Date Question Title",
            "status": "Draft"
        },
        {
            "instructions": "Instruction for the Question",
            "code": "8995cc3d-5579-420f-9967-99972b4882a1",
            "evidence": {
                "required": "No",
                "mimeType": [
                    "image"
                ],
                "minCount": 1,
                "maxCount": 1,
                "sizeLimit": "20480"
            },
            "subject": [
                "English"
            ],
            "showRemarks": "Yes",
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "responseDeclaration": {
                "response1": {
                    "type": "integer"
                }
            },
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.question",
            "showHints": false,
            "media": [],
            "body": "<p>Slider Question&nbsp;</p>",
            "editorState": {
                "question": "<p>Slider Question&nbsp;</p>"
            },
            "createdOn": "2023-08-03T13:43:38.809+0000",
            "objectType": "Question",
            "interactions": {
                "response1": {
                    "validation": {
                        "range": {
                            "min": "10",
                            "max": "100"
                        }
                    },
                    "step": "5"
                }
            },
            "primaryCategory": "Slider",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:43:38.815+0000",
            "contentEncoding": "gzip",
            "showSolutions": false,
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324723248332813419",
            "lastStatusChangedOn": "2023-08-03T13:43:38.809+0000",
            "schemaVersion": "1.1",
            "visibility": "Parent",
            "showTimer": false,
            "solutions": {},
            "hints": {
                "521a9a5f-ebf1-4a62-9b1e-408c09b979de": {
                    "en": "Hint for the Question"
                }
            },
            "outcomeDeclaration": "{\"maxScore\":{\"cardinality\":\"single\",\"type\":\"integer\",\"defaultValue\":1},\"hint\":{\"cardinality\":\"single\",\"type\":\"string\",\"defaultValue\":\"521a9a5f-ebf1-4a62-9b1e-408c09b979de\"}}",
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070218815",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "interactionTypes": [
                "slider"
            ],
            "framework": "inquiry_k-12",
            "answer": "",
            "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
            "compatibilityLevel": 5,
            "name": "Slider Question title",
            "remarks": {
                "maxLength": "200",
                "required": "No"
            },
            "status": "Draft",
            "showEvidence": "Yes"
        },
        {
            "instructions": "Instruction of main Question",
            "code": "b365a10c-d72f-492d-9702-b21aae05d5fa",
            "evidence": {
                "required": "No",
                "mimeType": [
                    "image"
                ],
                "minCount": 1,
                "maxCount": 1,
                "sizeLimit": "20480"
            },
            "subject": [
                "English"
            ],
            "showRemarks": "Yes",
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "responseDeclaration": {
                "response1": {
                    "cardinality": "single",
                    "type": "integer",
                    "correctResponse": {},
                    "mapping": []
                }
            },
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.question",
            "showHints": false,
            "media": [],
            "body": "<div class='question-body' tabindex='-1'><div class='mcq-title' tabindex='0'><p>MCQ Question</p></div><div data-choice-interaction='response1' class='mcq-vertical'></div></div>",
            "editorState": {
                "question": "<p>MCQ Question</p>"
            },
            "templateId": "mcq-vertical",
            "createdOn": "2023-08-03T13:47:11.202+0000",
            "objectType": "Question",
            "interactions": {
                "response1": {
                    "type": "choice",
                    "options": [
                        {
                            "label": "<p>Option 1</p>",
                            "value": 0,
                            "hint": "0f853711-0893-4574-846e-6ced0e428416"
                        },
                        {
                            "label": "<p>Option 2</p>",
                            "value": 1,
                            "hint": "2874e235-e4df-42aa-ba68-6479b08f1bb6"
                        }
                    ],
                    "validation": {
                        "required": "Yes"
                    }
                }
            },
            "primaryCategory": "Multiselect Multiple Choice Question",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:47:11.209+0000",
            "contentEncoding": "gzip",
            "showSolutions": false,
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324897240678413422",
            "lastStatusChangedOn": "2023-08-03T13:47:11.202+0000",
            "schemaVersion": "1.1",
            "visibility": "Parent",
            "showTimer": false,
            "solutions": {},
            "hints": {
                "0f853711-0893-4574-846e-6ced0e428416": {
                    "en": "Option 1 Hint"
                },
                "42071fef-e5a1-4ec7-a3a5-17a1fc01663a": {
                    "en": "Hint of Main Question"
                }
            },
            "outcomeDeclaration": "{\"maxScore\":{\"cardinality\":\"single\",\"type\":\"integer\",\"defaultValue\":1},\"hint\":{\"cardinality\":\"single\",\"type\":\"string\",\"defaultValue\":\"42071fef-e5a1-4ec7-a3a5-17a1fc01663a\"}}",
            "qType": "MCQ",
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070431209",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "interactionTypes": [
                "choice"
            ],
            "framework": "inquiry_k-12",
            "answer": "<div class='anwser-container'></div>",
            "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
            "compatibilityLevel": 5,
            "name": "MCQ Question title",
            "remarks": {
                "maxLength": "200",
                "required": "No"
            },
            "status": "Draft",
            "showEvidence": "Yes"
        }
    ],
    count: 5
}

  constructor(
    public qumlLibraryService: QumlLibraryService,
    public utilService: UtilService,
    public questionCursor: QuestionCursor
  ) { }

  initialize(config: QumlPlayerConfig, threshold: number, questionIds: string[], parentConfig: IParentConfig) {
    this.qumlLibraryService.initializeTelemetry(config, parentConfig);
    this.identifiers = _.cloneDeep(questionIds);
    this.parentIdentifier = config.metadata.identifier;
    this.threshold = threshold;
    this.rotation = 0;
    this.totalNumberOfQuestions = config.metadata.childNodes.length || 0;
    this.qumlPlayerStartTime = this.qumlPlayerLastPageTime = new Date().getTime();
    this.currentQuestionIndex = 1;
    this.contentName = config.metadata.name;
    this.isAvailableLocally = parentConfig.isAvailableLocally;
    this.isSectionsAvailable = parentConfig?.isSectionsAvailable;
    this.src = config.metadata.artifactUrl || '';
    this.questionSetId = config.metadata.identifier;

    /* istanbul ignore else */
    if (config?.context?.userData) {
      const firstName = config.context.userData?.firstName ?? '';
      const lastName = config.context.userData?.lastName ?? '';
      this.userName = firstName + ' ' + lastName;
    }
    this.metaData = {
      pagesHistory: [],
      totalPages: 0,
      duration: 0,
      rotation: [],
      progressBar: [],
      questions: [],
      questionIds: [],
      lastQuestionId: '',
    };
    this.loadingProgress = 0;
    this.endPageSeen = false;
  }

  raiseStartEvent(currentQuestionIndex) {
    this.currentQuestionIndex = currentQuestionIndex;
    const duration = new Date().getTime() - this.qumlPlayerStartTime;
    const startEvent: any = {
      eid: 'START',
      ver: this.version,
      edata: {
        type: 'START',
        currentIndex: this.currentQuestionIndex,
        duration
      },
      metaData: this.metaData
    };

    this.qumlPlayerEvent.emit(startEvent);
    this.qumlPlayerLastPageTime = this.qumlPlayerStartTime = new Date().getTime();
    this.qumlLibraryService.start(duration);
  }

  raiseEndEvent(currentQuestionIndex, endPageSeen, score) {
    this.metaData.questions = this.sectionQuestions;
    const duration = new Date().getTime() - this.qumlPlayerStartTime;
    const endEvent: any = {
      eid: 'END',
      ver: this.version,
      edata: {
        type: 'END',
        currentPage: currentQuestionIndex,
        totalPages: this.totalNumberOfQuestions,
        duration
      },
      metaData: this.metaData
    };

    this.qumlPlayerEvent.emit(endEvent);
    const visitedlength = (this.metaData.pagesHistory.filter((v, i, a) => a.indexOf(v) === i)).length;
    this.timeSpent = this.utilService.getTimeSpentText(this.qumlPlayerStartTime);
    this.qumlLibraryService.end(duration, currentQuestionIndex, this.totalNumberOfQuestions, this.totalNumberOfQuestions, endPageSeen, score);
  }

  raiseHeartBeatEvent(type: string, telemetryType: string, pageId: number | string, nextContentId?: string) {
    const hearBeatEvent: any = {
      eid: 'HEARTBEAT',
      ver: this.version,
      edata: {
        type,
        questionIndex: this.currentQuestionIndex,
      },
      metaData: this.metaData
    };

    if (type === eventName.nextContentPlay && nextContentId) {
      hearBeatEvent.edata.nextContentId = nextContentId;
    }

    if (this.isSectionsAvailable) {
      hearBeatEvent.edata.sectionId = this.questionSetId;
    }

    this.qumlPlayerEvent.emit(hearBeatEvent);
    if (TelemetryType.interact === telemetryType) {
      this.qumlLibraryService.interact(type.toLowerCase(), pageId);
    } else if (TelemetryType.impression === telemetryType) {
      this.qumlLibraryService.impression(pageId);
    }

  }

  raiseAssesEvent(questionData, index: number, pass: string, score, resValues, duration: number) {
    const assessEvent = {
      item: questionData,
      index: index,
      pass: pass,
      score: score,
      resvalues: resValues,
      duration: duration
    }
    this.qumlPlayerEvent.emit(assessEvent);
    this.qumlLibraryService.startAssesEvent(assessEvent);
  }

  raiseResponseEvent(identifier, qType, optionSelected) {
    const responseEvent = {
      target: {
        id: identifier,
        ver: this.version,
        type: qType
      },
      values: [{
        optionSelected
      }]
    }
    this.qumlPlayerEvent.emit(responseEvent);
    this.qumlLibraryService.response(identifier, this.version, qType, optionSelected);
  }

  raiseSummaryEvent(currentQuestionIndex, endpageseen, score, summaryObj) {
    let timespent = new Date().getTime() - this.qumlPlayerStartTime;
    timespent = Number(((timespent % 60000) / 1000).toFixed(2))
    const eData = {
      type: "content",
      mode: "play",
      starttime: this.qumlPlayerStartTime,
      endtime: new Date().getTime(),
      timespent,
      pageviews: this.totalNumberOfQuestions,
      interactions: summaryObj.correct + summaryObj.wrong + summaryObj.partial,
      extra: [{
        id: "progress",
        value: ((currentQuestionIndex / this.totalNumberOfQuestions) * 100).toFixed(0).toString()
      }, {
        id: "endpageseen",
        value: endpageseen.toString()
      }, {
        id: "score",
        value: score.toString()
      }, {
        id: "correct",
        value: summaryObj.correct.toString()
      }, {
        id: "incorrect",
        value: summaryObj.wrong.toString()
      }, {
        id: "partial",
        value: summaryObj.partial.toString()
      }, {
        id: "skipped",
        value: summaryObj.skipped.toString()
      }]
    };
    const summaryEvent = {
      eid: 'QUML_SUMMARY',
      ver: this.version,
      edata: eData,
      metaData: this.metaData
    };
    this.qumlPlayerEvent.emit(summaryEvent);
    this.qumlLibraryService.summary(eData);
  }

  raiseExceptionLog(errorCode: string, errorType: string, stacktrace, traceId) {
    const exceptionLogEvent = {
      eid: "ERROR",
      edata: {
        err: errorCode,
        errtype: errorType,
        requestid: traceId || '',
        stacktrace: stacktrace || '',
      }
    }
    this.qumlPlayerEvent.emit(exceptionLogEvent)
    this.qumlLibraryService.error(stacktrace, { err: errorCode, errtype: errorType });
  }


  getQuestions(currentIndex?: number, index?: number) {
    let indentifersForQuestions;
    if (currentIndex !== undefined && index) {
      indentifersForQuestions = this.identifiers.splice(currentIndex, index);
    } else if (!currentIndex && !index) {
      indentifersForQuestions = this.identifiers.splice(0, this.threshold);
    }
    console.log("Questions are called",)
    if (!_.isEmpty(indentifersForQuestions)) {
      const requests = [];
      const chunkArray = _.chunk(indentifersForQuestions, 10);
      _.forEach(chunkArray, (value) => {
        requests.push(this.questionCursor.getQuestions(value, this.parentIdentifier));
      });
    // forkJoin(requests).subscribe(questions => {
      //   _.forEach(questions, (value) => {
      //     this.qumlQuestionEvent.emit(this.tempData);
      //   });
      // }, (error) => {
      //   this.qumlQuestionEvent.emit({
      //     error: error
      //   })
      // });
      this.qumlQuestionEvent.emit(this.tempData);
    }
  }

  getQuestion() {
    if (this.identifiers.length) {
      let questionIdentifier = this.identifiers.splice(0, this.threshold);
      this.questionCursor.getQuestion(questionIdentifier[0]).subscribe((question) => {
        console.log('Question called')
        this.qumlQuestionEvent.emit(question);
      }, (error) => {
        this.qumlQuestionEvent.emit({
          error: error
        });
      });
    }
  }

  generateMaxAttemptEvents(currentattempt: number, maxLimitExceeded: boolean, isLastAttempt: boolean) {
    return {
      eid: 'exdata',
      ver: this.version,
      edata: {
        type: 'exdata',
        currentattempt,
        maxLimitExceeded,
        isLastAttempt
      },
      metaData: this.metaData
    };
  }

  updateSectionQuestions(id: string, questions) {
    const index = this.sectionQuestions.findIndex(section => section.id === id);
    if (index > -1) {
      this.sectionQuestions[index].questions = questions;
    } else {
      this.sectionQuestions.push({ id, questions });
    }
  }

  getSectionQuestions(id: string) {
    return this.sectionQuestions.find(section => section.id === id)?.questions || [];
  }

  pauseVideo() {
    const videoElements = Array.from(document.getElementsByTagName('video') as HTMLCollectionOf<Element>);
    videoElements.forEach((element: HTMLVideoElement) => element.pause());
  }
}
