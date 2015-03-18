
All the research is based on latest Quail for the time being, that's 2.2.15.

Note in this document we refer to Failure of SC also as Technique, since Quail treats them the same way.

# 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A) | Lets figure out how does it work with our content.<br/>Edit: well we're supporting it out of a box.

## Quail tests:

* [H49](H49) - 1 - Using sem elements wherever is possible would be very good.
* [H48](H48) - 1 - Covering list element usage in the structured docs. I found it pretty important.
* [H42](H42) - 2 - There's an easy assessment proposition and we care about headers.
* [F91](F91) - 2 - Pretty important, as our users might ofter work with tables.
* [G140](G140) - 3 - I'm missing few associations with the existing tests.
* [G141](G141) - 3 - Some decent tests are in place.
* [H39](H39) - 3 - Table caption/summary tests.
* [H63](H63) - 4 - Test is OK, but we need a better support for tables in CKE to allow manual changes here.
* [H43](H43) - 5 - We have no tools to set `id` / `header` attr.
* [F68](F68) - 5 - We are not likely to work with form inputs ATM.
* [F48](F48) - 5 - I don't see this problem important as I can't imagine ppl to make tables with pre in CKE.
* [H44](H44) - 5 - We are not likely to work with form inputs ATM.
* [F46](F46) - 6 - Not really important as our users should not create layout table with CKE.
* [F34](F34) - 6 - I don't see this problem important as by default HTML whitespace stripping won't allow you to create this problem.
* [F33](F33) - 6 - I don't see this problem important as by default HTML whitespace stripping won't allow you to create this problem.
* [H65](H65) - 6 - This one is related to form controls.
* [H71](H71) - 6 - This one is related to form controls.
* [H85](H85) - 6 - This one is related to form controls.

## Unnecessary techniques from our POV:

* [F17](F17) - 7 - Interesting, there's no Failure 17 in WCAG2.
* [H28](H28) - 7 - WTF? H28 is related to 3.1.4... remove `H28` from `documentVisualListsAreMarkedUp`.
* [ARIA2](ARIA2) - 7 - Aria tests are not interesting for CKE.
* [T2](T2) - 7 - We should not care as we work with HTML which provides semantic markup.
* [T3](T3) - 7 - We should not care as we work with HTML which provides semantic markup.

## Techniques that are not checked:

* [F2](F2) - 4 - Some minor improvement proposed.
* [G138](G138) - 4 - Kind of handy test, but not reliable.

* H73: Using the summary attribute of the table element to give an overview of data tables (HTML)

It's fine, because it's dedicated for HTML 4.01 and XHTML 1.x and it's deprecated in HTML 5.

* H97: Grouping related links using the nav element (HTML)

It's ok, for the time being. We're not supporting nav elements (but maybe we should?).

* F43
	* `blockquoteNotUsedForIndentation` could be also mapped to `F43`.
	* `pNotUsedAsHeader` could be also mapped to `F43`.

# 2.4.6 Headings and Labels: Headings and labels describe topic or purpose. (Level AA) | We can e.g. ensure that hadlines / labels aren't too lengthy.

# 2.4.4 Link Purpose (In Context): The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general. (Level A) | This one might be tough to test. Very related to 2.4.9. WCAG suggest that content should comply 2.4.9 if possible so that context is not needed.

Priority / Order | Success Criteria | Comments
------------- | ------------- | -------------
2 : 4 | 3.1.3 Unusual Words: A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon. (Level AAA) | This should allow to set a dictionary of unusual words.
3 : 5 | 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A) | Consider tests for a different color pagaragraphs or whatev
4 : 6 | 1.1.1 Non-text Content: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. (Level A) |
4 : 7 | 2.4.9 Link Purpose (Link Only): A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general. (Level AAA)
4 : 8 | 3.1.4 Abbreviations: A mechanism for identifying the expanded form or meaning of abbreviations is available. (Level AAA) |
4 : 9 | 4.1.1 Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A) |
4 : 10 | 2.4.2 Page Titled: Web pages have titles that describe topic or purpose. (Level A) | Only in `full page` mode.
4 : 11 | 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: (Level AA) | Implementation requires perfect `contents.css` setting. We might consider it in a further future.
4 : 12 | 3.1.2 Language of Parts: The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA) |
5 : 13 | 2.4.3 Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A) | We want to ensure that `tabindex` attr is not used, and if it is we'll notice the user about potential problems.
5 : 14 | 2.1.2 No Keyboard Trap: If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A) | Strictly related to Flash problem.
5 : 15 | 3.1.1 Language of Page: The default human language of each Web page can be programmatically determined. (Level A) | Only for `full page` mode.
5 : 16 | 1.2.1 Audio-only and Video-only (Prerecorded): For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: (Level A) | We want to do this in near future, as CKE will support it
5 : 17 | 1.2.5 Audio Description (Prerecorded): Audio description is provided for all prerecorded video content in synchronized media. (Level AA) | In near future.
1 : | ~~1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined. (Level A)~~ | Testing might be quite taugh. Actually impossible.
3 : | ~~1.3.3 Sensory Characteristics: Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A)~~ | Well we can't really test anything here. The only thing we can do is to add a notice to ensure that there are no such information.


@todo:
We might consider following techniques:
* *H69* - 2.4.10 - Providing heading elements at the beginning of each section of content [H69 at WCAG2](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/H69.html).
	* Make sense to check if there's a header in the content. Related a little bit to [G141](G141).