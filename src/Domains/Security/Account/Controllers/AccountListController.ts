
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';
import { RealmDataContext } from '../../../../Views/DataContexts';
import { Views } from '../../../../Views/Views';
import { AddUserDialog } from '../../../Users/Dialogs/AddUserDialog';
import { AccountsGridView } from '../Views/AccountsGridView';



const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



export class AccountListController extends UIController {

    public BindRouterParams({ tenant_id, tenant_name }) {


    }

    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {

        return (
            RealmDataContext(() =>
                HStack({ alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading, spacing: 15 })(
                            // MARK: Search Box

                            TextField().placeholder('Search by Employee Name')
                                .onTextChange((value) => this.Search_Action(value))
                            ,
                            Spacer(),
                            Views.CreateButton({
                                label: 'New Employee', action: () => AddUserDialog.Show().then(() => {
                                    this.users = null;
                                    const orgService = useOrgProvider();
                                    orgService.getEmployees().then(employees =>
                                        this.showingUsers = this.users = employees
                                    )
                                })
                            })
                        ).height().padding(24),
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? Spinner() :
                                AccountsGridView(data) as any
                        ).resource('tenantaccount').filter({ 'tenant_id': useSessionService().TenantId })

                    )
                )
            )

        )
    }



}