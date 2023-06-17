const mongodb = {
    "fieldMap": {
        "_agentId": {
            "defaultValue": "",
            "fieldId": "_agentId",
            "helpKey": "connection._agentId",
            "id": "_agentId",
            "isLoggable": true,
            "label": "Agent",
            "name": "/_agentId",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "agents",
            "type": "selectresource",
            "visibleWhen": [
                {
                    "field": "mode",
                    "is": [
                        "onpremise"
                    ]
                }
            ]
        },
        "application": {
            "defaultDisabled": true,
            "defaultValue": "MongoDB",
            "fieldId": "application",
            "helpKey": "connection.application",
            "id": "application",
            "isLoggable": true,
            "label": "Application",
            "name": "/application",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mode": {
            "defaultValue": "cloud",
            "helpKey": "connection.mode",
            "id": "mode",
            "isLoggable": true,
            "label": "Mode",
            "name": "/mode",
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
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "radiogroup"
        },
        "mongodb.authSource": {
            "defaultValue": "",
            "fieldId": "mongodb.authSource",
            "helpKey": "connection.mongodb.authSource",
            "id": "mongodb.authSource",
            "label": "Auth source",
            "name": "/mongodb/authSource",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mongodb.database": {
            "defaultValue": "",
            "fieldId": "mongodb.database",
            "helpKey": "connection.mongodb.database",
            "id": "mongodb.database",
            "isLoggable": true,
            "label": "Database",
            "name": "/mongodb/database",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mongodb.host": {
            "fieldId": "mongodb.host",
            "helpKey": "connection.mongodb.host",
            "id": "mongodb.host",
            "isLoggable": true,
            "label": "Host(s)",
            "name": "/mongodb/host",
            "omitWhenValueIs": [
                ""
            ],
            "required": true,
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mongodb.password": {
            "defaultValue": "",
            "description": "Note: for security reasons this field must always be re-entered.",
            "fieldId": "mongodb.password",
            "helpKey": "connection.mongodb.password",
            "id": "mongodb.password",
            "inputType": "password",
            "label": "Password",
            "name": "/mongodb/password",
            "required": true,
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mongodb.replicaSet": {
            "defaultValue": "",
            "fieldId": "mongodb.replicaSet",
            "helpKey": "connection.mongodb.replicaSet",
            "id": "mongodb.replicaSet",
            "isLoggable": true,
            "label": "Replica set",
            "name": "/mongodb/replicaSet",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "mongodb.ssl": {
            "defaultValue": false,
            "fieldId": "mongodb.ssl",
            "helpKey": "connection.mongodb.ssl",
            "id": "mongodb.ssl",
            "isLoggable": true,
            "label": "TLS/SSL",
            "name": "/mongodb/ssl",
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "checkbox"
        },
        "mongodb.username": {
            "defaultValue": "",
            "fieldId": "mongodb.username",
            "helpKey": "connection.mongodb.username",
            "id": "mongodb.username",
            "label": "Username",
            "name": "/mongodb/username",
            "required": true,
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        },
        "name": {
            "defaultDisabled": false,
            "defaultValue": "",
            "fieldId": "name",
            "helpKey": "connection.name",
            "id": "name",
            "isLoggable": true,
            "label": "Name",
            "name": "/name",
            "required": true,
            "resourceId": "new-KyBbyx924NI",
            "resourceType": "connections",
            "type": "text"
        }
    }
}
