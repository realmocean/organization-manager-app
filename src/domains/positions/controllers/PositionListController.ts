import { useSessionService } from "@realmocean/services";
import { cLeading, cTopLeading, cTrailing, Heading, HStack, Spacer, Spinner, Text, TextField, UIFormController, UIRecordsContext, UIRouteOutlet, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddPositionDialog } from "../dialogs/AddPositionDialog";
import { PositionGrid } from "../views/PositionGrid";
import { UserFileDownloader } from "@tuval/core";
import { AddUserDialog } from "../../users/dialogs/AddUserDialog";

export class PositionListController extends UIFormController {

   
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

  

    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Positions'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Positions').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(

                            Views.CreateButton({
                                label: 'New Position', action: () => AddPositionDialog.Show().then(() => {
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
                                        url: `/api/ExportPositions?organization_id=${useSessionService().TenantId}`,
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