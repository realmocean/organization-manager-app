export const google_drive = {
    "$schema" : "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
    "name" : "Google Drive",
    "id" : "com.tuvalsoft.broker.googledrive",
    "description" : "Create folder or file on your google drive space",
    "appliesTo" : [ "bpmn:ServiceTask" ],
    "documentationRef" : "https://realmocean.com/docs/providers/orgProvider",
    "icon" : {
      "contents" : "data:image/svg+xml;utf8,%3Csvg width='18' height='18' viewBox='0 0 87.3 78' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z' fill='%230066da'/%3E%3Cpath d='m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z' fill='%2300ac47'/%3E%3Cpath d='m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z' fill='%23ea4335'/%3E%3Cpath d='m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z' fill='%2300832d'/%3E%3Cpath d='m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z' fill='%232684fc'/%3E%3Cpath d='m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z' fill='%23ffba00'/%3E%3C/svg%3E"
    },
    "properties" : [ {
      "type" : "Hidden",
      "value" : "io.camunda:my-connector:1",
      "binding" : {
        "type" : "zeebe:taskDefinition:type"
      }
    }, {
      "label" : "Calendar",
      "type" : "String",
      "binding" : {
        "type" : "zeebe:input",
        "name" : "calendar"
      },
      "constraints" : {
        "notEmpty" : true
      }
    }, {
      "label" : "Start Date",
      "type" : "String",
      "binding" : {
        "type" : "zeebe:input",
        "name" : "startDate"
      },
      "constraints" : {
        "notEmpty" : true
      }
    }, {
      "label" : "SLA",
      "type" : "String",
      "binding" : {
        "type" : "zeebe:input",
        "name" : "sla"
      },
      "constraints" : {
        "notEmpty" : true
      }
    }, {
      "label" : "Async before?",
      "type" : "Boolean",
      "binding" : {
        "type" : "property",
        "name" : "camunda:asyncBefore"
      }
    } ]
  }