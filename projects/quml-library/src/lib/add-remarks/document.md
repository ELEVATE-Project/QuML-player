# AddRemarksComponent Documentation

The `AddRemarksComponent` is a reusable Angular component that provides a user interface for adding and managing remarks associated with content. It allows users to enter, submit, and display remarks in a popup dialog.

## Inputs

- `showPopUpBox: boolean`:
  Controls the visibility of the popup box that allows users to add remarks.

- `showRemarkValue: boolean`:
  Indicates whether a remark is currently being displayed.

- `showRemarks: string`:
  Determines the visibility of remarks, providing options like 'Yes', 'No', etc.

- `maxLength: number`:
  Specifies the maximum character length for a remark.

  
## State Variables

- `showAddRemarkBtn: boolean`:
  Tracks when user enters data in textArea , sets the value to `false`.

- `inputFieldValue: string`:
  Holds the value entered by the user in the input field for remarks.

## Methods

- `popUpBox()`:
  Toggles the visibility of the popup box for adding remarks. When called, this method alternates the state of `showPopUpBox`.

- `onTextareaInput()`:
  Handles the value of showAddRemark button and set the boolean value to flase.  

- `clearTextarea()` :
   Function for clearing the remark field data and closing textarea.
   
## Usage

The `AddRemarksComponent` is designed to be embedded within other Angular components and templates, allowing users to easily add and manage remarks associated with content. It offers a seamless way to input and display remarks while enforcing character limits.