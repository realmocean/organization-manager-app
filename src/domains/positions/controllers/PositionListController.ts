import { useSessionService } from "@realmocean/services";
import { cLeading, cTopLeading, HStack, Spacer, Spinner, Text, TextField, UIFormController, UIRecordsContext, VStack } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddPositionDialog } from "../dialogs/AddPositionDialog";
import { PositionGrid } from "../views/PositionGrid";

export class PositionListController extends UIFormController {

   
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

  

    public LoadView(): any {
        return (

            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Positions'),
                Views.RightSidePage({
                    
                    title: 'Positions',
                    maxWidth: '1400px',
                    content: (
                        RealmDataContext(
                            HStack({ alignment: cTopLeading })(
                                    VStack({ alignment: cTopLeading })(
                                        HStack({ alignment: cLeading, spacing: 15 })(
                                            // MARK: Search Box
            
                                            TextField().placeholder('Search by Position Name')
                                                .onChange((value) => this.Search_Action(value))
                                            ,
                                            Spacer(),
                                            Views.CreateButton({
                                                label: 'New Position', action: () => AddPositionDialog.Show().then(() => {
                                                  // this.positions = null;
                                                   /*  const orgService = useOrgProvider();
                                                    orgService.getPositions(0, 200).then(positions =>
                                                        this.showingPositions = this.positions = positions
                                                    ) */
                                                })
                                            })
                                        ).height().padding(24),
                                        UIRecordsContext(({ data, isLoading }) =>
                                            isLoading ? HStack(Spinner()) :
                                                PositionGrid(data)
                                        )
                                        .resource('positions')
                                        .sort({ field: 'created_at', order: 'DESC' })
                                        .filter({
                                            'tenant_id': useSessionService().TenantId
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