const connectors = [
    {
      "value": "15five",
      "type": "http",
      "icon": "15five",
      "label": "15Five",
      "assistant": "15five",
      "image":"https://d2c59yixfx38rj.cloudfront.net/images/react/application-logos/small/4castplus.png"
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
      "type": "rest",
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
      "type": "rest",
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
      "type": "rest",
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
      "value": "docebo",
      "type": "http",
      "icon": "docebo",
      "label": "Docebo",
      "assistant": "docebo"
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
      "type": "rest",
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
      "type": "rest",
      "icon": "freshdesk",
      "label": "Freshdesk",
      "assistant": "freshdesk"
    },
    {
      "value": "freshservice",
      "type": "http",
      "icon": "freshservice",
      "label": "Freshservice",
      "assistant": "freshservice"
    },
    {
      "value": "freshworks",
      "type": "http",
      "icon": "freshworks",
      "label": "Freshworks CRM",
      "assistant": "freshworks"
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
      "type": "rest",
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
      "value": "liquidplanner",
      "type": "rest",
      "icon": "liquidplanner",
      "label": "LiquidPlanner",
      "assistant": "liquidplanner"
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
      "value": "netsuite",
      "type": "netsuite",
      "label": "NetSuite"
    },
    {
      "value": "newrelic",
      "type": "rest",
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
      "type": "rest",
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
      "type": "rest",
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
      "value": "saplitmos",
      "type": "http",
      "icon": "saplitmos",
      "label": "SAP Litmos",
      "assistant": "saplitmos"
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
      "type": "rest",
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
      "type": "rest",
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
      "value": "taxjar",
      "type": "rest",
      "icon": "taxjar",
      "label": "TaxJar",
      "assistant": "taxjar"
    },
    {
      "value": "tesco",
      "type": "rest",
      "icon": "tesco",
      "label": "Tesco",
      "assistant": "tesco"
    },
    {
      "value": "tophatter",
      "type": "rest",
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
      "value": "zuora",
      "type": "rest",
      "icon": "zuora",
      "label": "Zuora",
      "assistant": "zuora"
    }
  ]