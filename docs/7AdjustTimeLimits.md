## 7. Adjustable Time Limits
Identify any instances of content time limits, excluding:
* **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
* **Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
* **20 Hour Exception:** The time limit is longer than 20 hours.

### Check that:
<div>
<table style="text-align:left verticle-align:top">
  <tr>
    <th>Test Name</th>
    <th>Test ID</th>
    <th>Test Condition / How to Test</th>
  </tr>
  <tr>
    <td><strong>2.2.1-timing-adjustable</strong></td>
    <td>7.A</td>
    <td><strong>At least one of the following conditions is true:</strong>
      <ol>
        <li>The user has the ability to turn off the time limit</li>
        <li>The user has the ability to adjust the time limit, with at least ten times the length of the default setting</li>
        <li>The user is warned about the time limit <strong>AND</strong>:</li>
          <ul>
            <li>Given at least 20 seconds to extend the time limit with a simple action (e.g., “press the space bar”), <strong>AND</strong></li>
            <li>Allowed to extend the time limit at least ten times</li>
          </ul>
      </ol>
      <strong>How to Test</strong>
      <ol>
        <li>Observe and identify any instances where the site or system indicates that content will or has expired or “timed out.” Time limits could be identified by:</li>
          <ul>
            <li>Inspecting system or site documentation</li>
            <li>Text description somewhere on the page where the time limit occurs</li>
            <li>Pop-ups or other messages or warning indicators on the page</li>
            <li>Allowing the page to be idle for an extended period of time, prompting a page refresh, time-out notification or other indication that a time limit has occurred.</li>
          </ul>
        <li>If a time limit is identified, is at least one of the following true?</li>
          <ul>
            <li>Does the page provide a method to turn off the time limit?</li>
            <li>Does the user have the ability to adjust the time limit to at least ten times the length of the default setting?</li>
            <li>Does the page provide a warning about the time limit (before the time limit occurs)? If so, then:</li>
              <ul>
                <li>Does the page give the user at least 20 seconds to extend the time limit with a simple action (e.g., pressing the spacebar)? <strong>AND</strong></li>
                <li>Can the user extend the time limit at least ten times?</li>
              </ul>
           </ul>
          <li>If none of the above conditions described above is true, then the page would fail this test (Test ID 7.A).</li>
    </td>
  </tr>
</table>
</div>

### Applicable Standards
<table>
  <tr>
    <th>Section 508/WCAG Success Criteria</th>
    <th>Baseline Requirements</th>
  </tr>
  <tr>
    <td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html">WCAG SC 2.2.1 Timing Adjustable</a> – For each time limit that is set by the content, at least one of the following is true:
      <ul>
        <li>Turn off: The user is allowed to turn off the time limit before encountering it.</li>
        <li>Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.</li>
        <li>Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, “press the space bar”), and the user is allowed to extend the time limit at least ten times.</li>
      </ul>
    </td>
    <td><a href="https://section508coordinators.github.io/ICTTestingBaseline/21TimedEvents.html">21. Timed Events</a></td>
  </tr>
</table>
