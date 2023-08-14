import { Component , Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'quml-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})

export class AttachmentsComponent {
  selectFile: File;
  nonMatchSizeInBytes: string ;
  nonMatchedSize: boolean = false;
  termsDialogOpen: boolean = false ;
  enableFilesSection: boolean = false; 
  isChangeEnabled : boolean = false;
  @Input() showEvidence: string;
  @Output() selectFileEmit: EventEmitter<File>= new EventEmitter<File>();
  termsForm: NgForm;
  nonMatchedSizeValue : string;

 
  handletermsForm(){
    this.termsDialogOpen = !this.termsDialogOpen;
  }

  handleNonMatchedSize(){
    this.nonMatchedSize = true;
    this.nonMatchedSizeValue = "File limit exceeds its maximum size (20 KB)"
  }

} 


