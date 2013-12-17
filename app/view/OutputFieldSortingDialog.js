Ext.define('EvolveQueryEditor.view.OutputFieldSortingDialog', {
	extend : 'Ext.window.Window',
	alias : 'widget.outputFieldSortingDialog',

	title : 'OutputField Sorting Dialog',
	layout : 'fit',
	autoshow : true,
	modal : true,
	minHeight : 400,
	minWidth : 500,
	width : 500,

	requires : [
		'Ext.selection.CellModel',
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.form.*',
		'EvolveQueryEditor.model.OutputFieldModel'
	],

	initComponent : function () {
		var me = this;
		var cellEditing = new Ext.grid.plugin.CellEditing({
				clicksToEdit : 1
			});

		Ext.applyIf(me, {
			items : [{
					xtype : 'form',
					width : 150,
					items : [{
							xtype : 'gridpanel',
							region : 'center',
							plugins : [cellEditing],
							store: Ext.create('EvolveQueryEditor.store.OutputFieldStore'),
							// viewConfig : {
							// plugins : {
							// ptype : 'gridviewdragdrop',
							// dragText : 'Reorder sorting'
							// }
							// },
							columns : [{
									text : 'Sorting Field',
									dataIndex : 'fieldDescription',
									sortable : false,
									width : 150,
									menuDisabled : true
								}, {
									text : 'Extraction Type',
									dataIndex : 'extractionTypeDescription',
									width : 150,
									sortable : false,
									menuDisabled : true
								}, {
									text : 'Sorting Type',
									dataIndex : 'sortingType',
									width : 100,
									sortable : false,
									menuDisabled : true,
									flex : 1,
									editor : {
										xtype : 'combobox',
										store : [
											[0, 'None'],
											[1, 'Ascending'],
											[2, 'Descending']
										],
										editable : false,
										queryMode : 'local'
									},
									renderer : me.onRendererSortType
								}
							]
						}
					],
					buttons : [{
							text : 'OK',
							action : 'ok'
						}, {
							text : 'Cancel',
							scope : me,
							handler : me.close
						}
					]
				}
			]
		});

		me.callParent(arguments);
	},

	onRendererSortType : function (value) {
		switch (value) {
		case 0:
			return 'None';
			break;
		case 1:
			return 'Ascending';
			break;
		case 2:
			return 'Descending';
			break;
		}

		return value;
	}
});
