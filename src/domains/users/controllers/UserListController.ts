//import { useSessionService } from '@realmocean/common';
import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import {
    cLeading, cTopLeading, cTrailing, Heading, HStack,
    Spacer, Spinner, State, Text, TextField, UIController, UIRecordsContext, VStack, TabList, cVertical, UIRouteOutlet
} from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddUserDialog } from "../dialogs/AddUserDialog";
import { UsersGrid } from "../views/UsersGrid";
import { AddPositionDialog } from "../../positions/dialogs/AddPositionDialog";
import { AddDepartmentDialog } from "../../departments/dialogs/AddDepartmentDialog";
import { AddUserDialogData } from "../dialogs/AddUserDialogData";



export class UserListController extends UIController {

    @State()
    private searchText: string;

    public LoadView(): any {

        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Employees'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Employees').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(

                            Views.CreateButton({
                                label: 'New Employee', action: () => AddPositionDialog.Show(AddUserDialogData).then(() => {
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