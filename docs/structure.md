## 10. Content Structure

### Headings

#### Identify Content

1.  Identify all visually apparent headings, which denote sections of content.

    1.  Headings are often in a larger, bolded font separated from paragraphs by extra spacing (though not always). Note the hierarchy and structure of each heading with respect to other headings on the page.

2.  Use ANDI to identify all programmatically defined headings: &lt;h1&gt; to &lt;h6&gt; or ARIA role=”heading”.

    1.  Launch ANDI: structures.

    2.  Select the "headings" button within ANDI: structures.

    3.  ANDI will add dotted outlines around each identified heading that is visible on the page.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 10.A to 10.C.

#### Check 2.4.6-heading-purpose 

| Test Name             | Test ID | Test Condition                                                                                          |
|-----------------------|---------|---------------------------------------------------------------------------------------------------------|
| 2.4.6-heading-purpose | 10.A    | <span id="OLE_LINK63" class="anchor"></span>Each heading describes the topic or purpose of its content. |

##### Applicability:

This Test Condition **DOES NOT APPLY** if there are no visual headings on the page.

##### How to Test:

1.  For each visually identified heading, compare the heading text to the content beneath the heading.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The heading describes the topic or purpose of its content.

#### Check 1.3.1-heading-determinable

| Test Name                  | Test ID | Test Condition                                                                                                           |
|----------------------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| 1.3.1-heading-determinable | 10.B    | Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** to a web page that has no programmatic headings identified by ANDI and has no visual headings.

##### How to Test:

1.  Select ANDI: structures and review the ANDI Output for each visually apparent heading. ANDI outlines all headings with a dotted purple line.

    1.  If ANDI does not identify a visually apparent heading, then the heading is not defined programmatically.

2.  Review each heading identified by ANDI to determine if it is also a visually apparent heading.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  Each programmatically determinable heading is serving as a visual heading on the page, AND

2.  Each visual heading is programmatically defined.

###### Note: 

-   Content that is not a visual heading should not have a role of heading (for example, heading markup should not be used for emphasis on an element that is not a heading for content after it). Conversely, content that is styled to look like and function like a heading should be programmatically defined as heading.

#### Check 1.3.1-heading-level

| Test Name           | Test ID | Test Condition                                                                                            |
|---------------------|---------|-----------------------------------------------------------------------------------------------------------|
| 1.3.1-heading-level | 10.C    | Programmatic heading levels logically match the visual heading presentation within the heading structure. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** to web pages where programmatic headings are not identified by ANDI.

##### How to Test:

1.  Launch ANDI: structures and select the “view outline” button to display the Structure Outline.

2.  Mouse over or tab through each of the headings in ANDI’s Structure Outline to review the ANDI Output for each heading.

    1.  ANDI will identify heading level conflicts if found. Ex: “Heading element level &lt;h1&gt; conflicts with \[aria-level=”2”\].”

3.  Compare the heading levels listed in the Structure Outline to the page content. Determine whether the heading levels logically match the visual heading presentation within the heading structure.

    1.  On pages that have only one heading, that heading can have any heading level, as the page’s heading level structure is defined by that one heading.

    2.  The most important heading(s) should have the highest priority level. For example, heading level 1 is a higher level than heading level 2, which is higher than heading level 3.

    3.  Headings with an equal or higher level start a new section; headings with a lower level start new subsections that are part of the higher leveled section.

    4.  A heading level 1:

        -   Is not required

        -   Can be used more than once on a page

        -   Is not required to match the page title

    5.  The level of headings may not always be in sequence but may be valid as it relates to the visual structure/importance communicated by visible headings on the page. For example, an &lt;h2&gt; heading may be used for a navigation structure that precedes an &lt;h1&gt; title on a page. It is also acceptable to have &lt;h3&gt; then &lt;h5&gt; without an &lt;h4&gt; in between.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  Every programmatically identified heading level logically matches the visual heading structure on the page, AND

2.  There is no heading level conflict.

### Lists

#### Identify Content

Identify all visually apparent lists on the page.

**Note:**

-   Developers may use list elements to help present grouped items, such as menus and submenus, while styling them to remove bullets/numbering and sometimes orient the lists horizontally instead of vertically. Such use of list elements is acceptable and consistent with the Test Condition defined below.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 10.D.

#### Check 1.3.1-list-type 

| Test Name       | Test ID | Test Condition                                                                                                                   |
|-----------------|---------|----------------------------------------------------------------------------------------------------------------------------------|
| 1.3.1-list-type | 10.D    | <span id="OLE_LINK68" class="anchor"></span>All visually apparent lists are programmatically identified according to their type. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no visually apparent lists.

##### How to Test:

1.  Launch ANDI: structures and select the “lists” button.

2.  Review the information under “List Elements,” noting the number of lists identified and their types.

3.  For each list, visually determine the type of list; determine if it appears to be ordered, unordered, or a description list.

    -   Ordered - numbered sequentially and, if necessary, hierarchically (e.g., 1, 2, 2.a, 2.a.i, etc.) and are used where sequence or the ability to reference specific items by number/letter are important.

    -   Unordered - not numbered and are used where a specific sequence or the ability to reference specific items by number/letter are not important.

    -   Description list (dl) - used to groups terms with their descriptions.

4.  Review the visual representation of list relationships, including order, hierarchy, and nesting compared to the programmatic list definitions presented via the ANDI output.

    1.  It is possible to provide any number of nested list combinations using ordered, unordered, and definition lists. ANDI identifies each nested list separately. Review each list using the “Inspect Next Element” button to determine if the visual nesting and relationship matches the programmatic nesting and relationships.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  All content that has the visual appearance of a list is defined programmatically as a list, according to the type of list.

    1.  An unordered list (with or without bullets) is marked as an unordered list (ul).

    2.  An ordered list is marked as an ordered list (ol).

    3.  Terms and their descriptions that are presented in the form of a list are marked as a description list (dl)

        AND

2.  All programmatic list relationships, including nesting and hierarchies, are consistent with the list relationships presented visually.

###### Note:

-   Not all lists require markup. For instance, a list of items in a sentence, separated by commas, do not have to be included in a bulleted or numbered list.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                       | Baseline Requirements                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| [WCAG SC 2.4.6 Headings and Labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html): Headings and labels describe topic or purpose.<br><br>[WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.  | [13. Content Structure](https://section508coordinators.github.io/ICTTestingBaseline/13Structure.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 9. Repetitive Content](repetitive.md) | [Next -- 11. Language](language.md)
