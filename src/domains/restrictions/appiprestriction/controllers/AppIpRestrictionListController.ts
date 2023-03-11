import { useSessionService } from "@realmocean/services";
import {  UserFileDownloader } from "@tuval/core";
import { UIController, HStack, cTopLeading, VStack, cLeading, TextField, Spacer, UIRecordsContext, Spinner, State } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { LeftSideMenuView } from "../../../../views/LeftMenu";
import { Views } from "../../../../views/Views";
import { AddUserDialog } from "../../../users/dialogs/AddUserDialog";
import { UsersGrid } from "../../../users/views/UsersGrid";
import { AppIpRestrictionGrid } from "../views/AppIpRestrictionGrid";


export class AppIpRestrictionListController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'App Ip Restrictions'),
                Views.RightSidePage({
                    
                    title: 'App Ip Restrictions',
                    maxWidth: '1400px',
                    content: (
                        RealmDataContext(
                            HStack({ alignment: cTopLeading })(
                               
                                VStack({ alignment: cTopLeading })(
                                    HStack({ alignment: cLeading, spacing: 15 })(
                                        // MARK: Search Box

                                        TextField().placeholder('Search by Employee Name')
                                            .onChange((value) => alert('value'))
                                        ,
                                        Spacer(),
                                        Views.CreateButton({
                                            label: 'Add Restriction', action: () => AddUserDialog.Show().then(() => {
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
                                        isLoading ? HStack(Spinner()) :
                                            /*  VStack(
                                                 UIGridView()
                                                     .columns(columns as any)
                                                     .datasource(data)
                                                     .self((grid) => {
                                                         this.grid = grid;
                                                     })
                                             ).padding(cHorizontal, 20) */
                                             AppIpRestrictionGrid(data) as any
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
                })
            )



        )
    }



}