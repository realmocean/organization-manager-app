
import { VStack, cTopLeading, cLeading, HStack, Text, Spacer, TextField, UITable, TableColumn, Icon, IconLibrary, UIContextMenu, UIAppearance, UIScene, UIController, cTop, State, Spinner, UIRouteLink, Color, UIRecordsContext } from '@tuval/forms';
import { RealmBrokerClient, IGetTitleResponse, IGetOrganizationUnitResponse, useOrgProvider, IDepartment, useSessionService } from '@realmocean/common';
import { ActionButton } from '../../../Views/ActionButton';
import { Services } from '../../../Services/Services';
import { ITableViewColumn, Views } from '../../../Views/Views';
import { UsersGrid } from '../../Users/Views/UsersGrid';
import { TitleGrid } from '../../Titles/Views/TitleGrid';
import { OrganizationUnitGrid } from '../Views/OrganizationUnitGrid';
import { NewOrganizationUnitController } from './NewOrganizationUnitController';
import { RealmDataContext } from '../../../Views/DataContexts';
import { AddDepartmentDialog } from '../Dialogs/AddDepartmentDialog';
import { UserFileDownloader } from '@tuval/core';

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class OrganizationUnitListController extends UIController {

    @State()
    private organizationUnits: IDepartment[];

    @State()
    private searchText: string;




    public BindRouterParams({ tenant_id, tenant_name }) {

    }


    public LoadView(): any {
        return (
            RealmDataContext(() =>
                UIRecordsContext(({ data, isLoading }) =>
                    HStack({ alignment: cTopLeading })(
                        VStack({ alignment: cTopLeading })(
                            HStack({ alignment: cLeading, spacing: 15 })(
                                // MARK: Search Box

                                TextField().placeholder('Search by Department Name')
                                    .onTextChange((value) => this.searchText = value)
                            ,
                            Spacer(),
                            Views.CreateButton({
                                label: 'New Department', action: () => AddDepartmentDialog.Show().then(() => {
                                    /*   this.organizationUnits = null;
                                      const orgService = useOrgProvider();
                                      orgService.getDepartments().then(deps =>
                                          this.showingOrganizationUnits = this.organizationUnits = deps
                                      ) */
                                })
                            }),
                              
                            Views.ExportButton({
                                label: 'Export', action: () => {
                                    const fd = new UserFileDownloader({
                                        url: `/api/ExportDepartments?organization_id=${useSessionService().TenantId}`,
                                        autoStart: true
                                    })
                                }
                            }),
                            
                        ).height().padding(24),
                        OrganizationUnitGrid(data) as any
                    )
                )
            )
                .resource('departments')
                .sort({ field: 'created_at', order: 'DESC' })
                .filter({
                    'tenant_id': useSessionService().TenantId,
                    ...(this.searchText != null && this.searchText.length > 2 && {
                        'org_unit_name': this.searchText
                    })
                })

        )


        )
    }


}