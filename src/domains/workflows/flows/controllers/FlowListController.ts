import { useSessionService } from "@realmocean/services";
import { UIFormController, Spinner, UIScene, UIRecordContext, HStack, cTopLeading, cLeading, Icon, VStack, Text, TextField, Spacer, UIRecordsContext, State, useParams, Icons } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { LeftSideMenuView } from "../../../../views/LeftMenu";
import { Views, fontFamily } from "../../../../views/Views";
import { AddFlowDialog } from "../dialogs/AddFlowDialog";
import { FlowsGrid } from "../views/FlowsGrid";


export class FlowListController extends UIFormController {

    @State()
    private searchText: string;

    public LoadView() {
        const { project_id } = useParams();

        return (
            UIScene(

                RealmDataContext(
                    UIRecordContext(({ data }) =>
                        HStack({ alignment: cTopLeading })(
                            HStack({ alignment: cTopLeading })(
                                LeftSideMenuView('', 'Flows'),
                                Views.RightSidePage({
                                    title: HStack({ alignment: cLeading, spacing: 5 })(
                                        Icon(Icons.Activity).size(25).foregroundColor('rgb(84,84,84)'),
                                        Text(data?.project_name)
                                            .foregroundColor('#444')
                                            .fontFamily(fontFamily).fontSize(28).fontWeight('600')
                                    ),
                                    showBackIcon: true,
                                    maxWidth: '1500px',
                                    content: (
                                        VStack({ alignment: cTopLeading })(
                                            HStack({ alignment: cLeading, spacing: 15 })(
                                                // MARK: Search Box

                                                TextField().placeholder('Search by project name')
                                                    .onChange((value) => this.searchText = value)
                                                ,
                                                Spacer(),
                                                Views.CreateButton({
                                                    label: 'New flow', action: () => AddFlowDialog.Show(project_id).then(() => {
                                                        /* this.users = null;
                                                        const orgService = useOrgProvider();
                                                        orgService.getEmployees().then(employees =>
                                                            this.showingUsers = this.users = employees
                                                        ) */
                                                    })
                                                })

                                            ).height().padding(24),
                                            UIRecordsContext(({ data, isLoading }) =>
                                                isLoading ? HStack(Spinner()) :
                                                    FlowsGrid(data) as any
                                            )
                                                .resource('flows')
                                                .filter({
                                                    'tenant_id': useSessionService().TenantId,
                                                    'project_id': project_id,
                                                    ...(this.searchText != null && this.searchText.length > 2 && {
                                                        'flow_name': this.searchText
                                                    })
                                                })

                                        )
                                    )
                                })
                            )
                        )
                    ).resource('flow-projects').filter({ id: project_id })

                )
            )
        )
    }
}