## 11. Language

### Language of Page

#### Identify Content

1.  Identify all pages with text.

2.  Review the page content to identify the default human language of the page (the language in which most of the page is presented).

**Note**:

-   “Human language” refers to the language that people use to communicate with one-another as opposed to coding languages used to produce software and web content.

Test ID 11.A always applies.

#### Check 3.1.1-page-language-defined 

| Test Name                   | Test ID | Test Condition                                                                                                              |
|-----------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| 3.1.1-page-language-defined | 11.A    | <span id="OLE_LINK70" class="anchor"></span>The default human language of each web page can be programmatically determined. |

##### Applicability:

This Test Condition always applies – you may NOT evaluate the condition as **DOES NOT APPLY (DNA)**. All pages should have some textual content, even if that content is included programmatically as alternative text for non-text content.

##### How to Test:

1.  Launch ANDI: structures.

2.  Click the "more details" link, then “page language.”

    1.  ANDI will display a dialog listing the value of the lang attribute assigned to the &lt;html&gt; element of the page.

    2.  If no lang attribute is defined or if the attribute is empty, ANDI will provide a warning in the same dialog.

3.  Consult the [Internet Assigned Numbers Authority's (IANA) Language subtag registry](https://www.iana.org/assignments/language-subtag-registry) to determine whether the language is properly defined and matches the default human language for the page.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  The default primary language is correctly specified per [IANA](https://www.iana.org/assignments/language-subtag-registry), AND

2.  The identified language in the lang attribute correctly matches the default human language for the page.

###### Note:

-   The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications for dialects that may follow the primary language subtag.)

-   The primary language subtag must conform to the [Internet Assigned Numbers Authority's (IANA) Language subtag registry.](https://www.iana.org/assignments/language-subtag-registry)

### Language of Parts

#### Identify Content

1.  Identify any text content that differs from the default human language of the page including alternative text.

2.  Identify the human language of the text content that differs from the default human language of the page.

**Note:**

-   Proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text do not require a lang attribute different from the default language of the page and are not covered by this test.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 11.B.

#### Check 3.1.2-part-language-defined

| Test Name                   | Test ID | Test Condition                                                                                                                                                                      |
|-----------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.2-part-language-defined | 11.B    | <span id="OLE_LINK72" class="anchor"></span>The human language for any content segment that differs from the default human language of the page can be programmatically determined. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if all of the content in the page is in the same human language.

##### How to Test:

1.  Launch ANDI: structures; click the “more details” link, then “\[\#\] lang attributes”. If the \[\#\] is zero, no content was marked with a lang attribute.

2.  Locate the markup added to the web page that identifies the element to which the attribute is applied and the language defined in the language attribute value (e.g., "en" for English).

    1.  Mouseover or tab to the markup to reveal the beginning and end of the element.

    2.  Determine whether the entire passage is enclosed within the element.

3.  Consult the [Internet Assigned Numbers Authority's (IANA) Language subtag registry](https://www.iana.org/assignments/language-subtag-registry) to determine whether the language is properly defined and matches the human language for the content segment.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  The language for the content segment that differs from the primary default language of the page is correctly specified per [IANA](https://www.iana.org/assignments/language-subtag-registry), AND

2.  The identified language in the lang attribute correctly matches the human language for the content segment

###### Note:

-   The primary language subtag is the first 2 or 3 character code in the value of the lang attribute. (Do not test additional language specifications for dialects that may follow the primary language subtag.)

-   The primary language subtag must conform to the [Internet Assigned Numbers Authority's (IANA) Language subtag registry.](https://www.iana.org/assignments/language-subtag-registry)

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                     | Baseline Requirements                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [WCAG SC 3.1.1 Language of Page](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html): The default human language of each Web page can be programmatically determined.<br><br>[WCAG SC 3.1.2 Language of Parts](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html): The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.  | [15. Language](https://section508coordinators.github.io/ICTTestingBaseline/15Language.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 10. Content Structure](structure.md) | [Next -- 12. Page Titles, Frames, and iFrames](titles.md)
