Appendix C: Test Process Quick Reference
========================================

Quick Reference with Test Conditions
------------------------------------

| Test ID | Test Name                                 | Test Condition                                                                                                                                                                                                                                       |
|---------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.A     | alt-version-conformant                    | An alternate version passes all applicable Test Conditions in this test process.                                                                                                                                                                     |
| 1.B     | alt-version-equivalent                    | The accessible version is up to date with the same information and functionality.                                                                                                                                                                    |
| 1.C     | alt-version-access                        | The mechanism to reach the accessible equivalent version from the non-conforming page is accessible.                                                                                                                                                 |
| 1.D     | alt-version-nc-access                     | The non-conforming version(s) can only be reached from conforming content.                                                                                                                                                                           |
| 1.E     | non-interference                          | Content in the non-conforming version(s) does not interfere with the user’s ability to access or use the conforming content.                                                                                                                         |
| 2.A     | 1.4.2-audio-control                       | The user can pause, stop, or control the volume of audio content that plays automatically.                                                                                                                                                           |
| 2.B     | 2.2.2-blinking-moving-scrolling           | The user can pause, stop, or hide moving, blinking, or scrolling content.                                                                                                                                                                            |
| 2.C     | 2.2.2-auto-updating                       | The user can pause, stop, hide, or control the frequency of automatically updating content.                                                                                                                                                          |
| 2.D     | 4.1.2-change-notify-auto                  | The page provides notification of each automatic update/change in content.                                                                                                                                                                           |
| 3.A     | 2.3.1-flashing                            | If NO flashing content is found, then this Test Condition DOES NOT APPLY (DNA). If flashing content IS found, then this test should be recorded as NOT TESTED.                                                                                       |
| 4.A     | 2.1.1-keyboard-access                     | All functionality can be accessed and executed using only the keyboard.                                                                                                                                                                              |
| 4.B     | 2.1.1-no-keystroke-timing                 | Individual keystrokes do not require specific timings for activation of functionality.                                                                                                                                                               |
| 4.C     | 2.1.2-no-keyboard-trap                    | There is no keyboard trap.                                                                                                                                                                                                                           |
| 4.D     | 2.4.7-focus-visible                       | A visible indication of focus is provided when focus is on the interface component.                                                                                                                                                                  |
| 4.E     | 3.2.1-on-focus                            | When an interface component receives focus, it does not initiate an unexpected change of context.                                                                                                                                                    |
| 4.F     | 2.4.3-focus-order-meaning                 | The focus order preserves the meaning and operability of the web page.                                                                                                                                                                               |
| 4.G     | 2.4.3-focus-order-reveal                  | Focus is moved to revealed content.                                                                                                                                                                                                                  |
| 4.H     | 2.4.3-focus-order-return                  | Focus is returned to the logical sequence.                                                                                                                                                                                                           |
| 5.A     | 3.3.2-label-provided                      | Labels and instructions are provided for each form input.                                                                                                                                                                                            |
| 5.B     | 2.4.6-label-descriptive                   | Each form label is sufficiently descriptive.                                                                                                                                                                                                         |
| 5.C     | 1.3.1-programmatic-label                  | The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical). |
| 5.D     | 3.2.2-on-input                            | Changing field values/selections (e.g., entering data in a text field, changing a radio button selection) does NOT initiate an unexpected change of context.                                                                                         |
| 5.E     | 4.1.2-change-notify-form                  | The page provides notification of each form-related change in content.                                                                                                                                                                               |
| 5.F     | 3.3.1-error-identification                | The item in error is identified and the error is described to the user in text.                                                                                                                                                                      |
| 5.G     | 3.3.3-error-suggestion                    | Additional guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields.                                                                                                                                  |
| 5.H     | 3.3.4-error-prevention                    | The web page allows the user to check, reverse, and/or confirm submission.                                                                                                                                                                           |
| 6.A     | 2.4.4-link-purpose                        | The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context.                                                  |
| 6.B     | 4.1.2-change-notify-links                 | The page provides notification of each change in content that is the result of interaction with a link or button.                                                                                                                                    |
| 7.A     | 1.1.1-meaningful-image-name               | The accessible name and accessible description for a meaningful image provides an equivalent description of the image.                                                                                                                               |
| 7.B     | 1.1.1-decorative-image                    | There is no accessible name and accessible description for a decorative image.                                                                                                                                                                       |
| 7.C     | 1.1.1- decorative-background-image        | The background image is not the only means used to convey important information.                                                                                                                                                                     |
| 7.D     | 1.1.1-captcha-alternative                 | Alternative forms of CAPTCHA are provided.                                                                                                                                                                                                           |
| 7.E     | 1.4.5-image-of-text                       | The image of text cannot be replaced by text or is customizable.                                                                                                                                                                                     |
| 8.A     | 2.2.1-timing-adjustable                   | The user can turn off, adjust, or extend the time limit.                                                                                                                                                                                             |
| 9.A     | 2.4.1-bypass-function                     | A keyboard-accessible method is provided to bypass repetitive content.                                                                                                                                                                               |
| 9.B     | 3.2.3-consistent- navigation              | Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears.                                                                                                              |
| 9.C     | 3.2.4-consistent-identification           | The accessible name and description is consistent for components that perform the same function.                                                                                                                                                     |
| 10.A    | 2.4.6-heading-purpose                     | Each heading describes the topic or purpose of its content.                                                                                                                                                                                          |
| 10.B    | 1.3.1-heading-determinable                | Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable.                                                                                                                             |
| 10.C    | 1.3.1-heading-level                       | Programmatic heading levels logically match the visual heading presentation within the heading structure.                                                                                                                                            |
| 10.D    | 1.3.1-list-type                           | All visually apparent lists are programmatically identified according to their type.                                                                                                                                                                 |
| 11.A    | 3.1.1-page-language-defined               | The default human language of each web page can be programmatically determined.                                                                                                                                                                      |
| 11.B    | 3.1.2-part-language-defined               | The human language for any content segment that differs from the default human language of the page can be programmatically determined.                                                                                                              |
| 12.A    | 2.4.2-page-title-defined                  | A &lt;title&gt; element is defined for the web page.                                                                                                                                                                                                 |
| 12.B    | 2.4.2-page-title-purpose                  | The &lt;title&gt; element identifies the contents or purpose of the web page.                                                                                                                                                                        |
| 12.C    | 4.1.2-frame-title                         | Each &lt;frame&gt; has a title attribute that describes its content.                                                                                                                                                                                 |
| 12.D    | 4.1.2-iframe-name                         | The combination of accessible name and description for each &lt;iframe&gt; describes its content.                                                                                                                                                    |
| 13.A    | 1.4.1-color-meaning                       | Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.                                                                                                 |
| 13.B    | 1.3.3-sensory-info                        | Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound.                                                              |
| 13.C    | 1.4.3-contrast                            | The visual presentation of text and images of text have sufficient contrast.                                                                                                                                                                         |
| 14.A    | 1.3.1-table-identification                | Each data table has programmatic markup to identify it as a table.                                                                                                                                                                                   |
| 14.B    | 1.3.1-cell-header-association             | All data cells are programmatically associated with relevant headers.                                                                                                                                                                                |
| 14.C    | 1.3.1-layout-table-structure              | The layout table DOES NOT designate the layout table using ARIA role="table" AND DOES NOT include table header structure and relationship elements and/or associated attributes.                                                                     |
| 15.A    | 1.3.1-meaningful-content-css-before-after | For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way.                                                                                                                |
| 15.B    | 1.3.2-content-order-meaning-CSS-position  | The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning.                                                                                                           |
| 16.A    | 1.2.1-audio-transcript-text               | A text-based alternative is provided for audio-only content that provides an accurate and complete representation of the audio-only content.                                                                                                         |
| 16.B    | 1.2.1-video- alternative-equivalent       | The video-only content information is also available through an equivalent text or audio alternative.                                                                                                                                                |
| 17.A    | 1.2.2-captions-equivalent                 | The multimedia provides accurate captions for the audio content.                                                                                                                                                                                     |
| 17.B    | 1.2.5-audio-description-equivalent        | The multimedia provides an equivalent soundtrack (combination of narration and audio descriptions) for the video content.                                                                                                                            |
| 17.C    | 1.2.4-captions-live-equivalent            | The live multimedia provides accurate captions for the audio content.                                                                                                                                                                                |
| 17.D    | 503.4-caption-description-controls        | The media player provides user controls for closed captions and audio descriptions.                                                                                                                                                                  |
| 17.E    | 503.4.1-caption-control                   | User controls for captions are provided at the same menu level as the user controls for volume or program selection.                                                                                                                                 |
| 17.F    | 503.4.2-description-control               | User controls for audio descriptions are provided at the same menu level as the user controls for volume or program selection.                                                                                                                       |
| 18.A    | 1.4.4-resize-text                         | There is a mechanism to resize, scale, or zoom in on the text to at least 200% of its original size without loss of content or functionality.                                                                                                        |
| 19.A    | 2.4.5-multiple-ways                       | There are two or more ways to locate a web page within a set of web pages.                                                                                                                                                                           |
| 20.A    | 4.1.1-parsing                             | This test should be recorded as NOT TESTED.                                                                                                                                                                                                          |

One-Page Quick Reference – Test Names Only
------------------------------------------

| Test ID | Test Name                                 |
|---------|-------------------------------------------|
| 1.A     | alt-version-conformant                    |
| 1.B     | alt-version-equivalent                    |
| 1.C     | alt-version-access                        |
| 1.D     | alt-version-nc-access                     |
| 1.E     | non-interference                          |
| 2.A     | 1.4.2-audio-control                       |
| 2.B     | 2.2.2-blinking-moving-scrolling           |
| 2.C     | 2.2.2-auto-updating                       |
| 2.D     | 4.1.2-change-notify-auto                  |
| 3.A     | 2.3.1-flashing                            |
| 4.A     | 2.1.1-keyboard-access                     |
| 4.B     | 2.1.1-no-keystroke-timing                 |
| 4.C     | 2.1.2-no-keyboard-trap                    |
| 4.D     | 2.4.7-focus-visible                       |
| 4.E     | 3.2.1-on-focus                            |
| 4.F     | 2.4.3-focus-order-meaning                 |
| 4.G     | 2.4.3-focus-order-reveal                  |
| 4.H     | 2.4.3-focus-order-return                  |
| 5.A     | 3.3.2-label-provided                      |
| 5.B     | 2.4.6-label-descriptive                   |
| 5.C     | 1.3.1-programmatic-label                  |
| 5.D     | 3.2.2-on-input                            |
| 5.E     | 4.1.2-change-notify-form                  |
| 5.F     | 3.3.1-error-identification                |
| 5.G     | 3.3.3-error-suggestion                    |
| 5.H     | 3.3.4-error-prevention                    |
| 6.A     | 2.4.4-link-purpose                        |
| 6.B     | 4.1.2-change-notify-links                 |
| 7.A     | 1.1.1-meaningful-image-name               |
| 7.B     | 1.1.1-decorative-image                    |
| 7.C     | 1.1.1- decorative-background-image        |
| 7.D     | 1.1.1-captcha-alternative                 |
| 7.E     | 1.4.5-image-of-text                       |
| 8.A     | 2.2.1-timing-adjustable                   |
| 9.A     | 2.4.1-bypass-function                     |
| 9.B     | 3.2.3-consistent- navigation              |
| 9.C     | 3.2.4-consistent-identification           |
| 10.A    | 2.4.6-heading-purpose                     |
| 10.B    | 1.3.1-heading-determinable                |
| 10.C    | 1.3.1-heading-level                       |
| 10.D    | 1.3.1-list-type                           |
| 11.A    | 3.1.1-page-language-defined               |
| 11.B    | 3.1.2-part-language-defined               |
| 12.A    | 2.4.2-page-title-defined                  |
| 12.B    | 2.4.2-page-title-purpose                  |
| 12.C    | 4.1.2-frame-title                         |
| 12.D    | 4.1.2-iframe-name                         |
| 13.A    | 1.4.1-color-meaning                       |
| 13.B    | 1.3.3-sensory-info                        |
| 13.C    | 1.4.3-contrast                            |
| 14.A    | 1.3.1-table-identification                |
| 14.B    | 1.3.1-cell-header-association             |
| 14.C    | 1.3.1-layout-table-structure              |
| 15.A    | 1.3.1-meaningful-content-css-before-after |
| 15.B    | 1.3.2-content-order-meaning-CSS-position  |
| 16.A    | 1.2.1-audio-transcript-text               |
| 16.B    | 1.2.1-video- alternative-equivalent       |
| 17.A    | 1.2.2-captions-equivalent                 |
| 17.B    | 1.2.5-audio-description-equivalent        |
| 17.C    | 1.2.4-captions-live-equivalent            |
| 17.D    | 503.4-caption-description-controls        |
| 17.E    | 503.4.1-caption-control                   |
| 17.F    | 503.4.2-description-control               |
| 18.A    | 1.4.4-resize-text                         |
| 19.A    | 2.4.5-multiple-ways                       |
| 20.A    | 4.1.1-parsing                             |
