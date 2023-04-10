import { useSessionService } from "@realmocean/services";
import { UserFileDownloader } from "@tuval/core";
import { cTopLeading, cTrailing, Heading, HStack, UIFormController, UIRouteOutlet } from "@tuval/forms";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddTitleDialog } from "../dialogs/AddTitleDialog";

export class TitleListController extends UIFormController {

   
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

  

    public LoadView(): any {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Titles'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Titles').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(

                            Views.CreateButton({
                                label: 'New title', action: () => AddTitleDialog.Show().then(() => {
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
                                        url: `/api/ExportTitles?organization_id=${useSessionService().TenantId}`,
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