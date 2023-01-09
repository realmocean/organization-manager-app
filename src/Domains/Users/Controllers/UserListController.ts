import { UsersGrid } from '../Views/UsersGrid';
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, bindController, UIRecordsContext, Button, UISidebar, Template, DataContext, WebApiDataProvider, UIRecordContext, cHorizontal } from '@tuval/forms';
import { IEmployee, RealmBrokerClient, useOrgProvider, useSessionService } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { AddUserDialog } from '../Dialogs/AddUserDialog';
import { RealmDataContext } from '../../../Views/DataContexts';
import { Grid, UIGridView } from '@realmocean/grids';
import { FileDownloader, UserFileDownloader } from '@tuval/core';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

function productStateTemplate(props): any {
    return (
        Template(
            HStack(
                DataContext(() =>
                    UIRecordContext(({ data }) =>
                        Text('product_state_name = ' + data?.state_name)
                    ).resource('states').filter({ id: props.product_state })
                ).dataProvider(WebApiDataProvider('api'))
            )
        )
    )
    /* DataContext(()=>
        UIRecordContext((post)=>
            Text(post.title)
        ).resource('posts').filter({id: '1'})
    ).dataProvider(WebApiDataProvider('https://jsonplaceholder.typicode.com/')) */



    /*    const vNodes: any[] = [];
      const view = getView(null, _view);
      if (view != null) {
          vNodes.push(view.Render());
      }
      return vNodes;  */


}

const columns =
    [
        {
            field: 'id',
            headerText: 'Employee',
            width: 100,
            template: (row) => (
                Template(
                    HStack({ spacing: 15 })(
                        Icon('\\ea67').size(35),
                        VStack({ alignment: cLeading })(
                            Text(`${row.employee_name} ${row.employee_last_name}`)
                                .fontWeight('600')
                                .fontFamily('"Public Sans", sans-serif'),
                            Text(row.title_name)
                                .foregroundColor('rgb(99, 115, 129)')
                                .fontWeight('400')
                                .fontFamily('"Public Sans", sans-serif')
                        )
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                )
            )
        },
        {
            field: 'department_id',
            headerText: 'State',
            width: 130,
            template: (props) => (
                Template(
                    HStack({ alignment: cLeading })(
                        DataContext(() =>
                            UIRecordContext(({ data, isLoading }) =>
                                Text(data?.org_unit_name)
                            ).resource('departments').filter({ id: props.department_id })
                        ).dataProvider(WebApiDataProvider('/api'))
                    ).foregroundColor('rgba(33, 43, 54,0.7)')
                )
            )
        }
    ]


export class UserListController extends UIController {

    @State()
    private users: IEmployee[];

    @State()
    private searchText: string;

    @State()
    private grid: Grid;



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
                                .onTextChange((value) => this.searchText = value)
                            ,
                            Spacer(),
                            Views.CreateButton({
                                label: 'New Employee', action: () => AddUserDialog.Show().then(() => {
                                    /* this.users = null;
                                    const orgService = useOrgProvider();
                                    orgService.getEmployees().then(employees =>
                                        this.showingUsers = this.users = employees
                                    ) */
                                })
                            }),
                            
                            Views.ExportButton({
                                label: 'Export', action: () => {
                                    const fd = new UserFileDownloader({
                                        url: `/api/ExportEmployees?organization_id=${useSessionService().TenantId}`,
                                        autoStart: true
                                    })
                                }
                            }),
                            

                        ).height().padding(24),
                        UIRecordsContext(({ data, isLoading }) =>
                            isLoading ? Spinner() :
                                /*  VStack(
                                     UIGridView()
                                         .columns(columns as any)
                                         .datasource(data)
                                         .self((grid) => {
                                             this.grid = grid;
                                         })
                                 ).padding(cHorizontal, 20) */
                                UsersGrid(data) as any
                        )

                            //UsersGrid(data) as any

                            .resource('employees')
                            .filter({
                                'tenant_id': useSessionService().TenantId,
                                ...(this.searchText != null && this.searchText.length > 2 && {
                                    'employee_name': this.searchText
                                })
                            })

                    )
                )
            )

        )
    }



}