import { useSessionService } from "@realmocean/services";
import { cLeading, cTopLeading, cTrailing, cVertical, Heading, HStack, Icon, Icons, Spacer, Spinner, TabList, Text, TextField, UIFormController, UIRecordsContext, UIRouteOutlet, useNavigate, useParams, useProtocol, VStack, WorkProtocol } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddPositionDialog } from "../dialogs/AddPositionDialog";
import { PositionGrid } from "../views/PositionGrid";
import { UserFileDownloader } from "@tuval/core";
import { AddUserDialog } from "../../users/dialogs/AddUserDialog";
import { SelectPositionViewDialog } from "../dialogs/SelectPositionViewDialog";

export class PositionListController extends UIFormController {

   
    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

  

    public LoadView(): any {
        const {view_id} = useParams();

        const navigate = useNavigate();

        const { gql, _mutation } = useProtocol(WorkProtocol);

        const { data: { views }, isLoading } = gql`
        views(workspace_id:"directory", folder_id:"position", applet_id:"position"){
            id
            title
        }
        `

        const { mutate: createView } = _mutation`create_view {
            id
            title
        }`
        
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
                   // maxWidth: '1400px',
                    content: (
                        VStack(
                            HStack({ alignment: cLeading })(
                                TabList(
                                    {
    
                                        text: 'Active Positions',
                                        onClick: () => navigate('/app/com.tuvalsoft.app.organizationmanager/company/list/position/active-positions')
                                    },
                                    ...(!isLoading && views?.map(view => {
                                        return {
                                            text : view.title,
                                            onClick: () => navigate(`/app/com.tuvalsoft.app.organizationmanager/company/list/position/position-view/${view.id}`)
                                            
                                        }
                                    }))
                                ).activeTabId(views?.findIndex(view => view.id === view_id) + 1),
                                HStack({ spacing: 5 })(
                                    Icon(Icons.Add).fontSize(10),
                                    Text('View').lineHeight('1')
                                )
                                    .width().height().cursor('pointer').padding(5)
                                    .background({ hover: '#fafbfc' })
                                    .onClick(() => {
                                        SelectPositionViewDialog.Show('directory', 'position').then((view) => {
                                            createView({
                                                workspace_id: 'directory',
                                                folder_id: 'position',
                                                applet_id: 'position',
                                                view: view.type,
                                                title: view.name
                                            }, {
                                                onSuccess: (view) => {
                                                    alert('success')
                                                    //  invalidateQuery();
                                                }
                                            })
    
                                        })
                                    }
                                    )
                                    .height()
                                    .padding(cVertical, '1rem'),
                            ).height(),
                            UIRouteOutlet().width('100%').height('100%')
                        )
                       
                    )
                })
            )

        )
    }
}