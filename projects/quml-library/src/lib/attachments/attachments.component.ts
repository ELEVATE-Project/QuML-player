import { Component , Input} from '@angular/core';

@Component({
  selector: 'quml-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})

export class AttachmentsComponent {
  nonMatchedSize: boolean = false;
  termsDialogOpen: boolean = false ;
  nonMatchedSizeValue : string;

  @Input() showEvidence: string;
 
  handletermsForm(){
    this.termsDialogOpen = !this.termsDialogOpen;
  }

  handleNonMatchedSize(){
    this.nonMatchedSize = true;
    this.nonMatchedSizeValue = "File limit exceeds its maximum size (20 KB)"
  }

} 


