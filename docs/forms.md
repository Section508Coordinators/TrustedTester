## 5. Forms

### Form Components

#### Identify Content

1.  Use ANDI to identify any form elements on the page, e.g., text fields, radio buttons, checkboxes, read-only fields, and multi-select lists.

2.  Find all instructions and cues (textual and graphical) that are related to form components/controls, e.g., groupings, order of completion, special conditions, qualifiers, format instructions.

**EXCLUDE** disabled input elements. These do not receive keyboard focus, cannot be selected and cannot be modified.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 5.A to 5.H.

#### Check 3.3.2-label-provided 

| Test Name            | Test ID | Test Condition                                                                                     |
|----------------------|---------|----------------------------------------------------------------------------------------------------|
| 3.3.2-label-provided | 5.A     | <span id="OLE_LINK30" class="anchor"></span>Labels or instructions are provided for form elements. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have form elements or all form elements are disabled.

##### How to Test:

1.  Determine if each form field provides labels or instructions.

##### Evaluate Results:

If the following is **TRUE**, then the content **PASSES**:

1.  Labels or instructions are provided for each form element.

###### Note: 

-   The label or instruction must be visible when the form field has focus.

-   The form label is tested for a sufficient description in 5.B (2.4.6-label-descriptive).

-   The programmatic association of the form instructions (text label) to the form field is tested in 5.C for 1.3.1-programmatic-label.

#### Check 2.4.6 –label-descriptive

| Test Name                | Test ID | Test Condition                               |
|--------------------------|---------|----------------------------------------------|
| 2.4.6 –label-descriptive | 5.B     | Each form label is sufficiently descriptive. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have form elements, if all form elements are disabled, or if no labels are provided for form elements.

##### How to Test:

1.  Review the labels and/or instructions provided for each form field.

2.  Determine whether labels and/or instructions for input fields sufficiently describe the purpose and applicable data requirements (date formats, required fields, data type, etc.).

##### Evaluate Results:

If the following is **TRUE**, then the content **PASSES**:

1.  Each form label is sufficiently clear and descriptive so users know what input data is expected.

###### Note: 

-   An error message is not sufficient to communicate the expected format to pass this test.

-   Any changes to form labels that occur automatically or as a result of interaction with the page should be included in this test.

#### Check 1.3.1-programmatic-label

| Test Name                | Test ID | Test Condition                                                                                                                                                                                                                                       |
|--------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.3.1-programmatic-label | 5.C     | The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical). |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have form elements.

##### How to Test:

1.  Launch ANDI: focusable elements (this is the default selection).

2.  Use the mouse or ANDI’s next/previous element buttons to highlight each focusable form element and review the ANDI output.

3.  Review the ANDI Output for each focusable form field.

4.  Review other programmatic associations, such as table headings or location in a hierarchical list structure, to determine whether they provide or contribute to the form field’s description, cues, or instructions.

##### Evaluate Results:

If any of the following is **TRUE**, then the content **PASSES**:

1.  The ANDI Output includes all relevant instructions and cues for the form element, including when fields are required, OR

2.  Descriptive labels and cues are provided by other programmatic associations (e.g., table column and/or row associations), OR

3.  A combination of ANDI Output AND other programmatic association includes all relevant instructions and cues.

###### Note: 

-   This test also covers the requirement for [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html).

-   Any changes to form elements that occur automatically or as a result of interaction with the page should be included in this test.

-   To evaluate labels and cues provided by other programmatic associations, it may be necessary to perform other tests, including but not limited to 14. Tables and 10. Content Structure.

-   At minimum, radio buttons and checkboxes should be programmatically associated with their question and response.

-   Form fields are not required to have programmatic associations with form section headings unless there is significant risk of confusion.

#### Check 3.2.2-on-input

| Test Name      | Test ID | Test Condition                                                                                                                                               |
|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.2.2-on-input | 5.D     | Changing field values/selections (e.g., entering data in a text field, changing a radio button selection) does NOT initiate an unexpected change of context. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have form elements.

##### How to Test:

1.  Use the keyboard to navigate to form elements, e.g. text fields, radio buttons, checkboxes, buttons.

2.  Complete the form element, e.g., select the radio button or check box, type information into the text box, select an item from the drop down.

3.  Exit (tab away from) the completed form element and determine whether there are any instances of an unexpected change of context.

4.  Changes in context include changes of: user agent, viewport, focus, content that changes the meaning of the page, e.g., a form is automatically submitted when exiting a field, a new window is launched when a radio button is selected.

    1.  **Note**: A change is not considered unexpected if:

        1.  The user is notified that a change of context is about to occur.

        2.  The control is clearly intended to initiate a change in context when activated.

##### Evaluate Results: 

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  Changing the value of a form element does not initiate an unexpected context change.

###### Note: 

-   For some types of form fields, such as text input fields, it may be necessary to move focus away from the field to trigger an input event.

#### Check 4.1.2-change-notify-form

| Test Name                | Test ID | Test Condition                                                         |
|--------------------------|---------|------------------------------------------------------------------------|
| 4.1.2-change-notify-form | 5.E     | The page provides notification of each form-related change in content. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have form elements or if the page content does not change due to form interaction.

##### How to Test:

1.  Continue from Test 5.D.

2.  If necessary, repeat the interactions that trigger changes to content of the page (instructions changed, error notification, content removed, content is added, etc.).

3.  Identify how the user is notified of the change in content.

    1.  Determine whether the form element that triggers the change has an accessible name, accessible description and/or context that provides sufficient description of the interface component’s purpose.

        1.  If content changes are the direct result of a user's action while interacting with content AND the interface component that triggers the change provides sufficient description of the change, then no additional programmatic event notification is necessary.

    2.  Identify any dialogs that alert the user to changes in content.

        1.  Determine whether the dialogs provide sufficient programmatic notification of content changes.

    3.  Identify content changes that result in focus moving to the content that has changed.

        1.  Determine whether moving the focus to the content that has changed is sufficient to notify the user of the change event (e.g., by describing the change directly in the content to which the focus moved).

    4.  Identify content changes occurring in an ARIA Live Region:

        1.  Launch ANDI: structures

        2.  Click the “live regions” link, then use the mouse to hover over any identified live region (alternatively, use ANDI’s previous/next element buttons to navigate to identified Live Regions).

        3.  Determine whether the changing content is contained within the Live Region.

##### Evaluate Results:

If any of the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The user’s action directly results in the change in content, AND the interface component that triggered the change provided sufficient description about the change event, OR

2.  The page notifies the user about a change via a keyboard-accessible dialog, OR

3.  The page moves focus to the content that has changed, AND the content that has changed provides sufficient description about the change, OR

4.  The content that has changed is contained in an ARIA Live Region.

###### Note:

-   All form elements that changed during this test are to be tested per Test ID 5.C.

-   All revealed content must be tested per Test 4.G, **2.4.3-focus-order-reveal**.

-   It may be necessary to use the mouse to determine whether state changes occur on hover or on click.

-   Depending on the component, a change of state may be triggered by various actions, such as changing values or states of other components, toggling a function, entering data in the component, mouseover, etc.

-   This list of techniques to meet SC 4.1.2 is not all-inclusive; there may be emerging techniques not explicitly spelled out that are acceptable.

### Input Error Identification and Suggestions

#### Identify Content

Identify all automatic input error detection, error notifications, error suggestions, and related instructions:

1.  Use ANDI to identify any form elements on the page.

2.  Find all instructions and cues (textual and graphical) that are related to form components/controls, e.g., groupings, order of completion, special conditions, qualifiers, format instructions.

3.  Intentionally enter values and/or make selections that violate format and/or other form instructions to reveal automatic notifications of input errors

If there is no automatic input error detection, the result for the following test ID(s) is **DOES NOT APPLY**: 5.F and 5.G.

#### Check 3.3.1-error-identification 

| Test Name                  | Test ID | Test Condition                                                                                                                      |
|----------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| 3.3.1-error-identification | 5.F     | <span id="OLE_LINK35" class="anchor"></span>The item in error is identified in text and sufficiently described to the user in text. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have automatic error detection.

##### How to Test:

1.  Intentionally violate formatting and other form instructions, e.g., leave a required form field empty, use a different date format than is required, and/or create a password that does not meet the password strength requirements.

2.  Attempt to submit the form and/or move to the next page.

3.  Determine whether the error is identified and described in text.

    1.  The form field with the error is identified in text, e.g. “Error: Password field.”

    2.  Text describes the error, e.g., in a dialog message that states “the Password you entered is incorrect.”

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The item that is in error is identified in text and sufficiently described to the user in text.

###### Note: 

-   The error message may be tested as part of 4.1.2-change-notify-forms (Test ID 5.E).

#### Check 3.3.3-error-suggestion

| Test Name              | Test ID | Test Condition                                                                                           |
|------------------------|---------|----------------------------------------------------------------------------------------------------------|
| 3.3.3-error-suggestion | 5.G     | Guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if any of the following conditions apply to the page:

-   There is no automatic input error detection.

-   Based on the type of input required, suggestions for correction cannot be provided because they are not knowable.

-   Providing information about how to correct the error would jeopardize the security or purpose of the content, e.g. details about an incorrect password.

##### How to Test:

1.  Continue from Test 5.F.

2.  Determine whether guidance provides sufficient details for how to correct the error and/or offers suggestions of corrected input.

##### Evaluate Results:

If ANY of the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  Suggestions for corrected input are provided, OR

2.  The description contains adequate information for the user to know what is required to fix the error.

### Input Error Prevention

#### Identify Content

Identify Content that

-   Submits user form entries that result in or cause legal commitments or financial transactions

-   Submits user form entries that modify or delete user-controllable data in a data storage system

-   Submits user test responses

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 5.H.

#### Check 3.3.4-error-prevention 

| Test Name              | Test ID | Test Condition                                                                                                         |
|------------------------|---------|------------------------------------------------------------------------------------------------------------------------|
| 3.3.4-error-prevention | 5.H     | <span id="OLE_LINK39" class="anchor"></span>The web page allows the user to check, reverse, and/or confirm submission. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not do any of the following upon submission:

-   Cause legal or financial obligations.

-   Modify or delete user-controlled data in data storage systems.

-   Submit test responses.

##### How to Test:

1.  Complete the required form fields with intentional errors and submit the content.

##### Evaluate Results:

If any of the following is **TRUE**, the content **PASSES**:

1.  The user can reverse the submission, OR

2.  The user is presented with an option to review, confirm, and correct information before finalizing the submission, OR

3.  The page checks data for input errors and allows the user an opportunity to correct any errors.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Baseline Requirements                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.<br><br>[WCAG SC 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html): Headings and labels describe topic or purpose.<br><br>[WCAG SC 3.2.2 On Input](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html): Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.<br><br>[WCAG SC 3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html): If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.<br><br>[WCAG SC 3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html): Labels or instructions are provided when content requires user input.<br><br>[WCAG SC 3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html): If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.<br><br>[WCAG SC 3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html): For Web pages \[or software\] that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:<ol><li>Reversible: Submissions are reversible.</li><li>Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li><li>Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li></ul>  | [10. Forms](https://section508coordinators.github.io/ICTTestingBaseline/10Forms.html)              |
| [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. | [5. Changing Content](https://section508coordinators.github.io/ICTTestingBaseline/05Changing.html) |
