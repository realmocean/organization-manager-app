import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import { cLeading, cTopLeading, HStack, Spacer, State, TextField, UIController, UIRecordsContext, VStack, Text, Spinner, Heading, cTrailing, UIRouteOutlet } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { DepartmentsGrid } from "../views/DepartmentsGrid";
import { AddDepartmentDialog } from "../dialogs/AddDepartmentDialog";
import { AddDepartmentDialogData } from "../dialogs/AddDepartmentDialogData";
import { AddPositionDialog } from "../../positions/dialogs/AddPositionDialog";

const fontFamily = '"proxima-nova", "proxima nova", "helvetica neue", "helvetica", "arial", sans-serif'

export class DepartmentListController extends UIController {


    @State()
    private searchText: string;


    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Departments'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Departments').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(

                            Views.CreateButton({
                                label: 'New Department', action: () => {
                                    const formData = Object.assign(AddDepartmentDialogData,
                                        {
                                            title: 'Create department',
                                            mode: 'create'
                                    });
                                    AddPositionDialog.Show(formData)
                                }
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
                    ).height(),
                    maxWidth: '1400px',
                    content: (
                       UIRouteOutlet().width('100%').height('100%')
                    )
                })
            )

        )
    }


}