## 9. Repetitive Content

### Repetitive Content – Bypass 

#### Identify Content

Identify block(s) of content that are repeated on other pages within the site.

-   Blocks of content that are repeated on other pages may include navigation links, page headers, tabs, and banners.

-   Blocks of content do not have to be exactly the same to be considered repetitive; blocks of content could be considered to repeat if they contain the same type of information and/or serve the same purpose.

**EXCLUDE** small sections, such as repeated individual words, phrases, or single links. They are not considered repetitive blocks of content.

**Note:**

-   Most web browsers provide keyboard shortcuts to move the user focus to the top of the page or browser; providing a "method to bypass a set of navigation links located at the bottom of a web page may be unnecessary.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 9.A

#### Check 2.4.1-bypass-function 

| Test Name             | Test ID | Test Condition                                                                                                     |
|-----------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| 2.4.1-bypass-function | 9.A     | <span id="OLE_LINK58" class="anchor"></span>A keyboard-accessible method is provided to bypass repetitive content. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** to a web page that does not contain blocks of content that are repeated on other web pages.

##### How to Test:

1.  Starting at the top of the page, use standard keyboard commands to navigate forward to repetitive blocks of content. **Note:** Some bypass functions may not be visible until they receive focus.

2.  Launch ANDI: focusable elements to check for skip links, hide options, collapse menu and other elements with similar bypass functionality.

    1.  **Note**: ANDI’s “tab order” feature under the focusable elements module may help evaluate the order in which bypass methods occur relative to other content.

    2.  Alternatively, launch ANDI: links/buttons and select the “view links list” button.

3.  Determine whether a keyboard-accessible method was provided to bypass repetitive content (e.g. skip links, hotkeys, scripted elements, etc. Frames may work as a bypass method in some browsers but not others.).

4.  Use standard keyboard commands to activate the bypass function.

    1.  Multiple blocks of repeated content may require multiple methods to bypass the blocks; it may not be possible to bypass all blocks of repeated content with a single method.

    2.  Moving focus past blocks of repeated content may not always be visibly evident if there are no focusable elements directly after the bypassed block.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  There is a keyboard-accessible method provided to bypass repetitive content, AND

2.  When activated, the method works, and the block of content is bypassed.

###### Note: 

-   If there is no interactive component to receive the shift of focus, it may not be evident via visual indication of focus that a focus shift occurred. Reducing the browser height may make a focus shift more obvious.

-   The bypass function(s) must not skip over content that is not repetitive.

### Repetitive Content – Navigation

#### Identify Content

Identify all navigational elements that are repeated on multiple pages within the website.

**Note:** Navigational elements are any components that provide a user the ability to locate specific information or functionality across the website. These can be static or interactive elements, and groupings of components can also meet this definition.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 9.B

#### Check 3.2.3-consistent- navigation

| Test Name                    | Test ID | Test Condition                                                                                                                          |
|------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 3.2.3-consistent- navigation | 9.B     | Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** to a web page that does not contain components that are repeated on other web pages.

##### How to Test:

1.  Review multiple web pages of the web site to identify navigational components that are repeated on multiple pages. Do not initiate changes to the content.

2.  Review the order of the navigational elements and compare it to the order on the other pages where they appear

    1.  **Note**: ANDI’s “tab order” feature under the focusable elements module may help evaluate the focus order of interactive interface components. ANDI’s “reading order” feature under the structure module may also help evaluate the content order of both focusable and non-focusable components.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  Each repeated component occurs in the same relative order with regard to other repeated components on each web page where it appears.

###### Note:

-   *Same relative order* is defined as same position relative to other items. Items are considered to be in the same relative order even if other items are inserted or removed from the original order. For example, expanding navigation menus may insert an additional level of detail or a secondary navigation section may be inserted into the reading order.

### Repetitive Content – Identification

#### Identify Content

Identify components that have the same functionality within a set of web pages.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 9.C.

**Note**: This test does not apply to components that only appear within the page and do not appear on other pages.

#### Check 3.2.4-consistent-identification 

| Test Name                       | Test ID | Test Condition                                                                                                                               |
|---------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 3.2.4-consistent-identification | 9.C     | <span id="OLE_LINK61" class="anchor"></span>The accessible name and description is consistent for components that perform the same function. |

##### Applicability:

This Test Condition only applies to components that have the same functionality within a set of web pages.

##### How to Test:

1.  Launch ANDI: focusable elements.

2.  Examine the ANDI Output for each identified element.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  Components with identical functionality are identified consistently.

###### Note:

-   Consistent text alternatives for interface elements that perform the same function are not always truly “identical.” This is acceptable if they follow a consistent format. For instance, in the use of a graphical arrow at the bottom of a web page that links to the next web page, the text alternative may be: “Go to page 4.” However, the same arrow image on the next page should then state "Go to page 5."

-   A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the web page. A check mark icon button may function as “approve”, “mark completed”, or “include”, to name a few, depending on the situation. Using “check mark” as the text alternative across all web pages does not help users understand the function of the button. Different text alternatives can be used when the same non-text content serves multiple functions. ([Understanding SC 3.2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html))

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                  | Baseline Requirements                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [WCAG SC 2.4.1 Bypass Blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html): A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.<br><br>[WCAG SC 3.2.3 Consistent Navigation](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html): Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.<br><br>[WCAG 3.2.4 Consistent Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html): Components that have the same functionality within a set of Web pages are identified consistently.  | [4. Repetitive Content](https://section508coordinators.github.io/ICTTestingBaseline/04RepetitiveContent.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 8. Adjustable Time Limits](timelimits.md) | [Next -- 10. Content Structure](structure.md)
