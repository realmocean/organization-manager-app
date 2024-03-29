export const tracer = {
    "$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
    "name": "Tracer",
    "id": "com.tuvalsoft.broker.tracer",
    "description": "Create entry when error occured",
    "appliesTo": ["bpmn:ServiceTask"],
    "documentationRef": "https://realmocean.com/docs/providers/orgProvider",
    "icon": {
        "contents": "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NSA2NSI+CiAgPGc+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTQ0LjIyLDYuOTFIMTkuNjRhNC41LDQuNSwwLDAsMC00LjMsNC42NlY1My40M2E0LjQ5LDQuNDksMCwwLDAsNC4zLDQuNjVINDkuNzlhNC40OSw0LjQ5LDAsMCwwLDQuMzEtNC42NVYxNy41OEw0NC4yMiw2LjkyWk0xOS42NCw1My40M1YxMS41N0g0MS4xOHY5LjNoOC42MVY1My40M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBzdHlsZT0iZmlsbDogIzIxMjkzMiIvPgogICAgICA8cGF0aCBkPSJNNiwzMi41M0E5LjI0LDkuMjQsMCwwLDEsNy45MywzNGE3LjEsNy4xLDAsMCwxLDEuNDgsMi4xMSwxMS44MiwxMS44MiwwLDAsMSwuOTEsMywyNi4xMSwyNi4xMSwwLDAsMSwuMyw0LjI2djcuMThjMCwyLjEuMDUsMy44Ni4xMyw1LjI2YTguMzMsOC4zMywwLDAsMCwuODQsMy40MiwzLjkxLDMuOTEsMCwwLDAsMi4xOSwxLjg1LDEyLjkyLDEyLjkyLDAsMCwwLDQuMjMuNTRWNjVoLS41M2ExNi44MiwxNi44MiwwLDAsMS01LjM4LS43NCw3Ljc5LDcuNzksMCwwLDEtMy40LTIuMTRBOC4wOSw4LjA5LDAsMCwxLDcsNTguNTlhMjAuNCwyMC40LDAsMCwxLS41MS00Ljc5di0xM2E3LjgzLDcuODMsMCwwLDAtLjM3LTIuMzgsNiw2LDAsMCwwLTEuMTctMi4xMSw2LjM1LDYuMzUsMCwwLDAtMi0xLjU0QTYuNDUsNi40NSwwLDAsMCwwLDM0LjE0VjMwLjg2YTYuMzIsNi4zMiwwLDAsMCwyLjg5LS42MSw2LjM1LDYuMzUsMCwwLDAsMi0xLjU0QTYsNiwwLDAsMCw2LjA4LDI2LjZhNy44Myw3LjgzLDAsMCwwLC4zNy0yLjM4di0xM0EyMC40NSwyMC40NSwwLDAsMSw3LDYuMzcsOC4xLDguMSwwLDAsMSw4LjcsMi44OCw3Ljc0LDcuNzQsMCwwLDEsMTIuMS43NCwxNi44MiwxNi44MiwwLDAsMSwxNy40OCwwSDE4VjMuMzVhMTIuOTIsMTIuOTIsMCwwLDAtNC4yMy41NCwzLjkxLDMuOTEsMCwwLDAtMi4xOSwxLjg1LDguMzMsOC4zMywwLDAsMC0uODQsMy40MmMtLjA5LDEuNDEtLjEzLDMuMTYtLjEzLDUuMjZWMjEuNmEyNi41OSwyNi41OSwwLDAsMS0uMyw0LjI5QTExLjc4LDExLjc4LDAsMCwxLDkuNDEsMjlhNy4xLDcuMSwwLDAsMS0xLjQ4LDIuMTFBOS4xOSw5LjE5LDAsMCwxLDYsMzIuNTNabTU3LjUxLDBhOS41LDkuNSwwLDAsMC0yLDEuNDUsNy4xLDcuMSwwLDAsMC0xLjQ4LDIuMTEsMTIuMjIsMTIuMjIsMCwwLDAtLjkxLDMsMjYuMTEsMjYuMTEsMCwwLDAtLjMsNC4yNnY3LjE4YzAsMi4xLDAsMy44Ni0uMTMsNS4yNmE4LjMzLDguMzMsMCwwLDEtLjg0LDMuNDIsMy44NywzLjg3LDAsMCwxLTIuMTksMS44NSwxMi44OCwxMi44OCwwLDAsMS00LjIzLjU0VjY1SDUyYTE2Ljc2LDE2Ljc2LDAsMCwwLDUuMzctLjc0LDcuNzQsNy43NCwwLDAsMCwzLjQtMi4xNCw4LjEsOC4xLDAsMCwwLDEuNzUtMy41M0EyMSwyMSwwLDAsMCw2Myw1My44di0xM2E3LjgzLDcuODMsMCwwLDEsLjM3LTIuMzgsNS44OCw1Ljg4LDAsMCwxLDEuMTgtMi4xMSw2LjMxLDYuMzEsMCwwLDEsMi0xLjU0LDYuNDUsNi40NSwwLDAsMSwyLjg5LS42MVYzMC44NmE2LjIxLDYuMjEsMCwwLDEtNC45LTIuMTUsNS44OCw1Ljg4LDAsMCwxLTEuMTgtMi4xMUE3LjczLDcuNzMsMCwwLDEsNjMsMjQuMjJ2LTEzYTIxLDIxLDAsMCwwLS41LTQuODMsOC4xMSw4LjExLDAsMCwwLTEuNzUtMy40OUE3Ljc0LDcuNzQsMCwwLDAsNTcuMzcuNzQsMTYuNzYsMTYuNzYsMCwwLDAsNTIsMGgtLjU0VjMuMzVhMTIuODQsMTIuODQsMCwwLDEsNC4yMy41NCwzLjg3LDMuODcsMCwwLDEsMi4xOSwxLjg1LDguMzMsOC4zMywwLDAsMSwuODQsMy40MmMuMDksMS40MS4xMywzLjE2LjEzLDUuMjZWMjEuNmEyNi41OSwyNi41OSwwLDAsMCwuMyw0LjI5QTEyLjE4LDEyLjE4LDAsMCwwLDYwLjA2LDI5YTcuMjksNy4yOSwwLDAsMCwxLjQ4LDIuMTEsOS40NSw5LjQ1LDAsMCwwLDIsMS40NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBzdHlsZT0iZmlsbDogIzIxMjkzMiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxlbGxpcHNlIGN4PSIzOS44IiBjeT0iNDYuNTUiIHJ4PSIxNi45NyIgcnk9IjE2Ljk0IiBzdHlsZT0iZmlsbDogI2QwM2Y0MCIvPgogICAgICA8cGF0aCBkPSJNMzYuOTIsMzUuNTVoNi41NVY0MC42TDQyLjIsNTAuNzZIMzguMTVMMzYuOTIsNDAuNlYzNS41NVptLjIzLDE2Ljc2aDYuMTF2NS40M0gzNy4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBzdHlsZT0iZmlsbDogI2ZmZiIvPgogICAgPC9nPgogICA8L2c+CiAgCjwvc3ZnPgo="
    },
    "properties": [{
        "type": "Hidden",
        "value": "io.camunda:my-connector:1",
        "binding": {
            "type": "zeebe:taskDefinition:type"
        }
    }, {
        "label": "Entry Title",
        "type": "String",
        "binding": {
            "type": "zeebe:input",
            "name": "entry_title"
        },
        "constraints": {
            "notEmpty": true
        }
    },
    {
        "label": "Entry Body",
        "type": "String",
        "binding": {
            "type": "zeebe:input",
            "name": "entry_body"
        },
        "constraints": {
            "notEmpty": true
        }
    }
    ]
}