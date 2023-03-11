export const parasut = {
    "$schema" : "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
    "name" : "Parasut",
    "id" : "com.tuvalsoft.broker.parasut",
    "description" : "Create folder or file on your google drive space",
    "appliesTo" : [ "bpmn:ServiceTask" ],
    "documentationRef" : "https://realmocean.com/docs/providers/orgProvider",
    "icon" : {
      "contents" : "data:image/png;base64,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"
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