About This Document
===================

Who Should Use This Document
----------------------------

This document has been designed for and is intended for use by Trusted Testers.

A Trusted Tester is a person certified to provide accurate and repeatable Revised 508 conformance test results for web content. A Trusted Tester follows the Revised Section 508 Conformance Test Process for Web, uses approved testing tools, and evaluates web applications for conformance with Revised 508 standards. Trusted Testers are those who have passed the Trusted Tester Certification Exam.

For more information on the Revised 508 Trusted Tester Training Course and Exam, contact the Department of Homeland Security Office of Accessible Systems & Technology (OAST) Accessibility Helpdesk at <accessibility@dhs.gov>.

Harmonized Baseline Alignment
-----------------------------

This test process incorporates all tests in the "Harmonized Processes for Revised 508 Testing: Baseline Tests for Web Accessibility" version 3.0. The baseline tests established the minimum steps required to determine compliance with Revised 508 standards and WCAG 2.0 Level A and AA. Test instructions that are specific to Trusted Tester only are identified with \*TT-specific\* or "\[no baseline\]." The outcomes of these tests will be reflected only in Revised 508 test results.

Baseline test results will be reported separately and are not affected by Trusted Tester-specific tests.

How this Document is Structured
-------------------------------

-   Introductory Content:

    -   About this document – describes the purpose, audience, and scope of this document Section 1

    -   Test Environment – describes the test environments supported by this test process including Operating Systems, browsers, and testing tools

    -   Conformance Reporting Requirements – provides guidance

-   Section 508 Conformance Tests – details the test processes. Each test process includes step-by-step instructions on how and what to test, as well as instructions on how to determine test results for each Test Condition.

-   Appendices – Provide cross-references tables to indicate the relationship of the Tests to Revised 508 standards and Baseline tests; definitions; a document change log; and quick reference summaries of the test process.

Web Content Tests Only
----------------------

This test process covers web content only. Trusted Tester versions 4.x and older were developed for the original Section 508 standards, which had separate requirements for web and software. With the Revised 508 standards applying WCAG 2.0 Level A and AA to web, software and other electronic content, combining software and web in one test process was the original plan.

However, because the Revised 508 Standards has other requirements for software in addition to WCAG 2.0, and software testing tools were not yet available, the software test process will be separate. While it is not as common due to HTML5 capabilities, software elements are still found with web content in web applications. To test the software elements, use the software test process.

Similarly, any other operating systems, browser or platforms such as mobile tablets, must be evaluated using other testing procedures.

Testing Order
-------------

The numbering of the tests within the test process do not necessarily indicate the order that tests must be performed. Each tester and each application may determine the optimal testing order for coverage and productivity.

It is recommended, however, that the first test performed is Test 1 Conforming Alternate Version. Identifying conforming alternate versions of content helps define the scope of testing and avoids unnecessary testing. Non-conforming content that has a conforming alternate version is excluded from testing.

Test 2 Auto-Playing and Auto-Updating Content and Test 3 Flashing are next in the test process, followed by Test 4 Keyboard Access and Focus. These test WCAG success criteria that are covered in [Conformance Requirement 5 Non-Interference](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html). Failure to meet these success criteria could interfere with any use of the page and may indicate critical accessibility issues.

The test process was designed to streamline the sequence for testers; however testers may choose to do the tests (after Test 1) in their preferred order. Each Test Condition (after Test 1) is independent of the tests that precede, but some will reference tests that follow.

Issues Not Covered in This Test Process
---------------------------------------

Problems may be found during testing that may affect accessibility but are simply coding errors and often affect general usability for all users. An example might include a link that leads to the wrong target website. Testers may notify a developer of these issues as a comment on a report, but they do not typically result in a compliance failure as they are beyond the scope of the Revised Section 508 Standards.

The Rationale for Each Test
---------------------------

Previous versions of the Trusted Tester process document provided a rationale for each test based on interpretation of the Section 508 standards. With the Section 508 standards refresh and adoption of the WCAG 2.0 Success Criteria, this version of the test process relies principally on the rationale provided in [*Understanding WCAG 2.0: A guide to understanding and implementing Web Content Accessibility Guidelines 2.0*](https://www.w3.org/TR/UNDERSTANDING-WCAG20/). The test process also relies on accompanying Trusted Tester training to provide additional description and guidance for understanding the logic that drives each test. Each step included in this test process document includes only the information necessary to execute the test. However, the Applicable Standards section of each test references the applicable WCAG 2.0 or Section 508 standard along with a link to the applicable article from the *Understanding WCAG 2.0* document.
