define("UsrYatch_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYatch"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "977b3e43-30d4-4a07-b383-44180c2dfabe",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "RegNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRegnumber_rdoopp9",
					"control": "$PDS_UsrRegnumber_rdoopp9",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YachtPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceperday_c9ko3b0",
					"control": "$PDS_UsrPriceperday_c9ko3b0",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrYatchStatus_h5gm7rb",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrYatchStatus_h5gm7rb",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_g44kowp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g44kowp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "YachtStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtDriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_o7mkx5o",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_o7mkx5o",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_nf6it4w",
					"control": "$PDS_UsrLength_nf6it4w",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_lh0ajjj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_lh0ajjj",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Crewcount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewcount_753y7tj",
					"control": "$PDS_UsrCrewcount_753y7tj",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_x7sbjx9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_x7sbjx9",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Passengercount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengercount_6yjj9ro",
					"control": "$PDS_UsrPassengercount_6yjj9ro",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_61kjll6",
					"control": "$PDS_UsrComment_61kjll6",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceperday_c9ko3b0": {
						"modelConfig": {
							"path": "PDS.UsrPriceperday"
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrDriveType_o7mkx5o": {
						"modelConfig": {
							"path": "PDS.UsrDriveTypes"
						}
					},
					"PDS_UsrDriveType_o7mkx5o_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrYatchStatus_h5gm7rb": {
						"modelConfig": {
							"path": "PDS.UsrYatchStatus"
						}
					},
					"PDS_UsrYatchStatus_h5gm7rb_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": []
							}
						}
					},
					"PDS_UsrLength_nf6it4w": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrCrewcount_753y7tj": {
						"modelConfig": {
							"path": "PDS.UsrCrewcount"
						}
					},
					"PDS_UsrPassengercount_6yjj9ro": {
						"modelConfig": {
							"path": "PDS.UsrPassengercount"
						}
					},
					"PDS_UsrCaptain_lh0ajjj": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_lh0ajjj_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_x7sbjx9": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_x7sbjx9_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_61kjll6": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrRegnumber_rdoopp9": {
						"modelConfig": {
							"path": "PDS.UsrRegnumber"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYatch"
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});