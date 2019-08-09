## 15. CSS Content and Positioning

### CSS Content

#### Identify Content

Use ANDI to identify all meaningful page content inserted by CSS using ::before or ::after. Include inline styles.

1.  Launch ANDI: hidden content.

2.  Determine whether content ::before ::after is revealed as an option.

<!-- -->

1.  If there is no page content inserted using ::before or ::after, this option will not show.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 15.A.

#### Check 1.3.1-meaningful-content-css-before-after 

| Test Name                                 | Test ID | Test Condition                                                                                                                                                                    |
|-------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.3.1-meaningful-content-css-before-after | 15.A    | <span id="OLE_LINK92" class="anchor"></span>For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there is no content OR no meaningful content inserted using ::before or ::after.

##### How to Test:

1.  Launch ANDI: hidden content and select content ::before ::after to reveal all content.

    1.  Content inserted using ::before ::after will be outlined in red.

2.  Review all content inserted using ::before and :after and find all meaningful content.

    1.  If there is no meaningful content, mark 15.A **DNA**.

    2.  If meaningful content is found, continue to the next step.

3.  Review the web page and determine whether for every instance of CSS content highlighted as using ::before ::after, the information conveyed by the CSS content is available another way.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  All meaningful content inserted using ::before and ::after has equivalent information presented in another way.

### CSS Positioning

#### Identify Content

Use ANDI to identify all content positioned with CSS and inline styles.

1.  Launch ANDI, then select the Advanced Settings button; then select “linearize page” to remove CSS positioning from elements on the page.

2.  If content is positioned with CSS, the information will be displayed with blue highlighting around the elements and those elements will be placed in the page in the same order in which they appear in the page code.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 15.B.

#### Check 1.3.2-content-order-meaning-css-position 

| Test Name                                | Test ID | Test Condition                                                                                                                                                                         |
|------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.3.2-content-order-meaning-css-position | 15.B    | <span id="OLE_LINK94" class="anchor"></span>The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there is no content positioned using CSS.

##### How to Test:

1.  Review all highlighted, linearized content.

2.  Determine whether the reading order of content is still understandable after linearization. If necessary, toggle the linearization button to view the original position of the content.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The sequence and meaning of the content (in context) is understandable without CSS positioning.

###### Note:

-   ANDI: structures, and the “reading order” link can also be used to reveal the reading order prior to linearizing the content. But it will not identify which content has been positioned with CSS.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                         | Baseline Requirements                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [*WCAG SC 1.3.1 Info and Relationships*](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.<br><br> [*WCAG SC 1.3.2 Meaningful Sequence*](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html): When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.        | [18. CSS Content and Positioning](https://section508coordinators.github.io/ICTTestingBaseline/18Stylesheet.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 14. Tables](tables.md) | [Next -- 16. Pre-Recorded Audio-Only, Video-Only, and Animations](audiovideo.md)
