import { Component, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'quml-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnChanges{
  
  previewFile: File;
  finalUpload: boolean;

  @Input() imageDataUrl: File;
  @Input() file: any;
  @Input() imagePopUp: boolean;
  @Output() finalUploadEmit = new EventEmitter<any>();
  @Output() updateEmit = new EventEmitter<any>();

  ngOnChanges(){
    if (this.imageDataUrl) {
      this.readFile(this.imageDataUrl);
    }
  }

  readFile(dataUrl: any) {
    this.previewFile = dataUrl;
  }

  uploadImg(){
    this.finalUploadEmit.emit();
    this.imagePopUp = false;
  }
  
  cancleUpload(){
    this.imagePopUp = false;
  }
 

}

