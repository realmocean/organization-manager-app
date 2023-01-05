
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext, Button, UISidebar } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';

import { RealmDataContext } from '../../../Views/DataContexts';
import { SessionsGrid } from '../Views/SessionsGrid';
import { LeftSideMenuView } from '../../../App/Views/LeftSideMenu';
import { Views } from '../../../Views/Views';





export class SessionsController extends UIController {


    public BindRouterParams({ tenant_id, tenant_name }) {

        /*  const orgService = useOrgProvider();
         orgService.getEmployees().then(employees =>
             this.showingUsers = this.users = employees
         ) */

        /*   RealmBrokerClient.GetEmployees().then(employees => {
            this.showingUsers = this.users = employees;
        }) */
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {

        return (
            RealmDataContext(() =>
                HStack({ alignment: cTopLeading })(

                    HStack({ alignment: cTopLeading })(
                        LeftSideMenuView('', 'Sessions'),
                        Views.RightSidePage({
                            title: 'Active Sessions',
                            maxWidth: '1500px',
                            content: (
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box

                                        TextField().placeholder('Search by Account Name')
                                            .onTextChange((value) => this.searchText = value)
                                        ,
                                        Spacer(),
                                        HStack({spacing: 5})(
                                            Icon('\\e8ac').size(15),
                                            Text('Close All Sessions')
                                        ).width().height()
                                        .background('#F9F9F9'),
                                        HStack({spacing: 5})(
                                            Icon('\\e897').size(15),
                                            Text('Lock All Sessions')
                                        ).width().height()
                                        .background('#F9F9F9')

                                    ).height().padding(24),
                                    UIRecordsContext(({ data, isLoading }) =>
                                        isLoading ? Spinner() :
                                            SessionsGrid(data) as any
                                    )
                                        .resource('sessions')
                                        .filter({
                                            'tenant_id': useSessionService().TenantId,
                                            ...(this.searchText != null && this.searchText.length > 2 && {
                                                'account_name': this.searchText
                                            })
                                        })

                                )
                            )
                        })

                    ),


                )
            )

        )
    }



}