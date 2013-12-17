Ext.define('EvolveQueryEditor.view.OutputFieldSortingList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.outputFieldSortingList',

	title : 'All outputField',

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
		me.cellEditing = new Ext.grid.plugin.CellEditing({
				clicksToEdit : 1
			});

		Ext.applyIf(me, {
			plugins : [me.cellEditing],

			store : Ext.create('Ext.data.Store', {
				// model: ['EvolveQueryEditor.model.OutputFieldModel'],
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
				],
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
				]
			}),
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
					menuDisabled : true,
				}, {
					text : 'Extraction Type',
					dataIndex : 'extractionTypeDescription',
					width : 150,
					sortable : false,
					menuDisabled : true,
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
					renderer : this.onRendererSortType
				}
			],
			// listeners :
			// {
			// drop : function ()
			// {
			// 		console.log('drop');
			// }
			// }
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
