## 8. Adjustable Time Limits

### Timing Adjustable

#### Identify Content

Identify any instances of content time limits.

Time limits could be identified by:

-   Inspecting system or site documentation

-   Text description somewhere on the page where the time limit occurs

-   Pop-ups or other messages or warning indicators on the page

-   Allowing the page to be idle for an extended period of time to prompt a time-out notification or other indication that a time limit has occurred.

**EXCLUDE**:

-   **Real-time Exception**: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or

-   **Essential Exception**: The time limit is essential and extending it would invalidate the activity; or

-   **20 Hour Exception**: The time limit is longer than 20 hours.

If there is no such content, the result for the following test ID(s) is **DOES NOT APPLY**: 8.A

#### Check 2.2.1-timing-adjustable

| Test Name               | Test ID | Test Condition                                                                                       |
|-------------------------|---------|------------------------------------------------------------------------------------------------------|
| 2.2.1-timing-adjustable | 8.A     | <span id="OLE_LINK56" class="anchor"></span>The user can turn off, adjust, or extend the time limit. |

##### Applicability:

This Test Condition **DOES NOT APPLY (DNA)** if there is no time limit for content or if the time limit meets one of the exceptions listed in the Identify Content section above.

##### How to Test:

1.  Determine whether the web page provides a way to turn off, adjust, or extend the time limit

##### Evaluate Results:

If any of the following is **TRUE**, then the content **PASSES**.

1.  The user can turn off the time limit before time expires, OR

2.  The user can adjust the time limit to at least ten times the length of the default setting before time expires, OR

3.  The page provides a warning before time expires AND:

    1.  For a period of at least 20 seconds, the user can extend the time limit with a simple action (e.g., pressing the spacebar), AND

    2.  The user can extend the time limit at least ten times.

### Applicable Standards

| Section 508/WCAG Success Criteria                                                                                                                                                                                                             | Baseline Requirements                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [WCAG SC 2.2.1 Timing Adjustable](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html): For each time limit that is set by the content, at least one of the following is true:<ul><li>**Turn off:** The user is allowed to turn off the time limit before encountering it.</li><li>**Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.</li><li>**Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, “press the space bar”), and the user is allowed to extend the time limit at least ten times.</li></ul>  | [21. Timed Events](https://section508coordinators.github.io/ICTTestingBaseline/21TimedEvents.html) |

----------------------------------------
[Home/Table of Contents](index.md) | [Previous -- 7. Images](images.md) | [Next -- 9. Repetitive Content](repetitive.md)
