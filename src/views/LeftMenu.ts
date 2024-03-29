import { UISidebar } from "@realmocean/navigations";
import { useSessionService } from "@realmocean/services";
import {
    cLeading, cTopLeading, HStack, VStack, Text, ForEach, Color, UIRouteLink,
    ScrollView, cVertical, Theme, List, ListTitle, ListItem, Fragment, useNavigate, DataContext,
     jsonServerProvider, UIRecordContext, Icons
} from "@tuval/forms"

const fontFamily = '"SF Pro Text","Helvetica Neue","SegoeUI",sans-serif';

const menuModel = [
    {
        title: 'Dashboard',
        icon: Icons.Dashboard,
        subItems: [
            {
                name: 'Overview',
                icon: Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/overview'

            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'

            }
        ]
    },

    {
        title: 'Directory',
        icon: Icons.Home,
        subItems: [
            /* {
                name: 'Users',
                icon: '\\e0af',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/employee'
            }, */
            {
                name: 'Employees',
                icon: '\\e0af',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/employee/active-employees'
            },
            {
                name: 'Departments',
                icon: '\\e0af',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/department/active-departments'
            },
            {
                name: 'Positions',
                icon: '\\e0af',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/position/active-positions'
            },
            {
                name: 'Titles',
                icon: '\\e0af',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/title/active-titles'
            },
            /*   {
                  name: 'Departments',
                  icon: '\\d200',
                  link: '/app(tenantmanager)/company/department/list'
              },
              {
                  name: 'Positions',
                  icon: '\\d22d',
                  link: '/app(tenantmanager)/position/list'
              },
              {
                  name: 'Titles',
                  icon: '\\d1f0',
                  link: '/app(tenantmanager)/title/list'
              } */
        ]
    },
    {
        title: 'Security',
        icon: Icons.Security,
        subItems: [
            {
                name: 'Accounts',
                icon: '\\d235',
                link: '/app(tenantmanager)/security/account/list'
            },
            {
                name: 'Teams',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
            {
                name: 'Roles',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
            {
                name: 'Delegations',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
            {
                name: 'Permissions',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            }
        ]
    },
    {
        title: 'Restrictions',
        icon: Icons.IPRestrictions,
        subItems: [
            {
                name: 'App Ip Restrictions',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/restrictions/appiprestriction/list'
            },
            {
                name: 'User Ip Restrictions',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
            {
                name: 'Browser Restriction',
                icon: '\\d235',
                link: '/app(tenantmanager)/broker/installed'
            },
        ]
    },
    {
        title: 'Integration',
        icon: Icons.Integrations,
        subItems: [
              {
                name: 'Connectors',
                icon: '\\e73a',
                link: '/app/com.tuvalsoft.app.organizationmanager/marketplace/brokers'
            },
            {
                name: 'Connections',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/company/list/connection/active-connections'
            },
            {
                name: 'Imports',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'Exports',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'Agents',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'iClients',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'Flow Builder',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'Data Loader',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            },
            {
                name: 'Installed Brokers',
                icon: '\\d235',
                link: '/app/com.tuvalsoft.app.organizationmanager/brokers/installed'
            }
        ]
    },
    {
        title: 'Marketplace',
        icon: Icons.Apps,
        subItems: [
            {
                name: 'Apps',
                icon: '\\e73a',
                link: '/app/com.tuvalsoft.app.organizationmanager/marketplace/apps'
            },

            {
                name: 'Licenses',
                icon: '\\e73a',
                link: '/app/com.tuvalsoft.app.organizationmanager/marketplace/brokers'
            },
            {
                name: 'Shopping Cart',
                icon: '\\e8cc',
                link: '/app(tenantmanager)/marketplace/list'
            }
        ]
    },
    {
        title: 'Workflows',
        icon: Icons.Dependency,
        subItems: [

            {
                name: 'Automation',
                icon: '\\d271',
                link: '/app(tenantmanager)/tenant/list'
            },
            {
                name: 'Flows',
                icon: '\\e97a',
                link: '/app/com.tuvalsoft.app.organizationmanager/workflow/flows/flow-projects'
            },
            {
                name: 'Notifications',
                icon: '\\e7f4',
                link: '/app(tenantmanager)/tenant/list'
            },
            {
                name: 'Webhooks',
                icon: '\\eb92',
                link: '/app(tenantmanager)/tenant/list'
            }
        ]
    },
    {
        title: 'Reports',
        icon: Icons.Doc,
        subItems: [
            {
                name: 'Audit',
                icon: '\\e897',
                link: '/app(realmmanager)/auth'
            },
            {
                name: 'Account',
                icon: '\\e8e8',
                link: '/app(realmmanager)/auth'
            },
            {
                name: 'Session',
                icon: '\\e8e8',
                link: '/app(realmmanager)/auth'
            },
            {
                name: 'Application',
                icon: '\\e8e8',
                link: '/app(realmmanager)/auth'
            },
            {
                name: 'Automation',
                icon: '\\e8e8',
                link: '/app(realmmanager)/auth'
            },
            {
                name: 'Orphan Accounts',
                icon: '\\e8e8',
                link: '/app(realmmanager)/auth'
            }
        ]
    },


    {
        title: 'System',
        icon: Icons.Settings,
        link: '/app(tenantmanager)/marketplace/list',
          subItems: [
             {
                 name: 'Tag Management',
                 link: '/app(realmmanager)/dashboard'

             },
             {
                name: 'Single Sign On',
                link: '/app(realmmanager)/dashboard'

            },
            {
                name: 'Language',
                link: '/app(realmmanager)/dashboard'

            },
            {
                name: 'Notifications',
                link: '/app(realmmanager)/dashboard'

            }
         ]
    },

]

export const LeftSideMenuView = (test: string, selectedItem: string) => {
//alert(JSON.stringify(useSessionService()))
    const navigate = useNavigate();
    return (
        DataContext(
            UIRecordContext(({ data }) => {
                // alert(JSON.stringify(data))
                return (
                    VStack({ alignment: cTopLeading })(
                        UISidebar()
                            .selectedMenuItemTitle(selectedItem)
                           // .logo('data:image/svg+xml;base64,PHN2ZyBpZD0iYTVjMmMzNGEtYTVmOS00MDQzLWEwODQtZTUxYjc0NDk3ODk1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImY5NzM2MGZhLWZkMTMtNDIwYi05YjQzLTc0YjhkZGU4M2ExMSIgeDE9IjYuNyIgeTE9IjcuMjYiIHgyPSI2LjciIHkyPSIxOC4zNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4yMiIgc3RvcC1jb2xvcj0iIzMyZDRmNSIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxOThhYjMiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIyYWI0MDcxLTUyOWQtNDQ1MC05NDQzLWU2ZGMwOTM5Y2M0ZSIgeDE9IjYuNDIiIHkxPSIxLjMyIiB4Mj0iNy4yMyIgeTI9IjExLjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjIyIiBzdG9wLWNvbG9yPSIjMzJkNGY1IiAvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE5OGFiMyIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+SWNvbi1pZGVudGl0eS0yMjM8L3RpdGxlPjxwYXRoIGQ9Ik0xNy4yMiwxMy45MmEuNzkuNzksMCwwLDAsLjgtLjc5QS4yOC4yOCwwLDAsMCwxOCwxM2MtLjMxLTIuNS0xLjc0LTQuNTQtNC40Ni00LjU0UzkuMzUsMTAuMjIsOS4wNywxM2EuODEuODEsMCwwLDAsLjcyLjg4aDcuNDNaIiBmaWxsPSIjMDA3OGQ0IiAvPjxwYXRoIGQ9Ik0xMy41NSw5LjA5YTIuNDQsMi40NCwwLDAsMS0xLjM2LS40bDEuMzUsMy41MiwxLjMzLTMuNDlBMi41NCwyLjU0LDAsMCwxLDEzLjU1LDkuMDlaIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjgiIC8+PGNpcmNsZSBjeD0iMTMuNTUiIGN5PSI2LjU4IiByPSIyLjUxIiBmaWxsPSIjMDA3OGQ0IiAvPjxwYXRoIGQ9Ik0xMi4xOSwxNi4zNmExLjE5LDEuMTksMCwwLDAsMS4xOS0xLjE5LjY2LjY2LDAsMCwwLDAtLjE0Yy0uNDctMy43NC0yLjYtNi43OC02LjY2LTYuNzhTLjQ0LDEwLjgzLDAsMTVhMS4yLDEuMiwwLDAsMCwxLjA3LDEuMzFoMTEuMVoiIGZpbGw9InVybCgjZjk3MzYwZmEtZmQxMy00MjBiLTliNDMtNzRiOGRkZTgzYTExKSIgLz48cGF0aCBkPSJNNi43Nyw5LjE0YTMuNzIsMy43MiwwLDAsMS0yLS42bDIsNS4yNSwyLTUuMjFBMy44MSwzLjgxLDAsMCwxLDYuNzcsOS4xNFoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOCIgLz48Y2lyY2xlIGN4PSI2Ljc0IiBjeT0iNS4zOSIgcj0iMy43NSIgZmlsbD0idXJsKCNiMmFiNDA3MS01MjlkLTQ0NTAtOTQ0My1lNmRjMDkzOWNjNGUpIiAvPjwvc3ZnPg==')
                            .header(useSessionService().TenantName?.toUpperCase())
                            .menuModel(menuModel as any)
                    )
                        .width()
                        .borderRight('solid 1px var(--layout-border-color)')
                       // .background('rgb(246,247,251)')
                        .fontSize(16)
                )

            }).resource("posts").filter({ id: 1 })

        ).dataProvider(jsonServerProvider('https://jsonplaceholder.typicode.com'))
    )
}