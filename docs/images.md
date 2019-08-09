## 7. Images

### Images

#### Identify Content

Use the ANDI: graphics/images module to find the images. Start with the first image outlined by ANDI: graphics/images.

Use the “Focus on next element” button to find all images on the page. For each image found by ANDI: graphics/images, determine if the image is meaningful or decorative.

Note: ANDI may identify images that are included as a sub-component of a focusable element. In such cases, test the image using the ANDI: focusable elements module instead.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 7.A to 7.B.

#### For Meaningful Images – Check 1.1.1-meaningful-image-name 

| Test Name                   | Test ID | Test Condition                                                                                                                                                     |
|-----------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1.1-meaningful-image-name | 7.A     | <span id="OLE_LINK45" class="anchor"></span>The accessible name and accessible description for a meaningful image provides an equivalent description of the image. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no meaningful images on the page.

##### How to Test:

1.  Review the ANDI Output for the meaningful image.

    1.  If the image is used as a CAPTCHA, ANDI Output describes the purpose of the CAPTCHA.

    2.  If the image is of meaningful text, ANDI Output contains the same text.

    3.  If the ANDI Output points to page content for the image’s description, determine whether the description is provided.

    4.  If an image is a component or child of a focusable element (e.g., a button or a link), evaluate the accessible name for the entire focusable element, not just the image. Use ANDI: focusable elements (and/or ANDI: links/buttons if applicable) to determine the accessible name for the combined component.

##### Evaluate Results: 

If the following is **TRUE**, then the content **PASSES**:

1.  The ANDI Output contains the equivalent description for the meaningful image and/or refers to a description in the page content.

###### Note:

-   Any changes to meaningful images that occur automatically or as a result of interaction with the page should be included in this test.

    -   Notification of automatic changes are tested in Test 2.D.

    -   Notification of changes as a result of interaction with other content are tested either in Test 5.E or 6.B.

-   An image that is on the page but not detected by ANDI as described in Identify Content should not be included in this test.

-   The ANDI Output is empty for an image that has role=”presentation” or aria-hidden=”true”. These cannot be set for meaningful images, which must have an equivalent description in ANDI Output.

#### For Decorative Images – Check 1.1.1-decorative-image

| Test Name              | Test ID | Test Condition                                                                                                             |
|------------------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| 1.1.1-decorative-image | 7.B     | <span id="OLE_LINK46" class="anchor"></span>There is no accessible name and accessible description for a decorative image. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no decorative images on the page.

##### How to Test:

1.  Review the ANDI Output for the decorative image.

##### Evaluate Results: 

If the following is **TRUE**, then the content **PASSES**:

1.  The ANDI Output for a decorative image is blank.

###### No**t**e:

-   An image that is on the page but not detected by ANDI as described in Identify Content should not be included in this test. Some decorative images are background images and should be tested and reported in 7.C.

-   Any changes to decorative images that occur automatically or as a result of interaction with the page should be included in this test.

-   The ANDI Output is empty for an image that has role=“presentation” or aria-hidden=“true”. These are two techniques to hide an image from assistive technology and are appropriate for decorative content.

### CSS Background Images

#### Identify content

1.  Use the ANDI: graphics/images module to find CSS background images. If the “find background” and “hide background” buttons are available, background images are on the page.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 7.C.

#### Check 1.1.1- decorative-background-image

| Test Name                          | Test ID | Test Condition                                                                                                               |
|------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------|
| 1.1.1- decorative-background-image | 7.C     | <span id="OLE_LINK48" class="anchor"></span>The background image is not the only means used to convey important information. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no background images on the page.

##### How to Test:

1.  Select the “find background” button in ANDI: graphics/images to outline all background images (in green).

2.  Find the outlined background images within the page. (ANDI will not display information for background images.)

3.  Determine whether important information provided by the background image is available without the background image.

    1.  Select the “hide background” function in ANDI: graphics/images to hide background images and help determine if the image’s information is also available on the page without the background image.

    2.  Review the sequence or positioning of the image to determine whether equivalent information is presented in the same logical order.

##### Evaluate Results:

If any of the following is **TRUE**, then the content **PASSES**:

1.  The background image is decorative, OR

2.  The meaning of the background image is also available without the background image.

###### Note:

-   Any changes to meaningful background images that occur automatically or as a result of interaction with the page should be included in this test.

### CAPTCHA Images

#### Identify content

Identify all CAPTCHA images.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 7.D.

#### Check 1.1.1-captcha-alternative

| Test Name                 | Test ID | Test Condition                                                                         |
|---------------------------|---------|----------------------------------------------------------------------------------------|
| 1.1.1-captcha-alternative | 7.D     | <span id="OLE_LINK52" class="anchor"></span>Alternative forms of CAPTCHA are provided. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no CAPTCHA images on the page.

##### How to Test:

1.  Determine whether alternative forms of CAPTCHA with output modes for different types of sensory perception are provided.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  The CAPTCHA has a format for users without vision, AND

2.  The CAPTCHA has a format for users without hearing.

### Images of Text

#### Identify content

Identify all images of text

**EXCLUDE** text that is part of a picture that contains significant other visual content such as graphs, screenshots, and diagrams, which visually convey important information more than just text.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 7.E.

#### Check 1.4.5-image-of-text

| Test Name           | Test ID | Test Condition                                                                                               |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------|
| 1.4.5-image-of-text | 7.E     | <span id="OLE_LINK54" class="anchor"></span>The image of text cannot be replaced by text or is customizable. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no images of text on the page.

##### How to Test:

1.  Determine if text can be used instead of the image of text to present the same effect and information.

    1.  Logotypes (text that is part of a logo or brand name) cannot be replaced by text.

    2.  Type samples, branding, images of specific fonts that are not widely supported are additional examples of images of text that cannot be replaced by text.

2.  Determine if the image of text can be visually customized: adjust the font, size, color and background with controls provided by the web page.

    1.  Customizing font size for an image of text also implies the ability to adjust the size without pixilation (which is typically evident when simply using the browser resize functionality to resize images).

##### Evaluate Results:

If ANY of the following is **TRUE**, then the content **PASSES**:

1.  The image of text cannot be replaced with text, OR

2.  The image of text can be visually customized.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Baseline Requirements                                                                                            |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [WCAG SC: 1.1.1. Non-Text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html): All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for \[specific\] situations listed.<br><br>[WCAG SC: 1.4.5 Images of Text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html): If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for \[specific situation listed\].  | [6. Images](https://section508coordinators.github.io/ICTTestingBaseline/06Images.html)                           |
| [WCAG SC: 1.1.1. Non-Text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html): All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for \[specific\] situations listed.                                                                                                                                                                                                                                      | [18. CSS Content and Positioning](https://section508coordinators.github.io/ICTTestingBaseline/18Stylesheet.html) |
| [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. | [5. Changing Content](https://section508coordinators.github.io/ICTTestingBaseline/05Changing.html)               |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 6. Links and Buttons](links.md) | [Next -- 8. Adjustable Time Limits](timelimits.md)
