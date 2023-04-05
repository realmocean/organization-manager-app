import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import { cLeading, cTopLeading, HStack, Spacer, State, TextField, UIController, UIRecordsContext, VStack, Text, Spinner } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { DepartmentsGrid } from "../views/DepartmentsGrid";
import { AddDepartmentDialog } from "../dialogs/AddDepartmentDialog";

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DepartmentListController extends UIController {


    @State()
    private searchText: string;


    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Departments'),
                Views.RightSidePage({
                    title: 'Departments',
                    maxWidth: '1400px',
                    content: (
                        RealmDataContext(
                            UIRecordsContext(({ data, isLoading }) =>
                                HStack({ alignment: cTopLeading })(
                                    VStack({ alignment: cTopLeading })(
                                        HStack({ alignment: cLeading, spacing: 15 })(
                                            // MARK: Search Box

                                            TextField().placeholder('Search by Department Name')
                                                .onChange((value) => this.searchText = value)
                                            ,
                                            Spacer(),
                                            Views.CreateButton({
                                                label: 'New Department', action: () => AddDepartmentDialog.Show()
                                            }),

                                            Views.ExportButton({
                                                label: 'Export', action: () => {
                                                    const fd = new UserFileDownloader({
                                                        url: `/api/ExportDepartments?organization_id=${''/* useSessionService().TenantId */}`,
                                                        autoStart: true
                                                    })
                                                }
                                            }),

                                        ).height().padding(24),

                                        isLoading ? HStack(Spinner()) :
                                        DepartmentsGrid(data)
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

                })
            )

        )
    }


}