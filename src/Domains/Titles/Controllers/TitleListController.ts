
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, UIRecordsContext } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse, useOrgProvider, IEmployeeTitle, useSessionService } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../Views/TitleGrid';
import { AddUserDialog } from '../../Users/Dialogs/AddUserDialog';
import { RealmDataContext } from '../../../Views/DataContexts';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class TitleListController extends UIController {

    @State()
    private searchText: string;

  

    public BindRouterParams({ tenant_id, tenant_name }) {
        /* const orgService = useOrgProvider();
        //  if (this.tenants == null) {
        orgService.getTitles().then(titles => {
            this.showingTitles = this.titles = titles;
        }) */
    }
    private Search_Action(value: string): void {
        this.searchText = value;
    }

    public LoadView(): any {
        return (
            RealmDataContext(() =>
                HStack({ alignment: cTopLeading })(
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
                            UIRecordsContext(({ data }) =>
                                TitleGrid(data)
                            ).resource('titles').filter({
                                'tenant_id': useSessionService().TenantId,
                                'title_name' : this.searchText
                            })

                        )
                )
            )
        )
    }
}