import { UsersGrid } from '../Views/UsersGrid';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { AddUserDialog } from '../Dialogs/AddUserDialog';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'



const columns: ITableViewColumn[] = [
    {
        title: 'Account Name',
        key: "account_name"
    },
    {
        title: 'Email',
        key: "account_email"
    },
    {
        title: 'Type',
        view: (position: IEmployee) => (
            HStack({ alignment: cLeading })(
                Views.ActionBar([
                    {
                        icon: '\\d202',
                        tooltip: 'Edit',
                        iconColor: '#505A64',
                        link: `/app(tenantmanager)/position/edit/${position.Id}`,
                        linkState: { position: position }
                    },
                    {
                        icon: '\\d390',
                        tooltip: 'Delete Title',
                        iconColor: Color.red400,
                        link: `/app(tenantmanager)/title/delete/${position.Id}`,
                        linkState: { position: position }
                    }
                ])
            )
        )
    }
]


export class UserListController extends UIController {

    @State()
    private users: IEmployee[];

    @State()
    private showingUsers: IEmployee[];



    private isLoading(): boolean {
        return this.users == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {

        const orgService = useOrgProvider();
        orgService.getEmployees().then(employees =>
            this.showingUsers = this.users = employees
        )
        /*   RealmBrokerClient.GetEmployees().then(employees => {
            this.showingUsers = this.users = employees;
        }) */
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return ({ AppController_ContextAction_SetController }) => {
            return (
                HStack({ alignment: cTopLeading })(
                    this.isLoading() ?
                        VStack(Spinner()) :
                        VStack({ alignment: cTopLeading })(
                            HStack({ alignment: cLeading, spacing: 15 })(
                                // MARK: Search Box
                               
                                    TextField().placeholder('Search by Employee Name')
                                        .onTextChange((value) => this.Search_Action(value))
                               ,
                                Spacer(),
                                Views.CreateButton({ label: 'New Employee', action: () => AddUserDialog.Show().then(()=> {
                                    this.users = null;
                                    const orgService = useOrgProvider();
                                    orgService.getEmployees().then(employees =>
                                        this.showingUsers = this.users = employees
                                    )
                                }) })
                            ).height().padding(24),
                            UsersGrid(this.users) as any
                        )
                )
            )
        }
    }

 
}