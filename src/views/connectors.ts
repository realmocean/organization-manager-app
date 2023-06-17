export const connector_options = [
  {
    "label": "Databases",
    "options": [
      {
        "value": "redshiftdatawarehouse",
        "type": "redshiftdatawarehouse",
        "label": "Amazon Redshift",
        "keywords": "database,db",
        formData: {
          "title": "Create connection",
          "mode":"create",
          fieldMap: {
            "name": {
              "resourceId": "new-ocrFXPANaY5",
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
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "Amazon Redshift",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "rdbms.redshift.region": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Region",
              "required": true,
              "defaultValue": "us-east-1",
              "options": [
                {
                  "items": [
                    {
                      "label": "US East (N. Virginia) [us-east-1]",
                      "value": "us-east-1"
                    },
                    {
                      "label": "US West (N. California) [us-west-1]",
                      "value": "us-west-1"
                    },
                    {
                      "label": "US West (Oregon) [us-west-2]",
                      "value": "us-west-2"
                    },
                    {
                      "label": "EU (Ireland) [eu-west-1]",
                      "value": "eu-west-1"
                    },
                    {
                      "label": "EU (Frankfurt) [eu-central-1]",
                      "value": "eu-central-1"
                    },
                    {
                      "label": "Asia Pacific (Tokyo) [ap-northeast-1]",
                      "value": "ap-northeast-1"
                    },
                    {
                      "label": "Asia Pacific (Seoul) [ap-northeast-2]",
                      "value": "ap-northeast-2"
                    },
                    {
                      "label": "Asia Pacific (Singapore) [ap-southeast-1]",
                      "value": "ap-southeast-1"
                    },
                    {
                      "label": "Asia Pacific (Sydney) [ap-southeast-2]",
                      "value": "ap-southeast-2"
                    },
                    {
                      "label": "South America (São Paulo) [sa-east-1]",
                      "value": "sa-east-1"
                    },
                    {
                      "label": "China (Beijing) [cn-north-1]",
                      "value": "cn-north-1"
                    },
                    {
                      "label": "US East (Ohio) [us-east-2]",
                      "value": "us-east-2"
                    },
                    {
                      "label": "Canada (Central) [ca-central-1]",
                      "value": "ca-central-1"
                    },
                    {
                      "label": "Asia Pacific (Mumbai) [ap-south-1]",
                      "value": "ap-south-1"
                    },
                    {
                      "label": "EU (London) [eu-west-2]",
                      "value": "eu-west-2"
                    },
                    {
                      "label": "EU (Stockholm) [eu-north-1]",
                      "value": "eu-north-1"
                    }
                  ]
                }
              ],
              "fieldId": "rdbms.redshift.region",
              "id": "rdbms.redshift.region",
              "name": "/rdbms/redshift/region",
              "helpKey": "connection.rdbms.redshift.region"
            },
            "rdbms.redshift.aws.accessKeyId": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "id": "rdbms.redshift.aws.accessKeyId",
              "type": "text",
              "label": "Access Key Id",
              "required": true,
              "fieldId": "rdbms.redshift.aws.accessKeyId",
              "name": "/rdbms/redshift/aws/accessKeyId",
              "defaultValue": "",
              "helpKey": "connection.rdbms.redshift.aws.accessKeyId"
            },
            "rdbms.redshift.aws.secretAccessKey": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "id": "rdbms.redshift.aws.secretAccessKey",
              "type": "text",
              "label": "Secret Access Key",
              "defaultValue": "",
              "required": true,
              "inputType": "password",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "rdbms.redshift.aws.secretAccessKey",
              "name": "/rdbms/redshift/aws/secretAccessKey",
              "helpKey": "connection.rdbms.redshift.aws.secretAccessKey"
            },
            "rdbms.user": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "type": "text",
              "label": "Username",
              "required": true,
              "fieldId": "rdbms.user",
              "helpKey": "connection.rdbms.redshift.user",
              "id": "rdbms.user",
              "name": "/rdbms/user",
              "defaultValue": ""
            },
            "rdbms.database": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Database name",
              "required": true,
              "fieldId": "rdbms.database",
              "helpKey": "connection.rdbms.redshift.database",
              "id": "rdbms.database",
              "name": "/rdbms/database",
              "defaultValue": ""
            },
            "rdbms.redshift.clusterIdentifier": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Cluster name",
              "required": true,
              "fieldId": "rdbms.redshift.clusterIdentifier",
              "id": "rdbms.redshift.clusterIdentifier",
              "name": "/rdbms/redshift/clusterIdentifier",
              "defaultValue": "",
              "helpKey": "connection.rdbms.redshift.clusterIdentifier"
            },
            "_borrowConcurrencyFromConnectionId": {
              "resourceId": "new-ocrFXPANaY5",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-ocrFXPANaY5"
                    }
                  },
                  {
                    "rdbms.type": "redshift"
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
              "resourceId": "new-ocrFXPANaY5",
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
          },
          layout: {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "rdbms.redshift.region",
                  "rdbms.redshift.aws.accessKeyId",
                  "rdbms.redshift.aws.secretAccessKey",
                  "rdbms.user",
                  "rdbms.database",
                  "rdbms.redshift.clusterIdentifier"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          }
        }
      },
      {
        "value": "dynamodb",
        "type": "dynamodb",
        "label": "DynamoDB",
        "keywords": "database,db",
        "formData": {
          "title": "Create connection",
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "dynamodb.aws.accessKeyId",
                  "dynamodb.aws.secretAccessKey"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-GXoDvCivNVv",
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
              "resourceId": "new-GXoDvCivNVv",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "DynamoDB",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "dynamodb.aws.accessKeyId": {
              "resourceId": "new-GXoDvCivNVv",
              "resourceType": "connections",
              "type": "text",
              "label": "Access key ID",
              "required": true,
              "helpKey": "connection.dynamodb.aws.accessKeyId",
              "fieldId": "dynamodb.aws.accessKeyId",
              "id": "dynamodb.aws.accessKeyId",
              "name": "/dynamodb/aws/accessKeyId",
              "defaultValue": ""
            },
            "dynamodb.aws.secretAccessKey": {
              "resourceId": "new-GXoDvCivNVv",
              "resourceType": "connections",
              "type": "text",
              "label": "Secret access key",
              "required": true,
              "helpKey": "connection.dynamodb.aws.secretAccessKey",
              "fieldId": "dynamodb.aws.secretAccessKey",
              "id": "dynamodb.aws.secretAccessKey",
              "name": "/dynamodb/aws/secretAccessKey",
              "defaultValue": ""
            }
          }
        }
      },
      {
        "value": "bigquerydatawarehouse",
        "type": "bigquerydatawarehouse",
        "label": "Google BigQuery",
        "keywords": "database,db"
      },
      {
        "value": "mssql",
        "type": "mssql",
        "label": "Microsoft SQL",
        "keywords": "database,rdbms,db",
        formData: {
          title: "Create connection",
          fieldMap: {
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
      },
      {
        "value": "mongodb",
        "type": "mongodb",
        "label": "MongoDB",
        "keywords": "database,db",
        formData: {
          title: "Create connection",
          fieldMap: {
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
          },
          layout: {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application",
                  "mode",
                  "_agentId"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "mongodb.host",
                  "mongodb.database",
                  "mongodb.username",
                  "mongodb.password"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "mongodb.replicaSet",
                  "mongodb.ssl",
                  "mongodb.authSource"
                ]
              }
            ]
          }
        }
      },
      {
        "value": "mysql",
        "type": "mysql",
        "label": "MySQL",
        "keywords": "database,rdbms,db",
        "formData": {
          "title": "Create connection",
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application",
                  "mode",
                  "_agentId"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "rdbms.host",
                  "rdbms.database",
                  "rdbms.user",
                  "rdbms.password",
                  "rdbms.port",
                  "rdbms.useSSL",
                  "rdbms.ssl.ca"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "rdbms.disableStrictSSL",
                  "rdbms.options",
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "MySQL",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "mode": {
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
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
            "rdbms.host": {
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
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
            "rdbms.port": {
              "resourceId": "new-pQZzp4gG9rp",
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
            "rdbms.useSSL": {
              "resourceId": "new-pQZzp4gG9rp",
              "resourceType": "connections",
              "id": "rdbms.useSSL",
              "type": "checkbox",
              "label": "Use SSL",
              "name": "/rdbms/useSSL",
              "helpKey": "connection.rdbms.useSSL"
            },
            "rdbms.ssl.ca": {
              "resourceId": "new-pQZzp4gG9rp",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "Certificate authority",
              "fieldId": "rdbms.ssl.ca",
              "visibleWhen": [
                {
                  "field": "rdbms.useSSL",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "rdbms.ssl.ca",
              "name": "/rdbms/ssl/ca",
              "defaultValue": "",
              "helpKey": "connection.rdbms.ssl.ca"
            },
            "rdbms.disableStrictSSL": {
              "resourceId": "new-pQZzp4gG9rp",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Disable strict SSL",
              "fieldId": "rdbms.disableStrictSSL",
              "id": "rdbms.disableStrictSSL",
              "name": "/rdbms/disableStrictSSL",
              "defaultValue": "",
              "helpKey": "connection.rdbms.disableStrictSSL"
            },
            "rdbms.options": {
              "resourceId": "new-pQZzp4gG9rp",
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
              "resourceId": "new-pQZzp4gG9rp",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-pQZzp4gG9rp"
                    }
                  },
                  {
                    "rdbms.type": "mysql"
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
              "resourceId": "new-pQZzp4gG9rp",
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
      },
      {
        "value": "netsuitejdbc",
        "type": "netsuitejdbc",
        "label": "NetSuite JDBC",
        "keywords": "database,db",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "containers": [
                  {
                    "fields": [
                      "jdbc.host",
                      "jdbc.port",
                      "jdbc.serverDataSource"
                    ]
                  },
                  {
                    "type": "indent",
                    "containers": [
                      {
                        "fields": [
                          "jdbc.StaticSchema"
                        ]
                      }
                    ]
                  },
                  {
                    "fields": [
                      "jdbc.authType",
                      "jdbc.email",
                      "jdbc.password",
                      "netsuite.tokenAccount",
                      "jdbc.account",
                      "jdbc.roleId",
                      "netsuite.token.auto.account",
                      "netsuite.token.auto.roleId",
                      "netsuite.tokenId",
                      "netsuite.tokenSecret"
                    ]
                  }
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "rdbms.options",
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-kerQTKm2L3k",
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
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "NetSuite JDBC",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "jdbc.host": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "required": true,
              "label": "Server name",
              "fieldId": "jdbc.host",
              "id": "jdbc.host",
              "name": "/jdbc/host",
              "helpKey": "connection.jdbc.host"
            },
            "jdbc.port": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Port number",
              "validWhen": {
                "fallsWithinNumericalRange": {
                  "min": 0,
                  "max": 65535
                }
              },
              "fieldId": "jdbc.port",
              "defaultDisabled": true,
              "defaultValue": 1708,
              "id": "jdbc.port",
              "name": "/jdbc/port",
              "helpKey": "connection.jdbc.port"
            },
            "jdbc.serverDataSource": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "id": "jdbc.serverDataSource",
              "isLoggable": true,
              "required": true,
              "type": "select",
              "label": "Server data source",
              "options": [
                {
                  "items": [
                    {
                      "label": "NetSuite.com",
                      "value": "NetSuite.com"
                    },
                    {
                      "label": "NetSuite2.com",
                      "value": "NetSuite2.com"
                    }
                  ]
                }
              ],
              "defaultValue": "",
              "name": "/jdbc/serverDataSource",
              "helpKey": "connection.jdbc.serverDataSource"
            },
            "jdbc.StaticSchema": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "id": "jdbc.StaticSchema",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Static schema export",
              "defaultValue": false,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "name": "/jdbc/StaticSchema",
              "helpKey": "connection.jdbc.StaticSchema"
            },
            "jdbc.authType": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "id": "netsuite.authType",
              "label": "Authentication type",
              "type": "nsauthtype",
              "required": true,
              "skipSort": true,
              "fieldId": "jdbc.authType",
              "defaultValue": "",
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "name": "/netsuite/authType",
              "helpKey": "connection.netsuite.authType"
            },
            "jdbc.email": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "label": "Email",
              "fieldId": "jdbc.email",
              "required": true,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite.com"
                  ]
                }
              ],
              "id": "jdbc.email",
              "name": "/jdbc/email",
              "helpKey": "connection.jdbc.email"
            },
            "jdbc.password": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "inputType": "password",
              "label": "Password",
              "fieldId": "jdbc.password",
              "required": true,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite.com"
                  ]
                }
              ],
              "id": "jdbc.password",
              "name": "/jdbc/password",
              "helpKey": "connection.jdbc.password"
            },
            "netsuite.tokenAccount": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "id": "netsuite.tokenAccount",
              "type": "text",
              "required": true,
              "label": "Account ID",
              "uppercase": true,
              "defaultValue": null,
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "name": "/netsuite/tokenAccount",
              "helpKey": "connection.netsuite.tokenAccount"
            },
            "jdbc.account": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "label": "Account ID",
              "helpKey": "connection.netsuite.account",
              "fieldId": "jdbc.account",
              "required": true,
              "uppercase": true,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite.com"
                  ]
                }
              ],
              "id": "jdbc.account",
              "name": "/jdbc/account"
            },
            "jdbc.roleId": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Role",
              "helpKey": "connection.netsuite.roleId",
              "fieldId": "jdbc.roleId",
              "required": true,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite.com"
                  ]
                }
              ],
              "id": "jdbc.roleId",
              "name": "/jdbc/roleId"
            },
            "netsuite.token.auto.account": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "id": "netsuite.token.auto.account",
              "type": "text",
              "label": "Account ID",
              "uppercase": true,
              "required": true,
              "defaultValue": null,
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token-auto"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "name": "/netsuite/token/auto/account",
              "helpKey": "connection.netsuite.token.auto.account"
            },
            "netsuite.token.auto.roleId": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "fieldId": "netsuite.token.auto.roleId",
              "type": "text",
              "label": "Role",
              "defaultDisabled": true,
              "visible": false,
              "visibleWhen": [
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "defaultValue": null,
              "id": "netsuite.token.auto.roleId",
              "name": "/netsuite/token/auto/roleId",
              "helpKey": "connection.netsuite.token.auto.roleId"
            },
            "netsuite.tokenId": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "required": true,
              "label": "Token ID",
              "fieldId": "netsuite.tokenId",
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "id": "netsuite.tokenId",
              "name": "/netsuite/tokenId",
              "helpKey": "connection.netsuite.tokenId"
            },
            "netsuite.tokenSecret": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "text",
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "required": true,
              "label": "Token secret",
              "fieldId": "netsuite.tokenSecret",
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ],
              "id": "netsuite.tokenSecret",
              "name": "/netsuite/tokenSecret",
              "helpKey": "connection.netsuite.tokenSecret"
            },
            "rdbms.options": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "type": "keyvalue",
              "keyName": "name",
              "valueName": "value",
              "valueType": "keyvalue",
              "label": "Configure properties",
              "fieldId": "rdbms.options",
              "id": "rdbms.options",
              "name": "/rdbms/options",
              "helpKey": "connection.rdbms.options"
            },
            "_borrowConcurrencyFromConnectionId": {
              "resourceId": "new-kerQTKm2L3k",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-kerQTKm2L3k"
                    }
                  },
                  {
                    "jdbc.type": "netsuitejdbc"
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
              "resourceId": "new-kerQTKm2L3k",
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
              "helpKey": "connection.rdbms.concurrencyLevel"
            }
          },
          "actions": [
            {
              "id": "saveandclosegroup",
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    ""
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "isNot": [
                    "NetSuite.com"
                  ]
                }
              ]
            },
            {
              "id": "oauthandcancel",
              "visibleWhenAll": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token-auto"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite2.com"
                  ]
                }
              ]
            },
            {
              "id": "testandsavegroup",
              "visibleWhen": [
                {
                  "field": "netsuite.authType",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "jdbc.serverDataSource",
                  "is": [
                    "NetSuite.com"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "value": "oracle",
        "type": "oracle",
        "label": "Oracle DB (SQL)",
        "keywords": "database,rdbms,db",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application",
                  "mode",
                  "_agentId"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "rdbms.host",
                  "rdbms.user",
                  "rdbms.password",
                  "rdbms.instanceName",
                  "rdbms.port"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "rdbms.serviceName",
                  "rdbms.serverType",
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-vjwokbRjZPR",
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
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "Oracle DB (SQL)",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "mode": {
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "id": "mode",
              "type": "radiogroup",
              "label": "Mode",
              "isLoggable": true,
              "defaultValue": "onpremise",
              "defaultDisabled": true,
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
              "resourceId": "new-vjwokbRjZPR",
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
              "required": true,
              "id": "_agentId",
              "name": "/_agentId",
              "defaultValue": "",
              "helpKey": "connection._agentId"
            },
            "rdbms.host": {
              "resourceId": "new-vjwokbRjZPR",
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
            "rdbms.user": {
              "resourceId": "new-vjwokbRjZPR",
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
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "type": "text",
              "label": "Password",
              "required": true,
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "rdbms.password",
              "id": "rdbms.password",
              "name": "/rdbms/password",
              "helpKey": "connection.rdbms.password"
            },
            "rdbms.instanceName": {
              "resourceId": "new-vjwokbRjZPR",
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
              "resourceId": "new-vjwokbRjZPR",
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
            "rdbms.serviceName": {
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "id": "rdbms.serviceName",
              "type": "text",
              "label": "Service Name",
              "name": "/rdbms/serviceName",
              "defaultValue": "",
              "helpKey": "connection.rdbms.serviceName"
            },
            "rdbms.serverType": {
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "id": "rdbms.serverType",
              "type": "select",
              "label": "Server Type",
              "options": [
                {
                  "items": [
                    {
                      "label": "Dedicated",
                      "value": "dedicated"
                    },
                    {
                      "label": "Shared",
                      "value": "shared"
                    },
                    {
                      "label": "Pooled",
                      "value": "pooled"
                    }
                  ]
                }
              ],
              "name": "/rdbms/serverType",
              "defaultValue": "",
              "helpKey": "connection.rdbms.serverType"
            },
            "_borrowConcurrencyFromConnectionId": {
              "resourceId": "new-vjwokbRjZPR",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-vjwokbRjZPR"
                    }
                  },
                  {
                    "rdbms.type": "oracle"
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
              "resourceId": "new-vjwokbRjZPR",
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
      },
      {
        "value": "postgresql",
        "type": "postgresql",
        "label": "PostgreSQL",
        "keywords": "database,rdbms,db",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application",
                  "mode",
                  "_agentId"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "rdbms.host",
                  "rdbms.database",
                  "rdbms.user",
                  "rdbms.password",
                  "rdbms.port",
                  "rdbms.useSSL",
                  "rdbms.ssl.ca",
                  "rdbms.ssl.key",
                  "rdbms.ssl.cert",
                  "rdbms.ssl.passphrase"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "rdbms.options",
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "PostgreSQL",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "mode": {
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
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
            "rdbms.host": {
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
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
            "rdbms.port": {
              "resourceId": "new-9tvo4Ssri2M",
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
            "rdbms.useSSL": {
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "id": "rdbms.useSSL",
              "type": "checkbox",
              "label": "Use SSL",
              "name": "/rdbms/useSSL",
              "helpKey": "connection.rdbms.useSSL"
            },
            "rdbms.ssl.ca": {
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "Certificate authority",
              "fieldId": "rdbms.ssl.ca",
              "visibleWhen": [
                {
                  "field": "rdbms.useSSL",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "rdbms.ssl.ca",
              "name": "/rdbms/ssl/ca",
              "defaultValue": "",
              "helpKey": "connection.rdbms.ssl.ca"
            },
            "rdbms.ssl.key": {
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "Key",
              "fieldId": "rdbms.ssl.key",
              "visibleWhen": [
                {
                  "field": "rdbms.useSSL",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "rdbms.ssl.key",
              "name": "/rdbms/ssl/key",
              "defaultValue": "",
              "helpKey": "connection.rdbms.ssl.key"
            },
            "rdbms.ssl.cert": {
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "Certificate",
              "fieldId": "rdbms.ssl.cert",
              "visibleWhen": [
                {
                  "field": "rdbms.useSSL",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "rdbms.ssl.cert",
              "name": "/rdbms/ssl/cert",
              "defaultValue": "",
              "helpKey": "connection.rdbms.ssl.cert"
            },
            "rdbms.ssl.passphrase": {
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "type": "text",
              "label": "Passphrase",
              "fieldId": "rdbms.ssl.passphrase",
              "visibleWhen": [
                {
                  "field": "rdbms.useSSL",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "rdbms.ssl.passphrase",
              "name": "/rdbms/ssl/passphrase",
              "defaultValue": "",
              "helpKey": "connection.rdbms.ssl.passphrase"
            },
            "rdbms.options": {
              "resourceId": "new-9tvo4Ssri2M",
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
              "resourceId": "new-9tvo4Ssri2M",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-9tvo4Ssri2M"
                    }
                  },
                  {
                    "rdbms.type": "postgresql"
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
              "resourceId": "new-9tvo4Ssri2M",
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
      },
      {
        "value": "snowflake",
        "type": "snowflake",
        "label": "Snowflake",
        "keywords": "database,rdbms,db",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "rdbms.host",
                  "rdbms.database",
                  "rdbms.snowflake.warehouse",
                  "rdbms.snowflake.schema",
                  "rdbms.snowflake.role",
                  "rdbms.user",
                  "rdbms.password"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "_borrowConcurrencyFromConnectionId",
                  "rdbms.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-rFq1PQxvO6t",
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
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "Snowflake",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "rdbms.host": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Account name",
              "required": true,
              "fieldId": "rdbms.host",
              "startAdornment": "https://",
              "endAdornment": ".snowflakecomputing.com",
              "helpKey": "snowflake.connection.rdbms.host",
              "validWhen": {
                "matchesRegEx": {
                  "pattern": "^[\\S]+$",
                  "message": "Account name should not contain spaces."
                }
              },
              "id": "rdbms.host",
              "name": "/rdbms/host",
              "defaultValue": ""
            },
            "rdbms.database": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Database name",
              "required": true,
              "fieldId": "rdbms.database",
              "helpKey": "snowflake.connection.rdbms.database",
              "id": "rdbms.database",
              "name": "/rdbms/database",
              "defaultValue": ""
            },
            "rdbms.snowflake.warehouse": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "id": "rdbms.snowflake.warehouse",
              "type": "text",
              "label": "Warehouse name",
              "required": true,
              "name": "/rdbms/snowflake/warehouse",
              "defaultValue": "",
              "helpKey": "connection.rdbms.snowflake.warehouse"
            },
            "rdbms.snowflake.schema": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "id": "rdbms.snowflake.schema",
              "type": "text",
              "label": "Schema",
              "name": "/rdbms/snowflake/schema",
              "defaultValue": "",
              "helpKey": "connection.rdbms.snowflake.schema"
            },
            "rdbms.snowflake.role": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "id": "rdbms.snowflake.role",
              "type": "text",
              "label": "User Role",
              "name": "/rdbms/snowflake/role",
              "defaultValue": "",
              "helpKey": "connection.rdbms.snowflake.role"
            },
            "rdbms.user": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "type": "text",
              "label": "Username",
              "required": true,
              "fieldId": "rdbms.user",
              "helpKey": "snowflake.connection.rdbms.user",
              "id": "rdbms.user",
              "name": "/rdbms/user",
              "defaultValue": ""
            },
            "rdbms.password": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "type": "text",
              "label": "Password",
              "required": true,
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "rdbms.password",
              "helpKey": "snowflake.connection.rdbms.password",
              "id": "rdbms.password",
              "name": "/rdbms/password"
            },
            "_borrowConcurrencyFromConnectionId": {
              "resourceId": "new-rFq1PQxvO6t",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-rFq1PQxvO6t"
                    }
                  },
                  {
                    "rdbms.type": "snowflake"
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
              "resourceId": "new-rFq1PQxvO6t",
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
      }
    ]
  },
  {
    "label": "Universal connectors",
    "options": [
      {
        "value": "as2",
        "type": "as2",
        "label": "AS2",
        "keywords": "technology,protocol",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Configure my AS2 station",
                "fields": [
                  "as2Mode",
                  "as2.as2Id",
                  "requiremdnspartners",
                  "requireasynchronousmdns",
                  "as2.userStationInfo.mdn.mdnSigning",
                  "as2.userStationInfo.mdn.mdnEncoding",
                  "as2.userStationInfo.encryptionType",
                  "as2.userStationInfo.signing",
                  "as2.userStationInfo.encoding",
                  "as2.unencrypted.userPublicKey",
                  "as2.encrypted.userPrivateKey",
                  "as2.userStationInfo.ipAddresses"
                ]
              },
              {
                "collapsed": true,
                "label": "Configure partner AS2 station",
                "fields": [
                  "as2.partnerStationInfo.as2URI",
                  "as2.partnerId",
                  "partnerrequireasynchronousmdns",
                  "as2.userStationInfo.mdn.mdnURL",
                  "as2.partnerStationInfo.mdn.verifyMDNSignature",
                  "as2.partnerStationInfo.mdn.mdnSigning",
                  "as2.partnerStationInfo.encryptionType",
                  "as2.partnerStationInfo.signing",
                  "as2.partnerStationInfo.encoding",
                  "as2.partnerStationInfo.signatureEncoding",
                  "as2.unencrypted.partnerCertificate"
                ]
              },
              {
                "collapsed": true,
                "label": "Configure auth",
                "fields": [
                  "as2.partnerStationInfo.auth.type",
                  "as2.partnerStationInfo.auth.failStatusCode",
                  "as2.partnerStationInfo.auth.failPath",
                  "as2.partnerStationInfo.auth.failValues",
                  "as2.partnerStationInfo.auth.basic.username",
                  "as2.partnerStationInfo.auth.basic.password",
                  "as2.partnerStationInfo.auth.token.token",
                  "tokenHeader",
                  "as2.partnerStationInfo.auth.token.location",
                  "as2.partnerStationInfo.auth.token.headerName",
                  "as2.partnerStationInfo.auth.token.scheme",
                  "as2.partnerStationInfo.auth.token.paramName",
                  "configureTokenRefresh",
                  "refreshTokenHeader",
                  "as2.partnerStationInfo.auth.token.refreshToken",
                  "as2.partnerStationInfo.auth.token.refreshRelativeURI",
                  "as2.partnerStationInfo.auth.token.refreshMediaType",
                  "as2.partnerStationInfo.auth.token.refreshMethod",
                  "as2.partnerStationInfo.auth.token.refreshBody",
                  "as2.partnerStationInfo.auth.token.refreshTokenPath",
                  "as2.partnerStationInfo.auth.token.refreshHeaders"
                ]
              },
              {
                "collapsed": true,
                "label": "Nonstandard API rate limiter",
                "fields": [
                  "as2.partnerStationInfo.rateLimit.limit",
                  "as2.partnerStationInfo.rateLimit.failStatusCode",
                  "as2.partnerStationInfo.rateLimit.failPath",
                  "as2.partnerStationInfo.rateLimit.failValues"
                ]
              },
              {
                "collapsed": true,
                "label": "Configure routing for shared connections",
                "fields": [
                  "as2.contentBasedFlowRouter"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "as2.preventCanonicalization",
                  "as2.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-cJran9u3l3n",
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
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "AS2",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "as2Mode": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "id": "as2Mode",
              "type": "as2Mode",
              "label": "AS2 mode",
              "name": "/as2Mode",
              "defaultValue": "",
              "helpKey": "connection.as2Mode"
            },
            "as2.as2Id": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "AS2 identifier",
              "required": true,
              "fieldId": "as2.as2Id",
              "defaultDisabled": false,
              "id": "as2.as2Id",
              "name": "/as2/as2Id",
              "defaultValue": "",
              "helpKey": "connection.as2.as2Id"
            },
            "requiremdnspartners": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "labelvalue",
              "label": "Require MDNs from partners?",
              "value": "Yes",
              "fieldId": "requiremdnspartners",
              "id": "requiremdnspartners",
              "name": "/requiremdnspartners",
              "defaultValue": "",
              "helpKey": "connection.requiremdnspartners"
            },
            "requireasynchronousmdns": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "labelvalue",
              "label": "Require asynchronous MDNs?",
              "value": "No",
              "fieldId": "requireasynchronousmdns",
              "id": "requireasynchronousmdns",
              "name": "/requireasynchronousmdns",
              "defaultValue": "",
              "helpKey": "connection.requireasynchronousmdns"
            },
            "as2.userStationInfo.mdn.mdnSigning": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "MDN signing",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "None",
                      "value": "NONE"
                    },
                    {
                      "label": "SHA1",
                      "value": "SHA1"
                    },
                    {
                      "label": "MD5",
                      "value": "MD5"
                    },
                    {
                      "label": "SHA256",
                      "value": "SHA256"
                    }
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.mdn.mdnSigning",
              "id": "as2.userStationInfo.mdn.mdnSigning",
              "name": "/as2/userStationInfo/mdn/mdnSigning",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.mdn.mdnSigning"
            },
            "as2.userStationInfo.mdn.mdnEncoding": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "MDN encoding",
              "options": [
                {
                  "items": [
                    {
                      "label": "Base64",
                      "value": "base64"
                    },
                    {
                      "label": "Binary",
                      "value": "binary"
                    }
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.mdn.mdnEncoding",
              "id": "as2.userStationInfo.mdn.mdnEncoding",
              "name": "/as2/userStationInfo/mdn/mdnEncoding",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.mdn.mdnEncoding"
            },
            "as2.userStationInfo.encryptionType": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Decryption algorithm",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "None",
                      "value": "NONE"
                    },
                    {
                      "label": "DES",
                      "value": "DES"
                    },
                    {
                      "label": "RC2",
                      "value": "RC2"
                    },
                    {
                      "label": "3DES",
                      "value": "3DES"
                    },
                    {
                      "label": "AES128",
                      "value": "AES128"
                    },
                    {
                      "label": "AES256",
                      "value": "AES256"
                    }
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.encryptionType",
              "id": "as2.userStationInfo.encryptionType",
              "name": "/as2/userStationInfo/encryptionType",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.encryptionType"
            },
            "as2.userStationInfo.signing": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Signature verification algorithm",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "None",
                      "value": "NONE"
                    },
                    {
                      "label": "SHA1",
                      "value": "SHA1"
                    },
                    {
                      "label": "MD5",
                      "value": "MD5"
                    },
                    {
                      "label": "SHA256",
                      "value": "SHA256"
                    }
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.signing",
              "id": "as2.userStationInfo.signing",
              "name": "/as2/userStationInfo/signing",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.signing"
            },
            "as2.userStationInfo.encoding": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Incoming message encoding",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "Base64",
                      "value": "base64"
                    },
                    {
                      "label": "Binary",
                      "value": "binary"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.userStationInfo.encryptionType",
                  "isNot": [
                    "NONE"
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.encoding",
              "id": "as2.userStationInfo.encoding",
              "name": "/as2/userStationInfo/encoding",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.encoding"
            },
            "as2.unencrypted.userPublicKey": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "editor",
              "mode": "text",
              "label": "X.509 Public Certificate",
              "requiredWhen": [
                {
                  "field": "as2.userStationInfo.encryptionType",
                  "isNot": [
                    "NONE"
                  ]
                }
              ],
              "fieldId": "as2.unencrypted.userPublicKey",
              "id": "as2.unencrypted.userPublicKey",
              "name": "/as2/unencrypted/userPublicKey",
              "defaultValue": "",
              "helpKey": "connection.as2.unencrypted.userPublicKey"
            },
            "as2.encrypted.userPrivateKey": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "X.509 Private Key",
              "requiredWhen": [
                {
                  "field": "as2.userStationInfo.encryptionType",
                  "isNot": [
                    "NONE"
                  ]
                }
              ],
              "fieldId": "as2.encrypted.userPrivateKey",
              "id": "as2.encrypted.userPrivateKey",
              "name": "/as2/encrypted/userPrivateKey",
              "defaultValue": "",
              "helpKey": "connection.as2.encrypted.userPrivateKey"
            },
            "as2.userStationInfo.ipAddresses": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "labelvalue",
              "label": "AS2 IP addresses: ",
              "value": {
                "type": "span",
                "key": null,
                "ref": null,
                "props": {
                  "children": [
                    "Click",
                    " ",
                    {
                      "type": "a",
                      "key": null,
                      "ref": null,
                      "props": {
                        "target": "_blank",
                        "href": "https://docs.celigo.com/hc/en-us/articles/115003717028-Whitelist-integrator-io-IPs",
                        "children": "here"
                      },
                      "_owner": null
                    },
                    " ",
                    "to see the list of IP Addresses"
                  ]
                },
                "_owner": null
              },
              "fieldId": "as2.userStationInfo.ipAddresses",
              "id": "as2.userStationInfo.ipAddresses",
              "name": "/as2/userStationInfo/ipAddresses",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.ipAddresses"
            },
            "as2.partnerStationInfo.as2URI": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Partner's AS2 URL:",
              "required": true,
              "validWhen": {
                "matchesRegEx": {
                  "pattern": {},
                  "message": "Please enter a valid URI."
                }
              },
              "fieldId": "as2.partnerStationInfo.as2URI",
              "id": "as2.partnerStationInfo.as2URI",
              "name": "/as2/partnerStationInfo/as2URI",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.as2URI"
            },
            "as2.partnerId": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Partner's AS2 Identifier:",
              "required": true,
              "fieldId": "as2.partnerId",
              "defaultDisabled": false,
              "id": "as2.partnerId",
              "name": "/as2/partnerId",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerId"
            },
            "partnerrequireasynchronousmdns": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Partner requires asynchronous MDNs?",
              "fieldId": "partnerrequireasynchronousmdns",
              "id": "partnerrequireasynchronousmdns",
              "name": "/partnerrequireasynchronousmdns",
              "defaultValue": "",
              "helpKey": "connection.partnerrequireasynchronousmdns"
            },
            "as2.userStationInfo.mdn.mdnURL": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Partner's URL for Asynchronous MDN:",
              "required": true,
              "visibleWhen": [
                {
                  "field": "partnerrequireasynchronousmdns",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.userStationInfo.mdn.mdnURL",
              "id": "as2.userStationInfo.mdn.mdnURL",
              "name": "/as2/userStationInfo/mdn/mdnURL",
              "defaultValue": "",
              "helpKey": "connection.as2.userStationInfo.mdn.mdnURL"
            },
            "as2.partnerStationInfo.mdn.verifyMDNSignature": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "checkbox",
              "label": "Partner requires MDN signature verification",
              "fieldId": "as2.partnerStationInfo.mdn.verifyMDNSignature",
              "id": "as2.partnerStationInfo.mdn.verifyMDNSignature",
              "name": "/as2/partnerStationInfo/mdn/verifyMDNSignature",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.mdn.verifyMDNSignature"
            },
            "as2.partnerStationInfo.mdn.mdnSigning": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "select",
              "label": "MDN verification algorithm",
              "options": [
                {
                  "items": [
                    {
                      "label": "SHA1",
                      "value": "SHA1"
                    },
                    {
                      "label": "MD5",
                      "value": "MD5"
                    },
                    {
                      "label": "SHA256",
                      "value": "SHA256"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.mdn.verifyMDNSignature",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.mdn.mdnSigning",
              "id": "as2.partnerStationInfo.mdn.mdnSigning",
              "name": "/as2/partnerStationInfo/mdn/mdnSigning",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.mdn.mdnSigning"
            },
            "as2.partnerStationInfo.encryptionType": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Encryption type",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "None",
                      "value": "NONE"
                    },
                    {
                      "label": "DES",
                      "value": "DES"
                    },
                    {
                      "label": "RC2",
                      "value": "RC2"
                    },
                    {
                      "label": "3DES",
                      "value": "3DES"
                    },
                    {
                      "label": "AES128",
                      "value": "AES128"
                    },
                    {
                      "label": "AES256",
                      "value": "AES256"
                    }
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.encryptionType",
              "id": "as2.partnerStationInfo.encryptionType",
              "name": "/as2/partnerStationInfo/encryptionType",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.encryptionType"
            },
            "as2.partnerStationInfo.signing": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Signing",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "None",
                      "value": "NONE"
                    },
                    {
                      "label": "SHA1",
                      "value": "SHA1"
                    },
                    {
                      "label": "MD5",
                      "value": "MD5"
                    },
                    {
                      "label": "SHA256",
                      "value": "SHA256"
                    }
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.signing",
              "id": "as2.partnerStationInfo.signing",
              "name": "/as2/partnerStationInfo/signing",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.signing"
            },
            "as2.partnerStationInfo.encoding": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Encoding",
              "options": [
                {
                  "items": [
                    {
                      "label": "Base64",
                      "value": "base64"
                    },
                    {
                      "label": "Binary",
                      "value": "binary"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.encryptionType",
                  "isNot": [
                    "NONE"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.encoding",
              "id": "as2.partnerStationInfo.encoding",
              "name": "/as2/partnerStationInfo/encoding",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.encoding"
            },
            "as2.partnerStationInfo.signatureEncoding": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Signature encoding",
              "options": [
                {
                  "items": [
                    {
                      "label": "Base64",
                      "value": "base64"
                    },
                    {
                      "label": "Binary",
                      "value": "binary"
                    }
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.signatureEncoding",
              "id": "as2.partnerStationInfo.signatureEncoding",
              "name": "/as2/partnerStationInfo/signatureEncoding",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.signatureEncoding"
            },
            "as2.unencrypted.partnerCertificate": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "editor",
              "mode": "text",
              "label": "Partner's Certificate:",
              "requiredWhen": [
                {
                  "field": "as2.partnerStationInfo.encryptionType",
                  "isNot": [
                    "NONE"
                  ]
                }
              ],
              "fieldId": "as2.unencrypted.partnerCertificate",
              "id": "as2.unencrypted.partnerCertificate",
              "name": "/as2/unencrypted/partnerCertificate",
              "defaultValue": "",
              "helpKey": "connection.as2.unencrypted.partnerCertificate"
            },
            "as2.partnerStationInfo.auth.type": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Authentication type",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "Basic",
                      "value": "basic"
                    },
                    {
                      "label": "Token",
                      "value": "token"
                    },
                    {
                      "label": "None",
                      "value": "none"
                    }
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.type",
              "defaultValue": "",
              "id": "as2.partnerStationInfo.auth.type",
              "name": "/as2/partnerStationInfo/auth/type",
              "helpKey": "connection.as2.partnerStationInfo.auth.type"
            },
            "as2.partnerStationInfo.auth.failStatusCode": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Authentication fail status code",
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "basic",
                    "token"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.failStatusCode",
              "id": "as2.partnerStationInfo.auth.failStatusCode",
              "name": "/as2/partnerStationInfo/auth/failStatusCode",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.failStatusCode"
            },
            "as2.partnerStationInfo.auth.failPath": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Authentication fail path",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "basic",
                    "token"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.failPath",
              "id": "as2.partnerStationInfo.auth.failPath",
              "name": "/as2/partnerStationInfo/auth/failPath",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.failPath"
            },
            "as2.partnerStationInfo.auth.failValues": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "delimiter": ",",
              "label": "Authentication fail values",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "basic",
                    "token"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.failValues",
              "id": "as2.partnerStationInfo.auth.failValues",
              "name": "/as2/partnerStationInfo/auth/failValues",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.failValues"
            },
            "as2.partnerStationInfo.auth.basic.username": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Username",
              "required": true,
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "basic"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.basic.username",
              "id": "as2.partnerStationInfo.auth.basic.username",
              "name": "/as2/partnerStationInfo/auth/basic/username",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.basic.username"
            },
            "as2.partnerStationInfo.auth.basic.password": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Password",
              "inputType": "password",
              "defaultValue": "",
              "required": true,
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "basic"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.basic.password",
              "id": "as2.partnerStationInfo.auth.basic.password",
              "name": "/as2/partnerStationInfo/auth/basic/password",
              "helpKey": "connection.as2.partnerStationInfo.auth.basic.password"
            },
            "as2.partnerStationInfo.auth.token.token": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Token",
              "required": true,
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "token"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.token",
              "id": "as2.partnerStationInfo.auth.token.token",
              "name": "/as2/partnerStationInfo/auth/token/token",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.token"
            },
            "tokenHeader": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "id": "tokenHeader",
              "label": "How to send token?",
              "type": "labeltitle",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "token"
                  ]
                }
              ],
              "name": "/tokenHeader",
              "defaultValue": "",
              "helpKey": "connection.tokenHeader"
            },
            "as2.partnerStationInfo.auth.token.location": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Location",
              "options": [
                {
                  "items": [
                    {
                      "label": "URL Parameter",
                      "value": "url"
                    },
                    {
                      "label": "Header",
                      "value": "header"
                    },
                    {
                      "label": "Body",
                      "value": "body"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "token"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.location",
              "id": "as2.partnerStationInfo.auth.token.location",
              "name": "/as2/partnerStationInfo/auth/token/location",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.location"
            },
            "as2.partnerStationInfo.auth.token.headerName": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Header name",
              "defaultValue": "Authorization",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.token.location",
                  "is": [
                    "header"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.headerName",
              "id": "as2.partnerStationInfo.auth.token.headerName",
              "name": "/as2/partnerStationInfo/auth/token/headerName",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.headerName"
            },
            "as2.partnerStationInfo.auth.token.scheme": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Scheme",
              "options": [
                {
                  "items": [
                    {
                      "label": "Bearer",
                      "value": "bearer"
                    },
                    {
                      "label": "MAC",
                      "value": "mac"
                    },
                    {
                      "label": "OAuth 2.0",
                      "value": "oauth"
                    },
                    {
                      "label": "None",
                      "value": "none"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.token.location",
                  "is": [
                    "header"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.scheme",
              "id": "as2.partnerStationInfo.auth.token.scheme",
              "name": "/as2/partnerStationInfo/auth/token/scheme",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.scheme"
            },
            "as2.partnerStationInfo.auth.token.paramName": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Parameter name",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.token.location",
                  "is": [
                    "url"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.paramName",
              "id": "as2.partnerStationInfo.auth.token.paramName",
              "name": "/as2/partnerStationInfo/auth/token/paramName",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.paramName"
            },
            "configureTokenRefresh": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "id": "configureTokenRefresh",
              "type": "checkbox",
              "label": "Configure token refresh",
              "visibleWhenAll": [
                {
                  "field": "as2.partnerStationInfo.auth.type",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "as2.partnerStationInfo.auth.token.location",
                  "isNot": [
                    ""
                  ]
                }
              ],
              "defaultValue": false,
              "name": "/configureTokenRefresh",
              "helpKey": "connection.configureTokenRefresh"
            },
            "refreshTokenHeader": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "id": "refreshTokenHeader",
              "label": "How to refresh token?",
              "type": "labeltitle",
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "name": "/refreshTokenHeader",
              "defaultValue": "",
              "helpKey": "connection.refreshTokenHeader"
            },
            "as2.partnerStationInfo.auth.token.refreshToken": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "text",
              "label": "Refresh token",
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshToken",
              "id": "as2.partnerStationInfo.auth.token.refreshToken",
              "name": "/as2/partnerStationInfo/auth/token/refreshToken",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshToken"
            },
            "as2.partnerStationInfo.auth.token.refreshRelativeURI": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Refresh relative URI",
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshRelativeURI",
              "id": "as2.partnerStationInfo.auth.token.refreshRelativeURI",
              "name": "/as2/partnerStationInfo/auth/token/refreshRelativeURI",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshRelativeURI"
            },
            "as2.partnerStationInfo.auth.token.refreshMediaType": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Refresh media type",
              "options": [
                {
                  "items": [
                    {
                      "label": "JSON",
                      "value": "json"
                    },
                    {
                      "label": "URL encoded",
                      "value": "urlencoded"
                    },
                    {
                      "label": "XML",
                      "value": "xml"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshMediaType",
              "id": "as2.partnerStationInfo.auth.token.refreshMediaType",
              "name": "/as2/partnerStationInfo/auth/token/refreshMediaType",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshMediaType"
            },
            "as2.partnerStationInfo.auth.token.refreshMethod": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Refresh method",
              "options": [
                {
                  "items": [
                    {
                      "label": "GET",
                      "value": "GET"
                    },
                    {
                      "label": "POST",
                      "value": "POST"
                    },
                    {
                      "label": "PUT",
                      "value": "PUT"
                    }
                  ]
                }
              ],
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshMethod",
              "id": "as2.partnerStationInfo.auth.token.refreshMethod",
              "name": "/as2/partnerStationInfo/auth/token/refreshMethod",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshMethod"
            },
            "as2.partnerStationInfo.auth.token.refreshBody": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "editor",
              "mode": "json",
              "label": "Refresh body",
              "visibleWhen": [
                {
                  "field": "as2.partnerStationInfo.auth.token.refreshMethod",
                  "is": [
                    "POST",
                    "PUT"
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshBody",
              "id": "as2.partnerStationInfo.auth.token.refreshBody",
              "name": "/as2/partnerStationInfo/auth/token/refreshBody",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshBody"
            },
            "as2.partnerStationInfo.auth.token.refreshTokenPath": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Refresh token path",
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshTokenPath",
              "id": "as2.partnerStationInfo.auth.token.refreshTokenPath",
              "name": "/as2/partnerStationInfo/auth/token/refreshTokenPath",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshTokenPath"
            },
            "as2.partnerStationInfo.auth.token.refreshHeaders": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "type": "keyvalue",
              "keyName": "name",
              "valueName": "value",
              "valueType": "keyvalue",
              "label": "Refresh token headers",
              "visibleWhen": [
                {
                  "field": "configureTokenRefresh",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.auth.token.refreshHeaders",
              "id": "as2.partnerStationInfo.auth.token.refreshHeaders",
              "name": "/as2/partnerStationInfo/auth/token/refreshHeaders",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.auth.token.refreshHeaders"
            },
            "as2.partnerStationInfo.rateLimit.limit": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Wait time between HTTP requests",
              "visibleWhen": [
                {
                  "field": "configureApiRateLimits",
                  "is": [
                    true
                  ]
                }
              ],
              "requiredWhen": [
                {
                  "field": "configureApiRateLimits",
                  "is": [
                    true
                  ]
                }
              ],
              "validWhen": {
                "matchesRegEx": {
                  "pattern": "^[\\d]+$",
                  "message": "Only numbers allowed"
                }
              },
              "fieldId": "as2.partnerStationInfo.rateLimit.limit",
              "id": "as2.partnerStationInfo.rateLimit.limit",
              "name": "/as2/partnerStationInfo/rateLimit/limit",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.rateLimit.limit"
            },
            "as2.partnerStationInfo.rateLimit.failStatusCode": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "HTTP status code for rate-limit errors",
              "visibleWhen": [
                {
                  "field": "configureApiRateLimits",
                  "is": [
                    true
                  ]
                }
              ],
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "fieldId": "as2.partnerStationInfo.rateLimit.failStatusCode",
              "id": "as2.partnerStationInfo.rateLimit.failStatusCode",
              "name": "/as2/partnerStationInfo/rateLimit/failStatusCode",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.rateLimit.failStatusCode"
            },
            "as2.partnerStationInfo.rateLimit.failPath": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Path to rate-limit errors in HTTP response body",
              "visibleWhen": [
                {
                  "field": "configureApiRateLimits",
                  "is": [
                    true
                  ]
                }
              ],
              "fieldId": "as2.partnerStationInfo.rateLimit.failPath",
              "id": "as2.partnerStationInfo.rateLimit.failPath",
              "name": "/as2/partnerStationInfo/rateLimit/failPath",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.rateLimit.failPath"
            },
            "as2.partnerStationInfo.rateLimit.failValues": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "delimiter": ",",
              "visibleWhen": [
                {
                  "field": "configureApiRateLimits",
                  "is": [
                    true
                  ]
                }
              ],
              "label": "Rate-limit error values",
              "fieldId": "as2.partnerStationInfo.rateLimit.failValues",
              "id": "as2.partnerStationInfo.rateLimit.failValues",
              "name": "/as2/partnerStationInfo/rateLimit/failValues",
              "defaultValue": "",
              "helpKey": "connection.as2.partnerStationInfo.rateLimit.failValues"
            },
            "as2.contentBasedFlowRouter": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "routingrules",
              "label": "Routing rules editor",
              "required": false,
              "editorResultMode": "text",
              "hookStage": "contentBasedFlowRouter",
              "helpKey": "connection.as2.contentBasedFlowRouter",
              "title": "Choose a script and function name to use for determining AS2 message routing",
              "preHookData": {
                "httpHeaders": {
                  "as2-from": "OpenAS2_appA",
                  "as2-to": "OpenAS2_appB"
                },
                "mimeHeaders": {
                  "content-type": "application/edi-x12",
                  "content-disposition": "Attachment; filename=rfc1767.dat"
                },
                "rawMessageBody": "sample message"
              },
              "fieldId": "as2.contentBasedFlowRouter",
              "id": "as2.contentBasedFlowRouter",
              "name": "/as2/contentBasedFlowRouter",
              "defaultValue": ""
            },
            "as2.preventCanonicalization": {
              "resourceId": "new-cJran9u3l3n",
              "resourceType": "connections",
              "isLoggable": true,
              "label": "Prevent canonicalization",
              "type": "checkbox",
              "fieldId": "as2.preventCanonicalization",
              "id": "as2.preventCanonicalization",
              "name": "/as2/preventCanonicalization",
              "defaultValue": "",
              "helpKey": "connection.as2.preventCanonicalization"
            },
            "as2.concurrencyLevel": {
              "resourceId": "new-cJran9u3l3n",
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
              "fieldId": "as2.concurrencyLevel",
              "id": "as2.concurrencyLevel",
              "name": "/as2/concurrencyLevel",
              "defaultValue": "",
              "helpKey": "connection.as2.concurrencyLevel"
            }
          },
          "actions": [
            {
              "id": "saveandclosegroup"
            }
          ]
        }
      },
      {
        "value": "ftp",
        "type": "ftp",
        "label": "FTP",
        "keywords": "sftp,ftps,technology,protocol",
        "formData": {
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "ftp.hostURI",
                  "ftp.type",
                  "ftp.username",
                  "ftp.password",
                  "ftp.authKey",
                  "ftp.useImplicitFtps"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "ftp.port",
                  "ftp.usePassiveMode",
                  "ftp.userDirectoryIsRoot",
                  "ftp.entryParser",
                  "ftp.requireSocketReUse",
                  "usePgp",
                  "pgp.publicKey",
                  "pgp.privateKey",
                  "pgp.passphrase",
                  "pgp.compressionAlgorithm",
                  "pgp.asciiArmored",
                  "ftp.concurrencyLevel"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-zniRvbCJIhW",
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
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "FTP",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "ftp.hostURI": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Host",
              "required": true,
              "description": "If the FTP server is behind a firewall, please whitelist the following IP addresses: 52.2.63.213, 52.7.99.234, 52.71.48.248, and 44.204.21.0/24.",
              "fieldId": "ftp.hostURI",
              "id": "ftp.hostURI",
              "name": "/ftp/hostURI",
              "defaultValue": "",
              "helpKey": "connection.ftp.hostURI"
            },
            "ftp.type": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "radiogroup",
              "label": "Protocol",
              "required": true,
              "defaultValue": "sftp",
              "options": [
                {
                  "items": [
                    {
                      "label": "FTP",
                      "value": "ftp"
                    },
                    {
                      "label": "SFTP",
                      "value": "sftp"
                    },
                    {
                      "label": "FTPS",
                      "value": "ftps"
                    }
                  ]
                }
              ],
              "fieldId": "ftp.type",
              "id": "ftp.type",
              "name": "/ftp/type",
              "helpKey": "connection.ftp.type"
            },
            "ftp.username": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "type": "text",
              "label": "Username",
              "required": true,
              "fieldId": "ftp.username",
              "id": "ftp.username",
              "name": "/ftp/username",
              "defaultValue": "",
              "helpKey": "connection.ftp.username"
            },
            "ftp.password": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "type": "text",
              "label": "Password",
              "inputType": "password",
              "requiredWhen": [
                {
                  "field": "ftp.type",
                  "is": [
                    "ftp"
                  ]
                },
                {
                  "field": "ftp.authKey",
                  "is": [
                    ""
                  ]
                }
              ],
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "ftp.password",
              "id": "ftp.password",
              "name": "/ftp/password",
              "helpKey": "connection.ftp.password"
            },
            "ftp.authKey": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "type": "text",
              "label": "Authentication key (pem format)",
              "placeholder": "Optional if password is entered",
              "multiline": true,
              "fieldId": "ftp.authKey",
              "visibleWhen": [
                {
                  "field": "ftp.type",
                  "is": [
                    "sftp"
                  ]
                }
              ],
              "id": "ftp.authKey",
              "name": "/ftp/authKey",
              "defaultValue": "",
              "helpKey": "connection.ftp.authKey"
            },
            "ftp.useImplicitFtps": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Use implicit ftps",
              "defaultValue": false,
              "fieldId": "ftp.useImplicitFtps",
              "visibleWhen": [
                {
                  "field": "ftp.type",
                  "is": [
                    "ftps"
                  ]
                }
              ],
              "id": "ftp.useImplicitFtps",
              "name": "/ftp/useImplicitFtps",
              "helpKey": "connection.ftp.useImplicitFtps"
            },
            "ftp.port": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "ftpport",
              "label": "Port",
              "required": true,
              "validWhen": {
                "matchesRegEx": {
                  "pattern": "^[\\d]+$",
                  "message": "Must be a number."
                }
              },
              "fieldId": "ftp.port",
              "id": "ftp.port",
              "name": "/ftp/port",
              "defaultValue": "",
              "helpKey": "connection.ftp.port"
            },
            "ftp.usePassiveMode": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Use passive mode",
              "defaultValue": true,
              "fieldId": "ftp.usePassiveMode",
              "visibleWhen": [
                {
                  "field": "ftp.type",
                  "is": [
                    "ftp",
                    "ftps"
                  ]
                }
              ],
              "id": "ftp.usePassiveMode",
              "name": "/ftp/usePassiveMode",
              "helpKey": "connection.ftp.usePassiveMode"
            },
            "ftp.userDirectoryIsRoot": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "User directory is root",
              "defaultValue": false,
              "fieldId": "ftp.userDirectoryIsRoot",
              "id": "ftp.userDirectoryIsRoot",
              "name": "/ftp/userDirectoryIsRoot",
              "helpKey": "connection.ftp.userDirectoryIsRoot"
            },
            "ftp.entryParser": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Entry parser",
              "options": [
                {
                  "items": [
                    {
                      "label": "UNIX",
                      "value": "UNIX"
                    },
                    {
                      "label": "UNIX-TRIM",
                      "value": "UNIX-TRIM"
                    },
                    {
                      "label": "VMS",
                      "value": "VMS"
                    },
                    {
                      "label": "WINDOWS",
                      "value": "WINDOWS"
                    },
                    {
                      "label": "OS/2",
                      "value": "OS/2"
                    },
                    {
                      "label": "OS/400",
                      "value": "OS/400"
                    },
                    {
                      "label": "AS/400",
                      "value": "AS/400"
                    },
                    {
                      "label": "MVS",
                      "value": "MVS"
                    },
                    {
                      "label": "UNKNOWN-TYPE",
                      "value": "UNKNOWN-TYPE"
                    },
                    {
                      "label": "NETWARE",
                      "value": "NETWARE"
                    },
                    {
                      "label": "MACOS-PETER",
                      "value": "MACOS-PETER"
                    }
                  ]
                }
              ],
              "fieldId": "ftp.entryParser",
              "required": false,
              "id": "ftp.entryParser",
              "name": "/ftp/entryParser",
              "defaultValue": "",
              "helpKey": "connection.ftp.entryParser"
            },
            "ftp.requireSocketReUse": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Require socket reuse",
              "defaultValue": false,
              "fieldId": "ftp.requireSocketReUse",
              "visibleWhen": [
                {
                  "field": "ftp.type",
                  "is": [
                    "ftps"
                  ]
                }
              ],
              "id": "ftp.requireSocketReUse",
              "name": "/ftp/requireSocketReUse",
              "helpKey": "connection.ftp.requireSocketReUse"
            },
            "usePgp": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "defaultValue": false,
              "label": "Enable PGP cryptographic",
              "fieldId": "usePgp",
              "id": "usePgp",
              "name": "/usePgp",
              "helpKey": "connection.usePgp"
            },
            "pgp.publicKey": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "multiline": true,
              "label": "PGP public key",
              "defaultValue": "",
              "requiredWhen": [
                {
                  "field": "pgp.privateKey",
                  "is": [
                    ""
                  ]
                }
              ],
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "pgp.publicKey",
              "omitWhenHidden": true,
              "visibleWhen": [
                {
                  "field": "usePgp",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "pgp.publicKey",
              "name": "/pgp/publicKey",
              "helpKey": "connection.pgp.publicKey"
            },
            "pgp.privateKey": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "type": "text",
              "label": "PGP private key",
              "defaultValue": "",
              "multiline": true,
              "requiredWhen": [
                {
                  "field": "pgp.publicKey",
                  "is": [
                    ""
                  ]
                }
              ],
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "pgp.privateKey",
              "omitWhenHidden": true,
              "visibleWhen": [
                {
                  "field": "usePgp",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "pgp.privateKey",
              "name": "/pgp/privateKey",
              "helpKey": "connection.pgp.privateKey"
            },
            "pgp.passphrase": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "type": "text",
              "label": "Private key passphrase",
              "defaultValue": "",
              "requiredWhen": [
                {
                  "field": "pgp.privateKey",
                  "isNot": [
                    ""
                  ]
                }
              ],
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "pgp.passphrase",
              "omitWhenHidden": true,
              "visibleWhen": [
                {
                  "field": "usePgp",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "pgp.passphrase",
              "name": "/pgp/passphrase",
              "helpKey": "connection.pgp.passphrase"
            },
            "pgp.compressionAlgorithm": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Compression algorithm",
              "skipSort": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "zip",
                      "value": "zip"
                    },
                    {
                      "label": "zlib",
                      "value": "zlib"
                    }
                  ]
                }
              ],
              "fieldId": "pgp.compressionAlgorithm",
              "omitWhenHidden": true,
              "visibleWhen": [
                {
                  "field": "usePgp",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "pgp.compressionAlgorithm",
              "name": "/pgp/compressionAlgorithm",
              "defaultValue": "",
              "helpKey": "connection.pgp.compressionAlgorithm"
            },
            "pgp.asciiArmored": {
              "resourceId": "new-zniRvbCJIhW",
              "resourceType": "connections",
              "isLoggable": true,
              "label": "ASCII armor",
              "type": "radiogroup",
              "defaultValue": "true",
              "options": [
                {
                  "items": [
                    {
                      "value": "true",
                      "label": "Yes"
                    },
                    {
                      "value": "false",
                      "label": "No"
                    }
                  ]
                }
              ],
              "fieldId": "pgp.asciiArmored",
              "omitWhenHidden": true,
              "visibleWhen": [
                {
                  "field": "usePgp",
                  "is": [
                    true
                  ]
                }
              ],
              "id": "pgp.asciiArmored",
              "name": "/pgp/asciiArmored",
              "helpKey": "connection.pgp.asciiArmored"
            },
            "ftp.concurrencyLevel": {
              "resourceId": "new-zniRvbCJIhW",
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
                    }
                  ]
                }
              ],
              "fieldId": "ftp.concurrencyLevel",
              "id": "ftp.concurrencyLevel",
              "name": "/ftp/concurrencyLevel",
              "defaultValue": "",
              "helpKey": "connection.ftp.concurrencyLevel"
            }
          }
        }
      },
      {
        "value": "graph_ql",
        "type": "graph_ql",
        "label": "GraphQL",
        "formData":{
          "layout": {
            "type": "collapse",
            "containers": [
              {
                "collapsed": true,
                "label": "General",
                "fields": [
                  "name",
                  "application",
                  "mode",
                  "_agentId"
                ]
              },
              {
                "collapsed": true,
                "label": "Application details",
                "fields": [
                  "http.baseURI",
                  "http.headers"
                ]
              },
              {
                "collapsed": true,
                "label": "Configure authentication",
                "containers": [
                  {
                    "fields": [
                      "http.auth.type"
                    ]
                  },
                  {
                    "type": "collapse",
                    "containers": [
                      {
                        "collapsed": true,
                        "label": "Configure basic auth",
                        "fields": [
                          "http.auth.basic.username",
                          "http.auth.basic.password"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure cookie auth",
                        "fields": [
                          "http.auth.cookie.method",
                          "http.auth.cookie.uri",
                          "http.auth.cookie.body",
                          "http.auth.cookie.successStatusCode"
                        ]
                      },
                      {
                        "collapsed": false,
                        "label": "Configure custom auth",
                        "fields": [
                          "http.custom.encrypted",
                          "http.custom.unencrypted",
                          "configureCutomAuthTokenRefresh"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure digest auth",
                        "fields": [
                          "http.auth.digest.username",
                          "http.auth.digest.password"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure OAuth 2.0",
                        "fields": [
                          "http._iClientId",
                          "http.auth.oauth.scope"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure token auth",
                        "fields": [
                          "http.auth.token.token",
                          "http.auth.token.location",
                          "http.auth.token.headerName",
                          "http.auth.token.scheme",
                          "http.customAuthScheme",
                          "http.auth.token.paramName",
                          "configureTokenRefresh"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure refresh token",
                        "fields": [
                          "http.auth.token.refreshToken",
                          "http.auth.token.refreshMethod",
                          "http.auth.token.refreshRelativeURI",
                          "http.auth.token.refreshHeaders",
                          "http.auth.token.refreshMediaType",
                          "http.auth.token.refreshBody",
                          "http.auth.token.refreshTokenPath",
                          "http.auth.token.tokenPaths"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Configure WSSE auth",
                        "fields": [
                          "http.auth.wsse.username",
                          "http.auth.wsse.password",
                          "http.auth.wsse.headerName"
                        ]
                      },
                      {
                        "collapsed": true,
                        "label": "Non-standard API response patterns",
                        "fields": [
                          "http.auth.failStatusCode",
                          "http.auth.failPath",
                          "http.auth.failPathForOauth",
                          "http.auth.failValues",
                          "http.auth.failValuesForOauth"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "collapsed": true,
                "label": "Non-standard API rate limiter",
                "fields": [
                  "http.rateLimit.limit",
                  "http.rateLimit.failStatusCode",
                  "http.rateLimit.failPath",
                  "http.rateLimit.failValues",
                  "http.retryHeader"
                ]
              },
              {
                "collapsed": true,
                "label": "How to test this connection?",
                "fields": [
                  "http.ping.method",
                  "graphql.query",
                  "graphql.operationName",
                  "graphql.variables"
                ]
              },
              {
                "collapsed": true,
                "label": "Advanced",
                "fields": [
                  "http.disableStrictSSL",
                  "_borrowConcurrencyFromConnectionId",
                  "http.concurrencyLevel",
                  "http.clientCertificates.key",
                  "http.clientCertificates.cert",
                  "http.clientCertificates.passphrase",
                  "http.encrypted",
                  "http.unencrypted"
                ]
              }
            ]
          },
          "fieldMap": {
            "name": {
              "resourceId": "new-4g5zVTdpihf",
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
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "id": "application",
              "type": "text",
              "label": "Application",
              "defaultValue": "GraphQL",
              "defaultDisabled": true,
              "fieldId": "application",
              "name": "/application",
              "helpKey": "connection.application"
            },
            "mode": {
              "resourceId": "new-4g5zVTdpihf",
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
              "resourceId": "new-4g5zVTdpihf",
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
            "http.baseURI": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Base URI",
              "required": true,
              "fieldId": "http.baseURI",
              "helpKey": "graphql.baseURI",
              "id": "http.baseURI",
              "name": "/http/baseURI",
              "defaultValue": ""
            },
            "http.headers": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "keyvalue",
              "keyName": "name",
              "valueName": "value",
              "valueType": "keyvalue",
              "defaultValue": "",
              "label": "Configure HTTP headers",
              "fieldId": "http.headers",
              "id": "http.headers",
              "name": "/http/headers",
              "helpKey": "connection.http.headers"
            },
            "http.auth.type": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Auth type",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "Basic",
                      "value": "basic"
                    },
                    {
                      "label": "Token",
                      "value": "token"
                    },
                    {
                      "label": "OAuth 2.0",
                      "value": "oauth"
                    },
                    {
                      "label": "Custom",
                      "value": "custom"
                    },
                    {
                      "label": "Cookie",
                      "value": "cookie"
                    },
                    {
                      "label": "Digest",
                      "value": "digest"
                    },
                    {
                      "label": "WSSE",
                      "value": "wsse"
                    },
                    {
                      "label": "OAuth 1.0",
                      "value": "oauth1"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.type",
              "id": "http.auth.type",
              "name": "/http/auth/type",
              "defaultValue": "",
              "helpKey": "connection.http.auth.type"
            },
            "http.auth.basic.username": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Username",
              "required": true,
              "fieldId": "http.auth.basic.username",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "basic"
                  ]
                }
              ],
              "id": "http.auth.basic.username",
              "name": "/http/auth/basic/username",
              "defaultValue": "",
              "helpKey": "connection.http.auth.basic.username"
            },
            "http.auth.basic.password": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Password",
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "required": true,
              "fieldId": "http.auth.basic.password",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.basic.password",
              "name": "/http/auth/basic/password",
              "helpKey": "connection.http.auth.basic.password"
            },
            "http.auth.cookie.method": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "HTTP method",
              "options": [
                {
                  "items": [
                    {
                      "label": "GET",
                      "value": "GET"
                    },
                    {
                      "label": "POST",
                      "value": "POST"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.cookie.method",
              "required": true,
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "cookie"
                  ]
                }
              ],
              "id": "http.auth.cookie.method",
              "name": "/http/auth/cookie/method",
              "defaultValue": "",
              "helpKey": "connection.http.auth.cookie.method"
            },
            "http.auth.cookie.uri": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "uri",
              "showLookup": false,
              "showExtract": false,
              "label": "Absolute URL",
              "fieldId": "http.auth.cookie.uri",
              "required": true,
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.cookie.uri",
              "name": "/http/auth/cookie/uri",
              "defaultValue": "",
              "helpKey": "connection.http.auth.cookie.uri"
            },
            "http.auth.cookie.body": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "httprequestbody",
              "label": "HTTP request body",
              "fieldId": "http.auth.cookie.body",
              "visibleWhenAll": [
                {
                  "field": "http.auth.cookie.method",
                  "is": [
                    "POST"
                  ]
                },
                null
              ],
              "required": true,
              "id": "http.auth.cookie.body",
              "name": "/http/auth/cookie/body",
              "defaultValue": "",
              "helpKey": "connection.http.auth.cookie.body"
            },
            "http.auth.cookie.successStatusCode": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Override HTTP status code for success",
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]+$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "fieldId": "http.auth.cookie.successStatusCode",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.cookie.successStatusCode",
              "name": "/http/auth/cookie/successStatusCode",
              "defaultValue": "",
              "helpKey": "connection.http.auth.cookie.successStatusCode"
            },
            "http.custom.encrypted": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.custom.encrypted",
              "type": "editor",
              "mode": "json",
              "label": "Custom encrypted fields",
              "helpKey": "connection.http.encrypted",
              "defaultValue": "{\"field\": \"value\"}",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "custom"
                  ]
                }
              ],
              "description": "Note: for security reasons this field must always be re-entered.",
              "name": "/http/custom/encrypted"
            },
            "http.custom.unencrypted": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.custom.unencrypted",
              "type": "editor",
              "mode": "json",
              "label": "Custom unencrypted fields",
              "helpKey": "connection.http.unencrypted",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "custom"
                  ]
                }
              ],
              "defaultValue": "{\"field\": \"value\"}",
              "name": "/http/custom/unencrypted"
            },
            "configureCutomAuthTokenRefresh": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "configureCutomAuthTokenRefresh",
              "type": "checkbox",
              "label": "Configure refresh token",
              "helpKey": "connection.configureTokenRefresh",
              "defaultValue": false,
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "custom"
                  ]
                }
              ],
              "fieldId": "configureCutomAuthTokenRefresh",
              "name": "/configureCutomAuthTokenRefresh"
            },
            "http.auth.digest.username": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.digest.username",
              "type": "text",
              "label": "Username",
              "required": true,
              "helpKey": "connection.http.auth.basic.username",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "digest"
                  ]
                }
              ],
              "name": "/http/auth/digest/username"
            },
            "http.auth.digest.password": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.digest.password",
              "type": "text",
              "label": "Password",
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "required": true,
              "helpKey": "connection.http.auth.basic.password",
              "visibleWhenAll": [
                null
              ],
              "name": "/http/auth/digest/password"
            },
            "http._iClientId": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "iClients",
              "isLoggable": true,
              "label": "OAuth 2.0 client",
              "type": "dynaiclient",
              "allowNew": true,
              "allowEdit": true,
              "fieldId": "http._iClientId",
              "required": true,
              "filter": {
                "provider": "custom_oauth2"
              },
              "connectionId": "new-4g5zVTdpihf",
              "ignoreEnvironmentFilter": true,
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "oauth"
                  ]
                }
              ],
              "id": "http._iClientId",
              "name": "/http/_iClientId",
              "defaultValue": "",
              "helpKey": "connection.http._iClientId"
            },
            "http.auth.oauth.scope": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.oauth.scope",
              "type": "text",
              "label": "Scope",
              "delimiter": ",",
              "helpKey": "connection.generic.http.auth.oauth.scope",
              "visibleWhenAll": [
                null
              ],
              "name": "/http/auth/oauth/scope",
              "defaultValue": ""
            },
            "http.auth.token.token": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Token",
              "inputType": "password",
              "required": true,
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "http.auth.token.token",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "token"
                  ]
                },
                {
                  "field": "http.auth.type",
                  "is": [
                    "token"
                  ]
                }
              ],
              "id": "http.auth.token.token",
              "name": "/http/auth/token/token",
              "helpKey": "connection.http.auth.token.token"
            },
            "http.auth.token.location": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Send token via",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "URL parameter",
                      "value": "url"
                    },
                    {
                      "label": "HTTP header",
                      "value": "header"
                    },
                    {
                      "label": "HTTP body",
                      "value": "body"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.token.location",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.location",
              "name": "/http/auth/token/location",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.location"
            },
            "http.auth.token.headerName": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Header name",
              "defaultValue": "Authorization",
              "fieldId": "http.auth.token.headerName",
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.location",
                  "is": [
                    "header"
                  ]
                },
                null
              ],
              "required": true,
              "id": "http.auth.token.headerName",
              "name": "/http/auth/token/headerName",
              "helpKey": "connection.http.auth.token.headerName"
            },
            "http.auth.token.scheme": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Header scheme",
              "skipDefault": true,
              "defaultValue": " ",
              "options": [
                {
                  "items": [
                    {
                      "label": "Bearer",
                      "value": "Bearer"
                    },
                    {
                      "label": "MAC",
                      "value": "MAC"
                    },
                    {
                      "label": "None",
                      "value": " "
                    },
                    {
                      "label": "Custom",
                      "value": "Custom"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.token.scheme",
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.location",
                  "is": [
                    "header"
                  ]
                },
                null
              ],
              "id": "http.auth.token.scheme",
              "name": "/http/auth/token/scheme",
              "helpKey": "connection.http.auth.token.scheme"
            },
            "http.customAuthScheme": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.customAuthScheme",
              "type": "text",
              "label": "Custom auth scheme",
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.location",
                  "is": [
                    "header"
                  ]
                },
                {
                  "field": "http.auth.token.scheme",
                  "isNot": [
                    "Bearer",
                    "MAC",
                    " "
                  ]
                },
                null
              ],
              "required": true,
              "defaultValue": "",
              "name": "/http/customAuthScheme",
              "helpKey": "connection.http.customAuthScheme"
            },
            "http.auth.token.paramName": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Parameter name",
              "required": true,
              "fieldId": "http.auth.token.paramName",
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.location",
                  "is": [
                    "url"
                  ]
                },
                null
              ],
              "defaultValue": "access_token",
              "id": "http.auth.token.paramName",
              "name": "/http/auth/token/paramName",
              "helpKey": "connection.http.auth.token.paramName"
            },
            "configureTokenRefresh": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "configureTokenRefresh",
              "type": "checkbox",
              "label": "Configure refresh token",
              "defaultValue": false,
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.location",
                  "isNot": [
                    ""
                  ]
                },
                {
                  "field": "http.auth.type",
                  "is": [
                    "token"
                  ]
                },
                null
              ],
              "name": "/configureTokenRefresh",
              "helpKey": "connection.configureTokenRefresh"
            },
            "http.auth.token.refreshToken": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "inputType": "password",
              "required": true,
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "label": "Refresh token",
              "fieldId": "http.auth.token.refreshToken",
              "visibleWhenAll": [
                {
                  "OR": [
                    {
                      "AND": [
                        {
                          "field": "http.auth.type",
                          "is": [
                            "token"
                          ]
                        },
                        {
                          "field": "http.auth.token.location",
                          "isNot": [
                            ""
                          ]
                        },
                        {
                          "field": "configureTokenRefresh",
                          "is": [
                            true
                          ]
                        }
                      ]
                    },
                    {
                      "AND": [
                        {
                          "field": "http.auth.type",
                          "is": [
                            "custom"
                          ]
                        },
                        {
                          "field": "configureCutomAuthTokenRefresh",
                          "is": [
                            true
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "id": "http.auth.token.refreshToken",
              "name": "/http/auth/token/refreshToken",
              "helpKey": "connection.http.auth.token.refreshToken"
            },
            "http.auth.token.refreshMethod": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "HTTP method",
              "options": [
                {
                  "items": [
                    {
                      "label": "GET",
                      "value": "GET"
                    },
                    {
                      "label": "POST",
                      "value": "POST"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.token.refreshMethod",
              "required": true,
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.refreshMethod",
              "name": "/http/auth/token/refreshMethod",
              "helpKey": "connection.http.auth.token.refreshMethod"
            },
            "http.auth.token.refreshRelativeURI": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "relativeuri",
              "showLookup": false,
              "showExtract": false,
              "label": "Relative URI",
              "fieldId": "http.auth.token.refreshRelativeURI",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.refreshRelativeURI",
              "name": "/http/auth/token/refreshRelativeURI",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.refreshRelativeURI"
            },
            "http.auth.token.refreshHeaders": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "keyvalue",
              "keyName": "name",
              "valueName": "value",
              "valueType": "keyvalue",
              "label": "Configure HTTP headers",
              "fieldId": "http.auth.token.refreshHeaders",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.refreshHeaders",
              "name": "/http/auth/token/refreshHeaders",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.refreshHeaders"
            },
            "http.auth.token.refreshMediaType": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "select",
              "label": "Override media type",
              "placeholder": "Do not override",
              "options": [
                {
                  "items": [
                    {
                      "label": "JSON",
                      "value": "json"
                    },
                    {
                      "label": "URL encoded",
                      "value": "urlencoded"
                    },
                    {
                      "label": "XML",
                      "value": "xml"
                    }
                  ]
                }
              ],
              "fieldId": "http.auth.token.refreshMediaType",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.refreshMediaType",
              "name": "/http/auth/token/refreshMediaType",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.refreshMediaType"
            },
            "http.auth.token.refreshBody": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "httprequestbody",
              "label": "HTTP request body",
              "fieldId": "http.auth.token.refreshBody",
              "visibleWhenAll": [
                {
                  "field": "http.auth.token.refreshMethod",
                  "is": [
                    "POST"
                  ]
                },
                null
              ],
              "id": "http.auth.token.refreshBody",
              "name": "/http/auth/token/refreshBody",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.refreshBody"
            },
            "http.auth.token.refreshTokenPath": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Path to token field in HTTP response body",
              "fieldId": "http.auth.token.refreshTokenPath",
              "visibleWhenAll": [
                null
              ],
              "id": "http.auth.token.refreshTokenPath",
              "name": "/http/auth/token/refreshTokenPath",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.refreshTokenPath"
            },
            "http.auth.token.tokenPaths": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.token.tokenPaths",
              "type": "text",
              "label": "Paths to encrypted field in the HTTP response body",
              "delimiter": ",",
              "fieldId": "http.auth.token.tokenPaths",
              "visibleWhenAll": [
                {
                  "field": "configureCutomAuthTokenRefresh",
                  "is": [
                    true
                  ]
                },
                {
                  "field": "http.auth.type",
                  "is": [
                    "custom"
                  ]
                },
                null
              ],
              "name": "/http/auth/token/tokenPaths",
              "defaultValue": "",
              "helpKey": "connection.http.auth.token.tokenPaths"
            },
            "http.auth.wsse.username": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.wsse.username",
              "type": "text",
              "label": "Username",
              "required": true,
              "helpKey": "connection.http.auth.basic.username",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "wsse"
                  ]
                }
              ],
              "name": "/http/auth/wsse/username"
            },
            "http.auth.wsse.password": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.wsse.password",
              "type": "text",
              "label": "Password",
              "inputType": "password",
              "defaultValue": "",
              "description": "Note: for security reasons this field must always be re-entered.",
              "required": true,
              "helpKey": "connection.http.auth.basic.password",
              "visibleWhenAll": [
                null
              ],
              "name": "/http/auth/wsse/password"
            },
            "http.auth.wsse.headerName": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.auth.wsse.headerName",
              "type": "text",
              "label": "Header name",
              "defaultValue": "X-WSSE",
              "required": true,
              "visibleWhenAll": [
                null
              ],
              "name": "/http/auth/wsse/headerName",
              "helpKey": "connection.http.auth.wsse.headerName"
            },
            "http.auth.failStatusCode": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Override HTTP status code for auth errors",
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]+$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "fieldId": "http.auth.failStatusCode",
              "id": "http.auth.failStatusCode",
              "name": "/http/auth/failStatusCode",
              "defaultValue": "",
              "helpKey": "connection.http.auth.failStatusCode"
            },
            "http.auth.failPath": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Path to auth error field in HTTP response body",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "isNot": [
                    "oauth"
                  ]
                }
              ],
              "fieldId": "http.auth.failPath",
              "id": "http.auth.failPath",
              "name": "/http/auth/failPath",
              "defaultValue": "",
              "helpKey": "connection.http.auth.failPath"
            },
            "http.auth.failPathForOauth": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "helpKey": "connection.http.auth.failPath",
              "label": "Override path to auth error field in HTTP response body",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "oauth"
                  ]
                }
              ],
              "fieldId": "http.auth.failPathForOauth",
              "id": "http.auth.failPathForOauth",
              "name": "/http/auth/failPathForOauth"
            },
            "http.auth.failValues": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "delimiter": ",",
              "label": "Auth error values",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "isNot": [
                    "oauth"
                  ]
                }
              ],
              "fieldId": "http.auth.failValues",
              "id": "http.auth.failValues",
              "name": "/http/auth/failValues",
              "defaultValue": "",
              "helpKey": "connection.http.auth.failValues"
            },
            "http.auth.failValuesForOauth": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "helpKey": "connection.http.auth.failPath",
              "delimiter": ",",
              "label": "Override auth error values",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "is": [
                    "oauth"
                  ]
                }
              ],
              "fieldId": "http.auth.failValuesForOauth",
              "id": "http.auth.failValuesForOauth",
              "name": "/http/auth/failValuesForOauth"
            },
            "http.rateLimit.limit": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Wait time between HTTP requests",
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]+$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "fieldId": "http.rateLimit.limit",
              "id": "http.rateLimit.limit",
              "name": "/http/rateLimit/limit",
              "defaultValue": "",
              "helpKey": "connection.http.rateLimit.limit"
            },
            "http.rateLimit.failStatusCode": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Override HTTP status code for rate-limit errors",
              "validWhen": [
                {
                  "matchesRegEx": {
                    "pattern": "^[\\d]+$",
                    "message": "Only numbers allowed"
                  }
                }
              ],
              "fieldId": "http.rateLimit.failStatusCode",
              "id": "http.rateLimit.failStatusCode",
              "name": "/http/rateLimit/failStatusCode",
              "defaultValue": "",
              "helpKey": "connection.http.rateLimit.failStatusCode"
            },
            "http.rateLimit.failPath": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "text",
              "label": "Path to rate-limit error field in HTTP response body",
              "fieldId": "http.rateLimit.failPath",
              "id": "http.rateLimit.failPath",
              "name": "/http/rateLimit/failPath",
              "defaultValue": "",
              "helpKey": "connection.http.rateLimit.failPath"
            },
            "http.rateLimit.failValues": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Rate-limit error values",
              "delimiter": ",",
              "fieldId": "http.rateLimit.failValues",
              "id": "http.rateLimit.failValues",
              "name": "/http/rateLimit/failValues",
              "defaultValue": "",
              "helpKey": "connection.http.rateLimit.failValues"
            },
            "http.retryHeader": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "Override retry-after HTTP response header name",
              "fieldId": "http.retryHeader",
              "id": "http.retryHeader",
              "name": "/http/retryHeader",
              "defaultValue": "",
              "helpKey": "connection.http.retryHeader"
            },
            "http.ping.method": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "http.ping.method",
              "type": "select",
              "label": "HTTP method",
              "required": true,
              "options": [
                {
                  "items": [
                    {
                      "label": "GET",
                      "value": "GET"
                    },
                    {
                      "label": "POST",
                      "value": "POST"
                    }
                  ]
                }
              ],
              "name": "/http/ping/method",
              "defaultValue": "",
              "helpKey": "connection.http.ping.method"
            },
            "graphql.query": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "graphql.query",
              "type": "uri",
              "label": "Query",
              "required": true,
              "helpKey": "connection.graphql.query",
              "noApi": true,
              "showLookup": false,
              "name": "/graphql/query"
            },
            "graphql.operationName": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "graphql.operationName",
              "type": "uri",
              "label": "Operation name",
              "helpKey": "connection.graphql.operationName",
              "noApi": true,
              "showLookup": false,
              "name": "/graphql/operationName"
            },
            "graphql.variables": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "id": "graphql.variables",
              "type": "uri",
              "label": "Variables",
              "helpKey": "connection.graphql.variables",
              "noApi": true,
              "showLookup": false,
              "name": "/graphql/variables"
            },
            "http.disableStrictSSL": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "checkbox",
              "label": "Disable strict SSL",
              "fieldId": "http.disableStrictSSL",
              "id": "http.disableStrictSSL",
              "name": "/http/disableStrictSSL",
              "defaultValue": "",
              "helpKey": "connection.http.disableStrictSSL"
            },
            "_borrowConcurrencyFromConnectionId": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "filter": {
                "$and": [
                  {
                    "_id": {
                      "$ne": "new-4g5zVTdpihf"
                    }
                  },
                  {
                    "type": "graph_ql"
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
            "http.concurrencyLevel": {
              "resourceId": "new-4g5zVTdpihf",
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
              "fieldId": "http.concurrencyLevel",
              "id": "http.concurrencyLevel",
              "name": "/http/concurrencyLevel",
              "defaultValue": "",
              "helpKey": "connection.http.concurrencyLevel"
            },
            "http.clientCertificates.key": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "uploadfile",
              "placeholder": "SSL client key",
              "label": "SSL client key",
              "helpKey": "connection.http.clientCertificates.key",
              "fieldId": "http.clientCertificates.key",
              "id": "http.clientCertificates.key",
              "name": "/http/clientCertificates/key",
              "defaultValue": ""
            },
            "http.clientCertificates.cert": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "uploadfile",
              "placeholder": "SSL certificate",
              "label": "SSL certificate",
              "helpKey": "connection.http.clientCertificates.cert",
              "fieldId": "http.clientCertificates.cert",
              "id": "http.clientCertificates.cert",
              "name": "/http/clientCertificates/cert",
              "defaultValue": ""
            },
            "http.clientCertificates.passphrase": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "text",
              "label": "SSL passphrase",
              "helpKey": "connection.http.clientCertificates.passphrase",
              "fieldId": "http.clientCertificates.passphrase",
              "id": "http.clientCertificates.passphrase",
              "name": "/http/clientCertificates/passphrase",
              "defaultValue": ""
            },
            "http.encrypted": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "type": "editor",
              "mode": "json",
              "label": "Encrypted",
              "description": "Note: for security reasons this field must always be re-entered.",
              "fieldId": "http.encrypted",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "isNot": [
                    "custom"
                  ]
                }
              ],
              "defaultValue": "{\"field\": \"value\"}",
              "id": "http.encrypted",
              "name": "/http/encrypted",
              "helpKey": "connection.http.encrypted"
            },
            "http.unencrypted": {
              "resourceId": "new-4g5zVTdpihf",
              "resourceType": "connections",
              "isLoggable": true,
              "type": "editor",
              "mode": "json",
              "label": "Unencrypted",
              "fieldId": "http.unencrypted",
              "visibleWhen": [
                {
                  "field": "http.auth.type",
                  "isNot": [
                    "custom"
                  ]
                }
              ],
              "defaultValue": "{\"field\": \"value\"}",
              "id": "http.unencrypted",
              "name": "/http/unencrypted",
              "helpKey": "connection.http.unencrypted"
            }
          },
          "actions": [
            {
              "id": "saveandcontinuegroup",
              "isHTTPForm": true
            },
            {
              "id": "oauthandtest",
              "isHTTPForm": true
            },
            {
              "id": "saveandclosegroup",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "is": [
                    ""
                  ]
                }
              ]
            },
            {
              "id": "testandsavegroup",
              "visibleWhenAll": [
                {
                  "field": "http.auth.type",
                  "isNot": [
                    "oauth"
                  ]
                },
                {
                  "field": "http.auth.type",
                  "isNot": [
                    ""
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "value": "http",
        "type": "http",
        "label": "HTTP",
        "keywords": "technology,protocol"
      },
      {
        "value": "rest",
        "type": "rest",
        "label": "REST API (HTTP)",
        "keywords": "technology,protocol"
      },
      {
        "value": "wrapper",
        "type": "wrapper",
        "label": "Wrapper",
        "keywords": "technology"
      }
    ]
  },
  {
    "label": "Connectors",
    "options": [
      {
        "value": "15five",
        "type": "http",
        "icon": "15five",
        "label": "15Five",
        "assistant": "15five"
      },
      {
        "value": "3plcentral",
        "type": "http",
        "icon": "3plcentral",
        "label": "3PL Central",
        "assistant": "3plcentral"
      },
      {
        "value": "4castplus",
        "type": "http",
        "icon": "4castplus",
        "label": "4CastPlus",
        "assistant": "4castplus"
      },
      {
        "value": "accelo",
        "type": "rest",
        "icon": "accelo",
        "label": "Accelo",
        "assistant": "accelo"
      },
      {
        "value": "acton",
        "type": "rest",
        "icon": "acton",
        "label": "Act-On",
        "assistant": "acton"
      },
      {
        "value": "activecampaign",
        "type": "http",
        "icon": "activecampaign",
        "label": "ActiveCampaign",
        "assistant": "activecampaign"
      },
      {
        "value": "acumatica",
        "type": "rest",
        "icon": "acumatica",
        "label": "Acumatica",
        "assistant": "acumatica"
      },
      {
        "value": "adobesign",
        "type": "http",
        "icon": "adobesign",
        "label": "Adobe Sign",
        "assistant": "adobesign"
      },
      {
        "value": "adp",
        "type": "http",
        "icon": "adp",
        "label": "ADP Workforce Now",
        "assistant": "adp"
      },
      {
        "value": "afterpay",
        "type": "http",
        "icon": "afterpay",
        "label": "Afterpay"
      },
      {
        "value": "redshift",
        "type": "http",
        "icon": "redshift",
        "label": "Amazon Redshift (REST API)",
        "assistant": "redshift"
      },
      {
        "value": "s3",
        "type": "s3",
        "label": "Amazon S3"
      },
      {
        "value": "amazonmws",
        "type": "http",
        "icon": "amazonmws",
        "label": "Amazon Seller Central",
        "assistant": "amazonmws"
      },
      {
        "value": "amazonvendorcentral",
        "type": "http",
        "icon": "amazonvendorcentral",
        "label": "Amazon Vendor Central",
        "assistant": "amazonvendorcentral"
      },
      {
        "value": "anaplan",
        "type": "http",
        "icon": "anaplan",
        "label": "Anaplan",
        "assistant": "anaplan"
      },
      {
        "value": "asana",
        "type": "http",
        "icon": "asana",
        "label": "Asana",
        "assistant": "asana"
      },
      {
        "value": "atera",
        "type": "rest",
        "icon": "atera",
        "label": "Atera",
        "assistant": "atera"
      },
      {
        "value": "authorize.net",
        "type": "http",
        "icon": "authorize.net",
        "label": "Authorize.net",
        "assistant": "authorize.net"
      },
      {
        "value": "autopilot",
        "type": "http",
        "icon": "autopilot",
        "label": "Autopilot",
        "assistant": "autopilot"
      },
      {
        "value": "avalara",
        "type": "http",
        "icon": "avalara",
        "label": "Avalara",
        "assistant": "avalara"
      },
      {
        "value": "azureactivedirectory",
        "type": "http",
        "icon": "azureactivedirectory",
        "label": "Azure Active Directory",
        "assistant": "azureactivedirectory"
      },
      {
        "value": "azurestorageaccount",
        "type": "http",
        "icon": "azurestorageaccount",
        "label": "Azure Blob Storage",
        "assistant": "azurestorageaccount"
      },
      {
        "value": "bamboohr",
        "type": "http",
        "icon": "bamboohr",
        "label": "BambooHR",
        "assistant": "bamboohr"
      },
      {
        "value": "bartender",
        "type": "http",
        "icon": "bartender",
        "label": "BarTender",
        "assistant": "bartender"
      },
      {
        "value": "bigcommerce",
        "type": "rest",
        "icon": "bigcommerce",
        "label": "BigCommerce",
        "assistant": "bigcommerce"
      },
      {
        "value": "box",
        "type": "http",
        "icon": "box",
        "label": "Box",
        "assistant": "box"
      },
      {
        "value": "braintree",
        "type": "http",
        "icon": "braintree",
        "label": "Braintree",
        "assistant": "braintree"
      },
      {
        "value": "breezyhr",
        "type": "http",
        "icon": "breezyhr",
        "label": "Breezy HR",
        "assistant": "breezyhr"
      },
      {
        "value": "brex",
        "type": "http",
        "icon": "brex",
        "label": "Brex",
        "assistant": "brex"
      },
      {
        "value": "bronto",
        "type": "http",
        "icon": "bronto",
        "label": "Bronto",
        "assistant": "bronto"
      },
      {
        "value": "bundleb2b",
        "type": "http",
        "icon": "bundleb2b",
        "label": "BundleB2B",
        "assistant": "bundleb2b"
      },
      {
        "value": "campaignmonitor",
        "type": "rest",
        "icon": "campaignmonitor",
        "label": "Campaign Monitor",
        "assistant": "campaignmonitor"
      },
      {
        "value": "cartrover",
        "type": "http",
        "icon": "cartrover",
        "label": "CartRover",
        "assistant": "cartrover"
      },
      {
        "value": "ceridiandayforce",
        "type": "http",
        "icon": "ceridiandayforce",
        "label": "Ceridian Dayforce"
      },
      {
        "value": "certify",
        "type": "rest",
        "icon": "certify",
        "label": "Certify",
        "assistant": "certify"
      },
      {
        "value": "channelape",
        "type": "http",
        "icon": "channelape",
        "label": "ChannelApe",
        "assistant": "channelape"
      },
      {
        "value": "chargebee",
        "type": "rest",
        "icon": "chargebee",
        "label": "Chargebee",
        "assistant": "chargebee"
      },
      {
        "value": "chargify",
        "type": "rest",
        "icon": "chargify",
        "label": "Chargify",
        "assistant": "chargify"
      },
      {
        "value": "clearbit",
        "type": "http",
        "icon": "clearbit",
        "label": "Clearbit"
      },
      {
        "value": "clover",
        "type": "http",
        "icon": "clover",
        "label": "Clover",
        "assistant": "clover"
      },
      {
        "value": "concurexpense",
        "type": "http",
        "icon": "concurexpense",
        "label": "Concur Expense",
        "assistant": "concurexpense"
      },
      {
        "value": "concurinvoice",
        "type": "http",
        "icon": "concurinvoice",
        "label": "Concur Invoice",
        "assistant": "concurinvoice"
      },
      {
        "value": "confluencecloud",
        "type": "http",
        "icon": "confluencecloud",
        "label": "Confluence Cloud",
        "assistant": "confluencecloud"
      },
      {
        "value": "constantcontact",
        "type": "http",
        "icon": "constantcontact",
        "label": "Constant Contact",
        "assistant": "constantcontact"
      },
      {
        "value": "copper",
        "type": "http",
        "icon": "copper",
        "label": "Copper",
        "assistant": "copper"
      },
      {
        "value": "coupa",
        "type": "rest",
        "icon": "coupa",
        "label": "Coupa",
        "assistant": "coupa"
      },
      {
        "value": "datadog",
        "type": "http",
        "icon": "datadog",
        "label": "Datadog"
      },
      {
        "value": "demandbaseads",
        "type": "http",
        "icon": "demandbaseads",
        "label": "Demandbase Ads"
      },
      {
        "value": "docebo",
        "type": "http",
        "icon": "docebo",
        "label": "Docebo",
        "assistant": "docebo"
      },
      {
        "value": "docparser",
        "type": "http",
        "icon": "docparser",
        "label": "Docparser"
      },
      {
        "value": "docusign",
        "type": "rest",
        "icon": "docusign",
        "label": "DocuSign",
        "assistant": "docusign"
      },
      {
        "value": "dotdigital",
        "type": "http",
        "icon": "dotdigital",
        "label": "dotdigital",
        "assistant": "dotdigital"
      },
      {
        "value": "drift",
        "type": "http",
        "icon": "drift",
        "label": "Drift",
        "assistant": "drift"
      },
      {
        "value": "dropbox",
        "type": "http",
        "icon": "dropbox",
        "label": "Dropbox",
        "assistant": "dropbox"
      },
      {
        "value": "dunandbradstreet",
        "type": "rest",
        "icon": "dunandbradstreet",
        "label": "Dun & Bradstreet",
        "assistant": "dunandbradstreet"
      },
      {
        "value": "easypost",
        "type": "http",
        "icon": "easypost",
        "label": "EasyPost",
        "assistant": "easypost"
      },
      {
        "value": "easyship",
        "type": "http",
        "icon": "easyship",
        "label": "Easyship",
        "assistant": "easyship"
      },
      {
        "value": "ebay",
        "type": "rest",
        "icon": "ebay",
        "label": "eBay",
        "assistant": "ebay"
      },
      {
        "value": "ebay-xml",
        "type": "http",
        "icon": "ebay-xml",
        "label": "eBay(XML)",
        "assistant": "ebay-xml"
      },
      {
        "value": "etsy",
        "type": "http",
        "icon": "etsy",
        "label": "Etsy"
      },
      {
        "value": "eventbrite",
        "type": "rest",
        "icon": "eventbrite",
        "label": "Eventbrite",
        "assistant": "eventbrite"
      },
      {
        "value": "exacterp",
        "type": "rest",
        "icon": "exacterp",
        "label": "Exact ERP",
        "assistant": "exacterp"
      },
      {
        "value": "expensify",
        "type": "rest",
        "icon": "expensify",
        "label": "Expensify",
        "assistant": "expensify"
      },
      {
        "value": "faire",
        "type": "http",
        "icon": "faire",
        "label": "Faire",
        "assistant": "faire"
      },
      {
        "value": "fieldaware",
        "type": "rest",
        "icon": "fieldaware",
        "label": "FieldAware",
        "assistant": "fieldaware"
      },
      {
        "value": "financialforce",
        "type": "salesforce",
        "icon": "financialforce",
        "label": "FinancialForce",
        "assistant": "financialforce"
      },
      {
        "value": "freshbooks",
        "type": "rest",
        "icon": "freshbooks",
        "label": "FreshBooks",
        "assistant": "freshbooks"
      },
      {
        "value": "freshdesk",
        "type": "http",
        "icon": "freshdesk",
        "label": "Freshdesk",
        "assistant": "freshdesk"
      },
      {
        "value": "freshworks",
        "type": "http",
        "icon": "freshworks",
        "label": "Freshsales",
        "assistant": "freshworks"
      },
      {
        "value": "freshservice",
        "type": "http",
        "icon": "freshservice",
        "label": "Freshservice",
        "assistant": "freshservice"
      },
      {
        "value": "fulfilment.com",
        "type": "http",
        "icon": "fulfilment.com",
        "label": "Fulfillment.com",
        "assistant": "fulfilment.com"
      },
      {
        "value": "g2",
        "type": "http",
        "icon": "g2",
        "label": "G2",
        "assistant": "g2"
      },
      {
        "value": "gainsight",
        "type": "http",
        "icon": "gainsight",
        "label": "Gainsight CS",
        "assistant": "gainsight"
      },
      {
        "value": "aptrinsic",
        "type": "rest",
        "icon": "aptrinsic",
        "label": "Gainsight PX",
        "assistant": "aptrinsic"
      },
      {
        "value": "github",
        "type": "rest",
        "icon": "github",
        "label": "GitHub",
        "assistant": "github"
      },
      {
        "value": "googleads",
        "type": "http",
        "icon": "googleads",
        "label": "Google Ads",
        "assistant": "googleads"
      },
      {
        "value": "googleanalytics",
        "type": "rest",
        "icon": "googleanalytics",
        "label": "Google Analytics",
        "assistant": "googleanalytics"
      },
      {
        "value": "bigquery",
        "type": "http",
        "icon": "bigquery",
        "label": "Google BigQuery (REST API)",
        "assistant": "bigquery"
      },
      {
        "value": "googlecontactspeople",
        "type": "rest",
        "icon": "googlecontactspeople",
        "label": "Google Contacts",
        "assistant": "googlecontactspeople"
      },
      {
        "value": "googledrive",
        "type": "http",
        "icon": "googledrive",
        "label": "Google Drive",
        "assistant": "googledrive"
      },
      {
        "value": "googlemail",
        "type": "rest",
        "icon": "googlemail",
        "label": "Google Mail",
        "assistant": "googlemail"
      },
      {
        "value": "googlesheets",
        "type": "rest",
        "icon": "googlesheets",
        "label": "Google Sheets",
        "assistant": "googlesheets"
      },
      {
        "value": "googleshopping",
        "type": "rest",
        "icon": "googleshopping",
        "label": "Google Shopping",
        "assistant": "googleshopping"
      },
      {
        "value": "gorgias",
        "type": "http",
        "icon": "gorgias",
        "label": "Gorgias",
        "assistant": "gorgias"
      },
      {
        "value": "greenhouse",
        "type": "http",
        "icon": "greenhouse",
        "label": "Greenhouse",
        "assistant": "greenhouse"
      },
      {
        "value": "grms",
        "type": "rest",
        "icon": "grms",
        "label": "GRMS",
        "assistant": "grms"
      },
      {
        "value": "happyreturns",
        "type": "http",
        "icon": "happyreturns",
        "label": "Happy Returns",
        "assistant": "happyreturns"
      },
      {
        "value": "harvest",
        "type": "rest",
        "icon": "harvest",
        "label": "Harvest",
        "assistant": "harvest"
      },
      {
        "value": "hubspot",
        "type": "rest",
        "icon": "hubspot",
        "label": "HubSpot",
        "assistant": "hubspot"
      },
      {
        "value": "insightly",
        "type": "rest",
        "icon": "insightly",
        "label": "Insightly",
        "assistant": "insightly"
      },
      {
        "value": "inspectorio",
        "type": "http",
        "icon": "inspectorio",
        "label": "Inspectorio",
        "assistant": "inspectorio"
      },
      {
        "value": "instagramads",
        "type": "http",
        "icon": "instagramads",
        "label": "Instagram Ads"
      },
      {
        "value": "integratorio",
        "type": "rest",
        "icon": "integratorio",
        "label": "integrator.io",
        "assistant": "integratorio"
      },
      {
        "value": "intercom",
        "type": "http",
        "icon": "intercom",
        "label": "Intercom",
        "assistant": "intercom"
      },
      {
        "value": "jazzhr",
        "type": "http",
        "icon": "jazzhr",
        "label": "JazzHR",
        "assistant": "jazzhr"
      },
      {
        "value": "jira",
        "type": "rest",
        "icon": "jira",
        "label": "Jira Cloud platform",
        "assistant": "jira"
      },
      {
        "value": "jiraserver",
        "type": "http",
        "icon": "jiraserver",
        "label": "Jira Server platform",
        "assistant": "jiraserver"
      },
      {
        "value": "jobvite",
        "type": "rest",
        "icon": "jobvite",
        "label": "Jobvite",
        "assistant": "jobvite"
      },
      {
        "value": "joor",
        "type": "http",
        "icon": "joor",
        "label": "JOOR",
        "assistant": "joor"
      },
      {
        "value": "jumpcloud",
        "type": "http",
        "icon": "jumpcloud",
        "label": "JumpCloud"
      },
      {
        "value": "klaviyo",
        "type": "rest",
        "icon": "klaviyo",
        "label": "Klaviyo",
        "assistant": "klaviyo"
      },
      {
        "value": "lexbizz",
        "type": "http",
        "icon": "lexbizz",
        "label": "lexbizz",
        "assistant": "lexbizz"
      },
      {
        "value": "lightspeed",
        "type": "rest",
        "icon": "lightspeed",
        "label": "Lightspeed",
        "assistant": "lightspeed"
      },
      {
        "value": "linkedinads",
        "type": "http",
        "icon": "linkedinads",
        "label": "LinkedIn Ads"
      },
      {
        "value": "liquidplanner",
        "type": "http",
        "icon": "liquidplanner",
        "label": "LiquidPlanner",
        "assistant": "liquidplanner"
      },
      {
        "value": "listrak",
        "type": "http",
        "icon": "listrak",
        "label": "Listrak"
      },
      {
        "value": "saplitmos",
        "type": "http",
        "icon": "saplitmos",
        "label": "Litmos",
        "assistant": "saplitmos"
      },
      {
        "value": "logisense",
        "type": "http",
        "icon": "logisense",
        "label": "LogiSense",
        "assistant": "logisense"
      },
      {
        "value": "looker",
        "type": "http",
        "icon": "looker",
        "label": "Looker",
        "assistant": "looker"
      },
      {
        "value": "loopreturns",
        "type": "http",
        "icon": "loopreturns",
        "label": "Loop Returns",
        "assistant": "loopreturns"
      },
      {
        "value": "magento",
        "type": "rest",
        "icon": "magento",
        "label": "Magento 2",
        "assistant": "magento"
      },
      {
        "value": "mailchimp",
        "type": "rest",
        "icon": "mailchimp",
        "label": "Mailchimp",
        "assistant": "mailchimp"
      },
      {
        "value": "mailgun",
        "type": "rest",
        "icon": "mailgun",
        "label": "Mailgun",
        "assistant": "mailgun"
      },
      {
        "value": "marketo",
        "type": "rest",
        "icon": "marketo",
        "label": "Marketo",
        "assistant": "marketo"
      },
      {
        "value": "mavenlink",
        "type": "http",
        "icon": "mavenlink",
        "label": "Mavenlink",
        "assistant": "mavenlink"
      },
      {
        "value": "mercadolibre",
        "type": "http",
        "icon": "mercadolibre",
        "label": "MercadoLibre",
        "assistant": "mercadolibre"
      },
      {
        "value": "messagemedia",
        "type": "http",
        "icon": "messagemedia",
        "label": "MessageMedia",
        "assistant": "messagemedia"
      },
      {
        "value": "microsoftbusinesscentral",
        "type": "rest",
        "icon": "microsoftbusinesscentral",
        "label": "Microsoft Dynamics 365 Business Central",
        "assistant": "microsoftbusinesscentral"
      },
      {
        "value": "microsoftdynamics365",
        "type": "rest",
        "icon": "microsoftdynamics365",
        "label": "Microsoft Dynamics 365 CRM",
        "assistant": "microsoftdynamics365"
      },
      {
        "value": "microsoftdynamics365finance",
        "type": "http",
        "icon": "microsoftdynamics365finance",
        "label": "Microsoft Dynamics 365 Finance",
        "assistant": "microsoftdynamics365finance"
      },
      {
        "value": "microsoftdynamics365financeandoperation",
        "type": "http",
        "icon": "microsoftdynamics365financeandoperation",
        "label": "Microsoft Dynamics 365 Supply Chain Management",
        "assistant": "microsoftdynamics365financeandoperation"
      },
      {
        "value": "microsoftonenote",
        "type": "rest",
        "icon": "microsoftonenote",
        "label": "Microsoft OneNote",
        "assistant": "microsoftonenote"
      },
      {
        "value": "microsoftoutlookcalendar",
        "type": "rest",
        "icon": "microsoftoutlookcalendar",
        "label": "Microsoft Outlook Calendar",
        "assistant": "microsoftoutlookcalendar"
      },
      {
        "value": "microsoftoutlookcontacts",
        "type": "rest",
        "icon": "microsoftoutlookcontacts",
        "label": "Microsoft Outlook Contacts",
        "assistant": "microsoftoutlookcontacts"
      },
      {
        "value": "microsoftoutlookmail",
        "type": "rest",
        "icon": "microsoftoutlookmail",
        "label": "Microsoft Outlook Mail",
        "assistant": "microsoftoutlookmail"
      },
      {
        "value": "microsoftpowerautomate",
        "type": "http",
        "icon": "microsoftpowerautomate",
        "label": "Microsoft Power Automate",
        "assistant": "microsoftpowerautomate"
      },
      {
        "value": "microsoftteams",
        "type": "http",
        "icon": "microsoftteams",
        "label": "Microsoft Teams",
        "assistant": "microsoftteams"
      },
      {
        "value": "miva",
        "type": "rest",
        "icon": "miva",
        "label": "Miva",
        "assistant": "miva"
      },
      {
        "value": "mixpanel",
        "type": "http",
        "icon": "mixpanel",
        "label": "Mixpanel",
        "assistant": "mixpanel"
      },
      {
        "value": "myobaccountright",
        "type": "http",
        "icon": "myobaccountright",
        "label": "MYOB AccountRight",
        "assistant": "myobaccountright"
      },
      {
        "value": "myobadvanced",
        "type": "http",
        "icon": "myobadvanced",
        "label": "MYOB Advanced",
        "assistant": "myobadvanced"
      },
      {
        "value": "myobessentials",
        "type": "rest",
        "icon": "myobessentials",
        "label": "MYOB Essentials",
        "assistant": "myobessentials"
      },
      {
        "value": "namely",
        "type": "rest",
        "icon": "namely",
        "label": "Namely",
        "assistant": "namely"
      },
      {
        "value": "narvar",
        "type": "http",
        "icon": "narvar",
        "label": "Narvar"
      },
      {
        "value": "netsuite",
        "type": "netsuite",
        "label": "NetSuite"
      },
      {
        "value": "newrelic",
        "type": "http",
        "icon": "newrelic",
        "label": "New Relic",
        "assistant": "newrelic"
      },
      {
        "value": "newegg",
        "type": "http",
        "icon": "newegg",
        "label": "Newegg",
        "assistant": "newegg"
      },
      {
        "value": "oandaexchangerates",
        "type": "rest",
        "icon": "oandaexchangerates",
        "label": "OANDA Exchange Rates",
        "assistant": "oandaexchangerates"
      },
      {
        "value": "oandav20fxtrade",
        "type": "rest",
        "icon": "oandav20fxtrade",
        "label": "OANDA v20 fxTrade",
        "assistant": "oandav20fxtrade"
      },
      {
        "value": "okta",
        "type": "http",
        "icon": "okta",
        "label": "Okta",
        "assistant": "okta"
      },
      {
        "value": "omnisend",
        "type": "http",
        "icon": "omnisend",
        "label": "Omnisend",
        "assistant": "omnisend"
      },
      {
        "value": "onelogin",
        "type": "http",
        "icon": "onelogin",
        "label": "OneLogin",
        "assistant": "onelogin"
      },
      {
        "value": "openai",
        "type": "http",
        "icon": "openai",
        "label": "OpenAI"
      },
      {
        "value": "openair",
        "type": "http",
        "icon": "openair",
        "label": "OpenAir",
        "assistant": "openair"
      },
      {
        "value": "orangehrm",
        "type": "http",
        "icon": "orangehrm",
        "label": "OrangeHRM",
        "assistant": "orangehrm"
      },
      {
        "value": "orderful",
        "type": "http",
        "icon": "orderful",
        "label": "Orderful",
        "assistant": "orderful"
      },
      {
        "value": "outreach",
        "type": "http",
        "icon": "outreach",
        "label": "Outreach",
        "assistant": "outreach"
      },
      {
        "value": "pacejet",
        "type": "http",
        "icon": "pacejet",
        "label": "Pacejet",
        "assistant": "pacejet"
      },
      {
        "value": "pagerduty",
        "type": "http",
        "icon": "pagerduty",
        "label": "PagerDuty",
        "assistant": "pagerduty"
      },
      {
        "value": "pagerdutyevents",
        "type": "http",
        "icon": "pagerdutyevents",
        "label": "PagerDuty Events",
        "assistant": "pagerdutyevents"
      },
      {
        "value": "pandadoc",
        "type": "http",
        "icon": "pandadoc",
        "label": "PandaDoc",
        "assistant": "pandadoc"
      },
      {
        "value": "parseur",
        "type": "rest",
        "icon": "parseur",
        "label": "Parseur",
        "assistant": "parseur"
      },
      {
        "value": "paycor",
        "type": "http",
        "icon": "paycor",
        "label": "Paycor",
        "assistant": "paycor"
      },
      {
        "value": "paylocity",
        "type": "http",
        "icon": "paylocity",
        "label": "Paylocity",
        "assistant": "paylocity"
      },
      {
        "value": "paypal",
        "type": "http",
        "icon": "paypal",
        "label": "PayPal",
        "assistant": "paypal"
      },
      {
        "value": "pdffiller",
        "type": "rest",
        "icon": "pdffiller",
        "label": "PDFfiller",
        "assistant": "pdffiller"
      },
      {
        "value": "pendo",
        "type": "http",
        "icon": "pendo",
        "label": "Pendo"
      },
      {
        "value": "pipedrive",
        "type": "http",
        "icon": "pipedrive",
        "label": "Pipedrive",
        "assistant": "pipedrive"
      },
      {
        "value": "pitneybowes",
        "type": "rest",
        "icon": "pitneybowes",
        "label": "Pitney Bowes",
        "assistant": "pitneybowes"
      },
      {
        "value": "postmark",
        "type": "rest",
        "icon": "postmark",
        "label": "Postmark",
        "assistant": "postmark"
      },
      {
        "value": "powerbi",
        "type": "rest",
        "icon": "powerbi",
        "label": "Power BI",
        "assistant": "powerbi"
      },
      {
        "value": "practicepanther",
        "type": "http",
        "icon": "practicepanther",
        "label": "PracticePanther",
        "assistant": "practicepanther"
      },
      {
        "value": "precisely",
        "type": "http",
        "icon": "precisely",
        "label": "Precisely",
        "assistant": "precisely"
      },
      {
        "value": "prestashop",
        "type": "http",
        "icon": "prestashop",
        "label": "PrestaShop",
        "assistant": "prestashop"
      },
      {
        "value": "pricefx",
        "type": "http",
        "icon": "pricefx",
        "label": "Pricefx",
        "assistant": "pricefx"
      },
      {
        "value": "procurify",
        "type": "rest",
        "icon": "procurify",
        "label": "Procurify",
        "assistant": "procurify"
      },
      {
        "value": "propack",
        "type": "http",
        "icon": "propack",
        "label": "Propack",
        "assistant": "propack"
      },
      {
        "value": "pulseway",
        "type": "http",
        "icon": "pulseway",
        "label": "Pulseway",
        "assistant": "pulseway"
      },
      {
        "value": "quickbase",
        "type": "http",
        "icon": "quickbase",
        "label": "Quickbase",
        "assistant": "quickbase"
      },
      {
        "value": "quickbooks",
        "type": "http",
        "icon": "quickbooks",
        "label": "QuickBooks",
        "assistant": "quickbooks"
      },
      {
        "value": "quip",
        "type": "http",
        "icon": "quip",
        "label": "Quip",
        "assistant": "quip"
      },
      {
        "value": "recharge",
        "type": "http",
        "icon": "recharge",
        "label": "ReCharge",
        "assistant": "recharge"
      },
      {
        "value": "recurly",
        "type": "http",
        "icon": "recurly",
        "label": "Recurly",
        "assistant": "recurly"
      },
      {
        "value": "retailops",
        "type": "rest",
        "icon": "retailops",
        "label": "RetailOps",
        "assistant": "retailops"
      },
      {
        "value": "returnly",
        "type": "rest",
        "icon": "returnly",
        "label": "Returnly",
        "assistant": "returnly"
      },
      {
        "value": "sageintacct",
        "type": "http",
        "icon": "sageintacct",
        "label": "Sage Intacct"
      },
      {
        "value": "sageone",
        "type": "rest",
        "icon": "sageone",
        "label": "Sage One",
        "assistant": "sageone"
      },
      {
        "value": "salesforce",
        "type": "salesforce",
        "label": "Salesforce"
      },
      {
        "value": "sapbydesign",
        "type": "http",
        "icon": "sapbydesign",
        "label": "SAP Business ByDesign",
        "assistant": "sapbydesign"
      },
      {
        "value": "sapbusinessone",
        "type": "http",
        "icon": "sapbusinessone",
        "label": "SAP Business One",
        "assistant": "sapbusinessone"
      },
      {
        "value": "saphana",
        "type": "http",
        "icon": "saphana",
        "label": "SAP S/4HANA Cloud",
        "assistant": "saphana"
      },
      {
        "value": "sapsuccessfactors",
        "type": "http",
        "icon": "sapsuccessfactors",
        "label": "SAP SuccessFactors",
        "assistant": "sapsuccessfactors"
      },
      {
        "value": "segment",
        "type": "http",
        "icon": "segment",
        "label": "Segment",
        "assistant": "segment"
      },
      {
        "value": "servicenow",
        "type": "rest",
        "icon": "servicenow",
        "label": "ServiceNow",
        "assistant": "servicenow"
      },
      {
        "value": "sharepoint",
        "type": "rest",
        "icon": "sharepoint",
        "label": "SharePoint",
        "assistant": "sharepoint"
      },
      {
        "value": "3dcart",
        "type": "rest",
        "icon": "3dcart",
        "label": "Shift4Shop",
        "assistant": "3dcart"
      },
      {
        "value": "shipbob",
        "type": "http",
        "icon": "shipbob",
        "label": "ShipBob",
        "assistant": "shipbob"
      },
      {
        "value": "shipengine",
        "type": "http",
        "icon": "shipengine",
        "label": "ShipEngine",
        "assistant": "shipengine"
      },
      {
        "value": "shiphawk",
        "type": "rest",
        "icon": "shiphawk",
        "label": "ShipHawk",
        "assistant": "shiphawk"
      },
      {
        "value": "shippo",
        "type": "rest",
        "icon": "shippo",
        "label": "Shippo",
        "assistant": "shippo"
      },
      {
        "value": "shipstation",
        "type": "http",
        "icon": "shipstation",
        "label": "ShipStation",
        "assistant": "shipstation"
      },
      {
        "value": "shipwire",
        "type": "rest",
        "icon": "shipwire",
        "label": "Shipwire",
        "assistant": "shipwire"
      },
      {
        "value": "shopify",
        "type": "rest",
        "icon": "shopify",
        "label": "Shopify",
        "assistant": "shopify"
      },
      {
        "value": "skubana",
        "type": "http",
        "icon": "skubana",
        "label": "Skubana",
        "assistant": "skubana"
      },
      {
        "value": "slack",
        "type": "rest",
        "icon": "slack",
        "label": "Slack",
        "assistant": "slack"
      },
      {
        "value": "smartsheet",
        "type": "rest",
        "icon": "smartsheet",
        "label": "Smartsheet",
        "assistant": "smartsheet"
      },
      {
        "value": "snapfulfil",
        "type": "rest",
        "icon": "snapfulfil",
        "label": "Snapfulfil",
        "assistant": "snapfulfil"
      },
      {
        "value": "solidcommerce",
        "type": "http",
        "icon": "solidcommerce",
        "label": "Solid Commerce",
        "assistant": "solidcommerce"
      },
      {
        "value": "splunk",
        "type": "http",
        "icon": "splunk",
        "label": "Splunk"
      },
      {
        "value": "spreecommerce",
        "type": "rest",
        "icon": "spreecommerce",
        "label": "Spree Commerce",
        "assistant": "spreecommerce"
      },
      {
        "value": "squareup",
        "type": "rest",
        "icon": "squareup",
        "label": "Square",
        "assistant": "squareup"
      },
      {
        "value": "stripe",
        "type": "http",
        "icon": "stripe",
        "label": "Stripe",
        "assistant": "stripe"
      },
      {
        "value": "sugarcrm",
        "type": "rest",
        "icon": "sugarcrm",
        "label": "SugarCRM",
        "assistant": "sugarcrm"
      },
      {
        "value": "surveymonkey",
        "type": "http",
        "icon": "surveymonkey",
        "label": "SurveyMonkey",
        "assistant": "surveymonkey"
      },
      {
        "value": "tableau",
        "type": "rest",
        "icon": "tableau",
        "label": "Tableau",
        "assistant": "tableau"
      },
      {
        "value": "tallyfy",
        "type": "http",
        "icon": "tallyfy",
        "label": "Tallyfy"
      },
      {
        "value": "taxjar",
        "type": "rest",
        "icon": "taxjar",
        "label": "TaxJar",
        "assistant": "taxjar"
      },
      {
        "value": "tesco",
        "type": "http",
        "icon": "tesco",
        "label": "Tesco",
        "assistant": "tesco"
      },
      {
        "value": "tophatter",
        "type": "http",
        "icon": "tophatter",
        "label": "Tophatter",
        "assistant": "tophatter"
      },
      {
        "value": "trinet",
        "type": "http",
        "icon": "trinet",
        "label": "TriNet",
        "assistant": "trinet"
      },
      {
        "value": "tsheets",
        "type": "http",
        "icon": "tsheets",
        "label": "TSheets",
        "assistant": "tsheets"
      },
      {
        "value": "twilio",
        "type": "rest",
        "icon": "twilio",
        "label": "Twilio",
        "assistant": "twilio"
      },
      {
        "value": "twitterads",
        "type": "http",
        "icon": "twitterads",
        "label": "Twitter Ads"
      },
      {
        "value": "ups",
        "type": "http",
        "icon": "ups",
        "label": "UPS"
      },
      {
        "value": "vend",
        "type": "http",
        "icon": "vend",
        "label": "Vend",
        "assistant": "vend"
      },
      {
        "value": "vroozi",
        "type": "http",
        "icon": "vroozi",
        "label": "Vroozi",
        "assistant": "vroozi"
      },
      {
        "value": "walmartcanada",
        "type": "http",
        "icon": "walmartcanada",
        "label": "Walmart Canada",
        "assistant": "walmartcanada"
      },
      {
        "value": "walmartmexico",
        "type": "http",
        "icon": "walmartmexico",
        "label": "Walmart Mexico",
        "assistant": "walmartmexico"
      },
      {
        "value": "walmart",
        "type": "http",
        "icon": "walmart",
        "label": "Walmart US",
        "assistant": "walmart"
      },
      {
        "value": "ware2go",
        "type": "http",
        "icon": "ware2go",
        "label": "Ware2Go",
        "assistant": "ware2go"
      },
      {
        "value": "woocommerce",
        "type": "rest",
        "icon": "woocommerce",
        "label": "WooCommerce",
        "assistant": "woocommerce"
      },
      {
        "value": "workday",
        "type": "http",
        "icon": "workday",
        "label": "Workday"
      },
      {
        "value": "wrike",
        "type": "http",
        "icon": "wrike",
        "label": "Wrike",
        "assistant": "wrike"
      },
      {
        "value": "yotpo",
        "type": "http",
        "icon": "yotpo",
        "label": "Yotpo",
        "assistant": "yotpo"
      },
      {
        "value": "zendesksell",
        "type": "http",
        "icon": "zendesksell",
        "label": "Zendesk Sell",
        "assistant": "zendesksell"
      },
      {
        "value": "zendesk",
        "type": "rest",
        "icon": "zendesk",
        "label": "Zendesk Support",
        "assistant": "zendesk"
      },
      {
        "value": "zenefits",
        "type": "http",
        "icon": "zenefits",
        "label": "Zenefits",
        "assistant": "zenefits"
      },
      {
        "value": "zimbra",
        "type": "http",
        "icon": "zimbra",
        "label": "Zimbra",
        "assistant": "zimbra"
      },
      {
        "value": "zohobooks",
        "type": "rest",
        "icon": "zohobooks",
        "label": "Zoho Books",
        "assistant": "zohobooks"
      },
      {
        "value": "zohocrm",
        "type": "rest",
        "icon": "zohocrm",
        "label": "Zoho CRM",
        "assistant": "zohocrm"
      },
      {
        "value": "zohodesk",
        "type": "rest",
        "icon": "zohodesk",
        "label": "Zoho Desk",
        "assistant": "zohodesk"
      },
      {
        "value": "zohoexpense",
        "type": "http",
        "icon": "zohoexpense",
        "label": "Zoho Expense",
        "assistant": "zohoexpense"
      },
      {
        "value": "zohomail",
        "type": "rest",
        "icon": "zohomail",
        "label": "Zoho Mail",
        "assistant": "zohomail"
      },
      {
        "value": "zoom",
        "type": "http",
        "icon": "zoom",
        "label": "Zoom",
        "assistant": "zoom"
      },
      {
        "value": "zoominfo",
        "type": "http",
        "icon": "zoominfo",
        "label": "ZoomInfo"
      },
      {
        "value": "zuora",
        "type": "rest",
        "icon": "zuora",
        "label": "Zuora",
        "assistant": "zuora"
      }
    ]
  }
]