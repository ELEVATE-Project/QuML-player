import { Component, OnInit } from '@angular/core';
import { samplePlayerConfig } from './quml-library-data';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contentId = 'do_21385324226288844813406';
  playerConfig: any;
  tempData = {
    "code": "7d5aaa70-ffb8-d062-ba10-1db445a11dbc",
    "allowScoring": "No",
    "allowSkip": "Yes",
    "containsUserData": "No",
    "qumlVersion": 1.1,
    "channel": "01309282781705830427",
    "language": [
        "English"
    ],
    "mimeType": "application/vnd.sunbird.questionset",
    "showHints": false,
    "createdOn": "2023-08-03T13:33:32.174+0000",
    "objectType": "QuestionSet",
    "scoreCutoffType": "AssessmentLevel",
    "primaryCategory": "Observation",
    "children": [
        {
            "parent": "do_21385324226288844813406",
            "code": "8fc73705-e028-4223-83db-9a923af8ee43",
            "allowScoring": "No",
            "allowSkip": "Yes",
            "containsUserData": "No",
            "qumlVersion": 1.1,
            "channel": "01309282781705830427",
            "language": [
                "English"
            ],
            "mimeType": "application/vnd.sunbird.questionset",
            "showHints": false,
            "createdOn": "2023-08-03T13:40:36.277+0000",
            "objectType": "QuestionSet",
            "scoreCutoffType": "AssessmentLevel",
            "primaryCategory": "Observation",
            "children": [
                {
                    "parent": "do_21385324573718118413410",
                    "code": "e368c596-323c-4c08-becd-05feb94ec5b5",
                    "subject": [
                        "English"
                    ],
                    "showRemarks": "No",
                    "qumlVersion": 1.1,
                    "channel": "01309282781705830427",
                    "language": [
                        "English"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "showHints": false,
                    "createdOn": "2023-08-03T13:41:29.982+0000",
                    "objectType": "Question",
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
                    "index": 1,
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
                    "depth": 2,
                    "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                    "compatibilityLevel": 5,
                    "name": "Text Question Title",
                    "status": "Draft",
                    "showEvidence": "No"
                },
                {
                    "parent": "do_21385324573718118413410",
                    "code": "5dcacf4c-be10-4ec3-8d91-20759ca21a1f",
                    "subject": [
                        "English"
                    ],
                    "showRemarks": "No",
                    "qumlVersion": 1.1,
                    "channel": "01309282781705830427",
                    "language": [
                        "English"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "showHints": false,
                    "createdOn": "2023-08-03T13:42:05.649+0000",
                    "objectType": "Question",
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
                    "index": 2,
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
                    "depth": 2,
                    "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                    "compatibilityLevel": 5,
                    "name": "This is Number Question",
                    "status": "Draft",
                    "showEvidence": "No"
                },
                {
                    "parent": "do_21385324573718118413410",
                    "code": "4ab9d2c6-30f4-4e14-b436-e414b3a5da2a",
                    "subject": [
                        "English"
                    ],
                    "qumlVersion": 1.1,
                    "channel": "01309282781705830427",
                    "language": [
                        "English"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "showHints": false,
                    "createdOn": "2023-08-03T13:42:43.260+0000",
                    "objectType": "Question",
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
                    "index": 3,
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
                    "depth": 2,
                    "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                    "compatibilityLevel": 5,
                    "name": "Date Question Title",
                    "status": "Draft"
                },
                {
                    "parent": "do_21385324573718118413410",
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
                    "language": [
                        "English"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "showHints": false,
                    "createdOn": "2023-08-03T13:43:38.809+0000",
                    "objectType": "Question",
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
                    "index": 4,
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
                    "depth": 2,
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
                    "parent": "do_21385324573718118413410",
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
                    "language": [
                        "English"
                    ],
                    "mimeType": "application/vnd.sunbird.question",
                    "showHints": false,
                    "templateId": "mcq-vertical",
                    "createdOn": "2023-08-03T13:47:11.202+0000",
                    "objectType": "Question",
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
                    "index": 5,
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
                    "depth": 2,
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
            "contentDisposition": "inline",
            "lastUpdatedOn": "2023-08-03T13:46:03.770+0000",
            "contentEncoding": "gzip",
            "generateDIALCodes": "No",
            "showSolutions": false,
            "trackable": {
                "enabled": "No",
                "autoBatch": "No"
            },
            "allowAnonymousAccess": "Yes",
            "identifier": "do_21385324573718118413410",
            "lastStatusChangedOn": "2023-08-03T13:40:36.277+0000",
            "schemaVersion": "1.1",
            "requiresSubmit": "No",
            "visibility": "Parent",
            "showTimer": false,
            "entityType": "School",
            "index": 1,
            "setType": "materialised",
            "languageCode": [
                "en"
            ],
            "versionKey": "1691070036277",
            "showFeedback": false,
            "license": "CC BY 4.0",
            "depth": 1,
            "compatibilityLevel": 6,
            "name": "Section",
            "navigationMode": "non-linear",
            "allowBranching": "Yes",
            "timeLimits": {
                "questionSet": {
                    "max": 0,
                    "min": 0
                }
            },
            "shuffle": true,
            "attributions": [],
            "status": "Draft"
        }
    ],
    "contentDisposition": "inline",
    "lastUpdatedOn": "2023-08-03T13:47:11.247+0000",
    "contentEncoding": "gzip",
    "generateDIALCodes": "No",
    "showSolutions": false,
    "trackable": {
        "enabled": "No",
        "autoBatch": "No"
    },
    "allowAnonymousAccess": "Yes",
    "identifier": "do_21385324226288844813406",
    "lastStatusChangedOn": "2023-08-03T13:33:32.174+0000",
    "createdFor": [
        "01309282781705830427"
    ],
    "schemaVersion": "1.1",
    "requiresSubmit": "No",
    "visibility": "Default",
    "showTimer": false,
    "entityType": "School",
    "consumerId": "04323cb5-cab3-4bfb-9b43-eb1dba02e475",
    "childNodes": [
        "do_21385324723248332813419",
        "do_21385324573718118413410",
        "do_21385324897240678413422",
        "do_21385324677742592013416",
        "do_21385324646931660813414",
        "do_21385324617713254413412"
    ],
    "setType": "materialised",
    "languageCode": [
        "en"
    ],
    "versionKey": "1691070431247",
    "showFeedback": false,
    "license": "CC BY 4.0",
    "framework": "inquiry_k-12",
    "depth": 0,
    "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
    "compatibilityLevel": 6,
    "name": "After DB clean V2",
    "navigationMode": "non-linear",
    "allowBranching": "Yes",
    "timeLimits": {
        "questionSet": {
            "max": 0,
            "min": 0
        }
    },
    "shuffle": true,
    "status": "Draft",
    "outcomeDeclaration": {
        "maxScore": {
            "cardinality": "single",
            "type": "integer",
            "defaultValue": 4
        }
    }
}
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getQuestionSet(this.contentId).subscribe(res => {
    //   console.log(res);

    // });
    this.initializePlayer(this.tempData);
  }

  initializePlayer(metadata) {
    let qumlConfigMetadata: any = localStorage.getItem(`config_${this.contentId}`) || '{}';
    let config;
    if (qumlConfigMetadata) {
      qumlConfigMetadata = JSON.parse(qumlConfigMetadata);
      config = { ...samplePlayerConfig.config, ...qumlConfigMetadata };
    }
    this.playerConfig = {
      context: samplePlayerConfig.context,
      config: config ? config : samplePlayerConfig.config,
      metadata,
      data: {}
    };
  }

  getPlayerEvents(event) {
    // console.log('get player events', JSON.stringify(event));

    // Store the metaData locally
    if (event.eid === 'END') {
      let qumlMetaDataConfig = event.metaData;
      localStorage.setItem(`config_${this.contentId}`, JSON.stringify(qumlMetaDataConfig));
      this.playerConfig.config = { ...samplePlayerConfig.config, ...qumlMetaDataConfig };;
    }
  }

  getTelemetryEvents(event) {
    // console.log('event is for telemetry', JSON.stringify(event));
  }
}
