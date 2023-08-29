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

- `remarkSubmitted: boolean`:
  Tracks whether a remark has been submitted. When a remark is submitted, this flag is set to `true`.

- `inputFieldValue: string`:
  Holds the value entered by the user in the input field for remarks.

- `remarkLength: number`:
  Stores the length of the entered remark.

## Methods

- `popUpBox()`:
  Toggles the visibility of the popup box for adding remarks. When called, this method alternates the state of `showPopUpBox`.

- `showRemark(data: string)`:
  Handles the submission of a remark. This method calculates the length of the entered remark, marks it as submitted if not empty, and updates the UI flags accordingly.

- `textAreaKeyDown(_event: KeyboardEvent)`:
  Listens for keyboard events in the textarea and prevents the default behavior of the space key. This ensures that pressing the space key does not trigger scrolling within the textarea.

- `handlePopUpValue()`:
  Handles the popup value from a child component. When called, this method sets the `showPopUpBox` flag to true, which triggers the visibility of the popup box.

## Usage

The `AddRemarksComponent` is designed to be embedded within other Angular components and templates, allowing users to easily add and manage remarks associated with content. It offers a seamless way to input and display remarks while enforcing character limits.