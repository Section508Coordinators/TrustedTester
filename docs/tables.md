## 14. Tables

### Data Tables

#### Identify Content

Identify all data tables (including images of data tables) where data cell(s) require header(s) for understanding.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 14.A and 14.B.

**Note:**

-   To assist with identification of data tables, use ANDI:

    1.  Launch ANDI: structures, then select the “reading order” link.

    2.  The markup added to the page indicates the order that assistive technology will read the content

-   Data tables are those tables where information in a cell requires a row or column header to adequately describe the cell's contents. The reading order of a data table will not be sensible when read without the row and/or column headers. The content in a data table would be best understood when it is NOT read in the order that ANDI marks on the page.

-   **EXCLUDE** content that does not require a row or column header for understanding:

    -   Layout tables are used for placement of components on the page for visual aesthetics without an informational relationship between headers and the information in the data cells. Content is understandable when read in the marked reading order.

    -   Where content that is visually presented in a table but is understandable when read in the marked reading order, the content does not require a data table structure. This may occur when a CSS technique has been used to visually present information

#### Check 1.3.1-table-identification 

| Test Name                  | Test ID | Test Condition                                                                                                 |
|----------------------------|---------|----------------------------------------------------------------------------------------------------------------|
| 1.3.1-table-identification | 14.A    | <span id="OLE_LINK87" class="anchor"></span>Each data table has programmatic markup to identify it as a table. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no data tables on the page.

##### How to Test:

1.  Launch ANDI: tables.

    1.  Determine whether ANDI detects and identifies the data table(s).

        1.  If the tables module does not display as an option in the modules selection list, then ANDI has not detected any table programmatically on the page (meaning any content presented visually in a table does not have programmatic markup to identify it as a table).

        2.  If the ANDI: tables module is available, use ANDI’s “Analyze Next Table” button to sequentially highlight the detected tables on the page. If the table in question is not outlined by ANDI and/or it is not possible to navigate to the table using ANDI, then ANDI has not detected that table programmatically (meaning the content presented visually in that table does not have programmatic markup to identify it as a table).

2.  Review any data tables that use role=”presentation”.

<!-- -->

1.  ANDI will display role=”presentation” in the Element information and/or under Accessibility Alerts.

2.  A data table that includes role=”presentation” will not convey the table semantics to a screen reader and would fail this test.

<!-- -->

1.  ANDI Output will display an alert whenever ARIA role=”table” is not coded correctly.

2.  Use the Analyze Previous/Next Table buttons in ANDI to navigate to each of the identified tables on the page.

##### Evaluate Results:

If ALL of the following are **TRUE**, then the content **PASSES**:

1.  It is possible to navigate in ANDI: tables to each data table using the ANDI Analyze Previous/Next Table buttons, AND

2.  The data table DOES NOT have an ARIA role=”presentation” assigned, AND

3.  The data table DOES NOT have any ANDI Table alerts for incorrect use of ARIA table attributes.

#### Check 1.3.1-cell-header-association

| Test Name                     | Test ID | Test Condition                                                        |
|-------------------------------|---------|-----------------------------------------------------------------------|
| 1.3.1-cell-header-association | 14.B    | All data cells are programmatically associated with relevant headers. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no data tables on the page.

##### How to Test:

1.  Continue from Test 14.A.

2.  Navigate to each data cell with ANDI: tables.

3.  Inspect the ANDI Output for each data cell and/or inspect the visual highlighting of the data table to determine whether the table identifies all relevant headers for each data cell.

##### Evaluate Results:

If the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The data table appropriately identifies header relationships for each data cell.

###### Note:

-   Any changes to data tables that occur automatically or as a result of interaction with the page should be included in this test.

### Layout Tables

#### Identify Content

Identify any programmatic tables where the table structure is used purely for layout purposes.

**EXCLUDE** data tables.

**Note:**

-   To find programmatic tables on the page, use ANDI: tables (as in the previous test).

    1.  If the ANDI: tables module does not display as an option in the modules selection list, then there is no programmatic table on the page.

-   To assist with identifying layout tables:

    1.  Launch ANDI: structures, then select the “reading order” link.

    2.  The markup added to the page indicates the order that assistive technology will read the content

-   Content that is within a layout table does not require row or column headers for understanding. This content should be sensible when read in the reading order identified by ANDI.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 14.C.

#### Check 1.3.1-layout-table-structure 

| Test Name                    | Test ID | Test Condition                                                                                                                                                                                                               |
|------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.3.1-layout-table-structure | 14.C    | <span id="OLE_LINK90" class="anchor"></span>The layout table DOES NOT designate the layout table using ARIA role=”table” AND DOES NOT include table header structure and relationship elements and/or associated attributes. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there are no layout tables on the page.

##### How to Test:

1.  Continue from Test 14.A.

    1.  If the ANDI: tables module does not display as an option in the modules selection list, then ANDI has not detected a table programmatically on the page, and there is no content on the page that has programmatic markup to identify it as a table.

    2.  If the ANDI: tables module is available, use ANDI’s “Analyze Next Table” button to outline the detected tables on the page. If the table in question is not outlined by ANDI and/or it is not possible to navigate to the table using ANDI, then ANDI has not detected that table programmatically (meaning the content presented visually in that table does not have programmatic markup to identify it as a table).

2.  Inspect the “Element” output in ANDI to determine whether the layout uses role=”table”.

3.  Inspect the ANDI output and any associated alerts to determine whether a &lt;table&gt; includes header structure elements and/or attributes (e.g., &lt;th&gt;, scope=”row”).

    1.  If a table has an ARIA role=”presentation” assigned and the table also denotes header relationships (e.g., using &lt;th&gt;, scope=”row”) ANDI will provide a corresponding alert; ignore this alert on a layout table. A table that includes role="presentation" will not convey the table semantics to a screen reader. Therefore, the table structure semantics (e.g., &lt;th&gt;, scope=”row”) can be ignored if the table is indeed a layout table.

##### Evaluate Results:

If any of the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  ANDI DOES NOT detect the layout as a table, OR

2.  The &lt;table&gt; element includes the attribute role=”presentation,” OR

3.  BOTH of the following are **TRUE**:

    1.  The layout DOES NOT use role=”table” or any associated ARIA table attributes (e.g., role=”row”, role=”columnheader”), AND

    2.  The layout DOES NOT include table structure and relationship elements or associated attributes (e.g., &lt;th&gt;, scope=”row”)

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Baseline Requirements                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html): Information, structure, and relationships conveyed through presentation can be programmatically determined.<br><br>[WCAG SC 1.3.2 Meaningful Sequence](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html): When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.<br><br>[WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.  | [12. Tables](https://section508coordinators.github.io/ICTTestingBaseline/12DataTables.html) |
