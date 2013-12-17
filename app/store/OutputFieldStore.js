Ext.define('EvolveQueryEditor.store.OutputFieldStore', {
	extend : 'Ext.data.Store',
	alias: 'outputFieldStore',
	model : 'EvolveQueryEditor.model.OutputFieldModel',
	
	
	data : [{
			fieldDescription : 'Account Code',
			sortingIndex : 1,
			sortingType : 0,
			extractionTypeDescription : 'None'
		}, {
			fieldDescription : 'Base Amount',
			sortingIndex : 2,
			sortingType : 1,
			extractionTypeDescription : 'None'
		}
	],
	autoLoad : true
});
