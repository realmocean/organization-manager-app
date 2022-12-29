import { UsersGrid } from '../Views/UsersGrid';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { AddUserDialog } from '../Dialogs/AddUserDialog';
import { RealmDataContext } from '../../../Views/DataContexts';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



export class UserListController extends UIController {

    @State()
    private users: IEmployee[];

    @State()
    private showingUsers: IEmployee[];



    private isLoading(): boolean {
        return this.users == null;
    }


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
                                UsersGrid(data) as any
                        ).resource('employees')

                    )
                )
            )

        )
    }



}