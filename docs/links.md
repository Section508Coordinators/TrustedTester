## 6. Links and Buttons

### Link Purpose

#### Identify Content

Use ANDI: links/buttons to identify all links and buttons.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 6.A and 6.B.

#### Check 2.4.4-link-purpose 

| Test Name          | Test ID | Test Condition                                                                                                                                                                                                                                  |
|--------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2.4.4-link-purpose | 6.A     | <span id="OLE_LINK41" class="anchor"></span>The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have links or buttons.

##### How to Test:

1.  Evaluate the ANDI Output for link/button purpose.

2.  Determine whether the ANDI Output, in combination with the programmatically determined link/button context (text that is in the same paragraph, list, or table cell as the link/button or in a table header cell that is associated with the table cell that contains the link/button) adequately describes the link/button’s purpose or function.

    1.  In cases where the purpose of the link/button is intentionally vague or ambiguous (e.g., the content to be revealed after selecting a link to “Door 1,” “Door 2,” or “Door 3” is intended to be a surprise), it may be sufficient for the combination of link/button text, accessible name, accessible, description, and/or link/button context to refer to the link/button purpose vaguely or ambiguously.

##### Evaluate Results: 

If the following is **TRUE**, then the content **PASSES**:

1.  The combination of the programmatically determined link/button context and the ANDI Output provide adequate description of the link/button’s purpose.

###### Note: 

-   This test also covers the requirement for [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html).

-   Any changes to links or buttons that occur automatically or as a result of interaction with the page should be included in this test.

#### Check 4.1.2-change-notify-links

| Test Name                 | Test ID | Test Condition                                                                                                    |
|---------------------------|---------|-------------------------------------------------------------------------------------------------------------------|
| 4.1.2-change-notify-links | 6.B     | The page provides notification of each change in content that is the result of interaction with a link or button. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if the page does not have links or buttons or if the page content does not change due to link or button interaction.

##### How to Test:

1.  Activate the link or button to trigger changes to page content (e.g., content removed, content is added, etc.).

2.  Identify how the user is notified of the change in content.

    1.  Determine whether the link or button that triggers the change has an accessible name, accessible description and/or context that provides sufficient description of the interface component’s purpose.

        1.  If content changes are the direct result of a user's action while interacting with content AND the interface component that triggers the change provides sufficient description of the change, then no additional programmatic event notification is necessary.

    2.  Identify any dialogs that alert the user to changes in content.

        1.  Determine whether the dialogs provide sufficient programmatic notification of content changes.

    3.  Identify content changes that result in focus moving to the content that has changed.

        1.  Determine whether moving the focus to the content that has changed is sufficient to notify the user of the change event (e.g., by describing the change directly in the content to which the focus moved).

    4.  Identify content changes occurring in an ARIA live region:

        1.  Launch ANDI: structures

        2.  Click the “live regions” link, then use the mouse to hover over any identified live region (alternatively, use ANDI’s previous/next element buttons to navigate to identified live regions).

        3.  Determine whether the changing content is contained within the live region.

##### Evaluate Results: 

If any of the following is **TRUE**, then the Test Condition is **TRUE** and the content **PASSES**:

1.  The user’s action directly results in the change in content, AND the interface component that triggered the change provided sufficient description about the change event, OR

2.  The page notifies the user about a change via a keyboard-accessible dialog, OR

3.  The page moves focus to the content that has changed, AND the content that has changed provides sufficient description about the change, OR

4.  The content that has changed is contained in an ARIA live region.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Baseline Requirements                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [WCAG SC 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html): The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.                                                                                                                                 | [14. Links](https://section508coordinators.github.io/ICTTestingBaseline/14Links.html)              |
| [WCAG SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html): For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. | [5. Changing Content](https://section508coordinators.github.io/ICTTestingBaseline/05Changing.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 5. Forms](forms.md) | [Next -- 7. Images](images.md)
