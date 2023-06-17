const mssql =
{
    "fieldMap": {
        "name": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "text",
            "label": "Name",
            "defaultDisabled": false,
            "required": true,
            "fieldId": "name",
            "id": "name",
            "name": "/name",
            "defaultValue": "",
            "helpKey": "connection.name"
        },
        "application": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "id": "application",
            "type": "text",
            "label": "Application",
            "defaultValue": "Microsoft SQL",
            "defaultDisabled": true,
            "fieldId": "application",
            "name": "/application",
            "helpKey": "connection.application"
        },
        "mode": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "id": "mode",
            "type": "radiogroup",
            "label": "Mode",
            "isLoggable": true,
            "defaultValue": "cloud",
            "options": [
                {
                    "items": [
                        {
                            "label": "Cloud",
                            "value": "cloud"
                        },
                        {
                            "label": "On-premise",
                            "value": "onpremise"
                        }
                    ]
                }
            ],
            "name": "/mode",
            "helpKey": "connection.mode"
        },
        "_agentId": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "agents",
            "isLoggable": true,
            "type": "selectresource",
            "label": "Agent",
            "fieldId": "_agentId",
            "visibleWhen": [
                {
                    "field": "mode",
                    "is": [
                        "onpremise"
                    ]
                }
            ],
            "id": "_agentId",
            "name": "/_agentId",
            "defaultValue": "",
            "helpKey": "connection._agentId"
        },
        "rdbms.version": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "select",
            "label": "SQL server version",
            "required": true,
            "visibleWhen": [
                {
                    "field": "type",
                    "is": [
                        "mssql"
                    ]
                }
            ],
            "options": [
                {
                    "items": [
                        {
                            "label": "SQL Server 2008 R2 (Not supported by Microsoft)",
                            "value": "SQL Server 2008 R2"
                        },
                        {
                            "label": "SQL Server 2012",
                            "value": "SQL Server 2012"
                        },
                        {
                            "label": "SQL Server 2014",
                            "value": "SQL Server 2014"
                        },
                        {
                            "label": "SQL Server 2016",
                            "value": "SQL Server 2016"
                        },
                        {
                            "label": "SQL Server 2017",
                            "value": "SQL Server 2017"
                        },
                        {
                            "label": "Azure",
                            "value": "Azure"
                        }
                    ]
                }
            ],
            "fieldId": "rdbms.version",
            "helpKey": "mssql.connection.rdbms.version",
            "id": "rdbms.version",
            "name": "/rdbms/version",
            "defaultValue": ""
        },
        "rdbms.host": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "text",
            "label": "Host",
            "required": true,
            "fieldId": "rdbms.host",
            "id": "rdbms.host",
            "name": "/rdbms/host",
            "defaultValue": "",
            "helpKey": "connection.rdbms.host"
        },
        "rdbms.database": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "text",
            "label": "Database name",
            "required": true,
            "fieldId": "rdbms.database",
            "id": "rdbms.database",
            "name": "/rdbms/database",
            "defaultValue": "",
            "helpKey": "connection.rdbms.database"
        },
        "rdbms.user": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "type": "text",
            "label": "Username",
            "required": true,
            "fieldId": "rdbms.user",
            "id": "rdbms.user",
            "name": "/rdbms/user",
            "defaultValue": "",
            "helpKey": "connection.rdbms.user"
        },
        "rdbms.password": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "type": "text",
            "label": "Password",
            "required": true,
            "inputType": "password",
            "defaultValue": "",
            "description": "Note: for security reasons this field must always be re-entered.",
            "fieldId": "rdbms.password",
            "requiredWhen": [
                {
                    "field": "rdbms.useSSL",
                    "is": [
                        ""
                    ]
                },
                {
                    "field": "rdbms.ssl.ca",
                    "is": [
                        ""
                    ]
                },
                {
                    "field": "rdbms.ssl.key",
                    "is": [
                        ""
                    ]
                },
                {
                    "field": "rdbms.ssl.cert",
                    "is": [
                        ""
                    ]
                }
            ],
            "id": "rdbms.password",
            "name": "/rdbms/password",
            "helpKey": "connection.rdbms.password"
        },
        "rdbms.instanceName": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "text",
            "label": "Instance name",
            "visibleWhen": [
                {
                    "field": "type",
                    "is": [
                        "mssql"
                    ]
                }
            ],
            "fieldId": "rdbms.instanceName",
            "id": "rdbms.instanceName",
            "name": "/rdbms/instanceName",
            "defaultValue": "",
            "helpKey": "connection.rdbms.instanceName"
        },
        "rdbms.port": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "type": "text",
            "label": "Port",
            "validWhen": {
                "fallsWithinNumericalRange": {
                    "min": 0,
                    "max": 65535
                }
            },
            "fieldId": "rdbms.port",
            "id": "rdbms.port",
            "name": "/rdbms/port",
            "defaultValue": "",
            "helpKey": "connection.rdbms.port"
        },
        "rdbms.options": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "type": "keyvalue",
            "keyName": "name",
            "valueName": "value",
            "valueType": "keyvalue",
            "label": "Configure properties",
            "fieldId": "rdbms.options",
            "id": "rdbms.options",
            "name": "/rdbms/options",
            "defaultValue": "",
            "helpKey": "connection.rdbms.options"
        },
        "_borrowConcurrencyFromConnectionId": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "filter": {
                "$and": [
                    {
                        "_id": {
                            "$ne": "new-KaRnUvxe5u9"
                        }
                    },
                    {
                        "rdbms.type": "mssql"
                    }
                ]
            },
            "type": "selectresource",
            "label": "Borrow concurrency from",
            "fieldId": "_borrowConcurrencyFromConnectionId",
            "id": "_borrowConcurrencyFromConnectionId",
            "name": "/_borrowConcurrencyFromConnectionId",
            "defaultValue": "",
            "helpKey": "connection._borrowConcurrencyFromConnectionId"
        },
        "rdbms.concurrencyLevel": {
            "resourceId": "new-KaRnUvxe5u9",
            "resourceType": "connections",
            "isLoggable": true,
            "label": "Concurrency level",
            "type": "select",
            "options": [
                {
                    "items": [
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        },
                        {
                            "label": "5",
                            "value": 5
                        },
                        {
                            "label": "6",
                            "value": 6
                        },
                        {
                            "label": "7",
                            "value": 7
                        },
                        {
                            "label": "8",
                            "value": 8
                        },
                        {
                            "label": "9",
                            "value": 9
                        },
                        {
                            "label": "10",
                            "value": 10
                        },
                        {
                            "label": "11",
                            "value": 11
                        },
                        {
                            "label": "12",
                            "value": 12
                        },
                        {
                            "label": "13",
                            "value": 13
                        },
                        {
                            "label": "14",
                            "value": 14
                        },
                        {
                            "label": "15",
                            "value": 15
                        },
                        {
                            "label": "16",
                            "value": 16
                        },
                        {
                            "label": "17",
                            "value": 17
                        },
                        {
                            "label": "18",
                            "value": 18
                        },
                        {
                            "label": "19",
                            "value": 19
                        },
                        {
                            "label": "20",
                            "value": 20
                        },
                        {
                            "label": "21",
                            "value": 21
                        },
                        {
                            "label": "22",
                            "value": 22
                        },
                        {
                            "label": "23",
                            "value": 23
                        },
                        {
                            "label": "24",
                            "value": 24
                        },
                        {
                            "label": "25",
                            "value": 25
                        }
                    ]
                }
            ],
            "visibleWhen": [
                {
                    "field": "_borrowConcurrencyFromConnectionId",
                    "is": [
                        ""
                    ]
                }
            ],
            "fieldId": "rdbms.concurrencyLevel",
            "id": "rdbms.concurrencyLevel",
            "name": "/rdbms/concurrencyLevel",
            "defaultValue": "",
            "helpKey": "connection.rdbms.concurrencyLevel"
        }
    }
}