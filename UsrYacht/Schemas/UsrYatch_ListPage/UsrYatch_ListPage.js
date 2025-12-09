define("UsrYatch_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYatch"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYatch"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 222
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "143e2d64-2550-4e0e-2053-3b1a93a66dde",
							"code": "PDS_UsrPriceperday",
							"caption": "#ResourceString(PDS_UsrPriceperday)#",
							"dataValueType": 31
						},
						{
							"id": "fa2f41ba-8b4f-16d7-f5eb-e61a8c9f2376",
							"code": "PDS_UsrDriveTypes",
							"caption": "#ResourceString(PDS_UsrDriveTypes)#",
							"dataValueType": 10
						},
						{
							"id": "37735ff1-dd2a-5277-69b6-93172eff1abf",
							"code": "PDS_UsrYatchStatus",
							"caption": "#ResourceString(PDS_UsrYatchStatus)#",
							"dataValueType": 10
						},
						{
							"id": "19403eb3-fdec-871a-7190-20833eed78ca",
							"code": "PDS_UsrPassengercount",
							"caption": "#ResourceString(PDS_UsrPassengercount)#",
							"dataValueType": 4
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYatch",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_UsrPriceperday": {
						"modelConfig": {
							"path": "PDS.UsrPriceperday"
						}
					},
					"PDS_UsrDriveTypes": {
						"modelConfig": {
							"path": "PDS.UsrDriveTypes"
						}
					},
					"PDS_UsrYatchStatus": {
						"modelConfig": {
							"path": "PDS.UsrYatchStatus"
						}
					},
					"PDS_UsrPassengercount": {
						"modelConfig": {
							"path": "PDS.UsrPassengercount"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYatch",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"UsrPriceperday": {
							"path": "UsrPriceperday"
						},
						"UsrDriveTypes": {
							"path": "UsrDriveTypes"
						},
						"UsrYatchStatus": {
							"path": "UsrYatchStatus"
						},
						"UsrPassengercount": {
							"path": "UsrPassengercount"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});