export const brokers = [
    {
      "$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
      "name": "Procetra Connector",
      "id": "io.camunda.connectors.HttpJson.v2",
      "description": "Invoke REST API",
      "icon": {
        "contents": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjIxLjgwMTcxIgogICBoZWlnaHQ9IjE5Ny4wODUxIgogICB2aWV3Qm94PSIwIDAgMjIxLjgwMTcxIDE5Ny4wODUxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnODciCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ29fcHJvY2V0cmFfLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcyMCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNzY3IgogICBpbmtzY2FwZTpjeD0iMjE4LjM4MzMxIgogICBpbmtzY2FwZTpjeT0iOTguNDM1NDYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE0NTQiCiAgIGlua3NjYXBlOndpbmRvdy15PSIxNjIiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg3IiAvPgo8ZGVzYwogICBpZD0iZGVzYzY2Ij5DcmVhdGVkIHdpdGggRmFicmljLmpzIDMuNS4wPC9kZXNjPgo8ZGVmcwogICBpZD0iZGVmczY4Ij4KPC9kZWZzPgoKPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjkwMDg2LDk4LjU0MjU0OCkiCiAgIGlkPSJMYXllcl8xIj4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNkMDNmNDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyMS44OTUsLTI5Ny42NCkiCiAgIGQ9Ik0gNDEyLjM3LDM4OC45IEggMjMyLjQyIGMgLTcuMzEsMCAtMTMuMjMsLTUuOTIgLTEzLjIzLC0xMy4yMyBWIDIxOS42MSBjIDAsLTcuMzEgNS45MiwtMTMuMjMgMTMuMjMsLTEzLjIzIGggMTc4Ljk1IGMgNy4zMSwwIDEzLjIzLDUuOTIgMTMuMjMsMTMuMjMgdiAxNTcuMDYgYyAtMC4wMSw2Ljc1IC01LjQ4LDEyLjIzIC0xMi4yMywxMi4yMyB6IgogICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgIGlkPSJwYXRoNzIiIC8+CjwvZz4KPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjg5MTE2LDk4LjA4NzU0OCkiCiAgIGlkPSJnNzciPgo8cGF0aAogICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIxLjg4NTYsLTI5Ny4yMTgyKSIKICAgZD0ibSA0MDQuMSwyNjYuMjcgYyAtMC4wOCwtNC4wNCAtMC4yNSwtOC4zMSAtMC45NiwtMTIuMjUgLTEuNzksLTkuOTggLTYuMzMsLTE3LjI2IC0xMy44NywtMjIuMjcgLTUuODUsLTMuODggLTEyLjcxLC01LjY5IC0yMS41NiwtNS42OSAtMjEuMTUsMC4wMiAtNDIuMjQsMC4wMyAtNjMuMzMsMC4wMyBoIC01Mi42OSBjIC02LjcsMCAtMTIuMTMsNS45OSAtMTIuMTMsMTMuMzggdiAxMjQuNjIgYyAwLDIuMzUgMS43Miw0LjI1IDMuODUsNC4yNSBoIDE1Ljc3IGMgMi4xMywwIDMuODUsMC40NiAzLjg1LC0xLjg5IHYgLTMxLjAzIGMgMCwtMC40NCAwLjA0LC0wLjg2IDAuMTIsLTEuMjggdiAtMzUuODYgLTEwLjQxIC0zMi45MSBjIDAsLTMuNjggMi42MSwtNi43MSA1Ljk0LC02LjkxIHYgMCBjIDAuNSwtMC4wMyAwLjk2LC0wLjA2IDEuNDIsLTAuMDYgaCAxMC4yNiAyOS44NyBjIDE2LjMzLDAgMzIuNjcsMCA0OS4wMSwtMC4wMiA1LjI5LDAgOS42NCwxLjMzIDEzLjM0LDQuMDYgNS4yMiwzLjg1IDguMDEsOS40OCA4LjA3LDE2LjI3IDAuMDUsNi4xIDAuMDUsMTEuMTUgMCwxNS44OSAtMC4xMiwxMC44MiAtNy4wNiwxOS4wNiAtMTYuODcsMjAuMDQgLTIuMDQsMC4yIC00LjA2LDAuMzEgLTYuMDIsMC4zMSAtMTAuMjksMC4wMSAtMjAuNTksMC4wMSAtMzAuODgsMC4wMSAtNS41NywwIC0xMC4wOCw0Ljk4IC0xMC4wOCwxMS4xMiB2IDAgYyAwLDYuMTUgNC41MSwxMS4xMyAxMC4wOSwxMS4xMiAxMS40OCwtMC4wMSAyOS44MywtMC4wNCAzOC45NiwtMC4wOCA0LjU0LC0wLjAyIDkuMTMsLTAuNTYgMTMuNjUsLTEuNjEgOS4wNCwtMi4xIDE1LjQ4LC03LjA0IDE5LjY4LC0xNS4xIDIuOSwtNS41NyA0LjM4LC0xMi4xIDQuNTMsLTE5Ljk5IDAuMTIsLTguMzcgMC4xMywtMTYuMTQgLTAuMDIsLTIzLjc0IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg3NSIgLz4KPC9nPgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjA3OTgsMCwwLDEuMDc5OCw2NC44Mzc2NTksMTY5Ljg0NTA1KSIKICAgaWQ9Imc4MSI+CjxwYXRoCiAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkuMjM1LC0zNjMuNjcpIgogICBkPSJtIDI5MC44NSwzNjkuMjIgdiAtMC4zNiBjIC0wLjk2LC02LjExIC01Ljc4LC0xMC43NSAtMTEuNTksLTEwLjc1IC01LjkzLDAgLTEwLjgxLDQuODMgLTExLjY0LDExLjEyIGggMjMuMjMgeiIKICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICBpZD0icGF0aDc5IiAvPgo8L2c+CjxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDc5OCwwLDAsMS4wNzk4LDEzMi4yODYxNiwxMTkuMTQxMDUpIgogICBpZD0iZzg1Ij4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42OTg4LC0zMTYuNzE1KSIKICAgZD0ibSA0MDQuMjMsMzQ2LjM0IGggLTEuNjEgLTI5Ljg3IGMgLTE2LjMzLDAgLTMyLjY3LDAgLTQ5LjAxLDAuMDIgLTUuMjksMCAtOS42NCwtMS4zMyAtMTMuMzQsLTQuMDYgLTUuMjIsLTMuODUgLTguMDEsLTExLjg0IC04LjA3LC0xOC42MyAtMC4wNSwtNi4xIC0wLjA1LC0xMS4xNSAwLC0xNS44OSAwLjEyLC0xMC44MiA3LjA2LC0xOS4wNiAxNi44NywtMjAuMDUgMi4wNCwtMC4yIDQuMDYsLTAuMzEgNi4wMiwtMC4zMSAxMC4xNywtMC4wMSAyMC4zNCwtMC4wMSAzMC41MSwtMC4wMSA0Ljg1LDAgOS4zLC0zLjU4IDEwLjI1LC04LjgzIDEuMjksLTcuMTUgLTMuNjMsLTEzLjQyIC05Ljg4LC0xMy40MSAtMTEuNDgsMC4wMSAtMjkuODMsMC4wNCAtMzguOTYsMC4wOCAtNC41NCwwLjAyIC05LjEzLDAuNTYgLTEzLjY1LDEuNjEgLTkuMDQsMi4xIC0xNS40OCw3LjA0IC0xOS42OCwxNS4xIC0yLjksNS41NyAtNC4zOCwxMi4xIC00LjUzLDE5Ljk5IC0wLjE1LDguMzcgLTAuMTUsMTYuMTMgMCwyMy43MyAwLjA4LDQuMDQgMC4yNSwxMC42NyAwLjk2LDE0LjYxIDEuNzksOS45OCA2LjMzLDE3LjI2IDEzLjg3LDIyLjI3IDUuODUsMy44OCAxMi43MSw1LjcgMjEuNTYsNS43IDIxLjE1LC0wLjAyIDQyLjI0LC0wLjAzIDYzLjMzLC0wLjAzIGggNS4zNyBjIDEwLjk2LDAuMDIgMTkuODYsLTkuNzkgMTkuODYsLTIxLjg5IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg4MyIgLz4KPC9nPgo8L3N2Zz4K"
      },
      "documentationRef": "https://docs.camunda.io/docs/components/modeler/web-modeler/connectors/available-connectors/rest/",
      "category": {
        "id": "connectors",
        "name": "Connectors"
      },
      "appliesTo": [
        "bpmn:ServiceTask"
      ],
      "elementType": {
        "value": "bpmn:ServiceTask"
      },
      "groups": [
        {
          "id": "authentication",
          "label": "Authentication"
        },
        {
          "id": "endpoint",
          "label": "HTTP Endpoint"
        },
        {
          "id": "input",
          "label": "Payload"
        },
        {
          "id": "output",
          "label": "Response Mapping"
        }
      ],
      "properties": [
        {
          "type": "Hidden",
          "value": "io.camunda:http-json:1",
          "binding": {
            "type": "zeebe:taskDefinition:type"
          }
        },
        {
          "label": "Select Operation",
          "id": "authenticationType",
          "group": "authentication",
          "description": "Choose the operation.",
          "value": "mineProcess",
          "type": "Dropdown",
          "choices": [
            {
              "name": "Mine Process",
              "value": "mineProcess"
            },
            {
              "name": "Create Project",
              "value": "createProject"
            },
            {
              "name": "Create Analyse",
              "value": "createAnalyse"
            }
          ],
          "binding": {
            "type": "zeebe:input",
            "name": "authentication.type"
          }
        },

        {
            "label": "Project Name",
            "group": "authentication",
            "type": "String",
            "feel": "optional",
            "binding": {
              "type": "zeebe:input",
              "name": "authentication.token"
            },
            "constraints": {
              "notEmpty": true
            },
            "condition": {
              "property": "authenticationType",
              "equals": "createProject"
            }
          },
      
      ]
    }
   
  ]