## 13. Sensory Characteristics and Contrast 

### Use of Color

#### Identify Content

Identify content that relies on color to convey meaning, such as indicate an action, prompt a response, or distinguish a visual element.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 13.A.

#### Check 1.4.1-color-meaning 

| Test Name           | Test ID | Test Condition                                                                                                                                                                                   |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.4.1-color-meaning | 13.A    | <span id="OLE_LINK81" class="anchor"></span>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if no content relies on color to convey meaning.

##### How to Test:

1.  Determine whether color is the only method used to convey information (e.g., review the onscreen text for a full description and/or look for other visual cues).

##### Evaluate Results:

If the following is **TRUE**, then the content **PASSES**:

1.  When color is used to convey information, indicate an action, prompt a response or distinguish a visual element, another visual, onscreen method is used to convey the information which does not use color.

##### Note: 

-   Alternate text that appears on mouse-over of a visual element is not considered to be “onscreen text.”

-   An error indicator cannot use color alone as an indicator.

-   It is considered a browser setting if a visited link changes color, and this is not failed for 13.A.

### Use of Sensory Characteristics

#### Identify Content

Identify instructions for understanding and operating content that use sensory information to convey information, e.g., references to shape, size, visual location, orientation, or sound.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 13.B.

#### Check 1.3.3-sensory-info 

| Test Name          | Test ID | Test Condition                                                                                                                                                                                                                      |
|--------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.3.3-sensory-info | 13.B    | <span id="OLE_LINK83" class="anchor"></span>Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page’s instructions do not rely on sensory information.

##### How to Test:

1.  Determine if the instructions using sensory characteristics provide details that allow content to be located, identified, understood, and operated without any knowledge of its shape, size, orientation, or relative position.

2.  Check for any auditory cues that are provided as instructions for understanding and operating content.

    1.  Ensure sound is not muted while testing.

    2.  Determine whether other visual and/or textual cues are also provided.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  When instructions use shape, size, location, orientation, or sound to convey meaning, another method that does not rely on sensory characteristics is provided.

###### Note: 

-   Part of testing 13.A for 1.4.1-color-meaning is to ensure color alone is not used to convey information. This includes if color alone is used to provide instructions or operating procedures. Neither can other sensory characteristics be used alone to provide instructions or operating procedures. The use of color can be used in combination with shape, size, visual location, orientation, or sound to meet this requirement. If instructions or operating procedures rely solely on:

    -   color, then the content **FAILS** for 13.A for 1.4.1-color-meaning.

    -   other sensory information (such as shape, size, visual location, orientation, or sound), then the content **FAILS** for 13.B for 1.3.3-sensory-info.

### Color Contrast

#### Identify Content

Identify ALL text AND images of text.

**EXCLUDE** text that is:

-   In logotypes: logo or brand name

-   For inactive (disabled) user interface components

-   For purely decoration purposes and not meaningful, i.e., having no functionality

-   Contained within a picture that contains significant other visual content

-   Changed to indicate it is a “visited” link

**Note:**

-   Some text may not initially be visible on the page, including text that becomes visible on mouseover or when an element receives focus. Nevertheless, the text must still conform to the color contrast requirement, wherever it occurs.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 13.C.

#### Check 1.4.3-contrast 

| Test Name      | Test ID | Test Condition                                                                                                           |
|----------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| 1.4.3-contrast | 13.C    | <span id="OLE_LINK85" class="anchor"></span>The visual presentation of text and images of text have sufficient contrast. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page has no visible text or images of text.

##### How to Test:

1.  Launch ANDI: color contrast.

2.  Review any “Contrast Alerts” in ANDI’s “Accessibility Alerts” section to identify any text that fails to meet the minimum contrast ratio.

3.  In ANDI’s “Accessibility Alerts” section, identify any “Manual Contrast Tests Needed.”

    1.  If the text is not selectable or appears on a background image, determine the contrast using the *Colour Contrast Analyser*.

    2.  Open the *Colour Contrast Analyser* tool, select the Foreground color-dropper button, and click a pixel in the text font. If the text color is varied in appearance or color, choose a pixel that provides the least contrast.

    3.  Select the Background color-dropper button, and click a pixel in the background close to the text. If the background is varied in appearance or color, choose a pixel that provides the least contrast.

    4.  Identify the Contrast Ratio

    5.  Compare the contrast ratio against the minimum required contrast ratio identified in the ANDI Contrast Ratio output.

4.  If the page contains an image of text alone, or an image with text and no other significant content, test the image of the text with the CCA to determine the contrast ratio between the foreground (text) and background.
    **Note:** This is for instances where it is impossible for the ANDI: color contrast module to detect the presence of the text.

    1.  Select the graphics/images module in ANDI.

    2.  Use the ANDI arrow buttons to identify any images of text or images with text and no other significant content.

    3.  Open the CCA and test the contrast of the text in the image.

        1.  Select the Foreground color-dropper button and click a pixel in the text font. If the text color is varied in appearance or color, choose a pixel that provides the least contrast.

        2.  Select the Background color-dropper button and click a pixel in the background close to the text. If the background is varied in appearance or color, choose a pixel that provides the least contrast.

        3.  Determine whether the resulting contrast ratio is at least 4.5:1.

##### Evaluate Results:

If any of the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The contrast between the text and its background is equal to or greater than the minimum required contrast ratio identified in the ANDI Contrast Ratio output, OR

2.  If the text is an image of text, the contrast between the image of text and its background is equal to or greater than 4.5:1 as identified using the Colour Contrast Analyser.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                           | Baseline Requirements                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [WCAG SC 1.4.1 Use of Color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html): Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.<br><br>[WCAG SC 1.3.3 Sensory Characteristics](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html): Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.<br><br>[WCAG SC 1.4.3 Contrast (minimum)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:<ul><li>Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;</li><li>Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</li><li>Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.</li></ul>  | [7. Sensory Characteristics](https://section508coordinators.github.io/ICTTestingBaseline/07Sensory.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 12. Page Titles, Frames, and iFrames](titles.md) | [Next -- 14. Tables](tables.md)
