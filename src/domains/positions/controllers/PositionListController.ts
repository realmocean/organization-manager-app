import { useSessionService } from "@realmocean/services";
import { cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, Fragment, Heading, HStack, Icon, Icons, MenuButton, Spacer, Spinner, TabList, Text, TextField, UIFormController, UIRecordsContext, UIRouteOutlet, useNavigate, useParams, useProtocol, VDivider, VStack, WorkProtocol } from "@tuval/forms";
import { RealmDataContext } from "../../../views/DataContexts";
import { LeftSideMenuView } from "../../../views/LeftMenu";
import { Views } from "../../../views/Views";
import { AddPositionDialog } from "../dialogs/AddPositionDialog";
import { PositionGrid } from "../views/PositionGrid";
import { UserFileDownloader } from "@tuval/core";
import { AddUserDialog } from "../../users/dialogs/AddUserDialog";
import { SelectPositionViewDialog } from "../dialogs/SelectPositionViewDialog";
import { AddPositionDialogData } from "../dialogs/AddPositionDialogData";

export class PositionListController extends UIFormController {


    private Search_Action(value: string): void {
        //this.showingTenants = this.tenants.filter((tenant) => tenant.tenant_name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }



    public LoadView(): any {
        const { view_id } = useParams();

        const navigate = useNavigate();

        const { gql, _mutation } = useProtocol(WorkProtocol);

        const { data: { views }, isLoading, invalidateQuery } = gql`
        views(workspace_id:"directory", folder_id:"position", applet_id:"position"){
            id
            title
        }
        `

        const { mutate: createView } = _mutation`create_view {
            id
            title
        }`

        const selectedIndex = views?.findIndex(view => view.id === view_id);

        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('', 'Positions'),
                Views.RightSidePage({

                    title: HStack(
                        Heading('Positions').h3().width('100%'),
                        HStack({ alignment: cTrailing, spacing: 15 })(

                            Views.CreateButton({
                                label: 'New Position', action: () => AddPositionDialog.Show(AddPositionDialogData).then(() => {
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
                                    ...(!isLoading && views?.map((view, index) => {
                                        return {

                                            view: () => HStack(
                                                index === 0 ?  VDivider().width(1).height('60%').background('#E8EAED'): Fragment(),
                                                HStack({ spacing: 5 })(
                                                    Icon(views?.find(v => v.type === view.view)?.icon),
                                                    Text(view?.title),
                                                    selectedIndex === index ?
                                                        MenuButton()
                                                            .model([
                                                                {
                                                                    title: 'VIEW OPTIONS',
                                                                    type: 'Title'
                                                                },
                                                                {
                                                                    title: 'Rename',
                                                                    icon: Icons.Add,

                                                                },
                                                            ])
                                                            .icon(Icons.Menu)
                                                            .display('var(--showMenu)') : Fragment()

                                                    ,
                                                ).padding(cHorizontal, 10).padding(8)
                                                    .variable('--showMenu', { hover: 'block', default: 'none' }),
                                                VDivider().width(1).height('60%').background('#E8EAED')
                                            ),
                                            //onClick: () => navigate(`/app/com.tuvalsoft.app.workbench/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view.id}`)

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
                                                    invalidateQuery();
                                                }
                                            })
                                        })
                                    }
                                    )
                                    .height()
                                    .padding(cVertical, '1rem'),
                            ).allHeight(50)
                            .borderBottom('solid 1px #E8EAED'),
                            UIRouteOutlet().width('100%').height('100%')
                        )
                    )
                })
            )

        )
    }
}