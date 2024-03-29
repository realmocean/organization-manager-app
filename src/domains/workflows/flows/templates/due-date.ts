export const due_date = {
    "$schema" : "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
    "name" : "Hey Due Date",
    "id" : "a41a12d5-17aa-4860-a349-b3a29371e390",
    "description" : "Hey Due Date for Camunda",
    "appliesTo" : [ "bpmn:ServiceTask", "bpmn:StartEvent" ],
    "documentationRef" : "https://github.com/francav/hey-duedate",
    "icon" : {
      "contents" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADaCAYAAADAHVzbAAAACXBIWXMAAC4jAAAuIwF4pT92AAATdklEQVR4nO3dW2xbyXkH8I8XiaRIirrfbFmyJMe7XsteX3Y33k27lzYFWmQTIA/tUx8KBC2SAO1DAvSp6EOAAkmThxZFiyRA0RZo0QuaFuvdYG3D2ew6u5K38a4t+bK2YtmWLFmyZFESRfEiXoo51JGPjs45nCGHE1vn/wMOKEvi0ZDmx2/mm+Ecz6Gx4msEALV02U9E7+EpBqip1714fgFqD4EGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASiAQANQAIEGoAACDUABBBqAAgg0AAUQaAAKINAAFECgASjg341Psief02796SRF/R56NlTd+RK5It1M5qjgLT1duWBYuy36avP0GdvPeAu5rZ/1BLzUE/TRbDpPs5mC9r1fd7tOxuoqOl/B46Ob63mK+xu0f9eq3U+C3fvINrEg+dFzsarPs5Yv0ntLG/S9e2mKS2obry93BOjNjgCdaNz5gv75UpZ+Fs/TWwtZpW062einr+9tsGyTiK9dT9Ko2qb/WngOjRWLu+1B+VNr2m3LxC+12796eYhO7d8r5dzJ7Ab98ZUlurW2QanmLu17st6J9YwRis9pt68l79G3XztGnZGGsvedfLRCfzGZVtKuP/AsaO2qVjKbo6/8y7u0ePg3tDNthKt/Q3xCve6KMdrI5Iy0c4Xr6+j7w20U9df2qftSV5j++kuvcAUZM9Aaox8ea9fuV0snmgJSgoz58N5cTdv6JNmVgZavD2pHsqtfO67evS/1/N1BH/2+f0kbq+jjlWqwjMEOljHY8WZ2mv7y2WbhM0b8Xvr2YISObjzSzqOft1r6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"
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