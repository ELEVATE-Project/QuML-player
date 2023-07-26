## TextNumberQuestionComponent

## Description
The TextNumberQuestionComponent is a custom Angular component used to display and handle a text or number input question. It is designed to provide a user interface for users to enter their responses and optionally show the correct answer. The component is typically used in educational or quiz applications where users need to respond to questions.

## Input Properties
replayed?: boolean (optional): A boolean flag that indicates if the question is being replayed. This property is used to control the visibility of the correct answer when replaying questions.

questions?: any (optional): An object containing the question data. This property holds information about the question, its body, the correct answer, and any available solutions.

baseUrl: string: The base URL for the component. This property is used to construct URLs for assets or resources used in the component.

## Output Properties
componentLoaded: EventEmitter<any>: An EventEmitter that emits an event when the component is loaded. This allows other components or services to be notified when this component is initialized.

showAnswerClicked: EventEmitter<any>: An EventEmitter that emits an event when the "Show Answer" button is clicked. This event is used to notify the parent component that the user wants to see the correct answer.

sendData: EventEmitter<any>: An EventEmitter that emits the user's response data to the parent component. This event is triggered when the user enters their response in the input box.

## Component Behavior
User Response Handling: The component handles user responses entered into the input box. Depending on the question type (text or number), it validates the input and ensures that only valid characters are accepted. For number-type questions, only digits (0-9) and space are allowed.

Show Answer: The component provides a "Show Answer" button, which, when clicked, reveals the correct answer to the user.

Hint Box: The component supports a hint box that can be toggled on and off. It provides additional information or tips to help users answer the question.

## Lifecycle Hooks
ngOnInit(): This Angular lifecycle hook is called when the component is initialized. In this hook, the component initializes its properties with the question data, body, answer, and solutions.

ngAfterViewInit(): This Angular lifecycle hook is called after the component's view has been fully initialized. It is used to handle keyboard accessibility for the component, ensuring that specific elements are keyboard-focusable when needed.

ngOnChanges(): This Angular lifecycle hook is called when there are changes to the component's input properties. It reacts to changes in the replayed property to control the visibility of the correct answer.

## Public Methods
toggleHintBox(): This method toggles the visibility of the hint box. It is called when the user clicks on the hint box button.

checkForNumb(_event: KeyboardEvent, value: any): This method is responsible for handling input validation for number-type questions. It checks if the input character is valid (a digit, the space character, or the character with the charCode of 66) and prevents the default action for invalid inputs.

sendDataToParent(data: any): This method sends the user's response data to the parent component using the sendData EventEmitter. It is called when the user enters their response in the input box.

showAnswerToUser(): This method shows the correct answer to the user when the "Show Answer" button is clicked. It sets the showAnswer property to true and emits the showAnswerClicked event.

onEnter(event: any): This method handles the "Enter" key press event and calls showAnswerToUser() when the "Enter" key is pressed.

handleKeyboardAccessibility(): This method sets the tabindex attribute to -1 for certain elements to handle keyboard accessibility. It is called during the ngAfterViewInit() hook.

## Accessibility
The component ensures keyboard accessibility by setting the appropriate tabindex attribute for certain elements. This allows users to navigate and interact with the component using the keyboard only.