# Terms-Condition Component 

# Description
This is a custom Angular component used to display and handle terms-condition box, where user can accept terms condition section to proceed for files uploadation. 

# Input Properties
@Input() termsDialogOpen: boolean: An input property for displaying boolean value of Terms Dialog box.

# Output Properties
@Output() nonMatchedSizeEmit = new EventEmitter<any>(): An output Property for displaying the message when the file size exceeds its limits.

# Viewchild Prperties
@ViewChild('inputFileField') inputFileField!: ElementRef<HTMLInputElement>: A viewchild property which will take reference of template property (file input element).

# Properties
inputFileField: ElementRef<HTMLInputElement>: A reference to the file input element in the HTML template.

termsDialogOpen: boolean: An input property that controls the visibility of the terms and conditions dialog box.

nonMatchedSizeEmit: EventEmitter<any>: An output event emitter used to emit information about non-matched file sizes.

selectFile: File: Holds the selected file.

fileName: string: Stores the name of the selected file.

imageDataUrl: File: Represents the data URL of the selected image.

fileUpload: boolean: Indicates whether a file upload is in progress.

file: any: Represents the selected file data.

imagePopUp: boolean: Controls the visibility of a popup related to images.

enableFilesSection: boolean: Determines if the files section should be enabled.

# Public Methods

cancelTermsDialog(): This function sets the termsDialogOpen property to false, effectively canceling the terms and conditions dialog box.

triggerInputClick(): Triggers a click event on the file input element, opening the file selection dialog.

logInForm(termsForm: NgForm): Handles the submission of the terms and conditions form. It sets enableFilesSection to true and closes the dialog box if the terms are accepted.

onFileSelected(event: Event): Handles the selection of a file from the file input. It reads the selected file, checks its size, and emits a non-matched size event if necessary.

readFile(file: File): Reads and processes the selected file using the FileReader API. Updates the imageDataUrl and selectFile properties.

isImageType(fileData: any): boolean: Checks if the given file data represents an image based on its data URL.

isVideoType(fileData: any): boolean: Checks if the given file data represents a video based on its data URL.

isDocumentType(fileData: any, fileName: string): boolean: Checks if the given file data represents a document based on its data URL and the provided file name.

handleUploadEmit(): Marks that a file upload is in progress by setting fileUpload to true.

handleUpdateEmit(event: Event): Handles the update event by calling onFileSelected(event) to process the updated file selection.

