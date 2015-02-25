


## Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.

Priority  | Success Criteria | Comments
------------- | ------------- | -------------
1  | 1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined. (Level A) |
2  | 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A) | Lets figure out how does it work with our content.
3  | 1.3.3 Sensory Characteristics: Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A) |
3  | 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A) | Consider tests for a different color pagaragraphs or whatev
4  | 1.1.1 Non-text Content: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. (Level A) |
4  | 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: (Level AA) | Implementation requires perfect `contents.css` setting. We might consider it in a further future.
5  | 1.2.5 Audio Description (Prerecorded): Audio description is provided for all prerecorded video content in synchronized media. (Level AA) | In near future.
5  | 1.2.1 Audio-only and Video-only (Prerecorded): For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: (Level A) | We want to do this in near future, as CKE will support it

## Principle 2: Operable - User interface components and navigation must be operable.

Priority  | Success Criteria | Comments
------------- | ------------- | -------------
2 | 2.4.4 Link Purpose (In Context): The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general. (Level A) | This one might be tough to test.
2 | 2.4.6 Headings and Labels: Headings and labels describe topic or purpose. (Level AA) |
4 | 2.4.2 Page Titled: Web pages have titles that describe topic or purpose. (Level A) | Only in `full page` mode.
4 | 2.4.9 Link Purpose (Link Only): A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general. (Level AAA) |
5 | 2.4.3 Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A) | We want to ensure that `tabindex` attr is not used, and if it is we'll notice the user about potential problems.
5 | 2.1.2 No Keyboard Trap: If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A) | Strictly related to Flash problem.

## Principle 3: Understandable - Information and the operation of user interface must be understandable.

Priority  | Success Criteria | Comments
------------- | ------------- | -------------
2 | 3.1.3 Unusual Words: A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon. (Level AAA) | This should allow to set a dictionary of unusual words.
4 | 3.1.2 Language of Parts: The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA) |
4 | 3.1.4 Abbreviations: A mechanism for identifying the expanded form or meaning of abbreviations is available. (Level AAA) |
5 | 3.1.1 Language of Page: The default human language of each Web page can be programmatically determined. (Level A) | Only for `full page` mode.

## Principle 4: Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

Priority  | Success Criteria | Comments
------------- | ------------- | -------------
5 | 4.1.2 Name, Role, Value: For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A) |
4 | 4.1.1 Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A) |
