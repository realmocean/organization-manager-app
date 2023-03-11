import { useSessionService } from "@realmocean/services";
import { UIFormController, UIScene, HStack, cTopLeading, VStack, cLeading, TextField, Text, Spacer, UIRecordsContext, Spinner, ForEach, Icon, cHorizontal, Color, State, useNavigate, Icons } from "@tuval/forms";
import { RealmDataContext } from "../../../../views/DataContexts";
import { LeftSideMenuView } from "../../../../views/LeftMenu";
import { Views } from "../../../../views/Views";
import { AddFlowProjectDialog } from "../dialogs/AddFlowProjectDialog";

export class FlowProjectListController extends UIFormController {

    @State()
    private searchText: string;

    public LoadView() {
        const navigotor = useNavigate();

        return (
            UIScene(

                RealmDataContext(
                    HStack({ alignment: cTopLeading })(

                        HStack({ alignment: cTopLeading })(
                            LeftSideMenuView('', 'Flows'),
                            Views.RightSidePage({
                                title: 'Flow projects',
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
                                                label: 'New project', action: () => AddFlowProjectDialog.Show().then(() => {
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
                                                VStack({ alignment: cTopLeading })(
                                                    ...ForEach(data)(item =>
                                                        HStack({ alignment: cLeading })(
                                                            Icon(Icons.Activity).size(25).foregroundColor('rgb(84,84,84)'),
                                                            VStack({ alignment: cLeading })(
                                                                Text('Project').fontSize(12).foregroundColor('rgb(128,128,128)'),
                                                                Text(item.project_name).fontSize(15).fontWeight('500').foregroundColor('rgb(59,59,59)')
                                                            ).width('60%')
                                                                .padding(cHorizontal, 10),
                                                            HStack(
                                                                Text('11 Flows')
                                                            ).width('10%'),
                                                            HStack(
                                                                Text('23.01.2012')
                                                            ).width('10%')

                                                        ).height(60)
                                                            .padding(cHorizontal, 10)
                                                            .cursor('pointer')
                                                            .background({ default: Color.white, hover: 'rgb(252, 252, 252)' })
                                                            .border('1px solid hsl(0,0%,87%)')
                                                            .shadow('rgb(0 0 0 / 10%) 0px 1px 4px 0px')
                                                            .marginBottom('15px')
                                                            .onClick(() => navigotor(`/app/com.tuvalsoft.app.organizationmanager/workflow/flows/flow-projects/${item.id}/flows`)),
                                                    )
                                                ).padding(20)

                                            //FlowsGrid(data) as any
                                        )
                                            .resource('flow-projects')
                                            .filter({
                                                'tenant_id': useSessionService().TenantId,
                                                ...(this.searchText != null && this.searchText.length > 2 && {
                                                    'project_name': this.searchText
                                                })
                                            })

                                    )
                                )
                            })

                        ),


                    )

                )
            )
        )
    }
}