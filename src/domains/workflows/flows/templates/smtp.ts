export const smtp = {
    "$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
    "name": "SMTP",
    "id": "com.tuvalsoft.broker.smtp",
    "description": "Send Mail",
    "appliesTo": ["bpmn:ServiceTask"],
    "documentationRef": "https://realmocean.com/docs/providers/orgProvider",
    "icon": {
        "contents": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFOENCM0Y3NDM0N0YxMUUzOUNEMTlBMEYzNzgzNUYyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTVGMEI4ODZFQjMxMUUzODdBQUUwNDJBRjdDMTBFNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTVGMEI4NzZFQjMxMUUzODdBQUUwNDJBRjdDMTBFNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNEI5ODQ3QTZFQjIxMUUzODdBQUUwNDJBRjdDMTBFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNEI5ODQ3QjZFQjIxMUUzODdBQUUwNDJBRjdDMTBFNiIvPiA8L3JkZjpEZXNjcmlw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"
    },
    "properties": [
        {
            "label": "Type",
            "id": "connectionId",
            "group": "Connection",
            "description": "Choose the connection.",
            "value": "Default",
            "type": "Dropdown",
            "choices": [
                {
                    "name": "Default",
                    "value": "Default"
                },
                {
                    "name": "Server 1",
                    "value": "Server1"
                },
                {
                    "name": "Server 2",
                    "value": "Server2"
                },

            ],
            "binding": {
                "type": "zeebe:input",
                "name": "authentication.type"
            }
        },
        {
            "type": "Hidden",
            "value": "io.camunda:my-connector:1",
            "binding": {
                "type": "zeebe:taskDefinition:type"
            }
        }, {
            "label": "Calendar",
            "type": "String",
            "binding": {
                "type": "zeebe:input",
                "name": "calendar"
            },
            "constraints": {
                "notEmpty": true
            }
        }, {
            "label": "Start Date",
            "type": "String",
            "binding": {
                "type": "zeebe:input",
                "name": "startDate"
            },
            "constraints": {
                "notEmpty": true
            }
        }, {
            "label": "SLA",
            "type": "String",
            "binding": {
                "type": "zeebe:input",
                "name": "sla"
            },
            "constraints": {
                "notEmpty": true
            }
        }, {
            "label": "Async before?",
            "type": "Boolean",
            "binding": {
                "type": "property",
                "name": "camunda:asyncBefore"
            }
        }]
}