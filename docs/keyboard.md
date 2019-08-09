## 4. Keyboard Access and Focus

### Keyboard Access

#### Identify Content

1.  Use the mouse or other pointing device to determine available functions provided by interactive elements (including drop-down menus, form fields, revealing/hiding content, tooltips, AND all interactive interface components).

2.  Use the mouse to identify instances where interactive elements provide information that is essential to understanding or operating the page content.

**Note**:

-   WCAG SC 2.1.1 requirement does not apply to functions that require input that depends on the path of the user’s movement and not just the endpoints. For this test process, the tester is not tasked with identifying and omitting these types of functions. The tester should include all functions that meet the Identify Content description. A Section 508 exception may be applied for certain functions, however this is outside the scope the testing process.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 4.A to 4.H.

#### Check 2.1.1-keyboard-access 

| Test Name             | Test ID | Test Condition                                                                                                      |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------------------|
| 2.1.1-keyboard-access | 4.A     | <span id="OLE_LINK20" class="anchor"></span>All functionality can be accessed and executed using only the keyboard. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no user activated functionality.

##### How to Test:

1.  Use a mouse to identify the functionality and essential information provided by interactive elements.

    1.  The “title attributes” feature in ANDI: focusable elements can help identify any essential information contained in title attributes.

2.  Use the keyboard to operate identified functionality and/or access the essential information: access (e.g., tab to) the element and execute (e.g. press Enter with focus on the element).

    1.  For interactive elements with title attributes, place keyboard focus on the element. If the tooltip does not appear within two seconds, keyboard focus will not reveal the title information.

3.  If an interactive element does not have keyboard access, determine if there is another keyboard accessible method available on the page which provides the same functionality, e.g. one of two print methods provided is keyboard accessible, etc. \[See Conforming Alternate Version for further details.\]

4.  If an interactive element does not provide access to essential information via keyboard interaction, determine whether the information is available elsewhere on the page (e.g., as text).

**Note:** Not all browsers visually display the title attribute as a tooltip when an element has keyboard focus.

##### Evaluate Results:

If BOTH of the following are **TRUE**, the content **PASSES**:

1.  All functionality can be accessed and executed using the keyboard, AND

2.  All essential information can be accessed via keyboard interaction OR the information is available elsewhere on the page.

###### Note: 

-   Any changes to functionality that occur automatically or as a result of interaction with the page should be included in this test.

-   Information is considered essential or required when the information is necessary to execute an action or understand information and relationships.

-   Title/tooltip information that is not essential does not require keyboard access.

#### Check 2.1.1-no-keystroke-timing 

| Test Name                 | Test ID | Test Condition                                                                         |
|---------------------------|---------|----------------------------------------------------------------------------------------|
| 2.1.1-no-keystroke-timing | 4.B     | Individual keystrokes do not require specific timings for activation of functionality. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no user activated functionality.

##### How to Test:

1.  Continue from Test 4.A.

2.  Determine whether there are any instances where the timing of the keystrokes is required to activate the element, e.g. the speed at which a password keystrokes are typed is part of the password authentication.

3.  If a there is a timing dependent functionality, determine if there is another keyboard accessible method available on the page, which does not require specific timing.

##### Evaluate Results: 

If the following is **TRUE**, the content **PASSES**:

1.  A keyboard method is provided for functionality to be activated without requiring users to perform specific timings for activation.

#### Check 2.1.2-no-keyboard-trap 

| Test Name              | Test ID | Test Condition             |
|------------------------|---------|----------------------------|
| 2.1.2-no-keyboard-trap | 4.C     | There is no keyboard trap. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no components that can receive keyboard focus.

##### How to Test:

1.  Tab through the entire page of keyboard focusable elements.

2.  Determine whether there are any instances where keyboard navigation becomes trapped:

<!-- -->

1.  Keyboard users are unable to move away from an element, e.g. using a TAB or arrow key

2.  Keyboard access is restricted to a small section of the page with no way to navigate out of the “loop” to the rest of the page.

<!-- -->

1.  If a keyboard trap is found:

    1.  Inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys) to escape/avoid the keyboard trap.

    2.  Determine whether the alternate command(s) work.

##### Evaluate Results: 

If ALL of the following are **TRUE**, the content **PASSES**:

1.  Keyboard focus can be moved away from an element using either:

    1.  Standard navigation keys

    2.  Custom keystrokes (which are documented and available to users in the application).

> AND

1.  Keyboard focus can be moved away from each section of the page containing elements (and are not trapped in a “loop”, preventing access to other elements on the page) by using either:

    1.  Standard navigation keys

    2.  Custom keystrokes (which are documented and available to users in the application)

###### Note:

-   In case of a keyboard trap, continue to test interactive elements after the trap by using the mouse to bypass the trap or refreshing the page and using the keyboard to navigate backwards through the page.

### Focus

#### Identify Content

Use the keyboard to navigate to keyboard-accessible interface components (including drop-down menus, form fields, revealing/hiding content, tooltips, AND all interactive interface components).

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 4.A to 4.H.

#### Check 2.4.7-focus-visible 

| Test Name           | Test ID | Test Condition                                                                                                                  |
|---------------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| 2.4.7-focus-visible | 4.D     | <span id="OLE_LINK24" class="anchor"></span>A visible indication of focus is provided when focus is on the interface component. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA) i**f the page has no elements that can receive keyboard focus.

##### How to Test:

1.  Continue from Test 4.C.

2.  Determine whether there is a visible indication of focus on the element that has keyboard focus.

    1.  When the keyboard focus is on a frame, some browsers will display a visible focus and some may not. Where a visible focus is not available on a frame, do NOT consider this a failure of the web content.

##### Evaluate Results: 

If the following is **TRUE**, then the content **PASSES**:

1.  When each interface element receives focus, there is a visible indication of focus.

###### Note:

-   To confirm keyboard focus is on a frame when there is not visible focus: use the tab and shift + tab combination to deduce that the keyboard focus is on the frame. When on the frame, a tab forward should move focus to the first keyboard focusable element within the frame. From there, shift + tab once to move back to the frame and another shift + tab should move focus to a keyboard focusable element before the frame. Only the frame is permitted to not have a visible focus. Be certain it is the frame that does not have a visible focus and not another element.

#### Check 3.2.1-on-focus 

| Test Name      | Test ID | Test Condition                                                                                    |
|----------------|---------|---------------------------------------------------------------------------------------------------|
| 3.2.1-on-focus | 4.E     | When an interface component receives focus, it does not initiate an unexpected change of context. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no elements that can receive keyboard focus.

##### How to Test:

1.  Continue from Test 4.D.

2.  When the interface component receives focus, evaluate whether an unexpected change of context occurs, e.g., a new window is launched, or focus is moved to another interface component.

##### Evaluate Results:

If the following is **TRUE**, then the content **PASSES**:

1.  An unexpected change of context is not initiated when an interface component receives focus.

#### Check 2.4.3-focus-order-meaning 

| Test Name                 | Test ID | Test Condition                                                         |
|---------------------------|---------|------------------------------------------------------------------------|
| 2.4.3-focus-order-meaning | 4.F     | The focus order preserves the meaning and operability of the web page. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no elements that can receive keyboard focus.

##### How to Test:

1.  Use the tab key to move focus through the page.

2.  Determine if the focus order impacts the page meaning (e.g. form fields for a mailing address are presented in the expected sequence).

    1.  This is most often noticeable when focus order does not follow the logical order of operation (normally top to bottom, left to right),

    2.  For modal dialog boxes, visual focus should remain within the modal dialog box until it is closed.

    3.  It may be helpful to launch ANDI: focusable elements and select tab order.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  The focus order preserves the meaning of the page, AND

2.  The focus order preserves the operability of the page.

###### Note:

-   ANDI tab order markup may be slightly different from actual keyboard tab order in certain browsers. Always use the results from keyboard tab order.

#### Check 2.4.3-focus-order-reveal 

| Test Name                | Test ID | Test Condition                      |
|--------------------------|---------|-------------------------------------|
| 2.4.3-focus-order-reveal | 4.G     | Focus is moved to revealed content. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if no content is revealed or triggered by other elements when navigating or interacting with page content (e.g. submenu options, drop down selections).

##### How to Test:

1.  Use the keyboard to activate trigger controls that reveal hidden content (e.g., menus, dialogs, modal dialog boxes, expandable tree list).

2.  Advance the focus through the revealed content using the TAB key.

<!-- -->

1.  Visible focus may not move to revealed content that does not contain focusable elements or if the revealed content is not itself focusable.

##### Evaluate Results:

If any of following is **TRUE**, then the content **PASSES**:

1.  Keyboard focus moves directly to revealed content, OR

2.  One additional keystroke moves the focus to revealed content

###### Note:

-   For modal dialog boxes, visual focus should remain within the modal dialog box until it is closed. (This is covered by Test 4.F)

-   Revealed content does not include information that appears as part of a title attribute tooltip.

#### Check 2.4.3-focus-order-return 

| Test Name                | Test ID | Test Condition                             |
|--------------------------|---------|--------------------------------------------|
| 2.4.3-focus-order-return | 4.H     | Focus is returned to the logical sequence. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no interactive elements that reveal content.

##### How to Test:

1.  Continue from Test 4.G

2.  If possible to close/hide or dismiss the content, use the keyboard to close/hide and/or move focus out of the revealed content.

3.  Identify the element that has keyboard focus.

    1.  It may be necessary to Press the SHIFT + TAB keys or an arrow key to move focus backwards.

##### Evaluate Results:

If any of following is **TRUE**, then the content **PASSES**:

1.  Keyboard focus automatically returns to the logical sequence of focus order before the content was revealed, OR

2.  One additional keystroke or keystroke combination returns focus to the logical sequence of focus order before the content was revealed.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                 | Baseline Requirements                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [WCAG SC 2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html): All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.<br><br>[WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html): If keyboard focus can be moved to a component of the \[content\] using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.  | [1. Keyboard Access](https://section508coordinators.github.io/ICTTestingBaseline/01Keyboard.html)   |
| [WCAG SC 2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.  | [2. Focus Visible](https://section508coordinators.github.io/ICTTestingBaseline/02FocusVisible.html) |
| [WCAG SC 2.4.3 Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html): If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.<br><br>[WCAG 3.2.1 - On Focus](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html): When any component receives focus, it does not initiate a change of context.  | [3. Focus Order](https://section508coordinators.github.io/ICTTestingBaseline/03FocusOrder.html)     |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 3. Flashing](flashing.md) | [Next -- 5. Forms](forms.md)
