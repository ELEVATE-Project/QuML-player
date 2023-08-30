# Attachments Component

# Description
The AttachmentsComponent class appears to manage file attachments and related interactions. It includes state variables to track the terms and conditions dialog state and non-matched file sizes. The component responds to user interactions by toggling the dialog box and displaying alerts when file size limits are exceeded. The input property allows communication with the parent component, potentially affecting the behavior or content displayed by this component.

# Variables
nonMatchedSize: boolean: A state variable indicating whether the attached file exceeds the maximum allowed size. It tracks if the attached file's size matches the condition.

termsDialogOpen: boolean: A state variable controlling the visibility of the terms and conditions dialog box. It toggles the opening and closing of the dialog box.

nonMatchedSizeValue: string: A variable holding the message that will be displayed in the alert when a non-matched file size is detected.

# Input Property

showEvidence: string: An input property received from the parent component. It holds information related to showing evidence.

# Functions
handletermsForm(): This function handles the terms and conditions form interaction. It toggles the state of the termsDialogOpen variable, effectively opening or closing the terms and conditions dialog box.

handleNonMatchedSize(): This function handles the case when the attached file's size exceeds the maximum allowed size. It sets the nonMatchedSize flag to true, indicating that the file size doesn't match the criteria. Additionally, it sets the nonMatchedSizeValue variable to hold a message indicating the reason for the non-matched size, such as exceeding the maximum size limit.

