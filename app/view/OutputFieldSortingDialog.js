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
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.form.*',
		'Ext.selection.CellModel',
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
							id: 'sortingGrid',
							region : 'center',
							plugins : [cellEditing],
							store : Ext.create('EvolveQueryEditor.store.OutputFieldStore'),
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
										store : Ext.create('EvolveQueryEditor.store.SortingTypeStore'),
										editable : false,
										queryMode : 'local'
									},
									renderer : me.onRendererSortType
								}
							],
							listeners : {
								select : {
									fn : me.onSelectOutputField,
									scope : me
								}
							}
						}, {
							xtype : 'container',
							layout : {
								type : 'vbox',
								align : 'right'
							},
							items : [{
									xtype : 'button',
									text : 'Up',
									listeners : {
										click : {
											fn : me.onSortingUp,
											scope : me
										}
									}
								}, {
									xtype : 'button',
									text : 'down',
									listeners : {
										click : {
											fn : me.onSortingDown,
											scope : me
										}
									}
								}, {
									xtype : 'button',
									text : 'Top',
									listeners : {
										click : {
											fn : me.onSortingTop,
											scope : me
										}
									}
								}, {
									xtype : 'button',
									text : 'Bottom',
									listeners : {
										click : {
											fn : me.onSortingBottom,
											scope : me
										}
									}
								}
							]
						}
					],
					buttonAlign : 'center',
					buttons : [{
							text : 'OK',
							listeners : {
								click : {
									fn : me.onClickOK,
									scope : me
								}
							}
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
	},

	onClickOK : function () {
		return null;
	},

	onSortingUp : function () {
		return null;
	},

	onSortingDown : function () {
		return null;
	},

	onSortingTop : function () {
		return null;
	},

	onSortingBottom : function () {
		return null;
	},

	onSelectOutputField : function (selModel, record, index, options) {
		console.log(index);
	}
});
