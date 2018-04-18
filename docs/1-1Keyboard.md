# 1. Interactive Interface Elements
Interactive elements of interfaces include navigation controls (links, buttons etc.), and editable content (text input fields, select options, etc.).

## 1.1. Keyboard Access
All functionality of the content that is available by mouse control must be keyboard accessible. Determine the functionality of visible and hidden interactive interface components (links, form fields, drop down menus, show/hide content, tree views, pop ups/light boxes, frames, iframes, etc.) available using a mouse (hover and/or click).

### Test Instructions
1. Use the keyboard to perform functions available by mouse (including drop-down menus, form fields, revealing/hiding content, tooltips, AND all interactive interface components). Check that:

| Test ID | Test Name | Description | Result |
|---------|-----------|-------------|--------|
| 1.1.A. | 2.1.1-keyboard | All functionality can be accessed and executed using only the keyboard ([SC 2.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)) | Yes/No |
| 1.1.B. | 2.1.1-no-keyboard-timing | Individual keystrokes do not require specific timings for activation ([SC 2.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)) | Yes/No |
| 1.1.C. | 2.1.2-no-trap | Focus can be moved away from the selected component ([SC 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)) (there must be NO “TRAP” that disrupts keyboard navigation). </br></br> *If a keyboard trap is found, inspect any help (contextual help, or application help) and documentation for notification of available alternate keyboard commands (e.g., non-standard keyboard controls, access keys, hotkeys). If nonstandard keyboard commands are required to navigate into our out of one or more components, check that the commands work.* | Yes/No |

**Note:** Each of the individual mouse activated controls do not require keyboard access as long as there is a keyboard accessible method to perform the same function available on the page or screen.

| Applicable 508 Standards | Applicable Baseline Requirements |
|--------------------------|----------------------------------|
| [WCAG SC 2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html) -- All Functionality of the Content is operable through a keyboard interface without requiremeng specific timings of individual keystrokes [...] | B1. Keyboard Access |
| [WCAG SC 2.1.2 WCAG SC 2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html) –- If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface; and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away | B1. Keyboard Access | 
