## 12. Page Titles, Frames, and iFrames

### Page Titles

#### Identify Content

All web pages.

Test Conditions 12.A and 12.B always apply.

#### Check 2.4.2-page-title-defined 

| Test Name                | Test ID | Test Condition                                                                                   |
|--------------------------|---------|--------------------------------------------------------------------------------------------------|
| 2.4.2-page-title-defined | 12.A    | <span id="OLE_LINK74" class="anchor"></span>A &lt;title&gt; element is defined for the web page. |

##### Applicability:

This Test Condition always applies – you may NOT evaluate the condition as **DOES NOT APPLY (DNA)**.

##### How to Test:

1.  Launch ANDI: structures. Review the alerts in ANDI’s “Accessibility Alerts” section to determine whether ANDI displays any of the following Invalid HTML Alerts:

    1.  “Page has no &lt;title&gt;”

    2.  “Page &lt;title&gt; cannot be empty”

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  A Page Title is defined for the web page.

#### Check 2.4.2-page-title-purpose

| Test Name                | Test ID | Test Condition                                                                |
|--------------------------|---------|-------------------------------------------------------------------------------|
| 2.4.2-page-title-purpose | 12.B    | The &lt;title&gt; element identifies the contents or purpose of the web page. |

##### Applicability:

This Test Condition always applies – you may NOT evaluate the condition as **DOES NOT APPLY (DNA)**.

##### How to Test:

1.  Launch ANDI: structures, then select “more details”, then "page title."

    1.  A modal dialog box will appear with the identified page title listed.

2.  Evaluate the purpose and content of the web page.

3.  Determine whether the Page Title is a meaningful representation or indication of page content.

    1.  If the web page is part of a set of web pages, determine whether the Page Title is sufficient to distinguish the web page from other pages.

    2.  For documents or web applications, the name of the document or web application would be sufficient to describe the purpose of the page.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The Page Title accurately identifies the contents or purpose of the web page, AND

2.  If the web page is part of a set of web pages, the Page Title accurately distinguishes the web page from other pages in the web site.

###### Note: 

-   A web application is an application that runs in a web browser (such as webmail) and may not have a URL that changes as content on the web page changes.

### Frames

#### Identify Content

Use ANDI to identify all Frames.

1.  Launch ANDI. If a Frame is used, ANDI will provide a notification that Frames have been detected.

    1.  If there are no Frames, ANDI will provide no notification.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 12.C.

#### Check 4.1.2-frame-title 

| Test Name         | Test ID | Test Condition                                                                                                   |
|-------------------|---------|------------------------------------------------------------------------------------------------------------------|
| 4.1.2-frame-title | 12.C    | <span id="OLE_LINK77" class="anchor"></span>Each &lt;frame&gt; has a title attribute that describes its content. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if no Frames are identified.

##### How to Test:

1.  Launch ANDI. If a Frame is used, ANDI will provide a notification that Frames have been detected. Select ‘Cancel’ to test an individual frame.

2.  ANDI will provide a list of each Frame, and if available, the associated title attribute.

<!-- -->

1.  If there is no title attribute, ANDI will reveal an “alert”.

<!-- -->

1.  Select each link to access each frame. Review the frame to understand its content. Use the browser’s Back button to return to the page being tested and launch ANDI again.

2.  In ANDI, review each frame’s corresponding title attribute for a meaningful description of content.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  All frames have a title attribute that describes its content.

###### Note:

-   In HTML5 the &lt;frame&gt; element is marked as obsolete. While the &lt;frame&gt; element has been deprecated in HTML5, testers may still encounter web pages and/or web applications with code that, while outdated, can and should still be accessible.

-   Frame content must be tested for conformance with all other applicable tests (12.A and 12.B do not apply to frame content).

    -   To open each Frame to test: Launch ANDI and select “Cancel”. A list of Frames will show; select the link to test an individual frame.

### iFrames

#### Identify Content

Use ANDI to identify all iframes in the tab order.

1.  Launch ANDI: iframes to navigate to and highlight iframes on the page. If there is not an option for the iframes module, there are no iframes on the web page.

2.  Use the “Next Element” button to find all iframes that have the following listed in the Accessibility Component:

-   a tabindex value that is not negative (e.g. 0, 1) meaning the iframe is in the tab order (a negative tabindex such as -1 means that the iframe is not in the tab order)

    OR

-   no tabindex shown.

    **Test only these &lt;iframes&gt;. **

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 12.D.

#### Check 4.1.2-iframe-name 

| Test Name         | Test ID | Test Condition                                                                                                                                |
|-------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 4.1.2-iframe-name | 12.D    | <span id="OLE_LINK79" class="anchor"></span>The combination of accessible name and description for each &lt;iframe&gt; describes its content. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if no iframes are identified or if none of the iframes are in the tab order (i.e., the tabindex is a negative number).

##### How to Test:

1.  Launch ANDI: iframes

2.  Review the ANDI Output for each iframe that has a non-negative tabindex value to determine whether the accessible name and description accurately describe the content of each &lt;iframe&gt;.

##### Evaluate Results:

If the following is **TRUE**, then the content **PASSES**:

1.  The ANDI Output for each &lt;iframe&gt; in the tab order sufficiently describes its content.

##### Note:

-   All iframe content must be tested for conformance with all other applicable tests (12.A and 12.B do not apply to iframe content). To open each iframe to test: Within ANDI: iframe, select the button to “test in new tab”

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Baseline Requirements                                                                               |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [*WCAG SC 2.4.2 Page Titled*](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html): Web pages have titles that describe topic or purpose.  | [11. Page Titles](https://section508coordinators.github.io/ICTTestingBaseline/11PageTitles.html)    |
| [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. | [19. Frames and iFrames](https://section508coordinators.github.io/ICTTestingBaseline/19Frames.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 11. Language](language.md) | [Next -- 13. Sensory Characteristics and Contrast](sensory.md)
