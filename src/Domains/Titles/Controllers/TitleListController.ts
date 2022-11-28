
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse, useOrgProvider, IEmployeeTitle } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../Views/TitleGrid';
import { AddUserDialog } from '../../Users/Dialogs/AddUserDialog';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class TitleListController extends UIController {

    @State()
    private titles: IEmployeeTitle[];

    @State()
    private showingTitles: any[];

    private isLoading(): boolean {
        return this.titles == null;
    }


    public BindRouterParams({ tenant_id, tenant_name }) {
        const orgService = useOrgProvider();
        //  if (this.tenants == null) {
        orgService.getTitles().then(titles => {
            this.showingTitles = this.titles = titles;
        })
    }
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    public LoadView(): any {
        return (

            HStack({ alignment: cTopLeading })(
                this.isLoading() ?
                    VStack(Spinner()) :
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading, spacing: 15 })(
                            // MARK: Search Box

                            TextField().placeholder('Search by Title Name')
                                .onTextChange((value) => this.Search_Action(value))
                            ,
                            Spacer(),
                            Views.CreateButton({
                                label: 'New Title', action: () => AddUserDialog.Show().then(() => {
                                    this.users = null;
                                    const orgService = useOrgProvider();
                                    orgService.getEmployees().then(employees =>
                                        this.showingUsers = this.users = employees
                                    )
                                })
                            })
                        ).height().padding(24),
                        TitleGrid(this.titles) as any
                    )
            )
        )
    }
}