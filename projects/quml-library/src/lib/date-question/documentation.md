# Date Input Component

The Date Input component allows the user to enter a date or automatically detect it.

## Properties

questionName: The HTML content of the question to be displayed.
sendData: An EventEmitter that emits the selected date when the input changes.

## Methods

onDateSelected(date: string)
This method is called when the user selects a date. It emits the selected date using the sendData EventEmitter.

# autoDetectDate(inputElement: HTMLInputElement)
This method is called when the "Auto detect" button is clicked. It attempts to automatically detect the date and update the input field accordingly.
