Test Environment
================

At the initial release of this document, only the operating systems and browsers specified below were validated with the test process and tools to ensure that results were consistent and accurate. The list of supported operating systems and browsers is expected to grow. Please refer to the DHS Section 508 Compliance Testing Tools website at [https://www.dhs.gov/508-tools](https://edit.dhs.gov/508-tools) for the most up to date test environment information and the Trusted Tester Test Tool Installation Guide.

Testing Tools
-------------

The tools used in the Test Process (and Baseline tests) have been chosen based on several factors including ease of use, ease of teaching, and accuracy of results. They are also free to install and use. The tools assist the tester with verification of accessibility properties. This test process is essentially a code inspection for accessibility properties, but the tools reduce the need for a tester to view source code or have in-depth knowledge of programming languages.

### ANDI

ANDI (Accessible Name & Description Inspector) is a free open-source bookmarklet, meaning that the tool does not require installation as a plugin and can be added to multiple browsers as a bookmark. ANDI is designed to help test web content for accessibility. Developed by the US Social Security Administration, ANDI is available at <https://www.ssa.gov/accessibility/andi/help/install.html>.

ANDI issues may be reported to the ANDI GitHub page: <https://github.com/SSAgov/ANDI/issues>.

### Color Contrast Analyzer 

The Color Contrast Analyzer (CCA) is a free open-source tool that displays the contrast ratio for two selected colors. Developed by Steve Faulkner and the Paciello Group, CCA is available at the following links:

-   [CCA 2.5 for Windows](https://github.com/ThePacielloGroup/CCA-Win/releases/tag/2.5.0)

-   [CCA 2.4 for macOS](https://github.com/ThePacielloGroup/CCA-OSX/releases/tag/2.4)

Operating Systems
-----------------

The following operating systems were validated:

-   Windows 10 (desktop mode)

-   macOS (with Safari only)

Although Windows 10 and macOS are the only Operating Systems listed, no foreseeable issues due to using another operating system have been identified. The operating system has little to no impact on web testing results; rather, results are more dependent on the browser.

Browsers
--------

The following browsers were validated:

**On Windows 10:**

-   Google Chrome

-   Mozilla Firefox

-   Microsoft Edge

-   Microsoft Internet Explorer (IE) 11

**On macOS:**

-   Safari

Use of newer versions of these browsers is acceptable unless otherwise specified on the DHS Section 508 Compliance Testing Tools website at <https://dhs.gov/508-tools>. As browsers are frequently updated, it may be possible that an update creates critical issues for test procedures or results. Known issues and modifications will be published on the website as quickly as possible.


-------------------------------------------------
[Home/Table of Contents](index.md)    |    [Next -- Conformance Reporting Requirements](Reporting.md)
