Ext.define('EvolveQueryEditor.store.OutputFieldStore', {
	extend : 'Ext.data.Store',
	alias : 'outputFieldStore',

	requires : ['EvolveQueryEditor.model.OutputFieldModel'],

	constructor : function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
					model : 'EvolveQueryEditor.model.OutputFieldModel',
					storeId : 'OutputFieldModelStore',
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
					proxy : {
						type : 'memory',
						reader : {
							type : 'json'
						}
					},
					autoLoad : true
				}, cfg)]);
	}
});
