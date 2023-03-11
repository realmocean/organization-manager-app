import { useSessionService } from "@realmocean/services";
import { UIController, HStack, cTopLeading, VStack, cLeading, TextField, Spacer, Icon, UIRecordsContext, Text, State, Icons, Spinner } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { SessionsGrid } from "../views/SessionsGrid";



export class SessionsController extends UIController {

    @State()
    private searchText: string;

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
            RealmDataContext(
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
                                            .onChange((value) => this.searchText = value)
                                        ,
                                        Spacer(),
                                        HStack({spacing: 5})(
                                            Icon(Icons.Close).size(15),
                                            Text('Close All Sessions')
                                        ).width().height()
                                        .background('#F9F9F9'),
                                        HStack({spacing: 5})(
                                            Icon(Icons.Close).size(15),
                                            Text('Lock All Sessions')
                                        ).width().height()
                                        .background('#F9F9F9')

                                    ).height().padding(24),
                                    UIRecordsContext(({ data, isLoading }) =>
                                        isLoading ? HStack(Spinner()):
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