## Documentation

## Properties:

nonMatchedSize (boolean): Represents whether the size of the uploaded file matches the defined size criteria. By default, it is set to false.

termsDialogOpen (boolean): Indicates whether the terms and conditions dialog is open or not. By default, it is set to false.

nonMatchedSizeValue (string): Contains a message indicating if the uploaded file exceeds the size limit.

pdfIconDisplay (boolean): Indicates whether a PDF icon should be displayed or not.

imageIconDisplay (boolean): Indicates whether an image icon should be displayed or not.

videoIconDisplay (boolean): Indicates whether a video icon should be displayed or not.

showUploadMessage (boolean): Represents whether the message after file upload should be displayed.

files (Array<any>): An array to hold the uploaded files.

enableFilesSection (boolean): Indicates if the section displaying the uploaded files should be enabled or not.

## ViewChild:
fileInput (ElementRef): A reference to the file input element in the component's view.

## Input Properties:

showEvidence (string): Input property that specifies the type of evidence to show (e.g., 'pdf', 'image', etc.).

sizeLimit (number): Input property that defines the maximum file size limit.
## Methods:

handletermsForm(): Toggles the visibility of the terms and conditions dialog box.

handleNonMatchedSize(): Sets the nonMatchedSize to true and assigns an error message about file size limit to nonMatchedSizeValue.

handleFile(event): Handles file upload. Checks if the file size is within the limit and pushes it to the files array. Otherwise, it shows a size error message.

showUpload(): Sets showUploadMessage to true after a slight delay, showing that a file has been uploaded successfully.

removeItem(index): Removes a file from the files array based on its index.

openFile(file): Opens the uploaded file in a new browser tab.

crossFunction(): Toggles the value of showUploadMessage, essentially used to hide or show the upload message.

cancelTermsDialog(): Closes the terms and conditions dialog box.

logInForm(termsForm: NgForm): Handles the submission of the terms and conditions form. Enables the files section if terms are accepted.

handleTermsConditionBox(): Opens the terms and conditions dialog box.

## About the component
This component seems to be handling the upload and display of files, ensuring they're within a certain size, and ensuring the user accepts the terms and conditions before uploading. It provides visual feedback to the user on successful uploads, displays icons based on file type, and provides a method to open uploaded files. The error messages and dialogs help improve the user experience by providing informative feedback.