Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	requires : 'Ext.container.Viewport',
	name : 'EvolveQueryEditor',

	appFolder : 'app',

	controllers : [
		'OutputFieldSortingController'
	],

	launch : function () {
		Ext.create('Ext.container.Viewport', {
			layout : 'vbox',
			items : [{
					xtype : 'button',
					text : 'OutputField Sorting Dialog',
					handler : function () {
						var popedWindow = Ext.widget('outputFieldSortingDialog');
						popedWindow.down('form').loadRecord();
					}
				}
			]
		});
	}
});
