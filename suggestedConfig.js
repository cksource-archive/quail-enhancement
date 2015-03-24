// Below a resaonable Quail Config.

var assessments = [
	'tableDataShouldHaveTh',
	'fontIsNotUsed',
	'iIsNotUsed',
	'basefontIsNotUsed',
	'boldIsNotUsed',
	'pNotUsedAsHeader',
	'headersHaveText',
	'tableComplexHasSummary',
	// 'tableUsesCaption', // Only after fixes mentioned in H39.
	'tableCaptionIdentifiesTable',
	'listOfLinksUseList',
	'documentVisualListsAreMarkedUp', // Would be handy if it would support <br /> with attributes. But it's fixed in [#319](https://github.com/quailjs/quail/pull/319)!
	// 'definitionListsAreUsed', // Would be handy if only we'd support dl/dt/dd.
	'tableUsesScopeForRow',
	'tableWithBothHeadersUseScope',
	// 'tableDataShouldHaveTh', // Only after fixed mentioned in F91.
	// 'documentContentReadableWithoutStylesheets', // Only after fixes mentioned in G140.
	'headersHaveText',
];