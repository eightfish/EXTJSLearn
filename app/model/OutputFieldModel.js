Ext.define('EvolveQueryEditor.model.OutputFieldModel', {
	extend : 'Ext.data.Model',

	requires : [
		'Ext.data.Field'
	],

	// config : {
		// field : undefined,
		// sortingIndex : undefined,
		// sortingType : undefined,
		// extractionType : undefined,
	// },

	fields : [{
			name : 'fieldDescription',
			type : 'string'
		}, {
			name : 'sortingIndex',
			type : 'int'
		}, {
			name : 'sortingType',
			type : 'int'
		}, {
			name : 'extractionTypeDescription',
			type : 'string'
		}
	]

	// constructor : function (config) {
		// this.initConfig(config);
		// this.callParent(config);
	// },
});
