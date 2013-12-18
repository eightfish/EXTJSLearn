Ext.define('EvolveQueryEditor.view.SortingWindow',
{
	extend : 'Ext.window.Window',
	alias : 'widget.sortingWindow',

	title : 'OutputField Sorting Window',
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
		'EvolveQueryEditor.model.OutputFieldModel',
		'EvolveQueryEditor.store.SortingTypeStore'
	],

	initComponent : function ()
	{
		var me = this;
		var cellEditing = new Ext.grid.plugin.CellEditing(
			{
				clicksToEdit : 1
			}
			);

		Ext.applyIf(me,
		{
			items : [
				{
					xtype : 'form',
					width : 150,
					items : [
						{
							xtype : 'gridpanel',
							id : 'sortingGrid',
							region : 'center',
							plugins : [cellEditing],
							store : Ext.create('EvolveQueryEditor.store.OutputFieldStore'),
							// viewConfig : {
							// plugins : {
							// ptype : 'gridviewdragdrop',
							// dragText : 'Reorder sorting'
							// }
							// },
							columns : [
								{
									text : 'Sorting Field',
									dataIndex : 'fieldDescription',
									sortable : false,
									width : 150,
									menuDisabled : true
								},
								{
									text : 'Extraction Type',
									dataIndex : 'extractionTypeDescription',
									width : 150,
									sortable : false,
									menuDisabled : true
								},
								{
									text : 'Sorting Type',
									dataIndex : 'sortingType',
									width : 100,
									sortable : false,
									menuDisabled : true,
									flex : 1,
									editor :
									{
										xtype : 'combobox',
										store : Ext.create('EvolveQueryEditor.store.SortingTypeStore'),
										editable : false,
										queryMode : 'local',
										displayField : 'sortingType',
										valueField : 'sortingTypeId'
									},
									renderer : me.onRendererSortType
								}
							]
						},
						{
							xtype : 'container',
							layout :
							{
								type : 'vbox',
								align : 'right'
							},
							items : [
								{
									xtype : 'button',
									text : 'Up',
									width: 50,
									listeners :
									{
										click :
										{
											fn : me.onSortingUp,
											scope : me
										}
									}
								},
								{
									xtype : 'button',
									text : 'down',
									width: 50,
									listeners :
									{
										click :
										{
											fn : me.onSortingDown,
											scope : me
										}
									}
								},
								{
									xtype : 'button',
									text : 'Top',
									width: 50,
									listeners :
									{
										click :
										{
											fn : me.onSortingTop,
											scope : me
										}
									}
								},
								{
									xtype : 'button',
									text : 'Bottom',
									width: 50,
									listeners :
									{
										click :
										{
											fn : me.onSortingBottom,
											scope : me
										}
									}
								}
							]
						}
					],
					buttonAlign : 'center',
					buttons : [
						{
							text : 'OK',
							listeners :
							{
								click :
								{
									fn : me.onClickOK,
									scope : me
								}
							}
						},
						{
							text : 'Cancel',
							scope : me,
							handler : me.close
						}
					]
				}
			]
		}
		);

		me.callParent(arguments);
	},

	onRendererSortType : function (value)
	{
		switch (value)
		{
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

	onClickOK : function ()
	{
		return null;
	},

	sortStore : function (getExchangedRowIndex)
	{
		var grid = this.down('#sortingGrid');
		var selectedRecord = grid.getSelectionModel().getSelection()[0];
		if (selectedRecord == undefined)
			return;

		var store = grid.store;
		var exchangedRowIndex = getExchangedRowIndex(store.indexOf(selectedRecord), store);

		store.remove(selectedRecord);
		store.insert(exchangedRowIndex, selectedRecord);

		grid.getSelectionModel().deselectAll();
	},

	onSortingUp : function ()
	{
		this.sortStore(function (selectedRowIndex, store)
		{
			return selectedRowIndex == 0 ? 0 : selectedRowIndex - 1;
		}
		);
	},

	onSortingDown : function ()
	{
		this.sortStore(function (selectedRowIndex, store)
		{
			return selectedRowIndex == store.getCount() - 1 ? store.getCount() - 1 : selectedRowIndex + 1;
		}
		);
	},

	onSortingTop : function ()
	{
		this.sortStore(function (selectedRowIndex, store)
		{
			return 0;
		}
		);
	},

	onSortingBottom : function ()
	{
		this.sortStore(function (selectedRowIndex, store)
		{
			return store.getCount() - 1;
		}
		);
	}
}
);
