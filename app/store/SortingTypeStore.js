Ext.define('EvolveQueryEditor.store.SortingTypeStore',
{
	extend : 'Ext.data.Store',

	fields : [
		{
			name : 'sortingType',
			type : 'string'
		},
		{
			name : 'sortingTypeId',
			type : 'int'
		}
	],
	data : [
		{
			sortingType : 'None',
			sortingTypeId : 0
		},
		{
			sortingType : 'Ascending',
			sortingTypeId : 1
		},
		{
			sortingType : 'Descending',
			sortingTypeId : 2
		}
	],
	autoLoad : true
}
);
